<script>
  import BlogPost from "@/components/blog/BlogPost.svelte";

  export let posts = [];
</script>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      {#each posts as post}
        <BlogPost {post} />
      {/each}
    </div>
  </div>
</section>
