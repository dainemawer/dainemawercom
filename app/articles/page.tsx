import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";
import { Post } from "~types";

import { sanityFetch } from "../../sanity/lib/client";
import { fetchAllBlogPosts } from "../../sanity/lib/queries";

import { Pagination } from "~components/Pagination/Pagination";

export const metadata = {
	title: "Articles",
	description:
		"Find useful articles that I post from time to time outlining my experience as a Frontend Engineer and Engineering Manager.",
	alternates: {
		canonical: "https://dainemawer.com/articles",
	},
	openGraph: {
		title: "Articles",
		url: "https://dainemawer.com/articles",
	},
};

export default async function Articles({
	searchParams,
}: {
	searchParams?: {
		page?: string;
		query?: string;
	};
}) {
	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});

	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = Math.ceil(articles.length / 5);

	if (!articles) return null;

	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Daine Mawers Blog",
		description:
			"Daine Mawers Blog - find useful articles that I post from time to time outlining my experience as a Frontend Engineer and Engineering Manager.",
	};

	return (
		<Layout>
			<Schema schema={schema} />
			<section className="prose">
				<h1>Articles</h1>
				{articles && (
					<ul className="pl-0">
						{articles
							.slice((currentPage - 1) * 5, currentPage * 5)
							.map(
								(article) =>
									article && (
										<Card
											body={article.body || "No content"}
											category={article.category}
											key={article._id}
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
				<div>
					<Pagination totalPages={totalPages} />
				</div>
			</section>
		</Layout>
	);
}
