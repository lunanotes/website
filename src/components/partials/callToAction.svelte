<script>
  import Download from "@/components/partials/Download.svelte";
  import i18n from "@/utils/i18n";
</script>

<section>
  <h2>{i18n("cta.title")}</h2>
  <p>{i18n("cta.description")}</p>

  <Download campaign="cta" />
</section>

<style lang="scss">
  section {
    @apply bg-slate-100;
    @apply pt-6;
    @apply pb-4;
    @apply px-8;
    @apply text-center;
    @apply flex;
    @apply flex-col;
    @apply items-center;
    @screen md {
      @apply pt-10;
      @apply pb-8;
    }
  }

  h2 {
    color: #334155;
    @apply text-3xl;
    @apply font-bold;
    @apply mb-2;
  }

  p {
    @apply text-slate-600;
    @apply text-lg;
    @apply mb-8;
  }
</style>
