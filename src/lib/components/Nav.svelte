<script>
	import { slide } from 'svelte/transition'
	import Hamburger from './Hamburger.svelte'
	import Links from './Links.svelte'
	export let sidebar = false
	let outerWidth
</script>

<svelte:window bind:outerWidth="{outerWidth}" />

<div class="mt-4 relative z-50 ">
	<Hamburger bind:open="{sidebar}" />

	{#if sidebar}
		<nav
			transition:slide="{{ duration: 500, y: -1000 }}"
			class="bg-primary-700 absolute right-0 grid gap-2 justify-center content-center rounded-lg p-4 mobile-menu">
			<Links />
		</nav>
	{:else if outerWidth > 1024}
		<nav class="hidden lg:flex gap-4">
			<Links />
		</nav>
	{/if}
</div>

<style lang="postcss">
	/* #nav-check:checked ~ nav {
		animation: slide 0.3s linear;
	}

	@keyframes slide {
		from {
			opacity: 0;
			top: -200px;
		}
		to {
			opacity: 1;
			top: 50px;
		}
	}

	a {
		display: grid;
		gap: 1rem;
	}

	@media (min-width: 1024px) {
		a {
			color: #e8f4f4;
			text-decoration: none;
			padding: 1rem;
			display: block;
			position: relative;
		}

		a::before {
			content: '';
			position: absolute;
			transition: all 0.3s ease;
			left: 12%;
			bottom: 0;
			top: 40px;
			width: 75%;
			height: 2px;
			background: #e8f4f4;
			transform: scaleX(0);
		}

		a:hover {
			color: #e8f4f4;
		}

		.selected:hover {
			color: #00e0ff;
		}

		a:hover::before,
		.page::before {
			transform: scaleX(1);
		}

		.page::before {
			background: #00e0ff;
		}
	} */
</style>
