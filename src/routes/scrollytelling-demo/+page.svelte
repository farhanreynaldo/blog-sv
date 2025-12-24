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

	let activeStep = 0;
	const steps = [
		{ title: 'The Mountains', color: '#2c3e50', img: '🏔️' },
		{ title: 'The Forest', color: '#27ae60', img: '🌲' },
		{ title: 'The Ocean', color: '#2980b9', img: '🌊' }
	];
</script>

<div class="scrolly-container">
	<div class="background-layer" style="background-color: {steps[activeStep].color}">
		{steps[activeStep].img}
	</div>

	<div class="foreground-text">
		{#each steps as step, i}
			<section class="step-section" use:reveal={0.6} on:intersect={() => (activeStep = i)}>
				<div class="card">
					<h2>{step.title}</h2>
					<p>This text is sitting in a layer physically above the background.</p>
				</div>
			</section>
		{/each}
	</div>
</div>

<div style="height: 100vh; background: white; z-index: 3; position: relative;">
	<h1>Next Section</h1>
</div>

<style>
	/* 1. The Wrapper */
	.scrolly-container {
		position: relative;
	}

	/* 2. The Background Layer */
	.background-layer {
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 10rem;
		transition: background-color 1s ease;
		z-index: 1; /* Sits behind the text */
	}

	/* 3. The Foreground Layer */
	.foreground-text {
		position: relative;
		z-index: 2; /* Sits on top of the background */
	}

	.step-section {
		height: 100vh; /* Each text block is a full screen tall */
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none; /* Allows clicking through to the background if needed */
	}

	.card {
		background: rgba(255, 255, 255, 0.9);
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		max-width: 400px;
		pointer-events: auto; /* Re-enable clicks for the actual card */
		text-align: center;
	}
</style>
