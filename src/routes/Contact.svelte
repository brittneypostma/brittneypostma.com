
<div class="container lg:pb-96">
  <h2 class="text-center">Contact Me</h2>
	<div id="envelope" class="envelope">
		<svg
			id="flap"
			class="flap"
			height="45%"
			width="100%"
			viewBox="0 0 100 100"
			preserveAspectRatio="none">
			<polygon points="0,0 100,0 50,100"></polygon>
		</svg>

		<form
			class="form text-white"
			name="contact"
			method="POST"
			action="/#contact"
			Content-Type="application/x-www-form-urlencoded"
			netlify
			netlify-honeypot="bot-field">
			<label for="form-name" id="form-name">
				<input type="hidden" name="form-name" value="contact" />
			</label>
			<label for="name" id="name">
				First Name
				<input class="text" type="text" name="name" placeholder="Brittney Postma" required />
			</label>
			<label for="email" id="email">
				Email
				<input
					class="text"
					type="email"
					name="email"
					placeholder="brittney@codingcat.dev"
					required />
			</label>
			<label for="subject" id="subject">
				Subject
				<input class="text" type="text" name="subject" placeholder="Summary of message" />
			</label>
			<label for="message" id="message">
				Message
				<textarea name="message" placeholder="Tell me what you need." required></textarea>
			</label>
			<button type="submit" name="submit" value="Send" class="btn"> Submit </button>
		</form>
	</div>
</div>

<style lang="postcss">
	.container {
    @apply grid justify-items-center gap-16 mx-auto mt-16 md:mt-32;
	}

	.envelope {
		@apply bg-surface-900;
		margin-top: 0;
		position: relative;
		width: 40%;
		height: 600px;
		display: grid;
		justify-items: center;
	}

	.flap {
		transition: 0.5s all linear;
		fill: rgb(var(--color-surface-500));
		animation: open-flap 2s ease-in-out forwards;
		transform-origin: 0 0 0;
	}

	@supports (-ms-ime-align: auto) {
		.flap {
			height: 200px;
		}
	}

	.form {
		letter-spacing: 2px;
		position: absolute;
		top: -10px;
		width: 90%;
		height: 100%;
		display: grid;
		justify-content: stretch;
		align-content: flex-start;
		grid-gap: 1rem;
		font-size: 18px;
	}
	label,
	input {
		@apply w-full;
	}

	input[placeholder],
	[placeholder],
	*[placeholder],
	textarea[placeholder] {
		@apply text-primary-200 font-thin;
	}

	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: rbg(var(--color-primary-200)) !important;
	}

	textarea::-webkit-input-placeholder {
		letter-spacing: 1.5px;
		color: rbg(var(--color-primary-200)) !important;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		@apply border-2 border-accent-400 focus:border-tertiary-500;
		border-radius: 5px;
		line-height: 18px;
		background-color: transparent;
		transition: all 0.3s;
		padding: 10px;
		margin: 0;
		width: 100%;
		box-sizing: border-box;
		outline: 0;
	}

	#email {
		grid-column: 1/-1;
	}

	#message {
		grid-column: 1/-1;
		display: grid;
	}

	textarea {
		border-radius: 5px;
		height: 100px;
		line-height: 125%;
		resize: vertical;
		margin: 0;
		vertical-align: top;
	}

	@keyframes open-flap {
		0% {
			transform: rotateX(0deg);
		}
		50% {
			transform: rotateX(120deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg);
			opacity: 0.2;
		}
	}

	@media only screen and (max-width: 1024px) {
		.envelope {
			width: 100%;
		}
	}

	@media only screen and (min-width: 1024px) {
		.envelope {
			width: 70%;
		}
	}
</style>
