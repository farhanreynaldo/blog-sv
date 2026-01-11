<script>
	import { page } from '$app/state';
</script>

<!-- Minimal navigation - emphasis on content, not chrome -->
<nav class="flex items-center gap-6" aria-label="Main navigation">
	<a
		href="/"
		class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 {page.url
			.pathname === '/'
			? 'text-[var(--color-accent)] font-medium'
			: ''}"
	>
		Home
	</a>
	<a
		href="/about"
		class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 {page.url
			.pathname === '/about'
			? 'text-[var(--color-accent)] font-medium'
			: ''}"
	>
		About
	</a>
	<a
		href="/writing"
		class="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 {page.url
			.pathname.startsWith('/writing')
			? 'text-[var(--color-accent)] font-medium'
			: ''}"
	>
		Writing
	</a>
</nav>
