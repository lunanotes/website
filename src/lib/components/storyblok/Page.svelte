<script>
	import getComponent from './index';
	export let blok;
</script>

<div>
	{#each blok.body as blok}
		<svelte:component this={getComponent(blok.component)} {blok} />
	{/each}
</div>
