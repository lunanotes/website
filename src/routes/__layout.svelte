<script>
	import { mixpanel } from '$lib/utils/mixpanel';
	import { dev } from '$app/env';
	import BreakpointHelper from '$lib/utils/BreakpointHelper.svelte';

	import { register, init, getLocaleFromNavigator } from 'svelte-intl-precompile';
	import { onMount } from 'svelte';

	register('en', () => import('../locales/en.js'));
	register('es', () => import('../locales/es.js'));

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});

	onMount(() => {
		mixpanel.track('page view');
	});
</script>

<div class="layout">
	{#if dev}
		<BreakpointHelper />
	{/if}
	<slot />
</div>

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
