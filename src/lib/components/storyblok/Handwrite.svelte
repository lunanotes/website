<script>
	import { fly } from 'svelte/transition';
	export let blok;
</script>

<span class="handwrite" in:fly={{ y: 50, duration: 400, delay: 900 }}>
	{blok.text}
</span>

<style lang="scss">
	.handwrite {
		@apply text-slate-400;
		@apply tracking-wide;
		font-family: 'Indie Flower', cursive;
		@apply text-lg;
		@apply font-semibold;
		@screen md {
			@apply font-medium;
		}
	}
</style>
