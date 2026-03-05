export type FooterLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type FooterAttribution = {
	startYear: number;
	projectName: string;
	authorName: string;
	authorUrl: string;
	licenseName: string;
	licenseUrl: string;
};

export type FooterConfig = {
	socialLinks: FooterLink[];
	footerAttribution?: FooterAttribution;
};
