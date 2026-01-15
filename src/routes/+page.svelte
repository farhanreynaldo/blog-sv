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
		{#each data.readings as reading (reading.meta.title)}
			<li>
				<a href={reading.path} class="group block">
					<div
						class="grid grid-cols-1 gap-x-4 md:grid-cols-[1fr_0.75fr_auto_auto] md:items-center"
					>
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
</section>
