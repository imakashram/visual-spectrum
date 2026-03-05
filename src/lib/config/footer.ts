import type { FooterConfig } from '$lib/types/types';

export const defaultFooterConfig: FooterConfig = {
	socialLinks: [
		{ label: 'Website', href: 'https://insightcrust.com/', external: true },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/imakashram/', external: true },
		{ label: 'GitHub', href: 'https://github.com/imakashram/', external: true },
		{ label: 'Bluesky', href: 'https://bsky.app/profile/imakashram.bsky.social', external: true },
		{ label: 'X', href: 'https://twitter.com/imakashram/', external: true },
		{ label: 'Email', href: 'mailto:inbox2imakashram@gmail.com' }
	],
	footerAttribution: {
		startYear: new Date().getFullYear(),
		projectName: 'Visual Spectrum',
		authorName: 'Akash Ram',
		authorUrl: 'https://insightcrust.com/',
		licenseName: 'CC BY-NC 4.0',
		licenseUrl: 'https://creativecommons.org/licenses/by-nc/4.0/'
	}
};
