<script>
	import Beach from '$lib/components/Beach.svelte'
	import Waves from '$lib/components/Waves.svelte'
	import Home from './Home.svelte'
	import About from './About.svelte'
	import Work from './Work.svelte'
	import Contact from './Contact.svelte'
</script>

<!-- parallax -->
<div class="fixed w-full z-40 bottom-0">
	<Waves />
	<div class="beach fixed bottom-0 right-0 text-surface-900">
		<Beach height="{'40vh'}" />
	</div>
</div>

<!-- sections -->
<section class="h-screen">
	<Home />
</section>
<section class="bg-primary-900 bg-opacity-70 text-primary-100" id="about">
	<About />
</section>
<section id="work">
	<Work />
</section>
<section id="contact">
	<Contact />
</section>

<style lang="postcss">
	.beach {
		filter: drop-shadow(-4px -8px 8px rgba(3, 3, 3, 0.25));
	}
	section:not(:first-of-type) {
		@apply h-full pl-20 p-8 lg:p-20;
		scroll-snap-align: center;
	}
</style>
