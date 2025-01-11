import { IconProps } from 'raster-react';

export type ParsedIcon = {
	name: string;
	Icon: React.FC<IconProps>;
};

export type RasterIconsType = {
	[key: string]: React.FC<IconProps>;
};
