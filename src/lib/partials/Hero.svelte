<script>
	import Logo from '$lib/assets/logo.svelte';
	import Download from '$lib/partials/Download.svelte';
	import Demo from '$lib/partials/Demo.svelte';

	import { t } from 'svelte-intl-precompile';
	import { fly } from 'svelte/transition';
</script>

<header class="cont">
	<section>
		<div class="logo">
			<Logo />
		</div>

		<h1 in:fly={{ y: 50, duration: 400 }}>
			{$t('hero.title')}
		</h1>
		<p in:fly={{ y: 50, duration: 400, delay: 300 }}>
			{$t('hero.description')}
		</p>
		<Download />
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

	p {
		@apply text-coolgray-500;
		@apply text-left;
		@apply mb-10;
		@apply font-normal;
		@apply text-lg;
		@apply leading-relaxed;
	}
</style>
