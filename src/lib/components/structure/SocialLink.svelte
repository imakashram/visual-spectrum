<script lang="ts">
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
	const target = $derived(isExternal ? '_blank' : undefined);
	const rel = $derived(isExternal ? 'noopener noreferrer external' : undefined);
	const fallbackInitial = $derived(link.label.trim().charAt(0).toUpperCase() || '?');
</script>

<a
	href={link.href}
	class={`inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 ${className}`}
	title={link.label}
	aria-label={link.label}
	target={target}
	rel={rel}
>
	{#if iconSource}
		<img class={iconClass} src={iconSource} alt="" loading="lazy" aria-hidden="true" />
	{:else}
		<span class="text-xs font-semibold uppercase" aria-hidden="true">{fallbackInitial}</span>
	{/if}
	<span class="sr-only">{link.label}</span>
</a>
