<script>
	import Browser from './Browser.svelte';
</script>

<Browser>
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
</Browser>

<style lang="scss">
	section {
		@apply flex;
		@apply items-center;
		@apply justify-center;
		@apply py-20;
		@apply z-30;
		@apply hidden;
		@screen md {
			@apply flex;
		}
	}
	.videoWrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
		width: 100%;
	}
	.videoWrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
