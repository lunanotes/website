<script>
  import dayjs from "@/utils/dayjs";

  export let post = {};

  function getDateFromNow() {
    const date = new Date(post.frontmatter.pubDate);
    return dayjs(date).fromNow();
  }

  $: dateFromNow = getDateFromNow();
</script>

<article
  class="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
>
  <h2
    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
    <a href={post.url}>{post.frontmatter.title}</a>
  </h2>
  <span class="mb-2 inline-block text-sm text-gray-500">{dateFromNow}</span>

  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
    {post.frontmatter.description}
  </p>
  <div class="mt-auto flex items-center justify-between">
    <div class="flex items-center space-x-4">
      <img
        class="h-7 w-7 rounded-full"
        src="avatar-borderless.webp"
        alt={post.frontmatter.author}
      />
      <span class="font-medium dark:text-white">
        {post.frontmatter.author}
      </span>
    </div>
    <a
      href={post.url}
      class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
    >
      Continue reading
      <svg
        class="ml-2 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </a>
  </div>
</article>
