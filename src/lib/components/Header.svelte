<script>
	import { page } from '$app/state';
</script>

<nav>
	<ul>
		<li><a class={page.url.pathname === '/' ? 'current' : ''} href="/">Home</a></li>
		<li><a class={page.url.pathname === '/about' ? 'current' : ''} href="/about">About</a></li>
		<li>
			<a class={page.url.pathname.startsWith('/writing') ? 'current' : ''} href="/writing">
				Writing
			</a>
		</li>
	</ul>
</nav>

<style>
	ul,
	li {
		display: contents;
	}

	nav {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	a {
		text-decoration: none;
		color: oklch(70% 0% 0);
		text-align: center;
	}

	a:hover {
		color: oklch(10% 0% 0);
	}

	.current {
		color: oklch(10% 0% 0);
	}
</style>
