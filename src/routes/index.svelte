<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { PokeStore, fetchPokemons } from '../stores/pokestore';
	fetchPokemons();
</script>

<svelte:head>
	<title>Pokedex Svelte</title>
</svelte:head>

<section>
	<h1 class="text-4xl text-center my-8 uppercase">Welcome Pokedex Index</h1>

	<ul>
		{#each $PokeStore as pokeman}
			<li>{pokeman.name}</li>
		{/each}
	</ul>
</section>

<style>
	h1 {
		color: red;
	}
</style>
