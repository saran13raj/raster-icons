import React from 'react';
import { Button } from '../../shared/ui/button';
import { MenuIcon, XIcon } from 'raster-react';

import {
	updateColorCSSVar,
	updateCornerRadiusCSSVar,
	updateSizeCSSVar,
	updateStrokeWidthCSSVar
} from '../../shared/utils';

const ControlsSidebar: React.FC = React.memo(() => {
	const [strokeWidth, setStrokeWidth] = React.useState(0.25);
	const [cornerRadius, setCornerRadius] = React.useState(1);
	const [size, setSize] = React.useState(50);
	const [color, setColor] = React.useState('#FEFEFE');
	const [isOpen, setIsOpen] = React.useState(false);

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

		updateSizeCSSVar(50);
	}, []);

	return (
		<div className='border-zinc-300 lg:w-1/4 lg:border lg:border-b-0 lg:border-dashed dark:border-zinc-700'>
			{/* Hamburger Menu Icon */}
			<button
				className='-mt-6 mb-4 flex items-center p-2 text-black lg:hidden dark:text-white'
				onClick={() => setIsOpen(!isOpen)}
			>
				<MenuIcon size={36} radius={2} />
				Menu
			</button>

			{/* Sidebar for large screens */}
			<div className='hidden w-full flex-col p-8 lg:flex'>
				<div className='relative flex flex-col justify-start gap-4 rounded-md bg-zinc-800/40 px-4 py-2 text-black dark:text-white'>
					<p className='text-base leading-tight text-black md:text-lg lg:text-xl dark:text-white'>
						Controls
					</p>
					<div className='flex items-center justify-between gap-2'>
						<label className='flex justify-between text-xs font-medium'>Color</label>
						<Button
							onClick={() => {}}
							label={color}
							className='w-[9rem] cursor-default justify-between text-xs hover:bg-inherit'
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
						max={50}
						step={1}
						onChange={(value) => {
							updateSizeCSSVar(value);
							setSize(value);
						}}
					/>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className='fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden'>
					<div className='absolute left-0 top-0 h-full w-64 bg-zinc-900 p-4 text-black dark:text-white'>
						<div className='flex flex-col gap-4'>
							<p className='flex items-center justify-between text-base leading-tight md:text-lg lg:text-xl'>
								Controls
								<Button
									onClick={() => setIsOpen(false)}
									ariaLabel='close'
									icon={<XIcon size={30} radius={2} />}
								/>
							</p>
							{/* <ControlItem label='Color' value={color}>
								<input
									type='color'
									value={color}
									onChange={(e) => setColor(e.target.value)}
									className='flex h-6 w-6 cursor-pointer rounded-full'
									style={{ backgroundColor: color }}
								/>
							</ControlItem> */}
							<div className='flex items-center justify-between'>
								<label className='flex justify-between text-xs font-medium'>
									Color
								</label>
								<Button
									onClick={() => {}}
									label={color}
									className='w-[9rem] cursor-default justify-between text-xs hover:bg-inherit'
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
								max={50}
								step={1}
								onChange={(value) => {
									updateSizeCSSVar(value);
									setSize(value);
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
});

export default ControlsSidebar;

export const ControlItem: React.FC<{
	label: string;
	value: string | number;
	children?: React.ReactNode;
}> = ({ label, children }) => (
	<div className='flex items-center justify-between'>
		<label className='text-xs font-medium'>{label}</label>
		{children}
	</div>
);

export const ControlRangeItem: React.FC<{
	label: string;
	value: number;
	min: number;
	max: number;
	step: number;
	onChange: (value: number) => void;
}> = ({ label, value, min, max, step, onChange }) => (
	<div className='-mb-2'>
		<label className='flex justify-between text-xs font-medium'>
			{label}
			<span className='text-zinc-500'>{value}px</span>
		</label>
		<input
			type='range'
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={(e) => onChange(Number(e.target.value))}
			className='range-sm accent-primary1 mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-zinc-700'
		/>
	</div>
);
