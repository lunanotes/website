<script>
	import { fly } from 'svelte/transition';
	import Star from '$lib/assets/icons/Star.svelte';

	export let blok;
</script>

<article in:fly={{ y: 20, duration: 200, delay: 900 + 200 * blok.consecutive }}>
	<header>
		<p>
			"{blok.comment}"
		</p>
	</header>
	<footer>
		<img src="{blok.avatar}=s40" alt={blok.name} />
		<div>
			<div class="stars">
				{#each [0, 1, 2, 3, 4] as n}
					<Star />
				{/each}
			</div>
			<span>
				{blok.name}
			</span>
		</div>
	</footer>
</article>

<style lang="scss">
	article {
		@apply flex;
		@apply flex-col;

		@include animation;
		@apply cursor-pointer;
		@apply transform;
		&:hover {
			@apply scale-105;
		}

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
		@apply text-slate-500;
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
		@apply shadow-slate-600;
		@apply mr-4;

		@screen md {
			@apply mr-2;
		}
	}
	span {
		@apply text-sm;
		@apply text-slate-400;
		@apply tracking-wide;
	}
	.stars {
		@apply flex;
		@apply items-center;
	}
</style>
