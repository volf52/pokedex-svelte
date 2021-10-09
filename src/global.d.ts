/// <reference types="@sveltejs/kit" />

type UrlString = string;

export interface PokeApiResponse {
	count: number;
	next?: UrlString;
	previous?: UrlString;
	results: PokeApiResult[];
}

export interface PokeApiResult {
	name: string;
	url: UrlString;
}

export interface PokeLoaded {
	name: string;
	img: UrlString;
	id: number;
}

export interface PokeData {
	name: string;
	weight: number;
	height: number;
	sprites: {
		front_default: UrlString;
		back_default: UrlString;
	};
	id: number;
	types: {
		slot: string;
		type: {
			name: string;
			url: string;
		};
	}[];
}
