<script>
	export let width = 350
	export let height = 60
</script>

<div class="relative wrapper">
	<div class="relative z-10">
		<slot />
	</div>
	<!-- border -->
	<div class="svg-wrapper" style="{`top: ${height / 2}px; height: ${height}; width: ${width}`}">
		<svg height="{height}" width="{width}" xmlns="http://www.w3.org/2000/svg">
			<rect class="shape" height="{height}" width="{width}"></rect>
		</svg>
	</div>
</div>

<style>
	.svg-wrapper {
		left: -4px;
		position: relative;
		transform: translateY(-50%);
		margin: 0 auto;
	}
	.shape {
		@apply stroke-primary-400;
		stroke-dasharray: 140 540;
		stroke-dashoffset: -520;
		stroke-width: 8px;
		fill: transparent;
		border-bottom: 5px solid black;
		transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
	}
	.wrapper:hover .shape {
		stroke-width: 2px;
		stroke-dashoffset: 0;
		stroke-dasharray: 880;
	}
</style>
