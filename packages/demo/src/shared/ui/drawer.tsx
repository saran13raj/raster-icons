import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Drawer: React.FC<{
	showDrawer: boolean;
	setShowDrawer: (show: boolean) => void;
	children: React.ReactNode;
	customClass?: string;
}> = ({ showDrawer, children, customClass = '' }) => {
	return (
		<AnimatePresence>
			{showDrawer && (
				<>
					<motion.div
						initial={{ y: '100%' }}
						animate={{ y: 0 }}
						exit={{ y: '100%' }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className={`fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-5xl rounded-t-2xl bg-zinc-800 shadow-lg ${customClass}`}
					>
						<div className='max-h-[40vh] overflow-y-auto p-8'>{children}</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};
