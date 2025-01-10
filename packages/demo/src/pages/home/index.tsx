import React from 'react';

import { Button } from '../../shared/ui/button';
import InfiniteScrollGrid from '../../shared/ui/infinite-scroll-grid';
import { getIconNodes } from '../../shared/utils';
import { ParsedIcon } from '../../shared/types';

export const Home: React.FC = () => {
	const [strokeWidth, setStrokeWidth] = React.useState(0.25);
	const [cornerRadius, setCornerRadius] = React.useState(1);
	const [size, setSize] = React.useState(80);
	const [color, setColor] = React.useState('#FEFEFE');
	const [icons, setIcons] = React.useState<ParsedIcon[]>([]);

	React.useEffect(() => {
		const fetchIcons = async () => {
			const icons = await getIconNodes();
			setIcons(icons);
		};
		fetchIcons();
	}, []);

	React.useEffect(() => {
		document.documentElement.style.setProperty('--customize-color', color);
	}, [color]);

	React.useEffect(() => {
		document.documentElement.style.setProperty(
			'--customize-strokeWidth',
			strokeWidth.toString()
		);
	}, [strokeWidth]);

	React.useEffect(() => {
		document.documentElement.style.setProperty(
			'--customize-size',
			size.toString()
		);
	}, [size]);

	React.useEffect(() => {
		document.documentElement.style.setProperty(
			'--customize-cornerRadius',
			cornerRadius.toString()
		);
	}, [cornerRadius]);

	return (
		<>
			<div className='flex flex-col border border-dashed border-zinc-300 p-8 lg:flex-row dark:border-zinc-700'>
				<div className='flex flex-col gap-2'>
					<div className='mb-1 flex w-fit items-center gap-2 rounded-sm bg-zinc-700/60 px-2 py-[0.5px] text-black dark:text-white'>
						<p
							className='text-sm font-medium text-black dark:text-white'
							data-text='version-0.0.1'
						>
							v0.0.1
						</p>
					</div>
					<h1 className='font-doto text-balance text-3xl font-extrabold leading-tight tracking-normal text-black sm:text-3xl md:text-4xl lg:text-6xl dark:text-white'>
						<span className='text-primary1'>Retro </span>
						Pixel Perfection
					</h1>
					<p className='text-pretty text-xl font-medium text-zinc-500 dark:text-zinc-400'>
						Icons with retro charm
					</p>
				</div>
			</div>

			<ul className='grid grid-cols-1 gap-4 border-x border-dashed border-zinc-300 p-8 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-700'>
				<li>
					<h3 className='block text-base font-semibold text-black dark:text-white'>
						Lightwight
					</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Icons are lightwight, optimized scalable vector graphics (SVG).
					</p>
				</li>
				<li>
					<h3 className='block text-base font-semibold text-black dark:text-white'>
						Customizable
					</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Customize the color, size, stroke width, and more.
					</p>
				</li>
				<li>
					<h3 className='block text-base font-semibold text-black dark:text-white'>
						Packages support
					</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Raster is available as a package for major package managers.
					</p>
				</li>
				<li>
					<h3 className='block text-base font-semibold text-black dark:text-white'>
						Clean & consistent
					</h3>
					<p className='text-pretty text-sm text-zinc-500 dark:text-zinc-400'>
						Designed with a strict set of design rules for consistency in style and
						readability.
					</p>
				</li>
			</ul>

			<div className='relative grid grid-cols-1 border border-dashed border-zinc-300 md:grid-cols-2 lg:grid-cols-3 dark:border-zinc-700'>
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
				<div className='relative flex h-full flex-col justify-start gap-8 border-zinc-300 p-8 text-black lg:col-span-1 lg:border-r dark:border-zinc-700 dark:text-white'>
					<div>
						<h3 className='text-lg leading-tight text-black sm:text-xl md:text-2xl lg:text-3xl dark:text-white'>
							Style as you please
						</h3>
						<p className='text-sm text-zinc-500 dark:text-zinc-400'>
							Raster has a lot of customization options to match the icons with your
							UI.
						</p>
					</div>

					<div className='flex items-center justify-between'>
						<label className='flex justify-between text-xs font-medium'>Color</label>
						<Button
							onClick={() => {}}
							label={color}
							customClass='cursor-default text-xs w-[9rem] justify-between'
						>
							<input
								type='color'
								value={color}
								onChange={(e) => setColor(e.target.value)}
								className='flex h-6 w-6 cursor-pointer rounded-full'
								style={{ backgroundColor: color }}
							/>
						</Button>
					</div>
					<div className=''>
						<label className='flex justify-between text-xs font-medium'>
							Corner radius
							<span className='text-zinc-500'>{cornerRadius}px</span>
						</label>
						<input
							type='range'
							min='0'
							max='7'
							step='1'
							value={cornerRadius}
							onChange={(e) => setCornerRadius(Number(e.target.value))}
							className='range-sm accent-primary1 mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700'
						/>
					</div>
					<div className=''>
						<label className='flex justify-between text-xs font-medium'>
							Stroke width
							<span className='text-zinc-500'>{strokeWidth}px</span>
						</label>
						<input
							type='range'
							min='0.25'
							max='3'
							step='0.25'
							value={strokeWidth}
							onChange={(e) => setStrokeWidth(Number(e.target.value))}
							className='range-sm accent-primary1 mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700'
						/>
					</div>
					<div className=''>
						<label className='flex justify-between text-xs font-medium'>
							Size
							<span className='text-zinc-500'>{size}px</span>
						</label>
						<input
							type='range'
							min='16'
							max='120'
							step='1'
							value={size}
							onChange={(e) => setSize(Number(e.target.value))}
							className='range-sm accent-primary1 mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700'
						/>
					</div>
				</div>
				{/* preview */}
				<div className='relative flex h-full flex-col justify-between overflow-hidden bg-white/30 p-8 lg:col-span-2 dark:bg-zinc-800/40'>
					<InfiniteScrollGrid icons={icons} />
				</div>
			</div>
		</>
	);
};
