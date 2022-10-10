<script>
  import i18n from "@/utils/i18n";

  const currentYear = new Date().getFullYear();
</script>

<footer>
  © {currentYear} - Lunanotes. {i18n("footer.createdBy")}
  <a href="https://twitter.com/jfdelarosa" target="_blank" rel="noreferrer"
    >jfdelarosa</a
  >.
</footer>

<style>
  footer {
    @apply text-slate-500;
    @apply text-sm;
    @apply text-center;
    @apply py-8;
  }

  a {
    @apply text-slate-600;
    @apply font-medium;
  }
</style>
