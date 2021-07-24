<script>
	import Logo from '$lib/assets/logo.svelte';
	import Browser from '$lib/partials/Browser.svelte';
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
		<div class="window">
			{#if showBrowser}
				<Browser />
			{/if}
		</div>
		<div class="bg" />
	</div>
	<Features />
</div>

<style lang="scss">
	.app {
		@apply box-border;
		@apply w-full;
		@apply h-screen;

		:global(svg) {
			@apply h-12;
		}
		.header {
			@apply relative;
			@apply px-12;
			@apply pt-12;
			@apply bg-bluegray-700;
		}
		.window {
			@apply relative;
			@apply max-w-3xl;
			@apply mx-auto;
			@apply mt-10;
			@apply z-30;
		}

		.bg {
			@apply absolute;
			@apply inset-x-0;
			@apply bottom-0;
			@apply h-32;
			@apply bg-bluegray-50;
			@apply z-20;
		}
	}
</style>
