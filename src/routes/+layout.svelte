<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Footer, Header } from '$lib';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header activePath={page.url.pathname} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
