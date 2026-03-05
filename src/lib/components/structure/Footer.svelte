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

<footer class={`footer-shell ${className}`} aria-label="Site footer">
	<div class="footer-container">
		<div class="footer-row">
			<div class="footer-copy-stack">
				<p class="footer-meta-text type-body-sm">
					{#if attribution}
						© {attribution.startYear}<span class="footer-project-name">{attribution.projectName}</span>by
						<a
							class="footer-meta-link fw-medium"
							href={attribution.authorUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{attribution.authorName}
						</a>
						licensed under
						<a
							class="footer-meta-link fw-medium"
							href={attribution.licenseUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{attribution.licenseName}
						</a>
					{/if}
				</p>

				{#if footerNote}
					<p class="footer-meta-text type-caption">
						{footerNote.prefixText}
						<a
							class="footer-meta-link fw-medium"
							href={footerNote.frameworkUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{footerNote.frameworkLabel}
						</a>
						{footerNote.middleText}
						<a
							class="footer-meta-link fw-medium"
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
				<ul class="footer-social-list" aria-label="Social links">
					{#each config.socialLinks as link (`${link.label}-${link.href}`)}
						<li>
							<SocialLink link={link} class="social-link-compact" iconClass="social-link-icon" />
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</footer>
