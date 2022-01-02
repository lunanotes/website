<script>
	import { getClasses } from '$lib/utils/classList';
	import getComponent from './index';
	export let blok;

	$: classes = getClasses(blok);
</script>

<section class="flex {classes}">
	<!-- style="background: {blok.background}; flex-direction: {blok.flex_direction}; align-items: {blok.align_items};" -->
	{#each blok.columns as blok}
		<div class="column">
			<svelte:component this={getComponent(blok.component)} {blok} />
		</div>
	{/each}
</section>
