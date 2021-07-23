<div class="video-container">
  <div class="video">
    <div class="video__bar">
      <div class="video__bar-time" />
    </div>
  </div>

  <div class="title">¡Bienvenid@ a LunaNotes!</div>
</div>

<style lang="scss">
  .video-container {
    @apply w-7/12;
  }

  .video {
    @apply bg-truegray-800;
    @apply w-full;
    @apply h-72;
    @apply relative;
    &__bar {
      @apply absolute;
      @apply bottom-6;
      @apply inset-x-4;
      @apply bg-truegray-200;
      &-time {
        @apply h-0.5;
        @apply bg-red-600;
        @apply w-1/3;
      }
    }
  }
  .title {
    @apply font-medium;
    @apply text-base;
    @apply pt-2;
    @apply pl-1;
  }
</style>
