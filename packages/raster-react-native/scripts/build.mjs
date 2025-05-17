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
		console.info(
			`>>> raster-react-native: found ${svgFiles.length} SVG files to build`
		);

		let rasterReactNativeContent = `import React from 'react';
import { IconProps } from './types';
import Svg, { Rect } from 'react-native-svg';

`;

		console.info(`>>> raster-react-native: Starting build`);
		for (const svgFile of svgFiles) {
			const basename = path.basename(svgFile, '.svg');
			const componentName =
				basename
					.split('-')
					.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
					.join('') + 'Icon';

			let svgContent = fs.readFileSync(svgFile, 'utf-8');
			svgContent = svgContent.replace(
				/\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/,
				''
			);

			try {
				const componentCode = await transform(
					svgContent,
					{
						plugins: ['@svgr/plugin-jsx'],
						typescript: true,
						native: true, // Enable React Native output
						svgProps: {
							fill: 'currentColor',
							stroke: 'currentColor',
							strokeWidth: '0',
							height: '{size}',
							width: '{size}'
						},
						replaceAttrValues: {
							rx: '{radius}'
						},
						template: (variables, { tpl }) => {
							return tpl`
                export const ${variables.componentName}: React.FC<IconProps> = ({
                  size = 24,
                  radius = 1,
                  color = '#000',
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

				// Replace React DOM SVG elements with react-native-svg components
				const modifiedCode = componentCode
					.replace(/<svg/g, '<Svg')
					.replace(/<\/svg>/g, '</Svg>')
					.replace(/<path/g, '<Path')
					.replace(/<\/path>/g, '</Path>')
					.replace(/<rect/g, '<Rect')
					.replace(/<\/rect>/g, '</Rect>')
					.replace(/<g/g, '<G')
					.replace(/<\/g>/g, '</G>')
					// Replace currentColor with the color prop
					.replace(/currentColor/g, '{color}');

				rasterReactNativeContent += `\n${modifiedCode}\n`;
			} catch (error) {
				console.error(`Error transforming ${componentName}:`, error);
			}
		}

		fs.writeFileSync('src/raster-react-native.tsx', rasterReactNativeContent);

		const indexContent = `export * from './raster-react-native';
export type { IconProps } from './types';
`;
		fs.writeFileSync('src/index.ts', indexContent);

		const typesContent = `import { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'color' | 'strokeWidth'> {
  /** Color of the icon - accepts any valid React Native color value */
  color?: string;
  /** Corner radius of the blocks in pixels */
  radius?: number;
  /** Size of the icon */
  size?: number;
  /** Stroke width of the blocks */
  strokeWidth?: number;
}
`;
		fs.writeFileSync('src/types.ts', typesContent);
		console.info(`>>> raster-react-native: Build ended`);
	} catch (error) {
		console.error('raster-react-native build error:', error);
		process.exit(1);
	}
}

buildIcons().catch(console.error);
