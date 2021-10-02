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
		<div>
			<div class="stars">
				{#each [0, 1, 2, 3, 4] as n}
					<Star />
				{/each}
			</div>
			<span>
				{name}
			</span>
		</div>
	</footer>
</article>

<style lang="scss">
	article {
		@apply flex;
		@apply flex-col;
		@screen md {
			@apply items-center;
			@apply justify-between;
			@apply h-full;
		}
	}
	header {
		@apply h-full;
		@apply flex;
		@apply items-center;
	}
	footer {
		@apply flex;
		@apply ml-4;
		@screen md {
			@apply -ml-8;
		}
	}
	p {
		@apply text-bluegray-500;
		@apply italic;
		@apply mb-5;
		@screen md {
			@apply text-center;
		}
	}
	img {
		@apply rounded-full;
		@apply h-10;
		@apply w-10;
		@apply shadow-bluegray-600-md;
		@apply mr-4;

		@screen md {
			@apply mr-2;
		}
	}
	span {
		@apply text-sm;
		@apply text-bluegray-400;
		@apply tracking-wide;
	}
	.stars {
		@apply flex;
		@apply items-center;
	}
</style>
