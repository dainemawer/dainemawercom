import type { Post } from "~types";
import {
	fetchAllBlogPosts,
	fetchAllTags,
	fetchAllCategories,
	fetchAllGuides,
} from "../sanity/lib/queries";
import { sanityFetch } from "../sanity/lib/client";

export default async function sitemap() {
	const posts: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});

	const guides: Post[] = await sanityFetch({
		query: fetchAllGuides,
		tags: ["guide"],
	});

	const tags: [] = await sanityFetch({
		query: fetchAllTags,
		tags: ["tag"],
	});

	const category: [] = await sanityFetch({
		query: fetchAllCategories,
		tags: ["category"],
	});

	const articles = posts
		.filter((post) => post.includeInSitemap)
		.map((post: Post) => ({
			url: `https://dainemawer.com/articles/${post.slug.current}`,
			lastModified: post.lastModified
				? new Date(post.lastModified).toISOString().split("T")[0]
				: new Date().toISOString().split("T")[0],
		}));

	const guidesUrls = guides
		.filter((guide) => guide.includeInSitemap)
		.map((guide: Post) => ({
			url: `https://dainemawer.com/guides/${guide.slug.current}`,
			lastModified: guide.lastModified
				? new Date(guide.lastModified).toISOString().split("T")[0]
				: new Date().toISOString().split("T")[0],
		}));

	const categories = category.map((post: Post) => ({
		url: `https://dainemawer.com/category/${post.slug.current}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	const postTags = tags.map((tag: Post) => ({
		url: `https://dainemawer.com/tags/${tag.slug.current}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	const routes = ["", "/about", "/articles", "/guides"].map((route) => ({
		url: `https://dainemawer.com${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...articles, ...guidesUrls, ...categories, ...postTags];
}
