## How to use

Raster is built with ES Modules, so it's completely tree-shakable.

Each icon can be imported as a React component, which renders an inline SVG element. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Example

Additional props can be passed to adjust the icon:

```jsx
import { Heart } from 'raster-react-native';

const MyComponent = () => {
	return (
		<Heart
			fill='#f54'
			size={83}
			radius={4}
			strokeWidth={1}
			stroke='#ffffff'
			{...props} // svg props (x, y, strokeDasharray ...)
		/>
	);
};

export default MyComponent;
```

## Props

| name          | type     | default      |
| ------------- | -------- | ------------ |
| `size`        | _number_ | 24           |
| `fill`        | _string_ | currentColor |
| `strokeWidth` | _number_ | 2            |
| `radius`      | _number_ | 1            |
