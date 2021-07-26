<script>
	import { dev } from '$app/env';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import BreakpointHelper from '$lib/utils/BreakpointHelper.svelte';
</script>

<GoogleAnalytics properties={['G-PC441RFTC1']} />
<div class="layout">
	{#if dev}
		<BreakpointHelper />
	{/if}
	<slot />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
