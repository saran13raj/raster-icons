import { motion } from 'motion/react';

import { ParsedIcon } from '../types';
import RasterIcon from './RasterIcon';

const gridColumns = 5;

export const InfiniteScrollGrid: React.FC<{
	icons: ParsedIcon[];
}> = ({ icons = [] }) => {
	return (
		<div className='h-full w-full'>
			<div className='mx-auto max-w-4xl'>
				<div className='grid grid-cols-5 gap-4'>
					{Array.from({ length: gridColumns }, (_, colIndex) => (
						<div key={colIndex} className='h-[25rem] overflow-hidden'>
							<motion.div
								className='flex flex-col gap-4'
								// animate={{
								// 	y: colIndex % 2 === 0 ? [0, -500] : [-500, 0]
								// }}
								// transition={{
								// 	duration: colIndex % 2 === 0 ? 15 : 30,
								// 	repeat: Infinity,
								// 	ease: 'linear'
								// }}
							>
								{[...icons, ...icons].map((icon, index) => (
									<div
										key={`${colIndex}-${index}`}
										className='flex aspect-square w-full items-center justify-center'
										aria-label={`${colIndex}-${index}-${icon.name}`}
									>
										<RasterIcon iconNode={icon.node} />
									</div>
								))}
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
