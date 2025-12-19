<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<ul>
	{#each data.posts as post}
		<li>
			<p><a href={post.path}>{post.meta.title}</a></p>
			Published on {post.meta.date}
		</li>
	{/each}
</ul>
