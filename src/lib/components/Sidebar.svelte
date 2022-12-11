<script>
	import twitter from '$lib/images/twitter.png'
	import linkedin from '$lib/images/linkedin.png'
	import github from '$lib/images/github.png'
	import dev from '$lib/images/dev.png'
	import youtube from '$lib/images/youtube.png'
	import sirens from '$lib/images/sirens.png'
	import codingCat from '$lib/images/coding-cat.png'
	import logs from '$lib/images/logs.png'
</script>

<aside class="grid h-full gap-4 left-0 top-[83.5px] fixed z-50 content-center p-2">
	<a href="https://twitter.com/BrittneyPostma" rel="noopener noreferrer" target="_blank">
		<img src="{twitter}" alt="opens Brittney Postma's twitter page in new tab" />
	</a>
	<a
		href="https://www.linkedin.com/in/brittney-postma-868928178/"
		rel="noopener noreferrer"
		target="_blank">
		<img src="{linkedin}" alt="opens Brittney Postma's linkedin in new tab" />
	</a>
	<a href="https://github.com/brittneypostma" rel="noopener noreferrer" target="_blank">
		<img src="{github}" alt="opens Brittney Postma's GitHub in new tab" />
	</a>
	<a href="https://dev.to/brittneypostma" rel="noopener noreferrer" target="_blank">
		<img src="{dev}" alt="opens Brittney Postma's dev.to profile in new tab" />
	</a>
	<a href="https://www.youtube.com/@codingcatdev" rel="noopener noreferrer" target="_blank">
		<img src="{youtube}" alt="opens codingcat.dev YouTube channel in new tab" />
	</a>
	<a href="https://sveltesirens.dev" rel="noopener noreferrer" target="_blank">
		<img src="{sirens}" alt="opens sveltesirens.dev site in new tab" />
	</a>
	<a href="https://codingcat.dev/" rel="noreferrer" target="_blank">
		<img src="{codingCat}" alt="opens codingcat.dev site in new tab" />
	</a>
	<a href="https://theconsolelogs.com/" rel="noreferrer" target="_blank">
		<img src="{logs}" alt="opens theconsolelogs.com site in new tab" />
	</a>
</aside>

<style>
	img {
		width: 40px;
	}
	img:hover {
		animation: wiggle 0.5s ease-in-out;
	}

	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(0deg);
		}
		10%,
		30% {
			transform: rotate(-20deg);
		}
		50%,
		70%,
		90% {
			transform: rotate(-10deg);
		}
		20%,
		40%,
		60%,
		80% {
			transform: rotate(10deg);
		}
	}
</style>
