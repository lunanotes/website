<script>
  import Logo from "@/assets/Logo.svelte";
  import Navigation from "@/components/partials/Navigation.svelte";
</script>

<header class="text-gray-600 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a class="flex items-center mb-4 md:mb-0" href="/">
      <span class="ml-3">
        <Logo />
      </span>
    </a>
    <Navigation />
  </div>
</header>

<style lang="scss">
  header {
    @apply flex;
    @apply flex-col;
    @apply justify-between;
    @apply gap-4;
    @apply px-6;
    @apply mx-auto;
    @apply container;
    @screen lg {
      @apply flex-row;
      @apply gap-20;
    }
  }
</style>
