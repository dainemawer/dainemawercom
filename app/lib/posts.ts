import { cache } from "react";
import fs from "fs/promises";
import path, { join } from "path";
import matter from "gray-matter";
import type { Post } from "~types";

const postsDirectory = join(process.cwd(), "articles");

export const getPosts = cache(async () => {
	const posts = await fs.readdir(postsDirectory);

	return Promise.all(
		posts
			.filter((file) => path.extname(file) === ".mdx")
			.map(async (file) => {
				const filePath = `./articles/${file}`;
				const postContent = await fs.readFile(filePath, "utf8");
				const { data, content } = matter(postContent);

				if (data.published === false) {
					return;
				}

				return { ...data, body: content } as Post;
			}),
	);
});

export async function getPostsByCategory(category: string) {
	const posts = await getPosts();

	return posts.filter((post) => post && post.category === category);
}

export async function getPostsByTag(tag: string) {
	const posts = await getPosts();

	return posts.filter((post) => post && post.tags.includes(tag));
}

export async function getAllTags() {
	const posts = await getPosts();
	const tags = posts
		.map((post) => {
			const postTags = post.tags as any;
			return postTags.split(",").map((tag) => tag.trim());
		})
		.flat();

	return tags.filter((tag, index) => tags.indexOf(tag) === index);
}

export async function getPost(slug: string) {
	const posts = await getPosts();

	return posts.find((post) => post && post.slug === slug);
}

export const ITEMS_PER_PAGE = 5;

export async function getPostPages() {
	const posts = await getPosts();
	const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

	return totalPages;
}
