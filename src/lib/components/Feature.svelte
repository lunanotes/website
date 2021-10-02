<script>
	export let icon;
	export let title;
	export let description;
</script>

<article class="feature">
	<figure class="icon">
		<svelte:component this={icon} />
	</figure>
	<div class="feature__body">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</article>

<style lang="scss">
	.feature {
		@apply flex;
		@apply flex-row;
	}

	.icon {
		@apply flex;
		@apply items-center;
		@apply bg-amber-400;
		@apply w-14;
		@apply h-14;
		@apply p-3;
		@apply rounded-xl;
		@apply shadow-amber-700-lg;
		&:global(svg) {
			@apply w-auto;
		}
	}
	.feature__body {
		@apply flex-1;
		@apply px-4;
	}

	h3 {
		@apply font-semibold;
		@apply text-coolgray-700;
		@apply text-2xl;
		@apply tracking-wider;
		@apply leading-none;
		@apply mb-2;
	}

	p {
		@apply text-white;
		@apply tracking-wide;
		@apply font-normal;
		@apply text-xl;
		@apply text-bluegray-500;
		@screen md {
			@apply text-base;
		}
	}
</style>
