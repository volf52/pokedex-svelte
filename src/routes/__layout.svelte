<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
