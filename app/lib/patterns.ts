import { cache } from "react";
import fs from "fs/promises";
import path, { join } from "path";
import matter from "gray-matter";
import type { Post } from "~types";

const patternsDirectory = join(process.cwd(), "patterns");

export const getPatterns = cache(async () => {
	const patterns = await fs.readdir(patternsDirectory);

	return Promise.all(
		patterns
			.filter((file) => path.extname(file) === ".mdx")
			.map(async (file) => {
				const filePath = `./patterns/${file}`;
				const patternContent = await fs.readFile(filePath, "utf8");
				const { data, content } = matter(patternContent);

				if (data.published === false) {
					return null;
				}

				return { ...data, body: content } as Post;
			}),
	);
});

export async function getPattern(slug: string) {
	const patterns = await getPatterns();

	return patterns.find((pattern) => pattern && pattern.slug === slug);
}
