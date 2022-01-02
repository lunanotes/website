<script context="module">
	import client, { defaultRequestConfig as reqConfig } from '$lib/utils/storyblok';

	export async function load() {
		const response = await client.getAll('cdn/stories', reqConfig);

		let stories =
			response.sort((a, b) => {
				return a.position - b.position;
			}) || [];
		return {
			props: {
				stories
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { dev } from '$app/env';

	import splitbee from '@splitbee/web';
	import Logo from '$lib/assets/logo.svelte';
	import BreakpointHelper from '$lib/utils/BreakpointHelper.svelte';
	import Metatags from '$lib/utils/Metatags.svelte';
	import Nav from '$lib/components/Nav.svelte';

	const token = import.meta.env.VITE_SPLITBEE_TOKEN;

	export let stories = [];
	export let segment;

	onMount(() => {
		splitbee.init({
			token,
			disableCookie: false
		});
	});
</script>

<div class="layout">
	{#if dev}
		<BreakpointHelper />
	{/if}
	<header>
		<div class="logo">
			<Logo />
		</div>
		<Nav {segment} {stories} />
	</header>
	<slot />
</div>

<Metatags />

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	@import url('https://fonts.googleapis.com/css?family=Lato');

	.root {
		max-width: 960px;
		margin: 0 auto;
		font-family: 'Lato', sans-serif;
		margin-top: 120px;
	}

	.teaser {
		text-align: center;
	}

	.grid {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		list-style: none;
		padding: 0;

		max-width: 1200px;
		margin: 0 auto;
	}
	.rebuilding {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		text-align: center;
		background: green;
		padding: 10px;
		color: #fff;
	}

	footer {
		text-align: center;
	}

	.logo {
		@apply mt-6;
		@apply mb-auto;
	}

	header {
		@apply flex;
		@apply justify-between;
		@apply items-end;
		@apply px-6;
		@apply mx-auto;
		@apply container;
	}
</style>
