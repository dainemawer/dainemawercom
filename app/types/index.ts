import { Tag } from "~components/Tags/Tags.types";

export type Post = {
	_id: string;
	body: string;
	canonical: string;
	category: {
		slug: {
			current: string;
		};
		title: string;
	};
	estimatedReadingTime: string;
	excerpt: string;
	includeInSitemap: boolean;
	lastModified: string;
	publishedAt: string;
	sitemap: boolean;
	slug: {
		current: string;
	};
	state: string;
	tags: Tag[];
	title: string;
};
