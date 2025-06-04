import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet';

import { RasterLogo } from '../../shared/ui/raster-logo';

// TODO find better way to render docs
export const Guide: React.FC = () => {
	const [content, setContent] = React.useState('');

	React.useEffect(() => {
		fetch('./guide.md')
			.then((res) => res.text())
			.then((text) => setContent(text))
			.catch((error) => console.error('Error fetching markdown:', error));
	}, []);

	return (
		<div className='guide-container flex h-full min-h-[40rem] flex-col border border-b-0 border-dashed border-zinc-700 p-5 text-white md:p-8'>
			<Helmet>
				<title>Guide</title>
			</Helmet>
			<React.Suspense
				fallback={
					<div className='flex h-full w-full items-center justify-center'>
						<RasterLogo className='animate-spin-slow h-[6.5rem] w-[6.5rem]' />
					</div>
				}
			>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
			</React.Suspense>
		</div>
	);
};
