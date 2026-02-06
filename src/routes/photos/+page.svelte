<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Photos</title>
</svelte:head>

<div class="columns-2 gap-2 md:columns-3 lg:columns-4">
	{#each data.photos as photo (photo.path)}
		<a href={photo.path} class="mb-4 block break-inside-avoid">
			<img
				src={photo.meta.image}
				alt={photo.meta.alt}
				class="w-full object-cover"
				loading="lazy"
				decoding="async"
				width="600"
				height="400"
			/>
		</a>
	{/each}
</div>
