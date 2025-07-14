<script>
	import { list } from '$lib/data/description'

	let selected = ''
	let subtitle = 'developer'

	function updateSelected(e, title, text) {
		const target = e.target.innerText
		if (target.toLowerCase() === title.toLowerCase()) {
			selected = text
			subtitle = title
		}
	}
</script>

<article class="gap-6 grid p-8 h-full">
  <section class="items-start content-start gap-8 grid h-full">
    <h2 class="text-white">About Me</h2>
		<nav class="grid md:grid-cols-3 bg-primary-900">
			{#each list as { title, text }}
				<button
					on:click="{event => updateSelected(event, title, text)}"
					class="p-2 lg:px-8 lg:py-4 border-2 border-primary-400 hover:border-tertiary-400 font-bold transition-colors"
					class:selected="{title === subtitle}"
					>{title.toUpperCase()}
				</button>
			{/each}
		</nav>
		<section class="overflow-y-auto text-2xl">
			{#if selected}
				<h3 class="mb-4 font-sans text-3xl">{subtitle.toUpperCase()}</h3>
				{@html selected}
			{:else}
				<h3 class="mb-4 font-sans text-3xl">{list[0].title.toUpperCase()}</h3>
				{@html list[0].text}
			{/if}
		</section>
	</section>
</article>

<style lang="postcss">
	.selected {
		@apply bg-primary-400 border-accent-400 text-accent-900;
	}
</style>
