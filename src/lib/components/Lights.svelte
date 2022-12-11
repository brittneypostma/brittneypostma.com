<div class="lights z-10 fixed">
	<div
		class="light"
		style="--duration: 8; --delay: 9; --x: 2; --y: 0; --scale: 0.08283214196691506">
	</div>
	<div
		class="light"
		style="--duration: 11; --delay: 7; --x: 3; --y: 10; --scale: 0.07685494002891533">
	</div>
	<div
		class="light"
		style="--duration: 11; --delay: 5; --x: 2; --y: 5; --scale: 0.006543291115122663">
	</div>
	<div
		class="light"
		style="--duration: 6; --delay: 5; --x: 0; --y: 3; --scale: 0.0011838720679523851">
	</div>
	<div
		class="light"
		style="--duration: 6; --delay: 9; --x: 5; --y: 3; --scale: 0.06628728051614048">
	</div>
	<div
		class="light"
		style="--duration: 11; --delay: 9; --x: 4; --y: 3; --scale: 0.040537284319934155">
	</div>
	<div
		class="light"
		style="--duration: 6; --delay: 7; --x: 3; --y: 7; --scale: 0.01425436863956595">
	</div>
	<div
		class="light"
		style="--duration: 6; --delay: 10; --x: 5; --y: 0; --scale: 0.06874187344214629">
	</div>
	<div class="light" style="--duration: 9; --delay: 8; --x: 5; --y: 5; --scale: 0.0611786481639349">
	</div>
	<div
		class="light"
		style="--duration: 9; --delay: 4; --x: 3; --y: 8; --scale: 0.08118754492646649">
	</div>
	<div
		class="light"
		style="--duration: 14; --delay: 8; --x: 4; --y: 6; --scale: 0.0038648754988702683">
	</div>
	<div
		class="light"
		style="--duration: 11; --delay: 8; --x: 1; --y: 8; --scale: 0.03491254888237898">
	</div>
	<div
		class="light"
		style="--duration: 10; --delay: 10; --x: 4; --y: 1; --scale: 0.02107289790304743">
	</div>
	<div
		class="light"
		style="--duration: 7; --delay: 10; --x: 3; --y: 8; --scale: 0.02335851748954172">
	</div>
	<div
		class="light"
		style="--duration: 12; --delay: 5; --x: 5; --y: 8; --scale: 0.011228268624419169">
	</div>
	<div
		class="light"
		style="--duration: 9; --delay: 10; --x: 4; --y: 2; --scale: 0.03260829178700646">
	</div>
	<div
		class="light"
		style="--duration: 9; --delay: 5; --x: 1; --y: 10; --scale: 0.010793612667521968">
	</div>
	<div
		class="light"
		style="--duration: 5; --delay: 6; --x: 4; --y: 2; --scale: 0.022855470230858765">
	</div>
	<div
		class="light"
		style="--duration: 13; --delay: 10; --x: 1; --y: 7; --scale: 0.08314586113215364">
	</div>
	<div class="light" style="--duration: 5; --delay: 7; --x: 0; --y: 8; --scale: 0.0911516325689812">
	</div>
	<div
		class="light"
		style="--duration: 10; --delay: 4; --x: 2; --y: 1; --scale: 0.035740435365536574">
	</div>
	<div
		class="light"
		style="--duration: 13; --delay: 7; --x: 0; --y: 2; --scale: 0.07230520974187848">
	</div>
	<div
		class="light"
		style="--duration: 13; --delay: 4; --x: 2; --y: 8; --scale: 0.007167217055471497">
	</div>
	<div
		class="light"
		style="--duration: 7; --delay: 5; --x: 3; --y: 5; --scale: 0.056414502101179466">
	</div>
	<div
		class="light"
		style="--duration: 15; --delay: 5; --x: 4; --y: 2; --scale: 0.06702473356409984">
	</div>
	<div
		class="light"
		style="--duration: 5; --delay: 6; --x: 3; --y: 6; --scale: 0.030993763206990453">
	</div>
	<div
		class="light"
		style="--duration: 15; --delay: 4; --x: 5; --y: 6; --scale: 0.058164165116957614">
	</div>
	<div
		class="light"
		style="--duration: 7; --delay: 10; --x: 1; --y: 8; --scale: 0.07037937867613027">
	</div>
	<div
		class="light"
		style="--duration: 5; --delay: 10; --x: 4; --y: 2; --scale: 0.09256780658420496">
	</div>
	<div
		class="light"
		style="--duration: 10; --delay: 7; --x: 3; --y: 4; --scale: 0.09806647593353879">
	</div>
</div>

<style>
	.lights {
		width: 100%;
		height: 50vh;
		top: -250px;
		display: flex;
		filter: blur(75px);
	}
	.light {
		flex: 1;
		--up: calc(var(--y, 10) * 2vmax);
		--left: calc(var(--x, 2) * 2vmax);
		background-image: linear-gradient(
			90deg,
			transparent,
			rgb(var(--color-primary-400)) 25%,
			transparent,
			rgb(var(--color-warning-600)) 70%,
			transparent,
			rgb(var(--color-accent-400)) 5%,
			transparent
		);
		background-size: 100% 40vmax;
		background-position: center bottom;
		background-repeat: no-repeat;
		transform: translate(var(--left), var(--up)) scale(1);
		animation: shift calc(var(--duration, 5) * 10s) calc(var(--delay, 0) * -10s) infinite ease;
	}
	@media (max-width: 768px) {
		.light {
			--up: calc(var(--y, 10) * 2vmax);
			--left: calc(var(--x, 2) * 2vmax);
		}
	}
	@-moz-keyframes shift {
		50% {
			transform: translate(0, 0) scale(1);
		}
	}
	@-webkit-keyframes shift {
		50% {
			transform: translate(0, 0) scale(1);
		}
	}
	@-o-keyframes shift {
		50% {
			transform: translate(0, 0) scale(1);
		}
	}
	@keyframes shift {
		50% {
			transform: translate(0, 0) scale(1);
		}
	}
	@-moz-keyframes flicker {
		0%,
		50%,
		100% {
			transform: scale(1);
		}
		25% {
			transform: scale(0);
		}
	}
	@-webkit-keyframes flicker {
		0%,
		50%,
		100% {
			transform: scale(1);
		}
		25% {
			transform: scale(0);
		}
	}
	@-o-keyframes flicker {
		0%,
		50%,
		100% {
			transform: scale(1);
		}
		25% {
			transform: scale(0);
		}
	}
	@keyframes flicker {
		0%,
		50%,
		100% {
			transform: scale(1);
		}
		25% {
			transform: scale(0);
		}
	}
</style>
