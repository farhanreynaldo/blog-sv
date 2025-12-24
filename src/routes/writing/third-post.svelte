<script module>
	export const metadata = {
		title: 'Interactive Svelte Example',
		date: '2025-12-24'
	};
</script>

<script>
	let count = $state(0);
	let name = $state('');
	let items = $state(['First item', 'Second item']);
	let newItem = $state('');

	function addItem() {
		if (newItem.trim()) {
			items.push(newItem.trim());
			newItem = '';
		}
	}

	function removeItem(index) {
		items = items.filter((_, i) => i !== index);
	}
</script>

<div class="post-content">
	<h2>Welcome to an Interactive Post!</h2>

	<p>
		This is a Svelte component that works alongside your markdown posts. It demonstrates how you can
		create interactive content.
	</p>

	<section class="demo-section">
		<h3>Counter Demo</h3>
		<p>Click the button to increment the counter:</p>
		<button onclick={() => count++}>
			Count: {count}
		</button>
		<button onclick={() => (count = 0)} disabled={count === 0}> Reset </button>
	</section>

	<section class="demo-section">
		<h3>Input Demo</h3>
		<input type="text" bind:value={name} placeholder="Enter your name" />
		{#if name}
			<p class="greeting">Hello, {name}! 👋</p>
		{/if}
	</section>

	<section class="demo-section">
		<h3>Todo List Demo</h3>
		<div class="todo-controls">
			<input
				type="text"
				bind:value={newItem}
				placeholder="Add an item"
				onkeydown={(e) => e.key === 'Enter' && addItem()}
			/>
			<button onclick={addItem}>Add</button>
		</div>
		<ul class="todo-list">
			{#each items as item, i}
				<li>
					<span>{item}</span>
					<button onclick={() => removeItem(i)} class="remove-btn">×</button>
				</li>
			{/each}
		</ul>
	</section>

	<section class="info-section">
		<h3>How This Works</h3>
		<p>
			This .svelte file is placed directly in <code>/src/routes/writing/</code>
			and exports metadata in a <code>context="module"</code> script block.
		</p>
		<p>
			The slug route automatically picks it up and renders it just like your markdown posts, but
			with full Svelte reactivity!
		</p>
	</section>
</div>

<style>
	.post-content {
		max-width: 65ch;
		margin: 0 auto;
	}

	.demo-section {
		margin: 2rem 0;
		padding: 1.5rem;
		background: oklch(98% 0% 0);
		border-radius: 8px;
		border: 1px solid oklch(90% 0% 0);
	}

	.info-section {
		margin: 2rem 0;
		padding: 1.5rem;
		background: oklch(95% 0.02 250);
		border-radius: 8px;
		border-left: 4px solid oklch(60% 0.15 250);
	}

	h2 {
		margin-top: 0;
	}

	h3 {
		margin-top: 0;
		color: oklch(40% 0% 0);
	}

	button {
		padding: 0.5rem 1rem;
		background: oklch(50% 0.15 250);
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		margin-right: 0.5rem;
		transition: background 0.2s;
	}

	button:hover:not(:disabled) {
		background: oklch(45% 0.15 250);
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	input[type='text'] {
		padding: 0.5rem;
		border: 1px solid oklch(80% 0% 0);
		border-radius: 4px;
		font-size: 1rem;
		width: 100%;
		max-width: 300px;
	}

	.greeting {
		margin-top: 1rem;
		font-size: 1.2rem;
		color: oklch(50% 0.15 250);
		font-weight: 500;
	}

	.todo-controls {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.todo-list {
		list-style: none;
		padding: 0;
	}

	.todo-list li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		margin-bottom: 0.5rem;
		background: white;
		border-radius: 4px;
		border: 1px solid oklch(90% 0% 0);
	}

	.remove-btn {
		background: oklch(60% 0.15 0);
		padding: 0.25rem 0.5rem;
		margin: 0;
		font-size: 1.2rem;
		line-height: 1;
	}

	.remove-btn:hover {
		background: oklch(50% 0.2 0);
	}

	code {
		background: oklch(95% 0% 0);
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: 'Monaco', 'Courier New', monospace;
		font-size: 0.9em;
	}
</style>
