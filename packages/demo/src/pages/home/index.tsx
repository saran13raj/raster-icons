import React from 'react';
import {
	BlocksIcon,
	BoxIcon,
	SettingsIcon,
	SpaceInvadersIcon
} from 'raster-react';
import { Helmet } from 'react-helmet';

import { Button } from '../../shared/ui/button';
import InfiniteScrollGrid from '../../shared/ui/infinite-scroll-grid';
import { ControlRangeItem } from '../../widgets/controls-sidebar';
import packageJson from '../../../package.json';
import {
	updateColorCSSVar,
	updateCornerRadiusCSSVar,
	updateSizeCSSVar,
	updateStrokeWidthCSSVar
} from '../../shared/utils';

export const Home: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Raster</title>
			</Helmet>
			<div className='flex flex-col border border-dashed border-zinc-300 p-5 text-black md:p-8 lg:flex-row dark:border-zinc-700 dark:text-white'>
				<div className='flex flex-col gap-2'>
					<div className='mb-1 flex w-fit items-center gap-2 rounded-sm bg-zinc-700/60 px-2 py-[0.5px]'>
						<p
							className='text-sm font-medium'
							data-text={`version-${packageJson.version}`}
						>
							v{packageJson.version}
						</p>
					</div>
					<h1 className='font-doto text-balance text-4xl font-extrabold leading-tight tracking-normal sm:text-4xl md:text-5xl lg:text-6xl'>
						<span className='text-primary1'>Retro </span>
						Pixel Perfection
					</h1>
					<p className='text-pretty text-xl font-medium text-zinc-500 dark:text-zinc-400'>
						Icons with retro charm
					</p>
				</div>
			</div>

			<ul className='grid grid-cols-1 gap-6 border-x border-dashed border-zinc-300 p-8 text-black sm:grid-cols-2 md:gap-4 lg:grid-cols-4 dark:border-zinc-700 dark:text-white'>
				<li>
					<SpaceInvadersIcon className='text-primary1 h-16 w-16' radius={2} />
					<h3 className='block text-base font-semibold'>Pixelated Past</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Experience the glow of classic pixel art in modern style.
					</p>
				</li>
				<li>
					<BlocksIcon className='text-primary1 h-16 w-16' radius={2} />
					<h3 className='block text-base font-semibold'>Lightweight</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Icons are lightwight and optimized scalable vector graphics (SVG).
					</p>
				</li>
				<li>
					<SettingsIcon className='text-primary1 h-16 w-16' radius={2} />
					<h3 className='block text-base font-semibold'>Customizable</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Customize the color, size, stroke width, and more.
					</p>
				</li>
				<li>
					<BoxIcon className='text-primary1 h-16 w-16' radius={2} />
					<h3 className='block text-base font-semibold'>Packages support</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Raster is accessible as a package for major package managers.
					</p>
				</li>
			</ul>

			<div className='relative grid grid-cols-1 border border-dashed border-zinc-300 md:grid-cols-2 md:border-b-0 lg:grid-cols-3 dark:border-zinc-700'>
				{/* <!-- Top Left Plus --> */}
				<div className='z-5 absolute -left-[0.65rem] -top-[0.65rem] flex size-5 items-center justify-center'>
					<div className='absolute h-[1px] w-full bg-zinc-300 dark:bg-zinc-300'></div>
					<div className='absolute h-full w-[1px] bg-zinc-300 dark:bg-zinc-300'></div>
				</div>
				{/* <!-- Top Right Plus --> */}
				<div className='z-5 absolute -right-[0.67rem] -top-[0.65rem] flex size-5 items-center justify-center'>
					<div className='absolute h-[1px] w-full bg-zinc-300 dark:bg-zinc-300'></div>
					<div className='absolute h-full w-[1px] bg-zinc-300 dark:bg-zinc-300'></div>
				</div>
				{/* <!-- Bottom Left Plus --> */}
				<div className='z-5 absolute -bottom-[0.65rem] -left-[0.65rem] flex size-5 items-center justify-center'>
					<div className='absolute h-[1px] w-full bg-zinc-300 dark:bg-zinc-300'></div>
					<div className='absolute h-full w-[1px] bg-zinc-300 dark:bg-zinc-300'></div>
				</div>
				{/* <!-- Bottom Right Plus --> */}
				<div className='z-5 absolute -bottom-[0.65rem] -right-[0.67rem] flex size-5 items-center justify-center'>
					<div className='absolute h-[1px] w-full bg-zinc-300 dark:bg-zinc-300'></div>
					<div className='absolute h-full w-[1px] bg-zinc-300 dark:bg-zinc-300'></div>
				</div>

				{/* controls */}
				<HomeControlsSidebar />

				{/* preview */}
				<div className='relative flex h-full flex-col justify-between overflow-hidden bg-white/30 p-6 lg:col-span-2 dark:bg-zinc-800/40'>
					<InfiniteScrollGrid />
				</div>
			</div>
		</>
	);
};

