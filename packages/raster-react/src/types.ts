import { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'stroke' | 'className'> {
  /** Color of the icon - accepts any valid CSS color value */
  color?: string;
  /** Corner radius of the blocks in pixels */
  radius?: number;
  /** Stroke width of the blocks */
  stroke?: number;
  /** CSS classes to apply to the icon (e.g. Tailwind classes) */
  className?: string;
}