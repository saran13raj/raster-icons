import { IconProps } from 'raster-react';
import React from 'react';

import { cn } from '../utils';

const RasterIcon: React.FC<{
	Icon: React.FC<IconProps>;
	className?: string;
}> = React.memo(({ Icon, className }) => {
	return (
		<>
			<Icon
				className={cn(className, className ? 'raster-icon-custom' : 'raster-icon')}
			/>
		</>
	);
});

export default RasterIcon;
