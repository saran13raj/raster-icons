import { Toaster } from 'sonner';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUpRightIcon, GithubIcon, NpmIcon } from 'raster-react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Home } from './pages/home';
import Icons from './pages/icons';
import { RasterLogo } from './shared/ui/raster-logo';
import { Guide } from './pages/guide';
import { cn } from './shared/utils';
import { Button } from './shared/ui/button';

const routes = [
	{ link: '/icons', label: 'Icons' },
	{ link: '/guide', label: 'Guide' }
];

const queryClient = new QueryClient();

function App() {
	const location = useLocation();
	return (
		<QueryClientProvider client={queryClient}>
			<div className='relative mx-auto flex min-h-screen flex-col border-dashed border-zinc-700 bg-[#1a1c1f] 2xl:max-w-7xl 2xl:border-x'>
				{/* <a */}
				{/* 	href='https://pixcrit.saran13raj.com' */}
				{/* 	target='_blank' */}
				{/* 	className='group absolute flex w-full' */}
				{/* > */}
				{/* 	<div className='relative z-40 flex h-[2.5rem] w-full flex-row items-center justify-center px-5 text-center text-xs font-medium transition-all duration-300 md:text-sm'> */}
				{/* 		<div className='banner-gradient-1 absolute inset-0'></div> */}
				{/* 		<div className='banner-gradient absolute inset-0 blur-[6px] brightness-75'></div> */}
				{/* 		<p className='text-white underline-offset-4 group-hover:underline'> */}
				{/* 			🎉 Pixcrit - Effortlessly gather and manage UI design feedback directly */}
				{/* 			on your deployed web apps */}
				{/* 		</p> */}
				{/**/}
				{/* 		<ArrowUpRightIcon className='h-5 w-5 text-white transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5' /> */}
				{/* 	</div> */}
				{/* </a> */}
				<main className='mt-10 flex-grow'>
					<section className='relative overflow-hidden'>
						<div className='relative p-5 md:p-0 lg:px-16 xl:px-28'>
							<div className='flex flex-col'>
								<div className='mb-10 flex items-center justify-between'>
									<Link
										className='w-fit items-center text-center font-semibold text-white lg:text-base'
										to='/'
									>
										<RasterLogo className='h-[4rem] w-[4rem]' />
										<div className=''>Raster</div>
									</Link>
									<div className='flex items-center gap-6'>
										{routes.map((route) => (
											<Link
												className={cn(
													location.pathname === route.link ? 'text-primary1' : 'text-white',
													'w-fit items-center text-center font-semibold lg:text-base'
												)}
												to={route.link}
												key={route.link}
											>
												<div className='text-sm'>{route.label}</div>
											</Link>
										))}
										<a
											href='https://github.com/saran13raj/raster-icons'
											target='_blank'
											aria-label='github'
										>
											<GithubIcon className='h-7 w-7 text-white' radius={2} />
										</a>
										<a
											href='https://www.npmjs.com/package/raster-react'
											target='_blank'
											aria-label='npm'
										>
											<NpmIcon className='-ml-2 -mr-2 h-8 w-8 text-white' radius={2} />
										</a>
									</div>
								</div>
								<Routes location={location}>
									<Route path='/' element={<Home />} />
									<Route path='/icons' element={<Icons />} />
									<Route path='/guide' element={<Guide />} />
								</Routes>
							</div>
							<footer className='flex flex-col gap-5 border border-dashed border-zinc-700 p-8 md:mb-4'>
								<div className='flex gap-4'>
									<a
										href='https://github.com/saran13raj/raster-icons/issues'
										target='_blank'
										className='flex items-center'
										aria-label='issues'
									>
										<Button
											label='Issues'
											className='h-fit gap-1 border-0 bg-transparent p-0 hover:bg-transparent'
										>
											<ArrowUpRightIcon className='h-5 w-5' />
										</Button>
									</a>
									<a
										href='https://github.com/saran13raj/raster-icons'
										target='_blank'
										className='flex items-center'
										aria-label='github'
									>
										<Button
											label='GitHub'
											className='h-fit gap-1 border-0 bg-transparent p-0 hover:bg-transparent'
										>
											<ArrowUpRightIcon className='h-5 w-5' />
										</Button>
									</a>
								</div>
								<p className='text-sm text-zinc-400'>Released under the ISC License</p>
								<p className='text-sm text-zinc-400 lg:col-span-2'>
									Designed and built by
									<a
										className='undefined hover:text-accent-300 text-white'
										href='https://saran13raj.com/'
										target='_blank'
										aria-label='saran13raj'
									>
										{' '}
										Saran Raj
									</a>
									. This website was crafted using React &amp; Tailwind CSS.
								</p>
							</footer>
						</div>
					</section>
				</main>
			</div>
			<Toaster
				toastOptions={{
					className:
						'border bg-zinc-900 border-zinc-800 text-white text-xs md:text-sm'
				}}
			/>
		</QueryClientProvider>
	);
}

export default App;
