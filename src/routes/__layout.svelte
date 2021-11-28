<script>
	import { addMessages, init, getLocaleFromNavigator } from 'precompile-intl-runtime';
	import { onMount } from 'svelte';
	import { session } from '$app/stores';
	import { dev } from '$app/env';

	import splitbee from '@splitbee/web';
	import BreakpointHelper from '$lib/utils/BreakpointHelper.svelte';
	import Metatags from '$lib/utils/Metatags.svelte';

	import en from '../locales/en';
	import es from '../locales/es';

	addMessages('en', en);
	addMessages('es', es);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator($session.acceptedLanguage)
	});

	onMount(() => {
		splitbee.init({
			token: 'Z6ZB9K7VU8CG',
			disableCookie: false
		});
	});
</script>

<div class="layout">
	{#if dev}
		<BreakpointHelper />
	{/if}
	<slot />
</div>

<Metatags />

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
