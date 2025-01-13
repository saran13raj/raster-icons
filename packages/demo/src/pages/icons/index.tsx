import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import ReactDOMServer from 'react-dom/server';
import { toast } from 'sonner';
import { Helmet } from 'react-helmet';

import { getExportedIcons } from '../../shared/utils';
import { ParsedIcon } from '../../shared/types';
import IconDetails from '../../widgets/icon-details';
import ControlsSidebar from '../../widgets/controls-sidebar';
import RasterIcon from '../../shared/ui/raster-icon';
import { transformToPascalCase } from '../../shared/utils';

const Icons: React.FC = React.memo(() => {
	const [searchText, setSearchText] = React.useState('');
	const [filteredIcons, setFilteredIcons] = React.useState<ParsedIcon[]>([]);
	const [showIconDetails, setShowIconDetails] = React.useState(false);
	const [selectedIcon, setSelectedIcon] = React.useState<ParsedIcon | null>(
		null
	);

	const allIcons = React.useMemo<ParsedIcon[]>(() => getExportedIcons(), []);

	const onCopySVG = React.useCallback(() => {
		if (selectedIcon) {
			const colorVariable =
				document.documentElement.style.getPropertyValue('--customize-color');
			const strokeWidthVariable = document.documentElement.style.getPropertyValue(
				'--customize-strokeWidth'
			);
			const sizeVariable =
				document.documentElement.style.getPropertyValue('--customize-size');
			const radiusVariable = document.documentElement.style.getPropertyValue(
				'--customize-cornerRadius'
			);

			const svgElement = (
				<RasterIcon
					Icon={selectedIcon.Icon}
					size={sizeVariable ? parseFloat(sizeVariable) : 24}
					strokeWidth={strokeWidthVariable ? parseFloat(strokeWidthVariable) : 0.25}
					color={colorVariable ?? '#fefefe'}
					radius={radiusVariable ? parseFloat(radiusVariable) : 1}
				/>
			);

			const svgMarkup = ReactDOMServer.renderToStaticMarkup(svgElement);

			navigator.clipboard
				.writeText(svgMarkup)
				.then(() => {
					toast('SVG copied to clipboard');
				})
				.catch((err) => {
					console.error('Failed to copy SVG:', err);
				});
		}
	}, [selectedIcon]);

	const onCopyJSX = React.useCallback(() => {
		if (selectedIcon) {
			const colorVariable =
				document.documentElement.style.getPropertyValue('--customize-color');
			const strokeWidthVariable = document.documentElement.style.getPropertyValue(
				'--customize-strokeWidth'
			);
			const sizeVariable =
				document.documentElement.style.getPropertyValue('--customize-size');
			const radiusVariable = document.documentElement.style.getPropertyValue(
				'--customize-cornerRadius'
			);

			const JSX = `<${transformToPascalCase(selectedIcon?.name)} size={${sizeVariable ? parseFloat(sizeVariable) : 24}} color="${colorVariable ?? '#fefefe'}" strokeWidth={${strokeWidthVariable ? parseFloat(strokeWidthVariable) : 0.25}} radius={${radiusVariable ? parseFloat(radiusVariable) : 1}} />`;
			navigator.clipboard
				.writeText(JSX)
				.then(() => {
					toast('JSX copied to clipboard');
				})
				.catch((err) => {
					console.error('Failed to copy JSX:', err);
				});
		}
	}, [selectedIcon]);

	React.useEffect(() => {
		const filteredValues =
			allIcons.filter((icon) =>
				icon.name.toLowerCase().includes(searchText.toLowerCase())
			) ?? [];
		setFilteredIcons(filteredValues);
	}, [allIcons, searchText]);

	return (
		<div className='flex h-full min-h-[40rem] flex-col md:flex-row'>
			<Helmet>
				<title>Icons</title>
			</Helmet>
			<ControlsSidebar />
			<div className='flex flex-col gap-4 border-l border-r border-t border-dashed border-zinc-300 p-5 md:mb-0 md:border-l-0 md:p-8 lg:w-3/4 dark:border-zinc-700'>
				<IconGallery
					filteredIcons={filteredIcons}
					setSelectedIcon={setSelectedIcon}
					setShowIconDetails={setShowIconDetails}
					searchText={searchText}
					setSearchText={setSearchText}
				/>

				<IconDetails
					showDrawer={showIconDetails}
					setShowDrawer={setShowIconDetails}
					icon={selectedIcon}
					onCopySVG={onCopySVG}
					onCopyJSX={onCopyJSX}
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
});

export default Icons;

const IconGallery: React.FC<{
	filteredIcons: ParsedIcon[];
	setSelectedIcon: (value: ParsedIcon | null) => void;
	setShowIconDetails: (value: boolean) => void;
	searchText: string;
	setSearchText: (value: string) => void;
}> = React.memo(
	({
		filteredIcons,
		setSelectedIcon,
		setShowIconDetails,
		searchText,
		setSearchText
	}) => {
		return (
			<>
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
				<div className='flex flex-wrap gap-2 md:gap-4'>
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
				</div>
			</>
		);
	}
);
