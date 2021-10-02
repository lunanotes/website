<script>
	import { mixpanel } from '$lib/utils/mixpanel';
	import { onMount } from 'svelte';
	import YoutubePlayer from 'youtube-player';

	export let videoId;
	let player;

	function onPlayerStateChange(event) {
		const playerStatus = event.data;

		if (playerStatus == -1) {
			mixpanel.track('video started!');
			mixpanel.time_event('video buffered!');
		} else if (playerStatus == 0) {
			mixpanel.track('video finish!');
		} else if (playerStatus == 1) {
			mixpanel.track('playback started!');
			mixpanel.time_event('video buffered!');
			mixpanel.time_event('video finish!');
		} else if (playerStatus == 2) {
			const timestamp = player.getCurrentTime();
			mixpanel.track('playback paused!', { timestamp });
		} else if (playerStatus == 3) {
			mixpanel.track('video buffered!');
		} else if (playerStatus == 5) {
		}
	}

	onMount(() => {
		player = YoutubePlayer(player);
		player.on('stateChange', onPlayerStateChange);
		player.cueVideoById(videoId);
	});
</script>

<div id="youtube-player" bind:this={player} />
