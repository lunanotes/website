<script>
	import Testimonial from '$lib/components/Testimonial.svelte';

	const testimonials = [
		{
			avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gi2yLjFSafSZDX9zteY7AKXyS7sStJECXHJ-lkBLg',
			name: 'Christopher Flores',
			comment:
				'Perfecta para agregar muchas notas en cada vídeo y saber en que tiempo del vídeo se creo la nota'
		},
		{
			avatar: 'https://lh3.googleusercontent.com/a-/AOh14GhE92ba-pcnpw7CiXp1VtNCyYD9v3iFQgca69Ol',
			name: 'Best Ibitoye Rotimi',
			comment:
				'Love it, simple to use and easy. It auto pauses the video when I start typing, which is cool.'
		},
		{
			avatar: 'https://lh3.googleusercontent.com/a-/AOh14Ghm7gyvrpc9nC2krEdpaUkuf2kTPviNJiM_EQO0ng',
			name: '吉永智晃',
			comment: 'This is exactly what I wanted. thank you.'
		}
	];
</script>

<section>
	{#each testimonials as testimonial}
		<Testimonial {...testimonial} />
	{/each}
</section>

<style>
	section {
		@apply grid grid-flow-col grid-cols-3;
		@apply container;
		@apply gap-20;
		@apply mx-auto;
		@apply pt-12;
		@apply pb-28;
		@apply items-end;
	}
</style>
