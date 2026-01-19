<script lang="ts">
	let { data } = $props();

	import { formatDate } from '$lib/utils/DateFormatter';
	import Rating from '$lib/components/Rating.svelte';
</script>

<!-- Book header with clear hierarchy -->
<header class="mb-6">
	<h1 class="text-content text-lg leading-tight font-semibold">
		{data.title}
	</h1>
	<p class="text-content-subtle">by {data.author}</p>
	<div class="mt-2 flex items-center gap-2">
		<Rating rating={data.rating} />
		<span class="text-content-subtle">·</span>
		<time datetime={data.date} class="text-content-subtle text-sm">
			{formatDate(data.date)}
		</time>
	</div>
</header>

<!-- Markdown content with beautiful prose styling -->
<article class="prose">
	{@render data.content()}
</article>

<div class="mt-8">
	<a
		href="/readings"
		class="group text-content-muted hover:text-accent inline-flex items-center gap-1 transition-colors duration-200"
	>
		<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block transition-transform duration-300 group-hover:-translate-x-1"
			>←</span
		>
		<span>Back to readings</span>
	</a>
</div>
