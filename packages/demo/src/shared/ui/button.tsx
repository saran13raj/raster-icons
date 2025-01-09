import clsx from 'clsx';
import React from 'react';

export const Button: React.FC<{
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	label?: string;
	customClass?: string;
	disabled?: boolean;
	icon?: React.ReactElement;
	rounded?: boolean;
	children?: React.ReactNode;
}> = ({
	onClick,
	label,
	customClass = '',
	disabled = false,
	icon,
	rounded,
	children
}) => {
	return (
		<button
			disabled={disabled}
			className={clsx(
				rounded ? 'rounded-full' : 'rounded-md',
				'group inline-flex h-[40px] items-center justify-center gap-2 whitespace-nowrap border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm font-medium hover:bg-zinc-900 focus:outline-none',
				customClass
			)}
			onClick={(e) => onClick && onClick(e)}
		>
			{icon && <div className='flex'>{icon}</div>}
			{label}
			{children}
		</button>
	);
};
