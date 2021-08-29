<script>
	import Logo from '$lib/assets/logo.svelte';
	import Hero from '$lib/partials/Hero.svelte';
	import Browser from '$lib/partials/Browser.svelte';
	import Demo from '$lib/partials/Demo.svelte';
	import Features from '$lib/partials/Features.svelte';

	import { onMount } from 'svelte';

	let showBrowser = false;

	onMount(() => {
		showBrowser = true;
	});
</script>

<div class="app">
	<div class="header">
		<Logo />
		{#if showBrowser}
			<Hero />
		{/if}
		<div class="window">
			{#if showBrowser}
				<Browser />
			{/if}
		</div>
	</div>
	<Features />
	<Demo />
</div>

<style lang="scss">
	.app {
		@apply box-border;
		@apply w-full;
		.header {
			@apply relative;
			@apply px-6;
			@apply pt-12;
			@apply pb-0;
			@apply bg-bluegray-700;
			@screen md {
				@apply py-12;

				@apply px-12;
			}
		}
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
