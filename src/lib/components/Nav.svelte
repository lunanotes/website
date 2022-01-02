<script>
	import { page } from '$app/stores';
	export let stories = [];

	function isActive(story) {
		if (story.full_slug === 'index' && !$page?.params?.slug) {
			return 'active';
		}

		if (story.full_slug === $page?.params?.slug) {
			return 'active';
		}

		return '';
	}
</script>

<nav>
	{#key $page?.params?.slug}
		{#each stories as story}
			<a href={story.full_slug === 'index' ? '/' : story.full_slug} class={isActive(story)}>
				{story.name}
			</a>
		{/each}
	{/key}
</nav>

<style lang="scss">
	nav {
		@apply flex;
		@apply gap-8;
		a {
			@apply font-medium;
			@apply text-lg;
			@apply text-slate-600;

			@apply transition-all;
			@apply duration-200;
			@apply transform;

			@apply underline;
			@apply underline-offset-4;

			@apply decoration-2;
			@apply decoration-transparent;
			&.active,
			&:hover {
				@apply decoration-2;
				@apply decoration-amber-300;
			}

			&:hover {
				@apply text-slate-800;
			}
		}
	}
</style>
