<script>
	import Brittney from '$lib/components/Brittney.svelte'
	import Nav from '$lib/components/Nav.svelte'

	let open = false
</script>

<header
	class="bg-surface-900 fixed top-0 z-50 bg-opacity-70
   shadow-inset w-full flex justify-between items-center p-4">
	<a href="/">
		<span class="sr-only">Go to home page</span>
		<Brittney width="150" />
	</a>
	<Nav bind:sidebar="{open}" />
</header>
