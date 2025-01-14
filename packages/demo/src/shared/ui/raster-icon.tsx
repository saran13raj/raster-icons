import { IconProps } from 'raster-react';
import React from 'react';

import { cn } from '../utils';

const RasterIcon: React.FC<
	IconProps & { Icon: React.FC<IconProps>; className?: string; name: string }
> = React.memo(
	({ Icon, className, name = 'raser-icon-preview', ...iconProps }) => {
		return (
			<>
				<Icon
					{...iconProps}
					className={cn(className, className ? 'raster-icon-custom' : 'raster-icon')}
					aria-label={name}
				/>
			</>
		);
	}
);

export default RasterIcon;
