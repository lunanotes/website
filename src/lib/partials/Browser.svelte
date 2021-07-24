<script>
	import { fly } from 'svelte/transition';

	import NoteList from './NoteList.svelte';
	import Video from './Video.svelte';
</script>

<div class="window" in:fly={{ y: 50, duration: 700 }}>
	<div class="topbar">
		<span class="dot red" />
		<span class="dot yellow" />
		<span class="dot green" />
	</div>
	<div class="bar">
		<div class="searchbar">youtube.com</div>
	</div>
	<div class="body">
		<Video />
		<NoteList />
	</div>
</div>

<style lang="scss">
	.window {
		@apply rounded-lg;
		@apply shadow-bluegray-900-xl;
	}
	.topbar {
		background: #e8eaed;
		@apply w-full;
		@apply h-11;
		@apply rounded-t-lg;
		@apply flex;
		@apply overflow-hidden;
		@apply justify-start;
		@apply items-center;
		@apply space-x-1;
		@apply px-2;
		@apply box-border;
	}

	.bar {
		@apply bg-white;
		@apply py-2;
		@apply px-4;
	}
	.searchbar {
		background: #f1f3f4;
		@apply rounded-full;
		@apply py-1;
		@apply px-3;
	}

	.body {
		@apply border;
		@apply border-solid;
		@apply border-bluegray-200;

		@apply relative;
		@apply w-full;
		@apply h-96;
		@apply py-6;
		@apply px-6;
		@apply gap-4;
		@apply box-border;
		@apply flex;
		@apply overflow-hidden;
		@apply rounded-b-lg;
		background: #f9f9f9;
	}

	.dot {
		@apply relative;
		@apply w-3;
		@apply h-3;
		@apply rounded-full;
		&.red {
			@apply bg-red-400;
		}
		&.yellow {
			@apply bg-yellow-400;
		}
		&.green {
			@apply bg-green-400;
		}
	}
</style>
