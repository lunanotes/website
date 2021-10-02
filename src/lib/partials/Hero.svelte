<script>
	import Logo from '$lib/assets/logo.svelte';
	import { fly } from 'svelte/transition';
	import { t } from 'svelte-intl-precompile';
	import Download from '../assets/download.svelte';
</script>

<header class="cont">
	<section>
		<div class="logo">
			<Logo />
		</div>

		<h1 in:fly={{ y: 50, duration: 250 }}>The best note taking tool for YouTube.</h1>
		<p in:fly={{ y: 50, duration: 250, delay: 150 }}>
			Stop wasting your time on YouTube. LunaNotes lets you take notes while watching any video.
			Never miss a note again!
		</p>
		<div>
			<a
				in:fly={{ y: 50, duration: 250, delay: 300 }}
				href="https://chrome.google.com/webstore/detail/lunanotes-notas-en-youtub/oehoffnnkgcdacmbkhmlbjedinpampak"
				class="download"
			>
				<Download />
				{$t('hero.downloadNow')}
			</a>
			<span in:fly={{ y: 50, duration: 250, delay: 450 }}>¡Es completamente gratis!</span>
		</div>
	</section>
	<figure>
		<img src="/discovery.png" alt="" />
	</figure>
</header>

<style lang="scss">
	.cont {
		@apply mx-auto;
		@apply container;
	}
	.logo {
		@apply mt-6;
		@apply mb-auto;
	}
	header {
		@apply flex;
		@apply flex-col;
		@apply justify-between;
		@apply gap-6;
		@screen lg {
			@apply flex-row;
		}
		@screen md {
			@apply gap-16;
		}
		@screen sm {
			@apply gap-10;
		}
	}

	section {
		@apply flex-1;
		@apply flex flex-col justify-center items-start;
		@screen xl {
			@apply w-5/12;
		}
		@screen lg {
			@apply text-left;
			@apply w-1/2;
		}
		@screen sm {
			@apply text-center;
		}
	}

	figure {
		@apply flex-1;
		@apply h-48;
		@screen xl {
			@apply w-1/2;
		}
		@screen lg {
			@apply h-auto;
		}
	}

	h1 {
		color: #334155;
		@apply text-4xl;
		@apply text-left;
		@apply mb-8;
		@apply font-bold;
		@apply tracking-wide;
	}

	p {
		@apply text-coolgray-600;
		@apply text-left;
		@apply mb-6;
		@apply font-normal;
		@apply text-lg;
	}
	a.download {
		@apply bg-amber-400;
		@apply flex;
		@apply gap-4;
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
		@apply ring-white;
		&:hover:not(:active) {
			@apply ring-amber-300;
			@apply ring-offset-4;
		}
		&:active {
			@apply scale-95;
		}
	}

	span {
		@apply text-bluegray-400;
		@apply tracking-wide;
		font-family: 'Indie Flower', cursive;
	}
</style>
