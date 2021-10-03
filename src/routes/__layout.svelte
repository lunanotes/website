<script>
	import { t, addMessages, init, getLocaleFromNavigator } from 'precompile-intl-runtime';
	import { onMount } from 'svelte';
	import { session } from '$app/stores';
	import { dev } from '$app/env';

	import { mixpanel } from '$lib/utils/mixpanel';
	import BreakpointHelper from '$lib/utils/BreakpointHelper.svelte';

	import en from '../locales/en';
	import es from '../locales/es';

	addMessages('en', en);
	addMessages('es', es);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator($session.acceptedLanguage)
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
	<title>{$t('meta.title')}</title>
	<meta name="description" content={$t('meta.description')} />
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
