import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
		<div className='guide-container flex h-full min-h-[40rem] flex-col border border-b-0 border-dashed border-zinc-300 p-8 text-black dark:border-zinc-700 dark:text-white'>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
		</div>
	);
};
