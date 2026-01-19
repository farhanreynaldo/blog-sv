<script lang="ts">
	let { data } = $props();

	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<!-- Book header with clear hierarchy -->
<header class="mb-6">
	<h1 class="text-content text-lg leading-tight font-semibold">
		{data.title}
	</h1>
	<img src={data.image} alt={data.alt} class="my-4 shadow-md" />
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
		href="/photos"
		class="group text-content-muted hover:text-accent inline-flex items-center gap-1 transition-colors duration-200"
	>
		<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block transition-transform duration-300 group-hover:-translate-x-1"
			>←</span
		>
		<span>Back to photos</span>
	</a>
</div>
