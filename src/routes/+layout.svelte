<script>
	import '$lib/styles/index.css'
	// import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.css'
	// import { onMount } from 'svelte'

	import Sidebar from '$lib/components/Sidebar.svelte'
	import Header from '$lib/components/Header.svelte'
	import Lights from '$lib/components/Lights.svelte'
	import Stars from '$lib/components/Stars.svelte'
	import Wallpaper from '$lib/components/Wallpaper.svelte'

	let ready = false

	// onMount(() => (ready = true))
</script>

<Stars />
<Lights />
<!-- <img src="./bg.png" alt class="bg-img" /> -->
<Header />
<Sidebar />
<!-- <wallpaper></wallpaper> -->
<main>
	<slot />
</main>

<style lang="postcss">
	main {
		scroll-snap-type: both mandatory;
	}
</style>
