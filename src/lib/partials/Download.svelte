<script>
	import { fly } from 'svelte/transition';
	import { t } from 'svelte-intl-precompile';

	import Download from '$lib/assets/download.svelte';
</script>

<article>
	<a
		in:fly={{ y: 50, duration: 250, delay: 300 }}
		href="https://chrome.google.com/webstore/detail/lunanotes-notas-en-youtub/oehoffnnkgcdacmbkhmlbjedinpampak"
		class="download"
		target="_download"
	>
		<Download />
		{$t('hero.button.text')}
	</a>
	<span class="description" in:fly={{ y: 50, duration: 250, delay: 450 }}>
		{$t('hero.button.helper')}
	</span>
</article>

<style lang="scss">
	article {
		@apply w-full;
		@apply text-center;
		@screen md {
			@apply w-auto;
		}
	}

	a.download {
		@apply bg-amber-400;
		@apply flex;
		@apply gap-3;
		@apply pl-6;
		@apply pr-8;
		@apply py-3;

		@apply items-center;
		@apply justify-center;

		@apply text-amber-900;
		@apply tracking-widest;
		@apply font-semibold;
		@apply rounded-md;

		@apply transition-all;
		@apply duration-200;
		@apply transform;

		@apply mb-2;

		@apply ring;
		@apply ring-offset-white;
		@apply ring-transparent;
		&:hover:not(:active) {
			@apply ring-amber-300;
			@apply ring-offset-4;
		}
		&:active {
			@apply scale-95;
		}
	}

	.description {
		@apply text-bluegray-400;
		@apply tracking-wide;
		font-family: 'Indie Flower', cursive;
		@apply text-lg;
		@apply font-semibold;
		@screen md {
			@apply text-base;
		}
	}
</style>
