import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'cjs'
			},
			{
				file: 'dist/index.esm.js',
				format: 'esm'
			}
		],
		external: ['react', 'react-native', 'react-native-svg'],
		plugins: [resolve(), commonjs(), typescript()]
	},
	{
		input: 'dist/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'es', sourcemap: true }],
		plugins: [dts()],
		external: ['react', 'react-native', 'react-native-svg', 'tslib']
	}
];
