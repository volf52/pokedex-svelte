<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { PokeData } from 'src/global';

	export const load: Load = async ({ page }) => {
		const id = page.params.id;

		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

		const res = await fetch(url);
		const data: PokeData = await res.json();

		return { props: { data } };
	};
</script>

<script lang="ts">
	export let data: PokeData;
	const type = data.types?.[0].type.name || '';
</script>

<svelte:head>
	<title>{data.name} details</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase text-red-500">{data.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{data.height}</strong> | Weight:
		<strong>{data.weight}</strong>
	</p>
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<img class="w-full" src={data.sprites.front_default} alt={data.name} />
	</div>
</div>
