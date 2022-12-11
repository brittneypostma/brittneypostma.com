<script>
	import { onMount } from 'svelte'

	import { changingTitles } from '$lib/data/description'

	let idx = 0

	onMount(() => {
		setInterval(() => {
			idx++
			if (idx === changingTitles.length && changingTitles) {
				idx = 0
			}
		}, 1000)
	})
	import Links from '$lib/components/Links.svelte'
	import Brittney from '$lib/images/brittney-no-bg.png'
	import Border from '$lib/components/Border.svelte'
</script>

<div class="w-auto relative top-40">
	<img
		src="{Brittney}"
		alt="Brittney Postma"
		class="w-1/2 mx-auto absolute -top-36 right-0 lg:w-3/4 lg:-top-60" />
	<div class="border-2 border-accent-400 p-4 h-52 relative top-12"></div>
	<div class="relative -top-52 p-4 grid gap-6">
		<Border>
			<h1 class="relative top-12 -mb-2">Brittney Postma</h1>
		</Border>
		<h2 class="font-sans text-2xl">
			I am a <span class="bg-accent-400 bg-opacity-50 px-2">{changingTitles[idx]}</span>.
		</h2>
		<section class="flex gap-6 sm:justify-between mt-4 text-primary-400">
			<Links />
		</section>
	</div>
</div>
