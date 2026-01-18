<script>
	let { data } = $props();

	$inspect(data);
</script>

<svelte:head>
	<title>Photos</title>
</svelte:head>

<div class="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center">
	{#each data.photos as photo (photo.path)}
		<a href={photo.path}>
			<img
				src={photo.meta.image}
				alt={photo.meta.alt}
				class="h-72 w-72 rounded-md object-cover shadow-md"
			/>
		</a>
	{/each}
</div>
