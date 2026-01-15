<script lang="ts">
	import './app.css';
	import { page } from '$app/state';
	// import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<!-- Two-column layout: sidebar navigation + main content -->
	<div class="mx-auto w-full max-w-[960px] flex-1 px-6 py-8 md:px-12 lg:px-16">
		<!-- Mobile: stacked, Desktop: two columns with fixed sidebar -->
		<div class="grid gap-4 md:grid-cols-[180px_1fr]">
			<!-- Left sidebar: Vertical navigation -->
			<nav
				class="border-divider flex flex-col gap-0 border-b pb-4 md:border-hidden"
				aria-label="Main navigation"
			>
				<a href="/" class="hover:text-accent font-bold transition-colors duration-200">
					Farhan Reynaldo
				</a>
				<a href="/about" class="hover:text-accent transition-colors duration-200">
					About
					{#if page.url.pathname == '/about'}
						<span aria-hidden="true">←</span>
					{/if}
				</a>
				<a href="/writing" class="hover:text-accent transition-colors duration-200">
					Writing
					{#if page.url.pathname == '/writing'}
						<span aria-hidden="true">←</span>
					{/if}
				</a>
				<a href="/readings" class="hover:text-accent transition-colors duration-200">
					Readings
					{#if page.url.pathname == '/readings'}
						<span aria-hidden="true">←</span>
					{/if}
				</a>
			</nav>
			<!-- Right content: Main page content -->
			<main class="min-w-0">
				{@render children()}
			</main>
		</div>

		<!-- <Footer /> -->
	</div>
</div>
