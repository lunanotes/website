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
			colors: {
				amber: colors.amber,
				bluegray: colors.blueGray,
				truegray: colors.trueGray,
				coolgray: colors.coolGray,
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
