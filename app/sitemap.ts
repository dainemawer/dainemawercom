import { getPosts } from "~lib/posts";
import type { Post } from "~types";

export default async function sitemap() {
	const posts = await getPosts();
	const blogs = posts.map((post: Post) => ({
		url: `https://dainemawer.com/blog/${post.slug}`,
		lastModified: post.lastModified
			? new Date(post.lastModified).toISOString().split("T")[0]
			: new Date().toISOString().split("T")[0],
	}));

	const routes = ["", "/about", "/blog"].map((route) => ({
		url: `https://dainemawer.com${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
