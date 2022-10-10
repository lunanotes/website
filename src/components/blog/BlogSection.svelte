<script>
  import FeaturedPost from "@/components/blog/FeaturedPost.svelte";

  export let posts = [];
</script>

<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2
        class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      >
        From our Blog
      </h2>
    </div>
    <div class="grid gap-8 lg:grid-cols-2">
      {#each posts as post}
        <FeaturedPost {post} />
      {/each}
    </div>
  </div>
</section>
