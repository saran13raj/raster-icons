import { SvgProps } from 'react-native-svg';

export interface IconProps extends Omit<SvgProps, 'color' | 'strokeWidth'> {
  /** Color of the icon - accepts any valid React Native color value */
  color?: string;
  /** Corner radius of the blocks in pixels */
  radius?: number;
  /** Size of the icon */
  size?: number;
  /** Stroke width of the blocks */
  strokeWidth?: number;
}
