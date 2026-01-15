<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
	import Star from '$lib/components/Star.svelte';
</script>

<svelte:head>
	<title>Readings</title>
</svelte:head>

<ul class="space-y-4 md:space-y-0">
	{#each data.posts as reading (reading.path)}
		<li>
			<a href={reading.path} class="group block">
				<div class="grid grid-cols-1 gap-x-4 md:grid-cols-[1fr_0.75fr_auto_auto] md:items-center">
					<span
						class="text-content group-hover:text-accent justify-self-start truncate transition-colors duration-200"
						title={reading.meta.title}>{reading.meta.title}</span>
					<span
						class="text-content-subtle justify-self-start truncate"
						title={reading.meta.author}>{reading.meta.author}</span>
					<time
						datetime={reading.meta.date}
						class="text-content-subtle whitespace-nowrap">{formatDate(reading.meta.date)}</time>
					<div
						class="flex items-center gap-0"
						aria-label="{reading.meta.rating} out of 5 stars"
					>
						{#each Array(5) as _, i}
							<Star filled={i < reading.meta.rating} />
						{/each}
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>
