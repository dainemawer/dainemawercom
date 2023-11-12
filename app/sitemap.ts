import { getPosts, getAllTags } from "~lib/posts";
import type { Post } from "~types";

export default async function sitemap() {
	const posts = await getPosts();
	const tags = await getAllTags();

	const articles = posts
		.filter((post) => post.sitemap)
		.map((post: Post) => ({
			url: `https://dainemawer.com/articles/${post.slug}`,
			lastModified: post.lastModified
				? new Date(post.lastModified).toISOString().split("T")[0]
				: new Date().toISOString().split("T")[0],
		}));

	const categories = posts.map((post: Post) => ({
		url: `https://dainemawer.com/category/${post.category}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	const postTags = tags.map((tag: Post) => ({
		url: `https://dainemawer.com/tags/${tag}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	const routes = ["", "/about", "/articles"].map((route) => ({
		url: `https://dainemawer.com${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...articles, ...categories, ...postTags];
}
