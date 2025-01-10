import React from 'react';

import { Button } from '../../shared/ui/button';
import { getIconNodes } from '../../shared/utils';
import { ParsedIcon } from '../../shared/types';
import { RasterIcon } from '../../shared/ui/RasterIcon';

export const Icons: React.FC = () => {
	const [strokeWidth, setStrokeWidth] = React.useState(0.25);
	const [size, setSize] = React.useState(50);
	const [color, setColor] = React.useState('#FEFEFE');
	const [searchText, setSearchText] = React.useState('');
	const [icons, setIcons] = React.useState<ParsedIcon[]>([]);
	const [filteredIcons, setFilteredIcons] = React.useState<ParsedIcon[]>([]);

	React.useEffect(() => {
		const fetchIcons = async () => {
			const icons = await getIconNodes();
			setIcons(icons);
			setFilteredIcons(icons);
		};
		fetchIcons();
	}, []);

	React.useEffect(() => {
		const filteredValues =
			icons.filter((icon) =>
				icon.name.replace('-', '').includes(searchText.toLowerCase())
			) ?? [];
		setFilteredIcons(filteredValues);
	}, [icons, searchText]);

	React.useEffect(() => {
		document.documentElement.style.setProperty('--customize-color', color);
		document.documentElement.style.setProperty(
			'--customize-strokeWidth',
			strokeWidth.toString()
		);
		document.documentElement.style.setProperty(
			'--customize-size',
			size.toString()
		);
	}, [color, strokeWidth, size]);

	return (
		<div className='flex flex-row'>
			<div className='flex flex-col border border-b-0 border-dashed border-zinc-300 p-4 lg:w-1/4 dark:border-zinc-700'>
				<div className='relative flex h-full flex-col justify-start gap-4 p-2 text-black dark:text-white'>
					<div>
						<p className='text-base leading-tight text-black md:text-lg lg:text-xl dark:text-white'>
							Controls
						</p>
					</div>
					<div className='-mt-3 flex items-center justify-between'>
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
					<div className='-mb-2'>
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
							max='50'
							step='1'
							value={size}
							onChange={(e) => setSize(Number(e.target.value))}
							className='range-sm accent-primary1 mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 p-6 lg:w-3/4'>
				<div className='w-full'>
					<input
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						className={
							'focus:border-primary1 hover:border-primary1 focus:ring-primary1 caret-primary1 w-full rounded-md border border-zinc-600 bg-zinc-800/40 px-2 py-2 text-sm/6 text-zinc-100 focus:outline-none'
						}
						placeholder='Search icons ...'
					/>
				</div>

				<div className='flex flex-wrap gap-4'>
					{filteredIcons.map((icon, index) => (
						<div
							key={`${index}-${icon.name}`}
							className='flex aspect-square h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-sm bg-zinc-800/40 hover:cursor-pointer'
							aria-label={icon.name}
						>
							<RasterIcon iconNode={icon.node} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
