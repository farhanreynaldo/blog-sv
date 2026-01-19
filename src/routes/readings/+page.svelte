<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
	import Rating from '$lib/components/Rating.svelte';
</script>

<svelte:head>
	<title>Readings</title>
</svelte:head>

<ul class="space-y-4 md:space-y-0">
	{#each data.posts as reading (reading.path)}
		<li>
			<a href={reading.path} class="group block">
				<div
					class="grid grid-cols-1 gap-x-4 md:grid-cols-[3.5fr_2.5fr_2.5fr_1.5fr] md:items-center"
				>
					<span
						class="text-content group-hover:text-accent truncate transition-colors duration-200"
						title={reading.meta.title}>{reading.meta.title}</span
					>
					<span class="text-content-subtle truncate" title={reading.meta.author}
						>{reading.meta.author}</span
					>
					<time datetime={reading.meta.date} class="text-content-subtle whitespace-nowrap"
						>{formatDate(reading.meta.date)}</time
					>
					<Rating rating={reading.meta.rating} />
				</div>
			</a>
		</li>
	{/each}
</ul>
