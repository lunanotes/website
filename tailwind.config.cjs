const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
		}
	},
	variants: {
		extend: {}
	},
	future: {
		purgeLayersByDefault: false,
		removeDeprecatedGapUtilities: true
	}
};
