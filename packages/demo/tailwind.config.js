/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary1: '#f54'
			},
			fontFamily: {
				doto: ['Doto', 'sans-serif']
			}
		}
	},
	plugins: []
};
