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
</script>

<div class="w-auto">
	<h1>Brittney Postma</h1>
	<h2 class="font-sans text-2xl">
		I am a <span class="bg-accent-400 bg-opacity-50 px-2">{changingText[idx]}</span>.
	</h2>
	<section class="flex gap-6 sm:justify-between mt-8">
		<Links />
	</section>
</div>
