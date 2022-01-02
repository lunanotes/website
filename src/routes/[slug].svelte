<script context="module">
	import client, { defaultRequestConfig as reqConfig } from '$lib/utils/storyblok';

	export async function load({ params }) {
		try {
			const { slug } = params;
			const response = await client.get('cdn/stories/' + slug, reqConfig);

			return {
				props: {
					story: response.data.story || {}
				}
			};
		} catch (error) {
			console.log(error);
			return {
				error,
				status: 500
			};
		}
	}
</script>

<script>
	import { browser } from '$app/env';
	import getComponent from '$lib/components/storyblok/index';
	export let story = {};
</script>

<svelte:head>
	<title>{story.name}</title>
</svelte:head>

{#if browser && story?.content?.component}
	<svelte:component this={getComponent(story.content.component)} blok={story.content} />
{/if}
