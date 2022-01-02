<script>
	import getComponent from '$lib/components/storyblok/index';
	import Title from '$lib/components/storyblok/Title.svelte';
	import { editable } from '$lib/utils/directives';
	import Logo from '$lib/assets/logo.svelte';
	import Demo from '$lib/partials/Demo.svelte';

	import { fly } from 'svelte/transition';

	export let blok;
</script>

<header class="cont" use:editable={blok}>
	<section>
		<div class="logo">
			<Logo />
		</div>

		{#if blok.body}
			{#each blok.body as blok}
				<div class="column">
					<svelte:component this={getComponent(blok.component)} {blok} />
				</div>
			{/each}
		{/if}
	</section>
	<Demo />
</header>

<style lang="scss">
	.logo {
		@apply mt-6;
		@apply mb-auto;
	}
	header {
		@apply flex;
		@apply flex-col;
		@apply justify-between;
		@apply gap-4;
		@apply px-6;
		@apply mx-auto;
		@apply container;
		@screen lg {
			@apply flex-row;
			@apply gap-20;
		}
	}

	section {
		@apply flex-1;
		@apply flex flex-col justify-center items-start;

		@screen xl {
			@apply w-5/12;
			@apply mb-12;
		}
		@screen lg {
			@apply text-left;
			@apply w-1/2;
		}
		@screen sm {
			@apply text-center;
		}
	}
</style>
