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

export type FooterNote = {
	prefixText: string;
	frameworkLabel: string;
	frameworkUrl: string;
	middleText: string;
	hostingLabel: string;
	hostingUrl: string;
};

export type FooterConfig = {
	socialLinks: FooterLink[];
	footerAttribution?: FooterAttribution;
	footerNote?: FooterNote;
};
