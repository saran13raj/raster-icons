import { IconProps } from 'raster-react';
import React from 'react';

import { cn } from '../utils';

const RasterIcon: React.FC<
	IconProps & { Icon: React.FC<IconProps>; className?: string }
> = React.memo(({ Icon, className, ...iconProps }) => {
	return (
		<>
			<Icon
				{...iconProps}
				className={cn(className, className ? 'raster-icon-custom' : 'raster-icon')}
			/>
		</>
	);
});

export default RasterIcon;
