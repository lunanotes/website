<script>
	import { fly } from 'svelte/transition';
	export let blok;
</script>

{#if blok.level == 1}
	<h1 in:fly={{ y: 50, duration: 400 }}>
		{blok.text}
	</h1>
{:else if blok.level == 2}
	<h2 in:fly={{ y: 50, duration: 400 }}>
		{blok.text}
	</h2>
{:else if blok.level == 3}
	<h3 in:fly={{ y: 50, duration: 400 }}>
		{blok.text}
	</h3>
{/if}

<style>
	h1 {
		color: #334155;
		line-height: 1.3;
		@apply text-4xl;
		@apply text-left;
		@apply mb-4;
		@apply mt-6;
		@apply font-bold;
		@apply tracking-wide;
	}

	h2 {
		color: #334155;
		@apply text-3xl;
		@apply font-bold;
		@apply mb-2;
	}
</style>
