<script>
	import Hamburger from '$lib/images/hamburger.svg'
	export let open = false
</script>

<input
	type="checkbox"
	id="nav-check"
	class="hidden"
	bind:checked="{open}"
	on:click="{() => (open = !open)}" />

<div class="flex nav-btn item">
	<label for="nav-check">
		<img src="{Hamburger}" alt="nav menu button" class="cursor-pointer lg:hidden" />
	</label>
</div>
