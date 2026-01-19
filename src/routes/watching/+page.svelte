<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
	import Star from '$lib/components/Star.svelte';
</script>

<svelte:head>
	<title>Watching</title>
</svelte:head>

<ul class="space-y-4 md:space-y-0">
	{#each data.movies as movie (movie.path)}
		<li>
			<a href={movie.path} class="group block">
				<div
					class="grid grid-cols-1 gap-x-4 md:grid-cols-[3.5fr_2.5fr_2.5fr_1.5fr] md:items-center"
				>
					<span
						class="text-content group-hover:text-accent truncate transition-colors duration-200"
						title={movie.meta.title}>{movie.meta.title}</span
					>
					<span class="text-content-subtle truncate" title={movie.meta.creator}
						>{movie.meta.creator}</span
					>
					<time datetime={movie.meta.date} class="text-content-subtle whitespace-nowrap"
						>{formatDate(movie.meta.date)}</time
					>
					<div class="mt-1 flex items-center gap-0" aria-label="{movie.meta.rating} out of 5 stars">
						{#each Array(5) as _, i}
							<Star filled={i < movie.meta.rating} />
						{/each}
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>
