<script>
	import { editable } from '$lib/utils/directives';
	export let blok;
</script>

<div use:editable={blok} class="column feature">
	{blok.name}
</div>
