import React from 'react';
import { XIcon } from 'raster-react';

import { Drawer } from '../../shared/ui/drawer';
import { ParsedIcon } from '../../shared/types';
import { Button } from '../../shared/ui/button';
import RasterIcon from '../../shared/ui/raster-icon';

const IconDetails: React.FC<{
	showDrawer: boolean;
	setShowDrawer: (show: boolean) => void;
	icon: ParsedIcon | null;
	onCopySVG: () => void;
	onCopyJSX: () => void;
}> = React.memo(({ showDrawer, setShowDrawer, icon, onCopySVG, onCopyJSX }) => {
	return (
		<>
			<Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} customClass=''>
				{icon && (
					<div className='flex'>
						<div className='rounded-lg bg-zinc-900 shadow-xl'>
							<RasterIcon
								Icon={icon.Icon}
								className='h-[8rem] w-[8rem] md:h-[15rem] md:w-[15rem]'
								name={icon.name}
							/>
						</div>
						<div className='ml-8 flex w-full flex-col gap-2'>
							<p className='flex w-full items-center justify-between text-white md:text-lg lg:text-xl'>
								{icon.name}
								<Button
									onClick={() => setShowDrawer(false)}
									label=''
									className=''
									icon={<XIcon className='h-6 w-6' radius={2} />}
									ariaLabel='close'
								/>
							</p>
							<div className='flex gap-4'>
								<Button
									onClick={() => {
										onCopySVG();
									}}
									label='Copy SVG'
									className=''
								/>
								<Button
									onClick={() => {
										onCopyJSX();
									}}
									label='Copy JSX'
									className=''
								/>
							</div>
						</div>
					</div>
				)}
			</Drawer>
		</>
	);
});

export default IconDetails;
