<script>
	import { onMount } from 'svelte'

	const changingText = ['Developer', 'Designer', 'Teacher', 'Creator', 'Mentor']

	let idx = 0

	onMount(() => {
		setInterval(() => {
			idx++
			if (idx === changingText.length) {
				idx = 0
			}
		}, 1000)
	})
	import Links from '$lib/components/Links.svelte'
	import Brittney from '$lib/images/brittney-no-bg.png'
</script>

<div class="w-auto relative top-40">
	<img
		src="{Brittney}"
		alt="Brittney Postma"
		class="w-1/2 mx-auto absolute -top-36 right-0 lg:w-3/4 lg:-top-60" />
	<div class="border-2 border-accent-400 p-4 h-52 relative top-12"></div>
	<div class="relative -top-52 p-4">
		<div class="relative top-12">
			<h1 class="text">Brittney Postma</h1>
			<!-- border -->
			<div class="svg-wrapper">
				<svg height="60" width="350" xmlns="http://www.w3.org/2000/svg">
					<rect class="shape" height="60" width="350"></rect>
				</svg>
			</div>
		</div>
		<h2 class="font-sans text-2xl">
			I am a <span class="bg-accent-400 bg-opacity-50 px-2">{changingText[idx]}</span>.
		</h2>
		<section class="flex gap-6 sm:justify-between mt-8">
			<Links />
		</section>
	</div>
</div>

<style>
	.svg-wrapper {
		position: relative;
		top: -50px;
		transform: translateY(-50%);
		margin: 0 auto;
		width: 350px;
	}
	.shape {
		@apply stroke-primary-400;
		stroke-dasharray: 140 540;
		stroke-dashoffset: -520;
		stroke-width: 8px;
		fill: transparent;
		border-bottom: 5px solid black;
		transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
	}
	.text {
		position: relative;
		left: 4px;
		top: 6px;
	}
	.svg-wrapper:hover .shape {
		stroke-width: 2px;
		stroke-dashoffset: 0;
		stroke-dasharray: 880;
	}
</style>
