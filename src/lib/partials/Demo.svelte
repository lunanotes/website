<section>
	<h1>Demo</h1>
	<div class="videoWrapper">
		<iframe
			class="demo"
			src="https://www.youtube.com/embed/4YuA5cTFtAw"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</section>

<style lang="scss">
	h1 {
		@apply font-bold;
		@apply text-4xl;
		@apply text-bluegray-700;
		@apply text-center;
		@apply mb-12;
	}
	section {
		@apply container;
		@apply mx-auto;
		@apply py-20;
		@apply px-12;
		@screen md {
			@apply px-24;
		}
	}

	.videoWrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
	}
	.videoWrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
