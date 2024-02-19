import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { notFound } from "next/navigation";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";
import type { Post } from "~types";
import type { Metadata } from "next";

import {
	fetchAllPostsByCategory,
	fetchAllCategories,
} from "../../../sanity/lib/queries";
import { sanityFetch } from "../../../sanity/lib/client";

export async function generateStaticParams() {
	const articles: Post[] = await sanityFetch({
		query: fetchAllCategories,
		tags: ["category"],
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
	const articles: Post[] = await sanityFetch({
		query: fetchAllPostsByCategory,
		qParams: { slug: params.slug },
		tags: ["category"],
	});

	if (articles.length === 0) return notFound();

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
										readingTime={article.estimatedReadingTime}
										excerpt={article.excerpt}
										date={article.publishedAt}
									/>
								),
						)}
					</ul>
				)}
			</section>
		</Layout>
	);
}
