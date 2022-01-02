<script>
	import getComponent from './index';
	export let blok;
</script>

<div>
	{#if blok.body}
		{#each blok.body as blok}
			<svelte:component this={getComponent(blok.component)} {blok} />
		{/each}
	{:else}
		<p>No content</p>
	{/if}
</div>
