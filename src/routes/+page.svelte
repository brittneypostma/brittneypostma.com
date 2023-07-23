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
<section class="h-screen w-full relative" id="home">
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

<style lang="postcss">
  section {
    @apply pl-20 pr-4 max:pr-0 mb-8;
  }
</style>
