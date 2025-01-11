import React from 'react';
import { toast } from 'sonner';
import { XIcon } from 'raster-react';
import ReactDOMServer from 'react-dom/server';

import { Drawer } from '../../shared/ui/drawer';
import { ParsedIcon } from '../../shared/types';
import { Button } from '../../shared/ui/button';
import RasterIcon from '../../shared/ui/raster-icon';
import { transformToPascalCase } from '../../shared/utils';

export const IconDetails: React.FC<{
	showDrawer: boolean;
	setShowDrawer: (show: boolean) => void;
	icon: ParsedIcon | null;
	color: string;
	radius: number;
	size: number;
	strokeWidth: number;
}> = ({
	showDrawer,
	setShowDrawer,
	icon,
	color,
	size,
	radius,
	strokeWidth
}) => {
	const onCopySVG = () => {
		if (icon) {
			const svgElement = (
				<RasterIcon
					Icon={icon.Icon}
					size={size ?? 24}
					strokeWidth={strokeWidth ?? 1}
					color={color ?? '#fefefe'}
					radius={radius ?? 3}
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
	};

	const onCopyJSX = () => {
		if (icon) {
			const JSX = `<${transformToPascalCase(icon?.name)} size={${size}} color="${color}" strokeWidth={${strokeWidth}} radius={${radius}} />`;
			navigator.clipboard
				.writeText(JSX)
				.then(() => {
					toast('JSX copied to clipboard');
				})
				.catch((err) => {
					console.error('Failed to copy JSX:', err);
				});
		}
	};

	return (
		<>
			<Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} customClass=''>
				{icon && (
					<div className='flex'>
						<div className='rounded-lg bg-zinc-900 shadow-xl'>
							<RasterIcon Icon={icon.Icon} className='h-[15rem] w-[15rem]' />
						</div>
						<div className='ml-8 flex w-full flex-col gap-2'>
							<p className='flex w-full items-center justify-between text-black md:text-lg lg:text-xl dark:text-white'>
								{icon.name}
								<Button
									onClick={() => setShowDrawer(false)}
									label=''
									customClass=''
									icon={<XIcon className='h-6 w-6' />}
								/>
							</p>
							<div className='flex gap-4'>
								<Button
									onClick={() => {
										onCopySVG();
									}}
									label='Copy SVG'
									customClass=''
								/>
								<Button
									onClick={() => {
										onCopyJSX();
									}}
									label='Copy JSX'
									customClass=''
								/>
							</div>
						</div>
					</div>
				)}
			</Drawer>
		</>
	);
};
