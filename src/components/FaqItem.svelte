<script>
  export let question;
</script>

<section class="faq-item">
  <h3>{question}</h3>
  <div class="faq-answer">
    <slot />
  </div>
</section>

<style lang="scss">
  .faq-item {
    @apply bg-white;
    @apply border;
    @apply border-solid;
    @apply border-slate-300;
    @apply shadow-sm;
    @apply rounded-lg;
    @apply px-7;
    @apply py-6;
    @apply cursor-pointer;
    @apply transition-all;
    @apply transform;
    &:hover {
      @apply shadow-md;
      @apply -translate-y-2;
    }
  }
  h3 {
    @apply text-slate-600;
    @apply text-lg;
    @apply font-semibold;
    @apply mb-2;
  }
  .faq-answer {
    @apply text-sm;
    @apply text-slate-500;
    @apply leading-relaxed;
    :global(a) {
      @apply text-blue-400;
      &:hover {
        @apply underline;
      }
    }
  }
</style>
