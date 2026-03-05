<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Footer, Header } from '$lib';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header activePath={page.url.pathname} />
	<main class="flex-1">
		<div class="content-container">
			{@render children()}
		</div>
	</main>
	<Footer />
</div>

<style>
	.content-container {
		width: 100%;
		max-width: var(--container-max-width-7xl);
		margin-inline: auto;
		padding-inline: var(--space-4);
	}

	@media (min-width: 640px) {
		.content-container {
			padding-inline: var(--space-6);
		}
	}

	@media (min-width: 1024px) {
		.content-container {
			padding-inline: var(--space-8);
		}
	}
</style>
