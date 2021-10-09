<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PokemonCard from '$lib/PokemonCard.svelte';
	import { PokeStore, fetchPokemons } from '../stores/pokestore';
	fetchPokemons();
</script>

<svelte:head>
	<title>Pokedex Svelte</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome Pokedex Index</h1>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $PokeStore as pokeman}
		<PokemonCard {pokeman} />
	{/each}
</div>

<style>
	h1 {
		color: red;
	}
</style>
