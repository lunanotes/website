<script>
	import { editable } from '$lib/utils/directives';
	import getComponent from '../storyblok/index';
	import StripeProvider from '../stripe/StripeProvider.svelte';
	export let blok;
</script>

<div use:editable={blok} class="flex gap-8 justify-center items-start">
	<StripeProvider>
		{#each blok.plans as blok}
			<svelte:component this={getComponent(blok.component)} {blok} />
		{/each}
	</StripeProvider>
</div>
