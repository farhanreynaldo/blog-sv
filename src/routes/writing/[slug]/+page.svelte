<script>
	let { data } = $props();
</script>

<h1>{data.title}</h1>
<p>Published: {data.date}</p>
{@render data.content()}
