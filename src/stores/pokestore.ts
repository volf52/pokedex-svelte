import type { PokeApiResponse, PokeLoaded } from 'src/global';
import { writable } from 'svelte/store';

const POKEURL = 'https://pokeapi.co/api/v2/pokemon?limit=100';

export const PokeStore = writable<PokeLoaded[]>([]);

export const fetchPokemons = async (): Promise<PokeLoaded[]> => {
	const res = await fetch(POKEURL);
	const data: PokeApiResponse = await res.json();
	const loadedPokemon = data.results.map((d, idx) => {
		const id = idx + 1;
		return {
			name: d.name,
			id,
			img: `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/${id}.png`
		};
	});

	PokeStore.set(loadedPokemon);

	return loadedPokemon;
};
