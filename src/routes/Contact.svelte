<h1 class="text-center my-12">Contact Me</h1>
<div class="container pb-48" id="contact">
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
			action="/"
			Content-Type="application/x-www-form-urlencoded"
			netlify
			netlify-honeypot="bot-field">
			<label for="form-name" id="form-name">
				<input type="hidden" name="form-name" value="contact" />
			</label>
			<label for="first-name" id="first-name">
				First Name
				<input class="text" type="text" name="first-name" placeholder="Brittney" required />
			</label>
			<label for="last-name" id="last-name">
				Last Name
				<input class="text" type="text" name="last-name" placeholder="Postma" required />
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
	<div class="thanks">Thanks</div>
</div>

<style lang="postcss">
	input[type='text']:focus,
	input[type='email']:focus,
	textarea:focus {
		box-shadow: 0 0 0 3px rbg(var(--color-primary-400));
	}
	.thanks {
		display: none;
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 75%;
		margin: 0 auto;
	}

	.envelope {
		@apply bg-primary-900;
		margin-top: 0;
		position: relative;
		width: 40%;
		height: 500px;
		display: grid;
		justify-items: center;
	}

	.flap {
		transition: 0.5s all linear;
		fill: whitesmoke;
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
		grid-gap: 1em;
		grid-template-columns: 1fr 1fr;
		margin: 0;
		padding: 0;
		font-size: 18px;
	}

	input[placeholder],
	[placeholder],
	*[placeholder] {
		letter-spacing: 1.5px;
		color: rbg(var(--color-primary-400)) !important;
	}

	textarea[placeholder] {
		letter-spacing: 1.5px;
		padding: 10px;
		color: rbg(var(--color-primary-400)) !important;
	}

	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		letter-spacing: 1.5px;
		color: rbg(var(--color-primary-400)) !important;
	}

	textarea::-webkit-input-placeholder {
		letter-spacing: 1.5px;
		color: rbg(var(--color-primary-400)) !important;
	}

	#first-name {
		grid-column: 1/1;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		@apply border-2 border-primary-400 focus:border-tertiary-500;
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

	#subject {
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

	#submit {
		grid-column: 1/-1;
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

	@media only screen and (max-width: 600px) {
		.envelope {
			width: 100%;
		}
	}

	@media only screen and (min-width: 601px) and (max-width: 1000px) {
		.envelope {
			width: 75%;
		}
	}

	@media only screen and (min-width: 1001px) {
		.envelope {
			width: 80%;
		}
	}
</style>
