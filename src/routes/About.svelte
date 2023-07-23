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

<article class="grid gap-6 mt-4">
	<h2 class="text-white">About Me</h2>
	<section class="grid gap-8 lg:h-[50vh] content-start items-start ">
		<nav class="grid bg-primary-900 md:grid-cols-5">
			{#each list as { title, text }}
				<button
					on:click="{event => updateSelected(event, title, text)}"
					class="p-2 lg:px-8 lg:py-4 font-bold border-2 border-primary-400  transition-colors hover:border-tertiary-400"
					class:selected="{title === subtitle}"
					>{title.toUpperCase()}
				</button>
			{/each}
		</nav>
		<section class="overflow-y-auto text-2xl">
			{#if selected}
				<h3 class="font-sans text-3xl mb-4">{subtitle.toUpperCase()}</h3>
				{@html selected}
			{:else}
				<h3 class="font-sans text-3xl mb-4">{list[0].title.toUpperCase()}</h3>
				{@html list[0].text}
			{/if}
		</section>
	</section>
</article>

<style lang="postcss">
	.selected {
		@apply bg-primary-400 text-accent-900 border-accent-400;
	}
</style>
