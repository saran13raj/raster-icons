import { motion } from 'motion/react';
import React from 'react';

import { getExportedIcons } from '../utils';
import RasterIcon from './raster-icon';

const gridColumns = 5;

const InfiniteScrollGrid: React.FC = React.memo(() => {
	const allIcons = React.useMemo(() => getExportedIcons(), []);

	return (
		<div className='h-full w-full'>
			<div className='mx-auto max-w-4xl'>
				<div className='grid grid-cols-5 gap-4'>
					{Array.from({ length: gridColumns }, (_, colIndex) => {
						const randomStartIndex = Math.floor(colIndex * 20);

						return (
							<div key={colIndex} className='h-full max-h-[28rem] overflow-hidden'>
								<motion.div
									className='flex flex-col gap-4'
									animate={{
										y: colIndex % 2 === 0 ? [0, -500] : [-500, 0]
									}}
									transition={{
										duration: colIndex % 2 === 0 ? 20 : 40,
										repeat: Infinity,
										ease: 'linear'
									}}
								>
									{[...allIcons.slice(randomStartIndex, randomStartIndex + 10)].map(
										(icon, index) => (
											<div
												key={`${colIndex}-${index}`}
												className='flex aspect-square w-full items-center justify-center'
												aria-label={icon.name}
											>
												<RasterIcon Icon={icon.Icon} />
											</div>
										)
									)}
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
});

export default InfiniteScrollGrid;
