const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
	purge: {
		content: ['./src/**/*.svelte'],
		enabled: production
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				amber: colors.amber,
				bluegray: colors.blueGray,
				truegray: colors.trueGray,
				coolgray: colors.coolGray,
				indigo: colors.indigo,
				sky: colors.sky
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('./src/lib/utils/shadowPallete.plugin.cjs'), require('@tailwindcss/forms')],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true
	}
};
