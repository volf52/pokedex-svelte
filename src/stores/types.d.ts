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
