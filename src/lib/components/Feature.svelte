<script>
	export let icon;
	export let title;
	export let description;
</script>

<div class="feature">
	<span class="icon">
		<svelte:component this={icon} />
	</span>
	<h3>{title}</h3>
	<p>{description}</p>
</div>

<style lang="scss">
	.feature {
		@apply flex-1;
		@apply flex;
		@apply flex-col;
		@apply items-center;
	}
	span.icon :global(svg) {
		@apply h-20;
		@apply mb-4;
	}

	h3 {
		@apply font-semibold;
		@apply text-yellow-500;
		@apply text-2xl;
		@apply tracking-wider;
		@apply mb-2;
		@apply text-center;
	}

	p {
		@apply text-white;
		@apply tracking-wider;
		@apply text-center;
		@apply text-xl;
		@screen md {
			@apply text-base;
		}
	}
</style>
