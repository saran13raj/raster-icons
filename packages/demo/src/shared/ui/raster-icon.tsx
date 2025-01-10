import React from 'react';

import { cn } from '../utils';
import { RasterIconNode, RasterProps } from '../types';
import { defaultAttributes } from '..';

interface IconComponentProps extends RasterProps {
	iconNode: RasterIconNode;
}

const RasterIcon: React.FC<IconComponentProps> = React.memo(
	({ strokeWidth = 2, className = '', children, iconNode, ...rest }) => {
		return React.createElement(
			'svg',
			{
				...defaultAttributes,
				stroke: 'currentColor',
				strokeWidth: strokeWidth,
				className: cn('raster-icon', className),
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

export default RasterIcon;
