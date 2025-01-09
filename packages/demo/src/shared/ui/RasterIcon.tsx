import { createElement } from 'react';

import { cn } from '../utils';
import { RasterIconNode, RasterProps } from '../types';
import { defaultAttributes } from '..';

interface IconComponentProps extends RasterProps {
	iconNode: RasterIconNode;
}

export const RasterIcon: React.FC<IconComponentProps> = ({
	strokeWidth = 2,
	className = '',
	children,
	iconNode,
	...rest
}) => {
	return createElement(
		'svg',
		{
			...defaultAttributes,
			stroke: 'currentColor',
			strokeWidth: strokeWidth,
			className: cn('raster-icon', className),
			...rest
		},
		[
			...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
			...(Array.isArray(children) ? children : [children])
		]
	);
};
