<script>
  import Download from "@/components/partials/Download.svelte";

  const items = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Blog",
      url: "/blog",
    },
  ];
</script>

<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
  {#each items as item}
    <a href={item.url} title={item.label} class="mr-5 hover:text-gray-900">
      {item.label}
    </a>
  {/each}
</nav>

<Download small campaign="menu" />
