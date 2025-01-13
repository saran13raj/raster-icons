import { Toaster } from 'sonner';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUpRightIcon, GithubIcon, NpmIcon } from 'raster-react';

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

function App() {
	const location = useLocation();
	return (
		<>
			<div className='relative mx-auto flex min-h-screen flex-col border-dashed border-zinc-300 bg-[#f7f7f7] 2xl:max-w-7xl 2xl:border-x dark:border-zinc-700 dark:bg-[#1a1c1f]'>
				<main className='flex-grow'>
					<section className='relative overflow-hidden'>
						<div className='relative p-5 md:p-0 lg:px-16 xl:px-28'>
							<div className='mt-4 flex flex-col'>
								<div className='mb-10 flex items-center justify-between'>
									<Link
										className='w-fit items-center text-center font-semibold text-black lg:text-base dark:text-white'
										to='/'
									>
										<RasterLogo customClass='h-[4rem] w-[4rem]' />
										<div className=''>Raster</div>
									</Link>
									<div className='flex items-center gap-6'>
										{routes.map((route) => (
											<Link
												className={cn(
													location.pathname === route.link
														? 'text-primary1'
														: 'text-black dark:text-white',
													'w-fit items-center text-center font-semibold lg:text-base'
												)}
												to={route.link}
												key={route.link}
											>
												<div className='text-sm'>{route.label}</div>
											</Link>
										))}
										<a href='https://github.com/saran13raj/raster-icons' target='_blank'>
											<GithubIcon
												className='h-7 w-7 text-black dark:text-white'
												radius={2}
											/>
										</a>
										<a href='https://www.npmjs.com/package/raster-react' target='_blank'>
											<NpmIcon
												className='-ml-2 -mr-2 h-8 w-8 text-black dark:text-white'
												radius={2}
											/>
										</a>
									</div>
								</div>
								<Routes location={location}>
									<Route path='/' element={<Home />} />
									<Route path='/icons' element={<Icons />} />
									<Route path='/guide' element={<Guide />} />
								</Routes>
							</div>
							<footer className='mb-4 border border-dashed border-zinc-300 p-8 dark:border-zinc-700'>
								<div className='mb-2 flex gap-4'>
									<a
										href='https://github.com/saran13raj/raster-icons/issues'
										target='_blank'
									>
										<Button
											label='Issues'
											className='gap-1 border-0 bg-transparent p-0 hover:bg-transparent'
										>
											<ArrowUpRightIcon className='h-5 w-5' />
										</Button>
									</a>
									<a href='https://github.com/saran13raj/raster-icons' target='_blank'>
										<Button
											label='GitHub'
											className='gap-1 border-0 bg-transparent p-0 hover:bg-transparent'
										>
											<ArrowUpRightIcon className='h-5 w-5' />
										</Button>
									</a>
								</div>
								<p className='text-sm text-zinc-500 dark:text-zinc-400'>
									Released under the ISC License
								</p>
								<p className='mt-6 text-sm text-zinc-500 lg:col-span-2 dark:text-zinc-400'>
									Designed and built by
									<a
										className='undefined hover:text-accent-300 text-black dark:text-white'
										href='https://saran13raj.com/'
										target='_blank'
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
					className: 'border bg-zinc-900 border-zinc-800 text-white'
				}}
			/>
		</>
	);
}

export default App;
