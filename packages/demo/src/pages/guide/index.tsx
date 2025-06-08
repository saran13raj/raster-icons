import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';

import { RasterLogo } from '../../shared/ui/raster-logo';

const fetchMarkdown = () => {
	return fetch('./guide.md').then((res) => res.text());
};

// TODO find better way to render docs
export const Guide: React.FC = () => {
	const {
		data: content,
		error,
		isLoading
	} = useQuery({
		queryKey: ['guide-markdown'],
		queryFn: fetchMarkdown
	});

	return (
		<div className='guide-container flex h-full min-h-[40rem] flex-col border border-b-0 border-dashed border-zinc-700 p-5 text-white md:p-8'>
			<Helmet>
				<title>Guide</title>
			</Helmet>
			{(error as Error) && (
				<div className='flex h-full w-full items-center justify-center'>
					oops! something wrong
				</div>
			)}
			{isLoading && (
				<div className='flex h-full w-full items-center justify-center'>
					<RasterLogo className='animate-spin-slow h-[6.5rem] w-[6.5rem]' />
				</div>
			)}
			{content && (
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
			)}
		</div>
	);
};
