Retro pixel perfect icons with a charming aesthetic for your needs.

Each icon can be imported as a React component, which renders an inline SVG element. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Example

Additional props can be passed to adjust the icon:

```jsx
import { Heart } from 'raster-react';

const App = () => {
	return (
		<Heart
			color='#f54'
			size={13}
			radius={2}
			strokeWidth={1}
			className='h-13 w-13'
			{...props} // svg props (x, y, cx, cy, strokeDasharray ...)
		/>
	);
};

export default App;
```

## Props

| name          | type     | default      |
| ------------- | -------- | ------------ |
| `size`        | _number_ | 24           |
| `color`       | _string_ | currentColor |
| `strokeWidth` | _number_ | 2            |
| `radius`      | _number_ | 1            |
| `className`   | _string_ |              |
