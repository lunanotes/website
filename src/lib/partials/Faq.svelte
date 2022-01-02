<!-- <script>
	import FaqItem from '$lib/components/FaqItem.svelte';
</script> -->

<section id="faq">
	<h2>titulo</h2>
	<div class="faq-list">
		{#each [1, 2, 3, 4] as i}
			<div>FAQ item</div>
			<!-- <FaqItem question={$t(`faq.question.${i}`)}>
				{@html $t(`faq.answer.${i}`)}
			</FaqItem> -->
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		@apply bg-slate-100;
		@apply p-8;
		@screen lg {
			@apply px-0;
			@apply py-20;
		}
	}

	h2 {
		@apply text-slate-600;
		@apply text-center;
		@apply text-2xl;
		@apply font-bold;
		@apply mb-10;
	}

	.faq-list {
		@apply mx-auto;
		@apply flex;
		@apply flex-col;
		@apply gap-4;

		@screen lg {
			@apply w-1/2;
		}
	}
</style>
