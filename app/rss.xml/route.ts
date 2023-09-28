import Rss from "rss";

import { getPosts } from "~lib/posts";
import type { Post } from "~types";

const SITE_URL = process.env.SITE_URL || "https://dainemawer.com";

export async function GET() {
	const articles = await getPosts();

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
			url: `${SITE_URL}/articles/${article.slug}`,
			date: article.date,
		});
	});

	return new Response(feed.xml(), {
		headers: {
			"Content-Type": "application/xml",
		},
	});
}
