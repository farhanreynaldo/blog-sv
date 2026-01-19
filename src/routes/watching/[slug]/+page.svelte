<script lang="ts">
	let { data } = $props();

	import MoviePoster from '$lib/components/moviePoster.svelte';
</script>

<header>
	<MoviePoster {data} />
</header>

<!-- Markdown content with beautiful prose styling -->
<article class="prose">
	{@render data.content()}
</article>

<div class="mt-8">
	<a
		href="/watching"
		class="group text-content-muted hover:text-accent inline-flex items-center gap-1 transition-colors duration-200"
	>
		<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block transition-transform duration-300 group-hover:-translate-x-1"
			>←</span
		>
		<span>Back to watching</span>
	</a>
</div>
