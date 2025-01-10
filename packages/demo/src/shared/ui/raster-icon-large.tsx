import React from 'react';

import { cn } from '../utils';
import { RasterIconNode, RasterProps } from '../types';
import { defaultAttributes } from '..';

interface IconComponentProps extends RasterProps {
	iconNode: RasterIconNode;
}

const RasterIconLarge: React.FC<IconComponentProps> = React.memo(
	({ strokeWidth = 2, className = '', children, iconNode, size, ...rest }) => {
		return React.createElement(
			'svg',
			{
				...defaultAttributes,
				height: size,
				width: size,
				stroke: 'currentColor',
				strokeWidth: strokeWidth,
				className: cn('raster-icon-large', className),
				...rest
			},
			[
				...iconNode.map(([tag, attrs], index) =>
					React.createElement(tag, { key: `${tag}-${index}`, ...attrs })
				),
				...(Array.isArray(children) ? children : [children])
			]
		);
	}
);

export default RasterIconLarge;
