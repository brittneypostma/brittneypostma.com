<script>
	import { slide } from 'svelte/transition'
	import Hamburger from './Hamburger.svelte'
	import Links from './Links.svelte'
	export let menu = false
	let innerWidth
</script>

<svelte:window bind:innerWidth />

<div class="mt-4 relative z-50 ">
	<Hamburger bind:open="{menu}" />

	{#if menu}
		<nav
			transition:slide="{{ duration: 500, y: -1000 }}"
			class="bg-primary-700 absolute right-0 grid gap-2 justify-center content-center rounded-lg p-4 mobile-menu text-white">
			<Links topNav bind:open="{menu}" />
		</nav>
	{:else if innerWidth > 1024}
		<nav class="hidden lg:flex gap-4 pr-4">
			<Links topNav />
		</nav>
	{/if}
</div>
