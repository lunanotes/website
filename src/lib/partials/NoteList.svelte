<script>
  import { onMount } from "svelte";

  import Note from "./Note.svelte";

  const items = [
    {
      body: "<p>¡Hola!</p>",
      show: false,
    },
    {
      body: "<p>Gracias por instalar <strong>LunaNotes</strong></p>",
      show: false,
    },
    { body: "hola", show: false },
    { body: "mundo", show: false },
    { body: "prueba :)", show: false },
  ];

  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < items.length) {
        items[i].show = true;
      } else {
        clearInterval(interval);
      }
      i++;
    }, 2000);
  });
</script>

<div class="notes">
  {#each items as item}
    <Note {...item} />
  {/each}
</div>

<style>
  .notes {
    @apply flex;
    @apply flex-col;
    @apply flex-1;
    @apply gap-2;
  }
</style>
