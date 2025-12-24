<script lang="ts">
	let { data } = $props();

	import { formatDate } from '$lib/utils/DateFormatter';
</script>

<div class="metadata">
	<h1>{data.title}</h1>
	<p>{formatDate(data.date)}</p>
</div>
{@render data.content()}

<style>
	h1 {
		margin: 0;
	}

	p {
		margin: 0 0 1rem 0;
		color: oklch(70% 0% 0);
	}
	.metadata {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid oklch(90% 0% 0);
	}
</style>
