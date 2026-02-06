<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/utils/DateFormatter';
	import Rating from '$lib/components/Rating.svelte';
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
	<div class="mt-2 flex flex-row gap-2 space-y-4 md:space-y-0">
		{#each data.photos as photo (photo.path)}
			<a href={photo.path}>
				<img
					src={photo.meta.image}
					alt={photo.meta.alt}
					class="h-24 w-24 object-cover"
					loading="lazy"
					decoding="async"
					width="96"
					height="96"
				/>
			</a>
		{/each}
	</div>
</section>

<!-- reading Section -->
<section class="mb-6">
	<a href="/reading" class="group hover:text-accent mb-2 font-bold transition-colors duration-200"
		>Reading<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block px-0.5 transition-transform duration-300 group-hover:translate-x-1"
			>→</span
		></a
	>
	<ul class="space-y-4 md:space-y-0">
		{#each data.books as book (book.meta.title)}
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
</section>

<!-- Watching Section -->
<section class="mb-6">
	<a href="/watching" class="group hover:text-accent mb-2 font-bold transition-colors duration-200"
		>Watching<span
			aria-hidden="true"
			class="group-hover:text-accent-secondary text-content inline-block px-0.5 transition-transform duration-300 group-hover:translate-x-1"
			>→</span
		></a
	>
	<ul class="space-y-4 md:space-y-0">
		{#each data.movies as movie (movie.meta.title)}
			<li>
				<a href={movie.path} class="group block">
					<div
						class="grid grid-cols-1 gap-x-4 md:grid-cols-[3.5fr_2.5fr_2.5fr_1.5fr] md:items-center"
					>
						<span
							class="text-content group-hover:text-accent truncate transition-colors duration-200"
							title={movie.meta.title}>{movie.meta.title}</span
						>
						<span class="text-content-subtle truncate" title={movie.meta.author}
							>{movie.meta.creator}</span
						>
						<time datetime={movie.meta.date} class="text-content-subtle whitespace-nowrap"
							>{formatDate(movie.meta.date)}</time
						>
						<Rating rating={movie.meta.rating} />
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>
