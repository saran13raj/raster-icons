import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as RasterIcons from 'raster-react';
import { IconProps } from 'raster-react';

import { ParsedIcon, RasterIconsType } from '../types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const transformToNameToKebabCase = (str: string) => {
	// Step 1: Remove "Icon"
	let modifiedStr = str.replace(/Icon$/, '');

	// Step 2: Add a hyphen before each capital letter (except the first one)
	modifiedStr = modifiedStr.replace(/([A-Z])/g, '-$1');

	// Step 3: Remove leading hyphen if it exists
	if (modifiedStr.startsWith('-')) {
		modifiedStr = modifiedStr.slice(1);
	}

	// Step 4: Convert to lowercase
	return modifiedStr.toLowerCase();
};

export const transformToPascalCase = (str: string) => {
	return (
		str
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join('') + 'Icon'
	);
};

const typedRasterIcons = RasterIcons as unknown as RasterIconsType;

export const getExportedIcons = (): ParsedIcon[] => {
	// Create a list of exported icons with their names
	const iconList: ParsedIcon[] = Object.keys(RasterIcons)
		.filter((iconName) => typeof typedRasterIcons[iconName] === 'function') // Ensure it's a function (component)
		.map((iconName) => ({
			name: transformToNameToKebabCase(iconName),
			Icon: typedRasterIcons[iconName] as React.FC<IconProps> // Cast to React functional component
		}));
	return iconList;
};

export const updateColorCSSVar = (colorVal: string) => {
	document.documentElement.style.setProperty('--customize-color', colorVal);
};

export const updateSizeCSSVar = (sizeVal: number) => {
	document.documentElement.style.setProperty(
		'--customize-size',
		sizeVal.toString()
	);
};

export const updateStrokeWidthCSSVar = (strokeWidthVal: number) => {
	document.documentElement.style.setProperty(
		'--customize-strokeWidth',
		strokeWidthVal.toString()
	);
};

export const updateCornerRadiusCSSVar = (cornerRadiusVal: number) => {
	document.documentElement.style.setProperty(
		'--customize-cornerRadius',
		cornerRadiusVal.toString()
	);
};
