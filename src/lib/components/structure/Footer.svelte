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
						© {attribution.startYear}
						<span class="footer-project-name">{attribution.projectName}</span>
						by
						<a
							class="footer-meta-link fw-medium"
							href={attribution.authorUrl}
							target="_blank"
							rel="noopener noreferrer external"
						>
							{attribution.authorName}
						</a>
						{' '}
						licensed under
						{' '}
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

<style>
	.footer-shell {
		background-color: var(--color-brand-background);
		color: var(--color-text-primary);
	}

	.footer-container {
		width: 100%;
		max-width: var(--container-max-width-7xl);
		margin-inline: auto;
		padding: var(--space-4);
	}

	.footer-row {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		align-items: center;
		text-align: center;
	}

	.footer-copy-stack {
		display: grid;
		gap: var(--space-1);
		justify-items: center;
	}

	.footer-meta-text {
		color: var(--color-text-strong);
		max-width: 60ch;
	}

	.footer-meta-link {
		color: var(--color-link);
	}

	.footer-meta-link:hover {
		color: var(--color-link-hover);
		text-decoration: none;
	}

	.footer-project-name {
		display: inline-block;
		margin-inline: var(--space-1);
		padding: 0.08rem var(--space-2);
		border-radius: var(--radius-sm);
		border: var(--border-width-1) solid var(--color-highlight-border);
		background-color: var(--color-highlight-bg);
		color: var(--color-text-strong);
		font-weight: var(--font-weight-semibold);
	}

	.footer-social-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		justify-content: center;
	}

	@media (min-width: 640px) {
		.footer-container {
			padding-inline: var(--space-6);
			padding-block: var(--space-5);
		}

		.footer-row {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			text-align: left;
			gap: var(--space-4);
		}

		.footer-copy-stack {
			justify-items: start;
		}

		.footer-social-list {
			justify-content: flex-end;
		}
	}

	@media (min-width: 1024px) {
		.footer-container {
			padding-inline: var(--space-8);
		}
	}
</style>
