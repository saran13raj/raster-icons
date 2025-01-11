import React from 'react';
import { toast } from 'sonner';
import { XIcon } from 'raster-react';

import { Drawer } from '../../shared/ui/drawer';
import { ParsedIcon } from '../../shared/types';
import { Button } from '../../shared/ui/button';
import RasterIcon from '../../shared/ui/raster-icon';

export const IconDetails: React.FC<{
	showDrawer: boolean;
	setShowDrawer: (show: boolean) => void;
	icon: ParsedIcon | null;
}> = ({ showDrawer, setShowDrawer, icon }) => {
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
							<div className=''>
								<Button
									onClick={() => {
										toast('SVG copied to clipboard');
									}}
									label='Copy SVG'
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
