const plugin = require('tailwindcss/plugin');

function hexToRgb(hex) {
	const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function (m, r, g, b) {
		return r + r + g + g + b + b;
	});

	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				red: parseInt(result[1], 16),
				green: parseInt(result[2], 16),
				blue: parseInt(result[3], 16)
		  }
		: null;
}

function makeShadow(name, rgb) {
	const obj = {};

	const slicedName = name.includes('DEFAULT') ? name.slice(0, name.indexOf('-DEFAULT')) : name;
	const nameWithDash = slicedName ? `${slicedName}-` : '';

	obj[`.shadow-${nameWithDash}xs`] = {
		boxShadow: `0 0 0 1px rgba(${rgb}, 0.05)`
	};
	obj[`.shadow-${nameWithDash}sm`] = {
		boxShadow: `0 1px 2px 0 rgba(${rgb}, 0.05)`
	};
	obj[`.shadow-${nameWithDash}md`] = {
		boxShadow: `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`
	};
	obj[`.shadow-${nameWithDash}lg`] = {
		boxShadow: `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`
	};
	obj[`.shadow-${nameWithDash}xl`] = {
		boxShadow: `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`
	};
	obj[`.shadow-${nameWithDash}2xl`] = {
		boxShadow: `0 25px 50px -12px rgba(${rgb}, 0.25)`
	};
	obj[`.shadow-${nameWithDash}3xl`] = {
		boxShadow: `0 0 8px 0 rgba(${rgb}, 0.5)`
	};
	obj[`.shadow-${nameWithDash}inner`] = {
		boxShadow: `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`
	};
	return obj;
}

function buildShadowPalette(theme) {
	const coloredShadowPalette = Object.values(
		Object.entries(theme('colors')).reduce((acc, curr) => {
			const [k, v] = curr;
			if (typeof v === 'string' && v !== 'transparent' && v !== 'currentColor') {
				const { red, green, blue } = hexToRgb(v);
				acc[k] = makeShadow(k, `${red}, ${green}, ${blue}`);
			}
			if (typeof v === 'object') {
				Object.entries(v).forEach(([_k, _v]) => {
					const { red, green, blue } = hexToRgb(_v);
					acc[`${k}-${_k}`] = makeShadow(`${k}-${_k}`, `${red}, ${green}, ${blue}`);
				});
			}
			return acc;
		}, {})
	);

	return coloredShadowPalette.reduce((acc, cur) => ({ ...acc, ...cur }), {});
}

module.exports = plugin(function ({ theme, addUtilities, variants }) {
	addUtilities([buildShadowPalette(theme)], {
		variants: [...variants('boxShadow'), 'active']
	});
});
