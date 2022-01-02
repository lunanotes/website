<script>
	import { fly } from 'svelte/transition';
	export let blok;
</script>

<p in:fly={{ y: 50, duration: 400, delay: 300 }}>
	{blok.text}
</p>

<style>
	p {
		@apply text-gray-500;
		@apply text-left;
		@apply mb-10;
		@apply font-normal;
		@apply text-lg;
		@apply leading-relaxed;
	}
</style>
