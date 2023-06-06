/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		borderRadius: {},
		fontFamily: {
			new: ['SF Pro Text'],
			sans: [
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
			slab: ['Roboto Slab'],
			condensed: ['Roboto Condensed']
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900',
		},
		colors: {
			transparent: 'transparent',
			bg: '#F9F9FF',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000',
			blackMain: '#0F1A33',
			blackBlur: '#192F54',
			blueMain: '#30679A',
			blueBlur: '#C6E0FF',
			bgIcon: '#EAF0F5',
			greenMain: '#0BCEC3',
			greenBlur: '#BDFFFA',
			grayMain: '#999999',
			grayBlur: '#EAEAEA',
			gray: '#cccc',
			purpleMain: '#714FF7',
			purpleBlur: '#BCBAFF',
			midnight: '#121063',
			metal: '#565584',
			tahiti: '#3ab7bf',
			silver: '#ecebff',
			'bubble-gum': '#ff77e9',
			bermuda: '#78dcca',
			logo: '#365D82',
			menu: '#bae6fd',
			bodyMenu: '#528ABD',
			bodyMain: '#e4e4e7',
			topMenu: '#c0d6ed',
			button: '#468da5',
			red: '#FF0000'
		},
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '669px' },
			// => @media (max-width: 639px) { ... }
			xs: { max: '475px' },
		},
	},

	plugins: [],
};
