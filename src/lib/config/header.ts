import type { HeaderConfig } from '$lib/types/types';
import visualSpectrumLogo from '$lib/assets/images/logos/visual-spectrum-logo.svg';

export const defaultHeaderConfig: HeaderConfig = {
	brand: {
		label: 'Visual Spectrum',
		href: '/',
		logoSrc: visualSpectrumLogo,
		logoAlt: 'Visual Spectrum logo'
	},
	links: [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	],
	ariaLabel: 'Primary navigation'
};
