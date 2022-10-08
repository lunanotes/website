<script>
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	import { editable } from '$lib/utils/directives';
	import getComponent from '../storyblok/index';

	const { getStripe = () => {} } = getContext('stripe');
	const stripe = getStripe();
	export let blok;
	let loading = false;

	async function choosePlan() {
		try {
			if (loading) return;
			loading = true;

			if (blok.price_id) {
				const res = await fetch('/stripe/checkout-session', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ priceId: blok.price_id })
				});
				const { sessionId } = await res.json();
				stripe.redirectToCheckout({
					sessionId
				});
			} else {
				// Free plan
				goto(
					'https://chrome.google.com/webstore/detail/lunanotes-take-notes-on-y/oehoffnnkgcdacmbkhmlbjedinpampak?utm_source=pricing'
				);
			}
		} catch (error) {
			console.log(error?.message || error);
		} finally {
			loading = false;
		}
	}
</script>

<div use:editable={blok} class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
	<p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">{blok.title}</p>
	<p class="text-gray-900 dark:text-white text-3xl font-bold">
		${blok.price}
		<span class="text-gray-300 text-sm"> / month </span>
	</p>
	<p class="text-gray-600 dark:text-gray-100  text-xs mt-4">
		{blok.description}
	</p>
	<ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
		{#each blok.items as blok}
			<svelte:component this={getComponent(blok.component)} {blok} />
		{/each}
	</ul>
	<button
		type="button"
		class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
		disabled={loading}
		on:click={choosePlan}
	>
		Choose plan
	</button>
</div>
