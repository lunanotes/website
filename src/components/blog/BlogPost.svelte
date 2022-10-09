<script>
  import dayjs from "@/utils/dayjs";

  export let post = {};

  function getDateFromNow() {
    const date = new Date(post.frontmatter.pubDate);
    return dayjs(date).fromNow();
  }

  $: dateFromNow = getDateFromNow();
</script>

<div class="py-8 flex flex-wrap md:flex-nowrap">
  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
    {#if post.frontmatter.category}
      <span class="font-semibold title-font text-gray-700">
        {post.frontmatter.category}
      </span>
    {/if}

    <span class="mt-1 text-gray-500 text-sm"> {dateFromNow}</span>
  </div>
  <div class="md:flex-grow">
    <a href={post.url}>
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
        {post.frontmatter.title}
      </h2>
    </a>

    <p class="leading-relaxed">
      {post.frontmatter.description}
    </p>
    <a class="text-indigo-500 inline-flex items-center mt-4" href={post.url}>
      Learn More
    </a>
  </div>
</div>
