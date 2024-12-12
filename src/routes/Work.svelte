<script>
	import sirens from '$lib/images/work/sirens-logo.png'
	import corgi from '$lib/images/work/corgi.png'
	import logs from '$lib/images/work/logs-logo.png'
	import ztm from '$lib/images/work/ztm-logo.png'
	import codingCat from '$lib/images/work/coding-cat-logo.png'
</script>

<h2 class="mt-8 md:mt-16 mb-20 lg:mb-32 text-center">My Work</h2>
<div class="container">
	<a href="https://sveltesirens.dev" class="bubble">
		<img src="{sirens}" alt="Svelte Sirens logo" class="logos" />
		<h3 class="title">Svelte Sirens</h3>
		<p class="text">
			I am the founder of the Svelte Sirens, a Svelte Society for women and non-binary people.
		</p>
	</a>
	<a href="https://academy.zerotomastery.io/courses/?affcode=441520_gjue7n-1" class="bubble">
		<img src="{ztm}" alt="ZTM Academy" class="logos" />
		<h3 class="title">ZTM Academy</h3>
		<p class="text">I am a mentor and previous workshop instructor at Zero to Mastery Academy.</p>
	</a>
	<a href="https://www.redbubble.com/people/bDesigned/shop" class="bubble">
		<img src="{corgi}" alt="Party Corgi Star" class="logos" id="corgi" />
		<h3 class="title">RedBubble Store</h3>
		<p class="text">
			I have a store on RedBubble for Party Corgi and other content created in Figma.
		</p>
	</a>
</div>

<style lang="postcss">
	.container {
		margin-inline: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		place-content: center;
		place-items: center;
	}
	.bubble > p {
		@apply text-surface-900 max-w-['300px'] text-center font-normal text-sm mt-6 md:mt-0 md:text-lg;
	}
	.bubble {
		@apply px-8 border-b-0 text-surface-900 after:hover:w-0 hover:text-surface-900 w-[220px] h-[220px] md:w-[350px] md:h-[350px];
		background: radial-gradient(rgba(255, 255, 255, 0.401), rgb(255 255 255 / 0.5));
		z-index: 10;
		position: relative;
		display: grid;
		place-items: center;
		place-content: center;
		border-radius: 100%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		-webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
			inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
		-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
		box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
		transition: all 400ms cubic-bezier(0.47, 2.64, 0.41, 0.8);
    display: grid;
    gap: 1rem;
	}
	.bubble:hover {
		transform: scale(1.1);
	}
	.title {
		@apply hidden md:block text-xl md:text-3xl;
		text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
	}
	.logos {
		width: 75px;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		filter: drop-shadow(-4px 8px 0.15rem rgba(0, 0, 0, 0.25));
	}
</style>
