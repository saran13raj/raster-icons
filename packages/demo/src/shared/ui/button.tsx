import React from 'react';
import { cn } from '../utils';

export const Button: React.FC<{
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	label?: string;
	ariaLabel?: string;
	customClass?: string;
	disabled?: boolean;
	icon?: React.ReactElement;
	rounded?: boolean;
	children?: React.ReactNode;
}> = ({
	onClick,
	label,
	ariaLabel,
	customClass = '',
	disabled = false,
	icon,
	rounded,
	children
}) => {
	return (
		<button
			disabled={disabled}
			className={cn(
				rounded ? 'rounded-full' : 'rounded-md',
				'group inline-flex h-[40px] items-center justify-center gap-2 whitespace-nowrap border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-sm font-medium text-black hover:bg-zinc-900 focus:outline-none dark:text-white',
				customClass
			)}
			onClick={(e) => onClick && onClick(e)}
			aria-label={(ariaLabel || label) ?? ''}
		>
			{icon && <div className='flex'>{icon}</div>}
			{label}
			{children}
		</button>
	);
};
