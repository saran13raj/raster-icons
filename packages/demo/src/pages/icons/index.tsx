import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { getExportedIcons } from '../../shared/utils';
import { ParsedIcon } from '../../shared/types';
import { IconDetails } from '../../widgets/icon-details';
import { ControlsSidebar } from '../../widgets/controls-sidebar';
import RasterIcon from '../../shared/ui/raster-icon';

export const Icons: React.FC = () => {
	const [strokeWidth, setStrokeWidth] = React.useState(0.25);
	const [cornerRadius, setCornerRadius] = React.useState(1);
	const [size, setSize] = React.useState(50);
	const [color, setColor] = React.useState('#FEFEFE');
	const [searchText, setSearchText] = React.useState('');
	const [filteredIcons, setFilteredIcons] = React.useState<ParsedIcon[]>([]);
	const [showIconDetails, setShowIconDetails] = React.useState(false);
	const [selectedIcon, setSelectedIcon] = React.useState<ParsedIcon | null>(
		null
	);

	const allIcons = React.useMemo<ParsedIcon[]>(() => getExportedIcons(), []);

	React.useEffect(() => {
		const filteredValues =
			allIcons.filter((icon) =>
				icon.name.toLowerCase().includes(searchText.toLowerCase())
			) ?? [];
		setFilteredIcons(filteredValues);
	}, [allIcons, searchText]);

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
		<div className='flex h-full min-h-[40rem] flex-col md:flex-row'>
			<ControlsSidebar
				color={color}
				setColor={setColor}
				cornerRadius={cornerRadius}
				setCornerRadius={setCornerRadius}
				strokeWidth={strokeWidth}
				setStrokeWidth={setStrokeWidth}
				size={size}
				setSize={setSize}
			/>
			<div className='flex flex-col gap-4 md:mb-0 md:p-6 lg:w-3/4'>
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
					<IconGallery
						filteredIcons={filteredIcons}
						setSelectedIcon={setSelectedIcon}
						setShowIconDetails={setShowIconDetails}
					/>
				</div>
				<IconDetails
					showDrawer={showIconDetails}
					setShowDrawer={setShowIconDetails}
					icon={selectedIcon}
				/>
			</div>
			<ReactTooltip
				id='raster-tooltip'
				arrowColor='transparent'
				place='top'
				className='text-zinc-50'
				style={{
					backgroundColor: '#f54',
					padding: '2px 5px',
					fontSize: '12px',
					borderRadius: '4px'
				}}
			/>
		</div>
	);
};

const IconGallery: React.FC<{
	filteredIcons: ParsedIcon[];
	setSelectedIcon: (value: ParsedIcon | null) => void;
	setShowIconDetails: (value: boolean) => void;
}> = React.memo(({ filteredIcons, setSelectedIcon, setShowIconDetails }) => {
	return (
		<>
			{filteredIcons.map((icon, index) => (
				<div
					key={`${index}-${icon.name}`}
					className='flex aspect-square h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-sm bg-zinc-800/40 hover:cursor-pointer hover:bg-zinc-700/70'
					aria-label={icon.name}
					data-tooltip-id='raster-tooltip'
					data-tooltip-content={icon.name}
					data-tooltip-offset={-2}
					onClick={() => {
						setSelectedIcon(icon);
						setShowIconDetails(true);
					}}
				>
					<RasterIcon Icon={icon.Icon} />
				</div>
			))}
		</>
	);
});
