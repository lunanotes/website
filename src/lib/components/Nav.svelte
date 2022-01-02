<script>
	export let segment;
	export let stories = [];
</script>

<nav>
	{#each stories as story}
		<a href={story.full_slug} class={story.full_slug === segment ? 'selected' : ''}>
			{story.name}
		</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		@apply flex;
		@apply gap-8;
		a {
			@apply font-medium;
			@apply text-lg;
			@apply text-slate-700;
		}
	}
</style>
