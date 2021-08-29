<script>
	import ScreenshotIcon from '$lib/assets/icons/Screenshot.svelte';
	import NoteIcon from '$lib/assets/icons/Note.svelte';
	import CloudIcon from '$lib/assets/icons/Cloud.svelte';
	import CustomizeIcon from '$lib/assets/icons/Customize.svelte';

	import Feature from '$lib/components/Feature.svelte';

	const features = [
		{
			icon: NoteIcon,
			title: 'Crea',
			description: 'Añade notas en cualquier video de YouTube'
		},
		{
			icon: CustomizeIcon,
			title: 'Personaliza',
			description: 'Agrega colores, listas, negritas y otros estilos'
		},
		{
			icon: ScreenshotIcon,
			title: 'Anota',
			description: 'Haz capturas del video y añade anotaciones sobre ella'
		},
		{
			icon: CloudIcon,
			title: 'Respalda',
			description: 'Todas tos notas quedan guardadas en la nube'
		}
	];
</script>

<section class="features">
	<div class="features-grid">
		{#each features as feat}
			<Feature {...feat} />
		{/each}
	</div>
</section>

<style lang="scss">
	.features {
		@apply bg-bluegray-700;
		@apply py-12;
	}

	.features-grid {
		@apply container;
		@apply px-10;
		@apply mx-auto;
		@apply flex;
		@apply items-center;
		@apply justify-center;
		@apply gap-20;
		@apply flex-col;
		@apply pb-20;
		@screen md {
			@apply flex-row;
			@apply py-20;
		}
	}
</style>
