<script>
	import { fly } from 'svelte/transition';
	import { editable } from '$lib/utils/directives';
	import Download from '$lib/assets/download.svelte';

	export let blok;
</script>

{#if blok.link}
	<a
		in:fly={{ y: 50, duration: 400, delay: 600 }}
		use:editable={blok}
		data-splitbee-event={blok.event}
		data-splitbee-event-type={blok.event_type}
		href={blok.link.url}
		class="download"
	>
		<Download />
		{blok.label}
	</a>
{:else}
	<button
		in:fly={{ y: 50, duration: 400, delay: 600 }}
		use:editable={blok}
		data-splitbee-event={blok.event}
		data-splitbee-event-type={blok.event_type}
		class="download"
	>
		<Download />
		{blok.label}
	</button>
{/if}

<style lang="scss">
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
		&.cta {
			@apply ring-offset-slate-100;
		}
		@apply ring-transparent;
		&:hover:not(:active) {
			@apply ring-amber-300;
			@apply ring-offset-4;
		}
		&:active {
			@apply scale-95;
		}
	}
</style>
