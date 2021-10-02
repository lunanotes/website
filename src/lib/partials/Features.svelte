<script>
	import ScreenshotIcon from '$lib/assets/icons/Screenshot.svelte';
	import NoteIcon from '$lib/assets/icons/Note.svelte';
	import CloudIcon from '$lib/assets/icons/Cloud.svelte';
	import CustomizeIcon from '$lib/assets/icons/Customize.svelte';

	import Feature from '$lib/components/Feature.svelte';

	const features = [
		{
			id: 'create',
			icon: NoteIcon
		},
		{
			id: 'customize',
			icon: CustomizeIcon
		},
		{
			id: 'annotate',
			icon: ScreenshotIcon
		},
		{
			id: 'sync',
			icon: CloudIcon
		}
	];
</script>

<section class="features">
	<div class="features-grid">
		{#each features as feat}
			<Feature {...feat} />
		{/each}
	</div>
</section>

<style lang="scss">
	.features {
		@apply mx-auto;
		@screen lg {
			@apply w-3/4;
		}
		@screen xl {
			@apply w-3/4;
		}
	}

	.features-grid {
		@apply container;
		@apply px-10;
		@apply mx-auto;
		@apply grid;
		@apply items-center;
		@apply justify-center;
		@apply gap-x-20;
		@apply gap-y-8;
		@apply flex-col;
		@apply py-20;
		@screen md {
			@apply grid-cols-2;
			@apply flex-row;
			@apply py-20;

			@apply gap-x-20;
			@apply gap-y-16;
		}
	}
</style>
