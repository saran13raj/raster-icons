import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import { transform } from '@svgr/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildIcons() {
	try {
		if (!fs.existsSync('src')) {
			fs.mkdirSync('src');
		}

		const svgFiles = await glob(path.resolve(__dirname, '../../../icons/*.svg'));
		console.log(`raster-react: found ${svgFiles.length} SVG files`);

		let rasterReactContent = `import React from 'react';
import { IconProps } from './types';

`;

		for (const svgFile of svgFiles) {
			const basename = path.basename(svgFile, '.svg');
			const componentName =
				basename
					.split('-')
					.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
					.join('') + 'Icon';

			const svgContent = fs.readFileSync(svgFile, 'utf-8');

			try {
				const componentCode = await transform(
					svgContent,
					{
						icon: true,
						plugins: ['@svgr/plugin-jsx'],
						typescript: true,

						template: (variables, { tpl }) => {
							return tpl`
									export const ${variables.componentName}: React.FC<IconProps> = ({
									  color = 'currentColor',
									  radius = 0,
									  stroke = 2,
									  className = '',
									  ...props
									}) => {
										return (
											${variables.jsx}
										)
									}
									`;
						}
					},
					{ componentName }
				);

				rasterReactContent += `\n${componentCode}\n`;
			} catch (error) {
				console.error(`Error transforming ${componentName}:`, error);
			}
		}

		fs.writeFileSync('src/raster-react.tsx', rasterReactContent);

		const indexContent = `export * from './raster-react';
export type { IconProps } from './types';
`;
		fs.writeFileSync('src/index.ts', indexContent);

		const typesContent = `import { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'stroke' | 'className'> {
  /** Color of the icon - accepts any valid CSS color value */
  color?: string;
  /** Corner radius of the blocks in pixels */
  radius?: number;
  /** Stroke width of the blocks */
  stroke?: number;
  /** CSS classes to apply to the icon (e.g. Tailwind classes) */
  className?: string;
}`;
		fs.writeFileSync('src/types.ts', typesContent);
	} catch (error) {
		console.error('raster-react build error:', error);
		process.exit(1);
	}
}

buildIcons().catch(console.error);
