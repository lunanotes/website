<script>
  import Browser from "./Browser.svelte";
  import LiteYouTube from "svelte-lite-youtube-embed";
</script>

<Browser>
  <div class="videoWrapper">
    <LiteYouTube
      videoId="B85WHD9bKvc"
      videoTitle="LunaNotes - Notas en YouTube"
    />
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
