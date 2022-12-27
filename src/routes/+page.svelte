<script>
	import Home from './Home.svelte'
	import About from './About.svelte'
	import Work from './Work.svelte'
	import Contact from './Contact.svelte'
	let y
</script>

<svelte:window bind:scrollY="{y}" />
<!-- sections -->
<!-- <div style="transform: translate(0, {-y * speed}px)"> -->
<section class="h-screen" id="home">
	<Home />
</section>
<section class="bg-surface-900 text-primary-100" id="about">
	<About />
</section>
<section id="work">
	<Work />
</section>
<section id="contact">
	<Contact />
</section>

<!-- </div> -->
<style lang="postcss">
	section {
		@apply pl-20 py-8 pr-2 lg:p-20 grid items-center justify-items-center content-center;
		scroll-snap-align: center;
	}
	section:not(:first-of-type) {
		@apply h-full w-full;
	}
</style>
