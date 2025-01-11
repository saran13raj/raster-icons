import { Toaster } from 'sonner';
import { Link, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Icons } from './pages/icons';
import { RasterLogo } from './shared/ui/raster-logo';

function App() {
	return (
		<>
			<div className='relative mx-auto flex min-h-screen flex-col border-dashed border-zinc-300 bg-[#f7f7f7] 2xl:max-w-7xl 2xl:border-x dark:border-zinc-700 dark:bg-[#1a1c1f]'>
				<main className='flex-grow'>
					<section className='relative overflow-hidden'>
						<div className='relative p-5 md:p-0 lg:px-16 xl:px-28'>
							<div className='flex flex-col'>
								<div className='mb-10 mt-2 flex items-center justify-between'>
									<Link
										className='w-fit items-center text-center font-semibold text-black lg:text-base dark:text-white'
										to='/'
									>
										<RasterLogo customClass='h-[4rem] w-[4rem]' />
										<div className=''>Raster</div>
									</Link>
									<div className='flex gap-6'>
										<Link
											className='w-fit items-center text-center font-semibold text-black lg:text-base dark:text-white'
											to='/icons'
										>
											<div className='text-sm'>Icons</div>
										</Link>
										<Link
											className='w-fit items-center text-center font-semibold text-black lg:text-base dark:text-white'
											to='/guide'
										>
											<div className='text-sm'>Guide</div>
										</Link>
									</div>
								</div>
								<Routes location={location}>
									<Route path='/' element={<Home />} />
									<Route path='/icons' element={<Icons />} />
								</Routes>
							</div>
							<footer className='mb-4 border border-dashed border-zinc-300 p-8 dark:border-zinc-700'>
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
					className: 'border bg-zinc-950 border-zinc-800 text-white'
				}}
			/>
		</>
	);
}

export default App;
