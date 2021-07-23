<script>
	import Logo from '$lib/assets/logo.svelte';
	import Browser from '$lib/partials/Browser.svelte';
</script>

<div class="app">
	<Logo />

	<div class="window">
		<Browser />
	</div>
</div>

<style lang="scss">
	.app {
		@apply box-border;
		@apply bg-bluegray-700;
		@apply w-full;
		@apply h-screen;
		@apply p-12;
		:global(svg) {
			@apply h-12;
		}

		.window {
			@apply max-w-3xl;
			@apply mx-auto;
			@apply my-10;
		}
	}
</style>
