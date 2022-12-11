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

<article class="grid gap-6">
	<h2 class="text-white">About Me</h2>
	<section class="grid grid-cols-2 gap-8 h-[30vh]">
		<nav class="grid bg-primary-900">
			{#each list as { title, text }}
				<button
					on:click="{event => updateSelected(event, title, text)}"
					class="font-bold border-2 border-primary-400  transition-colors hover:bg-surface-900 hover:border-tertiary-400"
					class:selected="{title === subtitle}"
					>{title.toUpperCase()}
				</button>
			{/each}
		</nav>
		<section class="overflow-y-auto text-2xl">
			{#if selected}
				<h3 class="font-sans text-3xl mb-4">{subtitle.toUpperCase()}</h3>
				<p>{selected}</p>
			{:else}
				<h3 class="font-sans text-3xl mb-4">{list[0].title.toUpperCase()}</h3>
				<p>{list[0].text}</p>
			{/if}
		</section>
	</section>
</article>

<style lang="postcss">
	.selected {
		@apply bg-primary-400 text-accent-900 hover:text-white border-accent-400;
	}
</style>
