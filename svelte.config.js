import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `@import 'src/lib/global.scss';`
		},
		postcss: {
			plugins: [tailwindcss(), autoprefixer()]
		}
	}),

	kit: {
		ssr: true,
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
	}
};

export default config;
