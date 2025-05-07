import { Tag } from "~components/Tags/Tags.types";

interface SEO {
	keywords?: string[];
	socialSharing?: {
		ogImage?: {
			asset?: {
				url: string;
			};
		};
		twitterCard?: string;
	};
	structuredData?: {
		articleType?: string;
	};
}

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
	metaDescription?: string;
	publishedAt: string;
	seo?: SEO;
	sitemap: boolean;
	slug: {
		current: string;
	};
	state: string;
	tags: Tag[];
	title: string;
};
