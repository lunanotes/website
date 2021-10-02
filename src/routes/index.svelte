<script>
	import Hero from '$lib/partials/Hero.svelte';
	import Browser from '$lib/partials/Browser.svelte';
	import Demo from '$lib/partials/Demo.svelte';
	import Features from '$lib/partials/Features.svelte';
	import CallToAction from '$lib/partials/callToAction.svelte';

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
	<div class="window">
		{#if showBrowser}
			<Browser />
		{/if}
	</div>
	<Features />
	<CallToAction />
	<Demo />
</div>

<style lang="scss">
	.app {
		@apply box-border;
		@apply w-full;

		.window {
			@apply relative;
			@apply max-w-3xl;
			@apply mx-auto;
			@apply mt-10;
			@apply z-30;
			@apply hidden;
			@screen md {
				@apply block;
			}
		}
	}
</style>
