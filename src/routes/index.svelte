<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';
	import type { PokeApiResponse, PokeLoaded } from 'src/global';

	export const load: Load = async ({ page }) => {
		const id = page.params.id;

		const POKEURL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

		const res = await fetch(POKEURL);
		const data: PokeApiResponse = await res.json();

		const pokemonData: PokeLoaded[] = data.results.map((d, idx) => {
			const id = idx + 1;
			return {
				name: d.name,
				id,
				img: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${id}.png`
			};
		});

		return { props: { pokemonData } };
	};
</script>

<script lang="ts">
	import PokemonCard from '$lib/PokemonCard.svelte';

	export let pokemonData: PokeLoaded[];

	let searchTerm = '';
	let filteredPokemon: PokeLoaded[] = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemonData.filter((p) => p.name.includes(searchTerm.toLowerCase()));
		} else {
			filteredPokemon = [...pokemonData];
		}
	}
</script>

<svelte:head>
	<title>Pokedex Svelte</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome Pokedex Index</h1>

<input
	type="text"
	name="search"
	id="pokesearch"
	placeholder="Search..."
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemonCard {pokeman} />
	{/each}
</div>

<style>
	h1 {
		color: red;
	}
</style>
