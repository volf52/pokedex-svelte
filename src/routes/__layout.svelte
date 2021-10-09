<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="p-8 max-w-6xl mx-auto" id="container">
	<Header />
	<slot />
</div>

<footer />

<style>
</style>
