<script>
	// import hljs from 'highlight.js'
	// import '$lib/styles/highlight-js.css'
	import '$lib/styles/theme.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.css'
	import { onMount } from 'svelte'

	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Wallpaper from '$lib/components/Wallpaper.svelte'

	let ready = false

	onMount(() => (ready = true))
</script>

<!-- <img src="./bg.png" alt class="bg-img" /> -->
<Header />
<!-- <wallpaper></wallpaper> -->
<Footer />
<main>
	{#if ready}
		<slot />
	{/if}
</main>

<footer></footer>

<!-- <style>
	.bg-img {
		display: none;
	}

	main {
		margin-top: 4rem;
	}
	@media only screen and (min-width: 1024px) {
		.bg-img {
			display: block;
			position: fixed;
			bottom: 0;
			left: 0;
			width: 657px;
			height: 482px;
		}
	}
</style> -->