const HomeControlsSidebar: React.FC = React.memo(() => {
	const [strokeWidth, setStrokeWidth] = React.useState(0.25);
	const [cornerRadius, setCornerRadius] = React.useState(1);
	const [size, setSize] = React.useState(80);
	const [color, setColor] = React.useState('#FEFEFE');

	React.useEffect(() => {
		const colorVariable =
			document.documentElement.style.getPropertyValue('--customize-color');
		const strokeWidthVariable = document.documentElement.style.getPropertyValue(
			'--customize-strokeWidth'
		);
		const radiusVariable = document.documentElement.style.getPropertyValue(
			'--customize-cornerRadius'
		);

		setColor(colorVariable ? colorVariable : '#FEFEFE');
		setStrokeWidth(strokeWidthVariable ? parseFloat(strokeWidthVariable) : 0.25);
		setCornerRadius(radiusVariable ? parseFloat(radiusVariable) : 1);

		updateSizeCSSVar(80);
	}, []);

	return (
		<div className='relative flex h-full flex-col justify-start gap-8 border-zinc-300 p-8 text-black lg:col-span-1 lg:border-r dark:border-zinc-700 dark:text-white'>
			<div>
				<h3 className='text-lg font-medium leading-tight md:text-xl lg:text-2xl'>
					Extensively Customizable
				</h3>
				<p className='text-sm text-zinc-500 dark:text-zinc-400'>
					Raster offers numerous customization options to align the icons with your
					UI.
				</p>
			</div>

			<div className='flex items-center justify-between'>
				<label className='flex justify-between text-xs font-medium'>Color</label>
				<Button
					onClick={() => {}}
					label={color}
					className='w-[9rem] cursor-default justify-between text-xs'
				>
					<input
						type='color'
						value={color}
						onChange={(e) => {
							updateColorCSSVar(e.target.value);
							setColor(e.target.value);
						}}
						className='flex h-6 w-6 cursor-pointer rounded-full'
						style={{ backgroundColor: color }}
					/>
				</Button>
			</div>
			<ControlRangeItem
				label='Corner radius'
				value={cornerRadius}
				min={0}
				max={7}
				step={1}
				onChange={(value) => {
					updateCornerRadiusCSSVar(value);
					setCornerRadius(value);
				}}
			/>
			<ControlRangeItem
				label='Stroke width'
				value={strokeWidth}
				min={0}
				max={5}
				step={0.25}
				onChange={(value) => {
					updateStrokeWidthCSSVar(value);
					setStrokeWidth(value);
				}}
			/>
			<ControlRangeItem
				label='Size'
				value={size}
				min={16}
				max={80}
				step={1}
				onChange={(value) => {
					updateSizeCSSVar(value);
					setSize(value);
				}}
			/>
		</div>
	);
});
