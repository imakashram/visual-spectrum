<script lang="ts">
	import { defaultFooterConfig } from '$lib/config/footer';
	import type { FooterConfig } from '$lib/types/types';
	import SocialLink from './SocialLink.svelte';

	type FooterProps = {
		config?: FooterConfig;
		class?: string;
	};

	let { config = defaultFooterConfig, class: className = '' }: FooterProps = $props();

	const attribution = $derived(config.footerAttribution);
	const footerNote = $derived(config.footerNote);
</script>

<footer class={`border-t border-slate-200 bg-white text-slate-700 ${className}`} aria-label="Site footer">
	<div class="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
			<div class="space-y-1">
				<p class="text-xs text-slate-500 sm:text-sm">
					{#if attribution}
						© {attribution.startYear} {attribution.projectName} by
						<a
							class="font-medium text-slate-700 hover:text-slate-900 hover:underline"
							href={attribution.authorUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{attribution.authorName}
						</a>
						licensed under
						<a
							class="font-medium text-slate-700 hover:text-slate-900 hover:underline"
							href={attribution.licenseUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{attribution.licenseName}
						</a>
					{/if}
				</p>

				{#if footerNote}
					<p class="text-xs text-slate-500 sm:text-sm">
						{footerNote.prefixText}
						<a
							class="font-medium text-slate-700 hover:text-slate-900 hover:underline"
							href={footerNote.frameworkUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{footerNote.frameworkLabel}
						</a>
						{footerNote.middleText}
						<a
							class="font-medium text-slate-700 hover:text-slate-900 hover:underline"
							href={footerNote.hostingUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{footerNote.hostingLabel}
						</a>
					</p>
				{/if}
			</div>

			{#if config.socialLinks.length > 0}
				<ul class="flex flex-wrap gap-2" aria-label="Social links">
					{#each config.socialLinks as link (`${link.label}-${link.href}`)}
						<li>
							<SocialLink link={link} class="h-8 w-8" iconClass="h-3.5 w-3.5" />
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</footer>
