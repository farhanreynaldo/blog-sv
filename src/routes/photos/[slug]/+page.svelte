<script lang="ts">
	let { data } = $props();

	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<!-- Photos header with clear hierarchy -->
<header class="mb-6">
	<img
		src={data.image}
		alt={data.alt}
		class="my-4 shadow-md"
		loading="lazy"
		decoding="async"
		width="1200"
		height="800"
	/>
	<div class="mt-4 grid grid-cols-1 md:grid-cols-2">
		<div>
			<h1 class="text-content text-lg leading-tight font-semibold">
				{data.title}
			</h1>
			<time datetime={data.date} class="text-content-subtle text-sm">
				{formatDate(data.date)}
			</time>
		</div>
		<div class="md:text-right">
			<p class="text-content-subtle text-sm">Camera: {data.camera}</p>
			<p class="text-content-subtle text-sm">Lens: {data.lens}</p>
			<p class="text-content-subtle text-sm">Settings: {data.settings}</p>
		</div>
	</div>
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
