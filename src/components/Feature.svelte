<script>
  import i18n from "@/utils/i18n";
  export let icon;
  export let id;
</script>

<article class="feature">
  <figure class="icon">
    <svelte:component this={icon} />
  </figure>
  <div class="feature__body">
    <h3>{i18n(`feature.${id}.title`)}</h3>
    <p>{i18n(`feature.${id}.description`)}</p>
  </div>
</article>

<style lang="scss">
  @import "../assets/global.scss";

  .feature {
    @apply flex;
    @apply flex-row;
    @apply cursor-pointer;
    @apply h-full;

    @apply px-4;
    @apply py-4;
    @apply rounded-2xl;

    @include animation;
    @apply transform;
    @apply border-2;
    @apply border-transparent;
    &:hover {
      @apply border-amber-400;
      @apply bg-amber-50;
      h3 {
        @apply text-amber-800;
      }
      p {
        @apply text-amber-500;
      }
      .icon {
        @apply shadow-none;
      }
    }
  }

  .icon {
    @apply flex;
    @apply items-center;
    @apply bg-amber-400;
    @apply w-14;
    @apply h-14;
    @apply p-3;
    @apply rounded-xl;
    @apply shadow-amber-700;
    @apply shadow-md;

    @include animation;
    &:global(svg) {
      @apply w-auto;
    }
  }
  .feature__body {
    @apply flex-1;
    @apply px-5;
  }

  h3 {
    @apply font-semibold;
    @apply text-slate-700;
    @apply text-xl;
    @apply tracking-wider;

    @include animation;
    @screen md {
      @apply leading-relaxed;
    }
  }

  p {
    @apply text-white;
    @apply tracking-wide;
    @apply font-normal;
    @apply text-lg;
    @apply text-slate-400;

    @include animation;
    @screen md {
      @apply text-base;
    }
  }
</style>
