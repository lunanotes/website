<script>
  import { fly } from "svelte/transition";

  export let show = false;
  export let body = "";
</script>

{#if show}
  <div class="note" in:fly={{ y: 50, duration: 250 }}>
    <span class="timeago">Hace unos instantes</span>
    <div class="note__content">
      {@html body}
    </div>
  </div>
{/if}

<style lang="scss">
  .note {
    @apply box-border;
    @apply rounded-md;
    @apply bg-white;
    @apply px-2;
    @apply py-2;
    @apply w-full;

    @apply border;
    @apply border-solid;
    @apply border-slate-200;

    &__content {
      @apply text-slate-700;
      @apply text-xs;
      :global(p) {
        @apply m-0;
      }
    }
  }
  .timeago {
    @apply text-xs;
    @apply mb-0.5;
    @apply inline-block;
    @apply text-slate-400;
  }
</style>
