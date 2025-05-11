import Rss from "rss";
import type { Post } from "~types";

import { fetchAllBlogPosts, fetchAllGuides } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/client";

const SITE_URL = process.env.SITE_URL || "https://dainemawer.com";

export async function GET() {
	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});

	const guides: Post[] = await sanityFetch({
		query: fetchAllGuides,
		tags: ["guide"],
	});

	const feed = new Rss({
		title: "Daine Mawer",
		description:
			"Articles and guides about software development, engineering management, and technology.",
		feed_url: `${SITE_URL}/rss.xml`,
		site_url: SITE_URL,
		language: "en",
	});

	// Add articles to feed
	articles.forEach((article: Post) => {
		feed.item({
			title: article.title,
			description: article.excerpt,
			url: `${SITE_URL}/articles/${article.slug.current}`,
			date: article.publishedAt,
		});
	});

	// Add guides to feed
	guides.forEach((guide: Post) => {
		feed.item({
			title: guide.title,
			description: guide.excerpt,
			url: `${SITE_URL}/guides/${guide.slug.current}`,
			date: guide.publishedAt,
		});
	});

	return new Response(feed.xml(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
