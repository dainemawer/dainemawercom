import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { notFound } from "next/navigation";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";
import type { Post } from "~types";
import type { Metadata } from "next";

import { getPosts, getPostsByCategory } from "~lib/posts";

export async function generateStaticParams() {
	const posts = await getPosts();
	return posts.map((post: Post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> => {
	const category = params.slug.replace(/-/g, " ");
	const upperCaseCategory = category[0].toUpperCase() + category.substring(1);

	return {
		title: `${upperCaseCategory} | Articles`,
		description: `Discover interesting opinions and techniques related to ${params.slug} on dainemawer.com`,
		alternates: {
			canonical: `https://dainemawer.com/category/${params.slug}`,
		},
		openGraph: {
			title: `${upperCaseCategory} | Articles`,
			url: `https://dainemawer.com/category/${params.slug}`,
		},
	};
};

export default async function Category({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const posts = await getPostsByCategory(params.slug);
	if (posts.length === 0) return notFound();

	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Daine Mawers Blog",
		description: `Discover interesting opinions and techniques related to ${params.slug} on dainemawer.com`,
	};

	return (
		<Layout>
			<Schema schema={schema} />
			<section className="prose">
				<h1 className="capitalize">{params.slug.replace(/-/g, " ")}</h1>
				{posts && (
					<ul className="pl-0">
						{posts
							.sort(
								(a, b) =>
									new Date(b.date).getTime() - new Date(a.date).getTime(),
							)
							.map(
								(post) =>
									post && (
										<Card
											body={post.body}
											category={post.category}
											key={post.slug}
											slug={post.slug}
											title={post.title}
											excerpt={post.excerpt}
											date={post.date}
										/>
									),
							)}
					</ul>
				)}
			</section>
		</Layout>
	);
}
