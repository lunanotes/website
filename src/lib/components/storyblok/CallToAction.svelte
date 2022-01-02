<script>
	import { editable } from '$lib/utils/directives';
	export let blok;
</script>

<div use:editable={blok} class="column feature">
	<h1>
		{blok.headline}
	</h1>

	<h2>
		{blok.headline_2}
	</h2>
</div>
