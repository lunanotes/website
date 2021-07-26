<script>
	import { fly } from 'svelte/transition';
	import Download from '../assets/download.svelte';
</script>

<header>
	<h1 in:fly={{ y: 50, duration: 250 }}>Notas en YouTube</h1>

	<a
		in:fly={{ y: 50, duration: 250, delay: 150 }}
		href="https://chrome.google.com/webstore/detail/lunanotes-notas-en-youtub/oehoffnnkgcdacmbkhmlbjedinpampak"
		class="download"
	>
		<Download />
		¡Descarga ahora!
	</a>
	<span in:fly={{ y: 50, duration: 250, delay: 300 }}>Es completamente gratis</span>
</header>

<style lang="scss">
	header {
		@apply flex;
		@apply flex-col;
		@apply items-center;
	}

	h1 {
		@apply text-white;
		@apply text-4xl;
		@apply mb-8;
		@apply font-semibold;
		@apply tracking-wide;
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

		@apply text-amber-800;
		@apply tracking-widest;
		@apply font-semibold;
		@apply rounded-md;

		@apply transition-all;
		@apply duration-200;
		@apply transform;

		@apply mb-2;

		@apply ring;
		@apply ring-offset-bluegray-700;
		@apply ring-bluegray-700;
		&:hover:not(:active) {
			@apply ring-amber-50;
			@apply ring-offset-4;
		}
		&:active {
			@apply scale-95;
		}
	}

	span {
		@apply text-bluegray-400;
		@apply text-sm;
		@apply tracking-wide;
	}
</style>
