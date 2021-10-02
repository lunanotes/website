<script>
	import Hero from '$lib/partials/Hero.svelte';
	import Demo from '$lib/partials/Demo.svelte';
	import Features from '$lib/partials/Features.svelte';
	import CallToAction from '$lib/partials/callToAction.svelte';
	import FooterSection from '$lib/partials/FooterSection.svelte';

	import { onMount } from 'svelte';

	let showBrowser = false;

	onMount(() => {
		showBrowser = true;
	});
</script>

<div class="app">
	{#if showBrowser}
		<Hero />
	{/if}
	{#if showBrowser}
		<Demo />
	{/if}
	<CallToAction />
	<Features />
	<FooterSection />
</div>

<style lang="scss">
	.app {
		@apply box-border;
		@apply w-full;
	}
</style>
