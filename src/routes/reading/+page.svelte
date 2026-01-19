<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
	import Rating from '$lib/components/Rating.svelte';
</script>

<svelte:head>
	<title>Reading</title>
</svelte:head>

<ul class="space-y-4 md:space-y-0">
	{#each data.books as book (book.path)}
		<li>
			<a href={book.path} class="group block">
				<div
					class="grid grid-cols-1 gap-x-4 md:grid-cols-[3.5fr_2.5fr_2.5fr_1.5fr] md:items-center"
				>
					<span
						class="text-content group-hover:text-accent truncate transition-colors duration-200"
						title={book.meta.title}>{book.meta.title}</span
					>
					<span class="text-content-subtle truncate" title={book.meta.author}
						>{book.meta.author}</span
					>
					<time datetime={book.meta.date} class="text-content-subtle whitespace-nowrap"
						>{formatDate(book.meta.date)}</time
					>
					<Rating rating={book.meta.rating} />
				</div>
			</a>
		</li>
	{/each}
</ul>
