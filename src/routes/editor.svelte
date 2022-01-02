<script>
	import { onMount } from 'svelte';
	import getComponent from '$lib/components/storyblok/index';
	import client, { defaultRequestConfig as reqConfig } from '$lib/utils/storyblok';
	async function loadStory() {
		const slug = window.storyblok.getParam('path');
		const response = await client.get('cdn/stories/' + slug, reqConfig);
		story = response.data.story || {};
	}
	export let story = {
		content: {
			component: null
		}
	};
	// https://70764139.me.storyblok.com/
	const loadStoryblokBridge = function (cb) {
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${
			import.meta.env.VITE_STORYBLOK_TOKEN
		}`;
		script.onload = cb;
		document.getElementsByTagName('head')[0].appendChild(script);
	};
	const initStoryblokEvents = () => {
		loadStory();
		let sb = window.storyblok;
		sb.on(['change', 'published'], (payload) => {
			loadStory();
		});
		sb.on('input', (payload) => {
			if (story && payload.story.id === story.id) {
				payload.story.content = sb.addComments(payload.story.content, payload.story.id);
				story = payload.story || {};
			}
		});
		sb.pingEditor(() => {
			if (sb.inEditor) {
				sb.enterEditmode();
			}
		});
	};
	onMount(() => {
		try {
			loadStoryblokBridge(() => initStoryblokEvents());
		} catch (error) {
			console.log(error?.message || error);
		}
	});
</script>

<svelte:head>
	<title>{story.name}</title>
</svelte:head>

{#if story?.content?.component}
	<svelte:component this={getComponent(story.content.component)} blok={story.content} />
{/if}
