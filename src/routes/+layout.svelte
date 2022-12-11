<script>
	import '$lib/styles/index.css'
	// import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.css'
	// import { onMount } from 'svelte'

	import Beach from '$lib/components/Beach.svelte'
	import Waves from '$lib/components/Waves.svelte'
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Header from '$lib/components/Header.svelte'
	import Lights from '$lib/components/Lights.svelte'
	import Stars from '$lib/components/Stars.svelte'
</script>

<Stars />
<Lights />
<Header />
<Sidebar />
<main class="z-40 relative">
	<slot />
</main>
<!-- parallax -->
<div class="fixed w-full z-40 bottom-0">
	<Waves />
	<div class="beach fixed bottom-0 right-0 text-surface-900">
		<Beach height="{'40vh'}" />
	</div>
</div>

<style lang="postcss">
	main {
		scroll-snap-type: both mandatory;
	}
</style>
