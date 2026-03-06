<script lang="ts">
	import { resolve } from '$app/paths';
	import { defaultHeaderConfig } from '$lib/config/header';
	import type { HeaderConfig } from '$lib/types/types';

	type HeaderProps = {
		config?: HeaderConfig;
		activePath?: string;
		class?: string;
		linkClass?: string;
		activeClass?: string;
	};

	type ResolvedHeaderLink = {
		label: string;
		href: string;
		target?: '_blank';
		rel?: string;
		isActive: boolean;
	};

	let {
		config = defaultHeaderConfig,
		activePath = '',
		class: className = '',
		linkClass = 'header-link',
		activeClass = 'is-active'
	}: HeaderProps = $props();

	const EXTERNAL_PATTERN = /^(https?:\/\/|mailto:|tel:|#)/i;

	const normalizePath = (path: string): string => {
		const value = (path || '').trim();
		if (!value) return '/';
		const pathname = value.split(/[?#]/)[0] || '/';
		return pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
	};

	const normalizedActivePath = $derived(normalizePath(activePath));

	const links = $derived(
		config.links.map((link): ResolvedHeaderLink => {
			const sourceHref = link.href.trim();
			const isExternal = link.external ?? EXTERNAL_PATTERN.test(sourceHref);
			const href = isExternal ? sourceHref : resolve(sourceHref as any);
			const target = isExternal ? '_blank' : undefined;
			const rel = isExternal ? 'noopener noreferrer external' : undefined;
			const isActive = !isExternal && normalizePath(sourceHref) === normalizedActivePath;

			return {
				label: link.label,
				href,
				target,
				rel,
				isActive
			};
		})
	);

	const brandHref = $derived(
		config.brand
			? EXTERNAL_PATTERN.test(config.brand.href.trim())
				? config.brand.href.trim()
				: resolve(config.brand.href.trim() as any)
			: undefined
	);
</script>

<header class={`header-shell ${className}`.trim()}>
	<div class="header-container">
		{#if config.brand && brandHref}
			<a class="header-brand type-body fw-semibold" href={brandHref}>
				{#if config.brand.logoSrc}
					<img
						class="header-brand-logo"
						src={config.brand.logoSrc}
						alt={config.brand.logoAlt ?? `${config.brand.label} logo`}
					/>
				{/if}
				{config.brand.label}
			</a>
		{/if}

		{#if links.length > 0}
			<nav aria-label={config.ariaLabel ?? 'Primary navigation'}>
				<ul class="header-nav-list">
					{#each links as link (`${link.label}-${link.href}`)}
						<li>
							<a
								href={link.href}
								target={link.target}
								rel={link.rel}
								class={`${linkClass} ${link.isActive ? activeClass : ''}`.trim()}
								aria-current={link.isActive ? 'page' : undefined}
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</header>

<style>
	.header-shell {
		background-color: var(--color-brand-background);
	}

	.header-container {
		width: 100%;
		max-width: var(--container-max-width-7xl);
		margin-inline: auto;
		padding: var(--space-4);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		align-items: center;
		justify-content: space-between;
	}

	.header-brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--color-text-strong);
		text-decoration: none;
	}

.header-brand-logo {
	height: 2.5rem;
	width: auto;
	flex-shrink: 0;
}

	.header-nav-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		align-items: center;
		justify-content: center;
	}

	.header-link {
		display: inline-flex;
		align-items: center;
		padding: 0.35rem 0.65rem;
		border-radius: var(--radius-sm);
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color 0.2s ease, background-color 0.2s ease;
	}

	.header-link:hover {
		color: var(--color-text-strong);
		background-color: color-mix(in oklab, var(--color-border-subtle) 55%, transparent);
	}

	.header-link.is-active {
		color: var(--color-text-strong);
		background-color: color-mix(in oklab, var(--color-border-subtle) 70%, transparent);
	}

	@media (min-width: 640px) {
		.header-container {
			padding-inline: var(--space-6);
			padding-block: var(--space-5);
			flex-direction: row;
		}
	}

	@media (min-width: 1024px) {
		.header-container {
			padding-inline: var(--space-8);
		}
	}
</style>
