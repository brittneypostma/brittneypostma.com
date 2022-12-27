<script>
	export let open = false
	export let topNav = false
</script>

{#if topNav}
	<a href="#home" class="text-inherit" on:click="{() => (open = !open)}">home</a>
{/if}
<a href="#about" class="text-inherit" on:click="{() => (open = !open)}"> about </a>

<a href="#work" class="text-inherit" on:click="{() => (open = !open)}"> work </a>

<a href="#contact" class="text-inherit" on:click="{() => (open = !open)}"> contact </a>
