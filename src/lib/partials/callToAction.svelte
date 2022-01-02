<script>
	import Download from '$lib/partials/Download.svelte';
</script>

<section>
	<h2>title</h2>
	<p>description</p>

	<Download cta={true} />
</section>

<style lang="scss">
	section {
		@apply bg-slate-100;
		@apply pt-6;
		@apply pb-4;
		@apply px-8;
		@apply text-center;
		@apply flex;
		@apply flex-col;
		@apply items-center;
		@screen md {
			@apply pt-10;
			@apply pb-8;
		}
	}

	h2 {
		color: #334155;
		@apply text-3xl;
		@apply font-bold;
		@apply mb-2;
	}

	p {
		@apply text-slate-500;
		@apply text-lg;
		@apply mb-8;
	}
</style>
