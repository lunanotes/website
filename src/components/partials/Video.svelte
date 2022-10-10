<script>
  import splitbee from "@splitbee/web";
  import { onMount } from "svelte";
  import LiteYouTube from "svelte-lite-youtube-embed";

  export let videoId;
  let player;
  let videoStartEventTracked = false;
  let videoEndEventTracked = false;

  // function onPlayerStateChange(event) {
  //   const playerStatus = event.data;

  //   if (playerStatus == 0) {
  //     if (!videoEndEventTracked) {
  //       videoEndEventTracked = true;
  //       splitbee.track("Video end");
  //     }
  //   } else if (playerStatus == 1) {
  //     if (!videoStartEventTracked) {
  //       videoStartEventTracked = true;
  //       splitbee.track("Video star");
  //     }
  //   }
  // }

  // onMount(() => {
  //   player = YoutubePlayer(player);

  //   player.on("stateChange", onPlayerStateChange);
  //   player.cueVideoById(videoId);
  // });
</script>

<LiteYouTube videoid="ogfYd705cRs" videoTitle="LunaNotes - Notas en YouTube" />
