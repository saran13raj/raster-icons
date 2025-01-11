# About Raster

Raster is an open-source icon library that offers over 50 vector (SVG) files for displaying icons and symbols in both digital and non-digital projects. The library aims to simplify the incorporation of icons into projects for designers and developers by providing several official packages.

## Icon Collection

Raster features a diverse collection of icons with various variants and states, allowing users to select the most suitable icon for their needs. If a desired icon isn't available, users can submit a design request, and the Raster community contributors will assist in creating new icons. With an expanding selection, users have more options to enhance their projects.

## Comprehensive Icon Set

As new applications with specific features emerge, Raster strives to provide a comprehensive set of icons for every project. The community adheres to a strict set of design rules when creating new icons. These guidelines ensure standards for recognizability, consistency in style, and readability at all sizes. While creativity is encouraged, recognizable design conventions are crucial for ensuring that icons are easily identifiable by users.

## Code Efficiency

In addition to design considerations, code optimization is essential. Assets like icons can significantly impact bandwidth usage in web projects. As internet demands grow, Raster is committed to keeping its assets as lightweight as possible. To achieve this, Raster employs SVG compression and utilizes specific code architecture for tree-shaking capabilities. After tree-shaking, only the icons you use are included in the final build, helping to minimize software distribution size.

## Official Packages

Raster's official packages are designed for compatibility across various platforms, making it easier for users to integrate icons into their projects. The packages are available for [React](https://www.npmjs.com/package/raster-react), with support for additional technologies coming soon. Raster - Retro pixel perfection icons with a charming aesthetic for your UI design needs, made with 16x16 precision templates.

---

# Installation

## React

```sh [pnpm]
pnpm install raster-react
```

```sh [npm]
npm install raster-react
```

```sh [yarn]
yarn add raster-react
```

```sh [bun]
bun add raster-react
```

## How to use

Raster is built with ES Modules, so it's completely tree-shakable.

Each icon can be imported as a React component, which renders an inline SVG element. This way, only the icons that are imported into your project are included in the final bundle. The rest of the icons are tree-shaken away.

### Example

Additional props can be passed to adjust the icon:

```jsx
import { Heart } from 'raster-react';

const App = () => {
	return <Heart color='#f54' size={13} radius={2} strokeWidth={1} />;
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
