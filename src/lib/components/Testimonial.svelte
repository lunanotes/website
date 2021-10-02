<script>
	import Star from '$lib/assets/icons/Star.svelte';

	export let avatar;
	export let comment;
	export let name;
</script>

<article>
	<header>
		<p>
			"{comment}"
		</p>
	</header>
	<footer>
		<img src="{avatar}=s40" alt={name} />
		<div class="stars">
			{#each [0, 1, 2, 3, 4] as n}
				<Star />
			{/each}
		</div>
		<span>
			{name}
		</span>
	</footer>
</article>

<style lang="scss">
	div {
		@apply flex;
	}
	article {
		@apply flex;
		@apply flex-col;
		@apply justify-between;
		@apply items-center;
		@apply h-full;
	}
	header {
		@apply h-full;
		@apply flex;
		@apply items-center;
	}
	footer {
		@apply grid;
		@apply auto-cols-max;
		@apply items-center;
		@apply gap-x-4;
		@apply -ml-8;
	}
	p {
		@apply text-bluegray-500;
		@apply italic;
		@apply col-span-3;
		@apply mb-5;
		@apply text-center;
	}
	img {
		@apply rounded-full;
		@apply row-span-2;
		@apply shadow-bluegray-600-md;
	}
	.stars {
		@apply col-start-2;
	}
	span {
		@apply col-start-2;
		@apply text-sm;
		@apply text-bluegray-400;
		@apply tracking-wide;
	}
</style>
