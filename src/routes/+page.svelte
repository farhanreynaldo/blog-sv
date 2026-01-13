<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
	import Star from '$lib/components/Star.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- Writing Section -->
<section class="mb-6">
	<a href="/writing" class="group hover:text-accent mb-2 font-bold transition-colors duration-200"
		>Writing<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block px-0.5 transition-transform duration-300 group-hover:translate-x-1"
			>→</span
		></a
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
<section class="mb-6">
	<a href="/photos" class="group hover:text-accent mb-2 font-bold transition-colors duration-200"
		>Photos<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block px-0.5 transition-transform duration-300 group-hover:translate-x-1"
			>→</span
		></a
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
<section class="mb-6">
	<a href="/readings" class="group hover:text-accent mb-2 font-bold transition-colors duration-200"
		>Readings<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block px-0.5 transition-transform duration-300 group-hover:translate-x-1"
			>→</span
		></a
	>
	<ul class="space-y-4 md:space-y-0">
		{#each data.readings as reading (reading.title)}
			<li>
				<div class="grid grid-cols-1 gap-1 md:grid-cols-8 md:items-center md:gap-4">
					<span class="text-content truncate md:col-span-3" title={reading.title}>
						{reading.title}
					</span>
					<span class="text-content-subtle truncate md:col-span-2" title={reading.author}>
						{reading.author}
					</span>
					<div
						class="flex items-center gap-0 md:col-span-1"
						aria-label="{reading.rating} out of 5 stars"
					>
						{#each Array(5) as _, i}
							<Star filled={i < reading.rating} />
						{/each}
					</div>
					<time
						datetime={reading.date}
						class="text-content-subtle md:col-span-2 md:justify-self-end"
					>
						{formatDate(reading.date)}
					</time>
				</div>
			</li>
		{/each}
	</ul>
</section>
