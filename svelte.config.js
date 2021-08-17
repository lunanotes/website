import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin.js';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [tailwindcss(), autoprefixer()]
		}
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			plugins: [precompileIntl('locales')]
		}
	}
};

export default config;
