<script>
	let { data } = $props();

	import Rating from '$lib/components/Rating.svelte';
</script>

<div class="border-border-strong m-auto mb-4 border-b p-4 md:w-2/3">
	<img src={data.poster} alt={`Poster of ${data.title}`} class="m-auto object-cover object-top" />
	<div>
		<span class="text-content font-sans text-3xl leading-tight font-semibold">
			{data.title}
		</span> <span class="text-sm">{data.year}</span>
	</div>
	<div class="mt-1 flex flex-col gap-1 text-sm">
		<div>
			<span class="text-content-subtle text-xs">Created by</span>
			<span class="text-content">{data.creator}</span>
		</div>
		<div>
			<span class="text-content-subtle text-xs">Starring</span>
			<span class="text-content">{data.starring.join(', ')}</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-content-subtle text-xs">Rating</span>
			<Rating rating={data.rating} />
		</div>
	</div>
</div>
