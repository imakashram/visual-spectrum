<script lang="ts">
	import { resolve } from '$app/paths';
	import type { FooterLink } from '$lib/types/types';
	import blueskyIcon from '$lib/assets/images/icons/bluesky.svg';
	import emailIcon from '$lib/assets/images/icons/email.svg';
	import githubIcon from '$lib/assets/images/icons/github.svg';
	import linkedinIcon from '$lib/assets/images/icons/linkedin.svg';
	import websiteIcon from '$lib/assets/images/icons/website.svg';
	import xIcon from '$lib/assets/images/icons/x.svg';

	type SocialPlatform = 'website' | 'linkedin' | 'github' | 'bluesky' | 'x' | 'email';

	type SocialLink = FooterLink & {
		platform?: SocialPlatform;
	};

	type Props = {
		link: SocialLink;
		class?: string;
		iconClass?: string;
	};

	let { link, class: className = '', iconClass = 'size-4' }: Props = $props();

	const SOCIAL_ICONS: Record<SocialPlatform, string> = {
		website: websiteIcon,
		linkedin: linkedinIcon,
		github: githubIcon,
		bluesky: blueskyIcon,
		x: xIcon,
		email: emailIcon
	};

	const LABEL_TO_PLATFORM: Partial<Record<string, SocialPlatform>> = {
		website: 'website',
		linkedin: 'linkedin',
		github: 'github',
		bluesky: 'bluesky',
		x: 'x',
		email: 'email'
	};

	// Treat common absolute or protocol-based URLs as external unless explicitly overridden.
	const EXTERNAL_PATTERN = /^(https?:\/\/|mailto:|tel:|#)/i;

	const normalizedLabel = $derived(link.label.trim().toLowerCase());
	const platform = $derived(link.platform ?? LABEL_TO_PLATFORM[normalizedLabel]);
	const iconSource = $derived(platform ? SOCIAL_ICONS[platform] : undefined);

	const isExternal = $derived(link.external ?? EXTERNAL_PATTERN.test(link.href.trim()));
	const href = $derived(isExternal ? link.href.trim() : resolve(link.href.trim() as any));
	const target = $derived(isExternal ? '_blank' : undefined);
	const rel = $derived(isExternal ? 'noopener noreferrer external' : undefined);
	const fallbackInitial = $derived(link.label.trim().charAt(0).toUpperCase() || '?');
</script>

<a
	href={href}
	class={`social-link-btn ${className}`}
	title={link.label}
	aria-label={link.label}
	target={target}
	rel={rel}
>
	{#if iconSource}
		<img class={iconClass} src={iconSource} alt="" loading="lazy" aria-hidden="true" />
	{:else}
		<span class="type-caption fw-semibold uppercase" aria-hidden="true">{fallbackInitial}</span>
	{/if}
	<span class="sr-only">{link.label}</span>
</a>

<style>
	.social-link-btn {
		display: inline-flex;
		width: var(--size-social-link);
		height: var(--size-social-link);
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-full);
		border: var(--border-width-1) solid var(--color-border-subtle);
		color: var(--color-text-secondary);
		transition: color 0.2s ease, border-color 0.2s ease;
	}

	.social-link-btn:hover {
		border-color: var(--color-border-muted);
		color: var(--color-text-strong);
	}

	.social-link-compact {
		width: var(--size-social-link-compact);
		height: var(--size-social-link-compact);
	}

	.social-link-icon {
		width: var(--size-social-icon);
		height: var(--size-social-icon);
	}
</style>
