<script>
	import Browser from './Browser.svelte';
	import VideoDemo from './Video.svelte';
</script>

<Browser>
	<div class="videoWrapper">
		<VideoDemo videoId="1ApLxfo_qnw" />
		<!-- <iframe
			class="demo"
			src="https://www.youtube.com/embed/4YuA5cTFtAw?enablejsapi=1"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			on:click={track}
		/> -->
	</div>
</Browser>

<style lang="scss">
	.videoWrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
		width: 100%;
	}
	.videoWrapper :global(iframe) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
