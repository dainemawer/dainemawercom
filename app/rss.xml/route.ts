import Rss from "rss";
import type { Post } from "~types";

import { fetchAllBlogPosts } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/client";

const SITE_URL = process.env.SITE_URL || "https://dainemawer.com";

export async function GET() {
	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});

	const feed = new Rss({
		title: "Daine Mawer",
		description: "Lorem ipsum dolor sit amet.",
		feed_url: `${SITE_URL}/rss.xml`,
		site_url: SITE_URL,
		language: "en",
	});

	articles.forEach((article: Post) => {
		feed.item({
			title: article.title,
			description: article.excerpt,
			url: `${SITE_URL}/articles/${article.slug.current}`,
			date: article.publishedAt,
		});
	});

	return new Response(feed.xml(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
