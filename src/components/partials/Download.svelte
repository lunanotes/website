<script>
  import { fly } from "svelte/transition";
  import i18n from "@/utils/i18n";
  import Download from "@/assets/download.svelte";

  export let cta = false;
</script>

<article>
  <a
    in:fly={{ y: 50, duration: 400, delay: 600 }}
    data-splitbee-event="Webstore"
    data-splitbee-event-type={cta ? "cta" : "hero"}
    href="https://chrome.google.com/webstore/detail/lunanotes-notas-en-youtub/oehoffnnkgcdacmbkhmlbjedinpampak?utm_source=landing&utm_medium={cta
      ? 'cta'
      : 'hero'}&utm_campaign=click"
    class="download {cta ? 'cta' : 'hero'}"
  >
    <Download />
    {i18n("hero.button.text")}
  </a>
  <span class="description" in:fly={{ y: 50, duration: 400, delay: 900 }}>
    {i18n("hero.button.helper")}
  </span>
</article>

<style lang="scss">
  article {
    @apply w-full;
    @apply text-center;
    @screen md {
      @apply w-auto;
    }
  }

  a.download {
    @apply bg-amber-400;
    @apply flex;
    @apply gap-3;
    @apply pl-6;
    @apply pr-8;
    @apply py-3;

    @apply items-center;
    @apply justify-center;

    @apply text-amber-900;
    @apply tracking-widest;
    @apply font-semibold;
    @apply rounded-md;

    @apply transition-all;
    @apply duration-200;
    @apply transform;

    @apply mb-2;

    @apply ring;
    @apply ring-offset-white;
    &.cta {
      @apply ring-offset-slate-100;
    }
    @apply ring-transparent;
    &:hover:not(:active) {
      @apply ring-amber-300;
      @apply ring-offset-4;
    }
    &:active {
      @apply scale-95;
    }
  }

  .description {
    @apply text-slate-400;
    @apply tracking-wide;
    font-family: "Indie Flower", cursive;
    @apply text-lg;
    @apply font-semibold;
    @screen md {
      @apply font-medium;
    }
  }
</style>
