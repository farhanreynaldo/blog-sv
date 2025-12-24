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
</script>

<div class="fixed-sidebar">
	Current Step: {activeStep}
</div>

<div class="spacer"><h1>Scroll Down ↓</h1></div>

{#each [1, 2, 3] as i}
	<div
		class="step"
		class:active={activeStep === i}
		use:reveal={0.6}
		on:intersect={() => (activeStep = i)}
	>
		<h2>Part {i}</h2>
		<p>This content activates when it covers 60% of the screen.</p>
	</div>
{/each}

<div class="spacer"><h1>The End</h1></div>

<style>
	.spacer {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.step {
		height: 80vh;
		margin: 50px;
		padding: 2rem;
		background: #f4f4f4;
		transition: all 0.5s ease;
		opacity: 0.3;
		transform: translateY(20px);
	}

	.step.active {
		opacity: 1;
		transform: translateY(0);
		background: #e0f7fa;
		border-left: 5px solid #00bcd4;
	}

	.fixed-sidebar {
		position: fixed;
		top: 20px;
		right: 20px;
		padding: 1rem;
		background: white;
		border: 1px solid #ccc;
	}
</style>
