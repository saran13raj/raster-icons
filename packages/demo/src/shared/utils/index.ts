import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as RasterIcons from 'raster-react';
import { IconProps } from 'raster-react';

import { ParsedIcon, RasterIconsType } from '../types';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const typedRasterIcons = RasterIcons as unknown as RasterIconsType;

export const getExportedIcons = (): ParsedIcon[] => {
	// Create a list of exported icons with their names
	const iconList: ParsedIcon[] = Object.keys(RasterIcons)
		.filter((iconName) => typeof typedRasterIcons[iconName] === 'function') // Ensure it's a function (component)
		.map((iconName) => ({
			name: iconName,
			Icon: typedRasterIcons[iconName] as React.FC<IconProps> // Cast to React functional component
		}));
	return iconList;
};
