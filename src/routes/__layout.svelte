<script>
	import { dev } from '$app/env';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import BreakpointHelper from '$lib/utils/BreakpointHelper.svelte';

	import { register, init, getLocaleFromNavigator } from 'svelte-intl-precompile';

	register('en', () => import('../locales/en.js'));
	register('es', () => import('../locales/es.js'));

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
</script>

<GoogleAnalytics properties={['G-PC441RFTC1']} />
<div class="layout">
	{#if dev}
		<BreakpointHelper />
	{/if}
	<slot />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
