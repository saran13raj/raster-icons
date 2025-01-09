import { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

// export type RasterIconNode = [
// 	elementName: keyof ReactSVG,
// 	attrs: Record<string, string>
// ][];

export type RasterIconNode = IconNodeElement;

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface RasterProps extends ElementAttributes {
	size?: string | number;
	absoluteStrokeWidth?: boolean;
}

export type RasterIcon = ForwardRefExoticComponent<
	Omit<RasterProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

export type IconNodeAttribute = Record<string, string | number>;
export type IconNodeElement = [tag: string, attrs: IconNodeAttribute];
export type IconNode = IconNodeElement[];
export type ParsedIcon = {
	name: string;
	node: IconNode;
};
