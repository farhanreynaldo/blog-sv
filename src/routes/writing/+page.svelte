<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<ul class="space-y-4 md:space-y-0">
	{#each data.posts as post (post.path)}
		<li>
			<a href={post.path} class="group block">
				<div class="grid grid-cols-1 gap-x-4 md:grid-cols-[1fr_auto] md:items-center">
					<span
						class="text-content group-hover:text-accent truncate transition-colors duration-200"
						title={post.meta.title}
					>
						{post.meta.title}
					</span>
					<time datetime={post.meta.date} class="text-content-subtle whitespace-nowrap">
						{formatDate(post.meta.date)}
					</time>
				</div>
			</a>
		</li>
	{/each}
</ul>
