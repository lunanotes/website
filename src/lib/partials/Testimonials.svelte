<script>
	import Testimonial from '$lib/components/Testimonial.svelte';
	import { onMount } from 'svelte';

	const testimonials = [
		{
			id: 1,
			avatar: 'https://lh3.googleusercontent.com/a-/AOh14Gi2yLjFSafSZDX9zteY7AKXyS7sStJECXHJ-lkBLg',
			name: 'Christopher Flores',
			comment:
				'Perfecta para agregar muchas notas en cada vídeo y saber en que tiempo del vídeo se creo la nota'
		},
		{
			id: 2,
			avatar: 'https://lh3.googleusercontent.com/a-/AOh14GhE92ba-pcnpw7CiXp1VtNCyYD9v3iFQgca69Ol',
			name: 'Best Ibitoye Rotimi',
			comment:
				'Love it, simple to use and easy. It auto pauses the video when I start typing, which is cool.'
		},
		{
			id: 3,
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

<style lang="scss">
	section {
		@apply grid;
		@apply container;
		@apply gap-12;
		@apply mx-auto;
		@apply pt-28;
		@apply p-14;
		@apply pb-20;

		@apply items-end;

		@screen md {
			@apply pt-32;

			@apply gap-20;
			@apply grid-flow-col grid-cols-3;
		}
	}
</style>
