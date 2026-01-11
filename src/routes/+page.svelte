<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Writing Section -->
<section class="mb-6">
	<a
		href="/writing"
		class="hover:text-accent text-content mb-2 font-bold transition-colors duration-200"
		>Writing <span aria-hidden="true">→</span></a
	>
	<ul class="space-y-4 md:space-y-0">
		{#each data.posts as post (post.path)}
			<li>
				<a href={post.path} class="group block">
					<div class="flex flex-col md:flex-row md:justify-between">
						<span
							class="text-content group-hover:text-accent transition-all duration-200 group-hover:underline"
						>
							{post.meta.title}
						</span>
						<time datetime={post.meta.date} class="text-content-subtle">
							{formatDate(post.meta.date)}
						</time>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<!-- Photos Section -->
<section class="mb-8">
	<a
		href="/photos"
		class="hover:text-accent text-content mb-2 font-bold transition-colors duration-200"
		>Photos <span aria-hidden="true">→</span></a
	>
	<ul class="space-y-4 md:space-y-0">
		{#each data.photos as photo (photo.title)}
			<li>
				<div class="group">
					<div class="flex flex-col md:flex-row md:justify-between">
						<span class="text-content">
							{photo.title}
						</span>
						<time datetime={photo.date} class="text-content-subtle">
							{formatDate(photo.date)}
						</time>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>

<!-- Readings Section -->
<section class="mb-8">
	<a
		href="/readings"
		class="hover:text-accent text-content mb-2 font-bold transition-colors duration-200"
		>Reading <span aria-hidden="true">→</span></a
	>
	<ul class="space-y-4 md:space-y-0">
		{#each data.readings as reading (reading.title)}
			<li>
				<div class="flex flex-col md:flex-row md:justify-between">
					<span class="text-content text-(length:--font-size-base)">
						{reading.title}
						<span class="text-content-subtle">by {reading.author}</span>
					</span>
					<time datetime={reading.date} class="text-content-subtle">
						{formatDate(reading.date)}
					</time>
				</div>
			</li>
		{/each}
	</ul>
</section>
