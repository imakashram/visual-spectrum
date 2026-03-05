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
			<div class="content-surface">
				{@render children()}
			</div>
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

	.content-surface {
		background-color: var(--color-surface);
		border: var(--border-width-1) solid var(--color-border-subtle);
		border-radius: var(--radius-sm);
		margin-block: var(--space-5);
		padding: var(--space-4);
	}

	@media (min-width: 640px) {
		.content-container {
			padding-inline: var(--space-6);
		}

		.content-surface {
			padding: var(--space-5);
		}
	}

	@media (min-width: 1024px) {
		.content-container {
			padding-inline: var(--space-8);
		}

		.content-surface {
			padding: var(--space-6);
		}
	}
</style>
