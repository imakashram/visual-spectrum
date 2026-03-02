// Canonical global module declarations for project assets and aliased data imports
/// <reference types="@sveltejs/kit" />

/* CSV modules */
declare module '*.csv' {
	const content: Record<string, string>[];
	export default content;
}

declare module '$lib/data/*.csv' {
	const content: Record<string, string>[];
	export default content;
}

declare module '$lib/data/*';

/* Static assets */
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
declare module '*.avif';
declare module '*.ico';

declare module '*.svg' {
	const src: string;
	export default src;
}

/* Content modules */
declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	export default class Markdown extends SvelteComponent {}
}

declare module '*.svx' {
	import type { SvelteComponent } from 'svelte';
	export default class SvxComponent extends SvelteComponent {}
}

/* Raw imports */
declare module '*?raw' {
	const content: string;
	export default content;
}

export {};
