import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconNode, IconNodeAttribute, ParsedIcon } from '../types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const parseSvgToIconNode = (svgString: string): IconNode => {
	const div = document.createElement('div');
	div.innerHTML = svgString;
	const svg = div.querySelector('svg');

	if (!svg) {
		return [];
	}

	const result: IconNode = [];

	// Convert child elements to IconNode format
	svg.childNodes.forEach((child) => {
		if (child instanceof Element) {
			const attrs: IconNodeAttribute = {};

			child.getAttributeNames().forEach((attr) => {
				attrs[attr] = child.getAttribute(attr) || '';
			});

			result.push([child.tagName.toLowerCase(), attrs]);
		}
	});

	return result;
};

export const getIconNodes = async (): Promise<ParsedIcon[]> => {
	const icons: ParsedIcon[] = [];

	try {
		// Get all SVG files from the icons directory
		const iconModules = import.meta.glob('../../../../../icons/*.svg', {
			as: 'raw',
			eager: true
		});

		// Process each icon file
		for (const path in iconModules) {
			const name = path.split('/').pop()?.replace('.svg', '') || '';
			const content = iconModules[path] as string;

			const node = parseSvgToIconNode(content);

			icons.push({
				name,
				node
			});
		}

		return icons;
	} catch (error) {
		console.error('Error loading icons:', error);
		return [];
	}
};

// interface IconNode {
// 	name: string;
// 	content: string;
// }

// export const getIconNodes = async (): Promise<IconNode[]> => {
// 	const icons: IconNode[] = [];

// 	try {
// 		// Get all SVG files from the icons directory
// 		const iconModules = import.meta.glob('../../../../../icons/*.svg', {
// 			as: 'raw',
// 			eager: true
// 		});

// 		// Process each icon file
// 		for (const path in iconModules) {
// 			const name = path.split('/').pop()?.replace('.svg', '') || '';
// 			const content = iconModules[path] as string;

// 			icons.push({
// 				name,
// 				content
// 			});
// 		}

// 		return icons;
// 	} catch (error) {
// 		console.error('Error loading icons:', error);
// 		return [];
// 	}
// };
