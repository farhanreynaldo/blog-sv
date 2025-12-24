<script>
	export function reveal(node, threshold = 0.5) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.dispatchEvent(new CustomEvent('intersect'));
					}
				});
			},
			{ threshold }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}

	let activeStep = 1;

	const steps = [
		{ id: 1, color: '#ff5f6d', text: 'Phase 1: The Beginning' },
		{ id: 2, color: '#ffc371', text: 'Phase 2: The Transition' },
		{ id: 3, color: '#2193b0', text: 'Phase 3: The Conclusion' }
	];
</script>

<div class="container">
	<div class="background-visual" style="background-color: {steps[activeStep - 1].color}">
		{activeStep}
	</div>

	<div class="foreground-text">
		{#each steps as step}
			<section
				class="step-card"
				class:inactive={activeStep !== step.id}
				use:reveal={0.5}
				on:intersect={() => (activeStep = step.id)}
			>
				<h2>{step.text}</h2>
				<p>
					As this text enters the middle of the viewport, the background on the left will update its
					color and state reactively.
				</p>
			</section>
		{/each}
	</div>
</div>

<div class="footer">
	<h1>Footer Content</h1>
</div>

<style>
	.container {
		display: flex;
		position: relative;
	}

	/* The Background: Stays put while you scroll */
	.background-visual {
		position: sticky;
		top: 0;
		height: 100vh;
		width: 50%; /* Takes up half the screen */
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.8s ease;
		color: white;
		font-size: 5rem;
	}

	/* The Foreground: Scrolls normally */
	.foreground-text {
		width: 50%;
	}

	.step-card {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 10%;
		border-bottom: 1px solid #eee;
	}

	.step-card h2 {
		font-size: 2.5rem;
		transition: opacity 0.3s;
	}

	.inactive {
		opacity: 0.2;
	}

	.footer {
		height: 100vh;
		background: #333;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
