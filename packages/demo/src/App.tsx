import { Toaster } from 'sonner';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';

function App() {
	return (
		<>
			<Routes location={location}>
				<Route path='/' element={<Home />} />
			</Routes>
			<Toaster
				toastOptions={{
					className: 'border bg-zinc-950 border-zinc-800 text-white'
				}}
			/>
		</>
	);
}

export default App;
