/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [require('daisyui')],
	daisyui: {
		themes: false,
	},
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		},
	},
}
