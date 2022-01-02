<script>
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/partials/Features.svelte';
	import CallToAction from '$lib/partials/callToAction.svelte';
	import Testimonials from '$lib/partials/Testimonials.svelte';
	import Faq from '$lib/partials/Faq.svelte';
	import FooterSection from '$lib/partials/FooterSection.svelte';

	import { onMount } from 'svelte';

	let showBrowser = false;

	onMount(() => {
		showBrowser = true;
	});
</script>

<div class="app">
	{#if showBrowser}
		<Hero />
		<Testimonials />
	{/if}
	<CallToAction />
	<Features />
	<Faq />
	<FooterSection />
</div>

<style lang="scss">
	.app {
		@apply box-border;
		@apply w-full;
	}
</style>
