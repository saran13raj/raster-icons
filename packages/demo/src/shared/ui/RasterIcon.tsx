import { createElement, forwardRef } from 'react';

import { cn } from '../utils';
import { RasterIconNode, RasterProps } from '../types';
import { defaultAttributes } from '..';

interface IconComponentProps extends RasterProps {
	iconNode: RasterIconNode;
}

const RasterIcon = forwardRef<SVGSVGElement, IconComponentProps>(
	({ strokeWidth = 2, className = '', children, iconNode, ...rest }, ref) => {
		return createElement(
			'svg',
			{
				ref,
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
	}
);

export default RasterIcon;
