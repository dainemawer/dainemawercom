import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { notFound } from "next/navigation";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";
import type { Post } from "~types";
import type { Metadata } from "next";

import { fetchAllPostsByTag, fetchAllTags } from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/client";

export async function generateStaticParams() {
	const articles: Post[] = await sanityFetch({
		query: fetchAllTags,
		tags: ["tags"],
	});
	return articles.map((article: Post) => ({ slug: article.slug.current }));
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
	const articles: Post[] = await sanityFetch({
		query: fetchAllPostsByTag,
		qParams: { slug: params.slug },
		tags: ["tag"],
	});

	if (articles.length === 0) return notFound();

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
				<h1 className="capitalize">{params.slug.replace("-", " ")}</h1>
				{articles && (
					<ul className="pl-0">
						{articles.map(
							(article) =>
								article && (
									<Card
										body={article.body}
										category={article.category}
										key={article.slug.current}
										slug={article.slug.current}
										title={article.title}
										excerpt={article.excerpt}
										date={article.publishedAt}
										readingTime={article.estimatedReadingTime}
									/>
								),
						)}
					</ul>
				)}
			</section>
		</Layout>
	);
}
