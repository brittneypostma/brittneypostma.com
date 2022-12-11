<script>
	import Brittney from '$lib/components/Brittney.svelte'
	import Nav from '$lib/components/Nav.svelte'
	import Border from '$lib/components/Border.svelte'

	let open = false
</script>

<header
	class="bg-surface-900 fixed top-0 z-50 bg-opacity-70
   shadow-inset w-full flex justify-between items-center p-4">
	<Border width="{160}">
		<a href="/" class="after:hover:w-0 fixed top-4">
			<span class="sr-only">Go to home page</span>
			<Brittney width="150" />
		</a>
	</Border>
	<Nav bind:sidebar="{open}" />
</header>
