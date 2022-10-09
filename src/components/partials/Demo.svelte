<script>
  import Browser from "./Browser.svelte";
  import VideoDemo from "./Video.svelte";
</script>

<Browser>
  <div class="videoWrapper">
    <VideoDemo videoId="B85WHD9bKvc" />
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
