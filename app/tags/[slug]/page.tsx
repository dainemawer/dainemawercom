import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { notFound } from "next/navigation";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";
import type { Post } from "~types";
import type { Metadata } from "next";

import { getPosts, getPostsByTag } from "~lib/posts";

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
	const tag = params.slug;
	const upperCaseTag = tag[0].toUpperCase() + tag.substring(1);
	return {
		title: `${upperCaseTag.replace("-", " ")} | Articles`,
		description: `Discover interesting opinions and techniques related to ${params.slug} on dainemawer.com`,
		alternates: {
			canonical: `https://dainemawer.com/tags/${params.slug}`,
		},
		openGraph: {
			title: `${upperCaseTag.replace("-", " ")} | Articles`,
			url: `https://dainemawer.com/tags/${params.slug}`,
		},
	};
};

export default async function Tag({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const posts = await getPostsByTag(params.slug);

	if (posts.length === 0) return notFound();

	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Daine Mawer",
		description: `Discover interesting opinions and techniques related to ${params.slug} on dainemawer.com`,
	};

	return (
		<Layout>
			<Schema schema={schema} />
			<section className="prose">
				<h1 className="capitalize">{params.slug}</h1>
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
