import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";

import { getPosts, getPostPages } from "~lib/posts";
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
	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = await getPostPages();
	const posts = await getPosts();

	if (!posts) return null;

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
				{posts && (
					<ul className="pl-0">
						{posts
							.sort(
								(a, b) =>
									new Date(b.date).getTime() - new Date(a.date).getTime(),
							)
							.slice((currentPage - 1) * 5, currentPage * 5)
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
				<div>
					<Pagination totalPages={totalPages} />
				</div>
			</section>
		</Layout>
	);
}
