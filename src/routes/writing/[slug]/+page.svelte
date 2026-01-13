<script lang="ts">
	let { data } = $props();

	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<!-- Post header with clear hierarchy -->
<header class="mb-6">
	<p class="text-content text-lg leading-tight font-semibold">
		{data.title}
	</p>
	<time datetime={data.date} class="text-content-subtle text-sm">
		{formatDate(data.date)}
	</time>
</header>

<!-- Markdown content with beautiful prose styling -->
<article class="prose">
	{@render data.content()}
</article>

<div class="mt-8">
	<a
		href="/writing"
		class="group text-content-muted hover:text-accent inline-flex items-center gap-1 transition-colors duration-200"
	>
		<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block transition-transform duration-300 group-hover:-translate-x-1"
			>←</span
		>
		<span>Back to writing</span>
	</a>
</div>
