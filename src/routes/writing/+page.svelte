<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<ul class="space-y-2 md:space-y-0">
	{#each data.posts as post (post.path)}
		<a href={post.path} class="group block transition-colors duration-200">
			<div class="flex flex-col md:flex-row md:justify-between">
				<!-- Post title with accent on hover -->
				<h2 class="group-hover:text-accent transition-colors duration-200">
					{post.meta.title}
				</h2>
				<!-- Date in subtle text -->
				<time datetime={post.meta.date} class="text-content-subtle">
					{formatDate(post.meta.date)}
				</time>
			</div>
		</a>
	{/each}
</ul>
