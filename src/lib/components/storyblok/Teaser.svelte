<script>
	import { editable } from '$lib/utils/directives';
	export let blok;
</script>

<div use:editable={blok} class="teaser">
	{blok.headline}
</div>
