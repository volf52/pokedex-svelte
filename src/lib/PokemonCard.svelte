<script lang="ts">
	import type { PokeLoaded } from 'src/global';
	import { fade } from 'svelte/transition';

	export let pokeman: PokeLoaded;
</script>

<a
	href={`/pokemon/${pokeman.id}`}
	class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	transition:fade
>
	<h2 class="text-2xl uppercase">{pokeman.id}. {pokeman.name}</h2>
	<img class="h-40 w-40" src={pokeman.img} alt={pokeman.name} />
</a>
