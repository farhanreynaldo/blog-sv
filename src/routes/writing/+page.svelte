<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<svelte:head>
	<title>Writing</title>
</svelte:head>

<ul>
	{#each data.posts as post}
		<a href={post.path}>
			<li>
				<span>{post.meta.title}</span>
				<span>{formatDate(post.meta.date)}</span>
			</li>
		</a>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	a {
		text-decoration: none;
		border-radius: 10px;

		&:hover {
			background-color: oklch(90% 0% 0);
		}
	}

	li {
		display: flex;
		flex-direction: column;
		color: oklch(70% 0% 0);
		padding: 0.5rem;
	}

	span:first-child {
		font-weight: bold;
		color: oklch(10% 0% 0);
	}
</style>
