import React from 'react';
import { toast } from 'sonner';

import { Drawer } from '../../shared/ui/drawer';
import { ParsedIcon } from '../../shared/types';
import RasterIconLarge from '../../shared/ui/raster-icon-large';
import { Button } from '../../shared/ui/button';

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
							<RasterIconLarge iconNode={icon.node} height={256} width={256} />
						</div>
						<div className='ml-8 flex w-full flex-col gap-2'>
							<p className='flex w-full items-center justify-between text-black md:text-lg lg:text-xl dark:text-white'>
								{icon.name}
								<Button
									onClick={() => setShowDrawer(false)}
									label=''
									customClass=''
									icon={
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											viewBox='0 0 256 256'
											fill='currentColor'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 120 152)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 104 168)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 184 184)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 88 184)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 168 104)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 184 88)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 200 72)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 200 200)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 152 120)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 152 152)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 136 136)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 120 120)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 136 136)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 168 168)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 88 88)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 72 72)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 72 200)'
											></rect>
											<rect
												width='14'
												height='14'
												transform='matrix(0 -1 -1 0 104 104)'
											></rect>
										</svg>
									}
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
