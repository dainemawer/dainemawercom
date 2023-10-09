import { Fragment } from "react";
import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { Card } from "~components/Card/Card";
import { Schema } from "~components/Schema/Schema";

import { getPosts } from "~lib/posts";

export const metadata = {
	title: "Articles",
	alternates: {
		canonical: "https://dainemawer.com/articles",
	},
	openGraph: {
		title: "Articles",
		description:
			"Daine Mawers Blog - find useful articles that I post from time to time outlining my experience as a Frontend Engineer and Engineering Manager.",
		url: "https://dainemawer.com/articles",
	},
};

export default async function Articles() {
	const posts = await getPosts();

	if (!posts) return null;

	const years: any = posts.map(
		(post) => post && new Date(post.date).getFullYear(),
	);
	const dedupedYears = years.filter(function (item: any, pos: any) {
		return years.indexOf(item) == pos;
	});

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
				{dedupedYears &&
					dedupedYears.map((year: any, index: any) => {
						return (
							<Fragment key={year}>
								<div>{year}</div>
								<ul className="pl-0">
									{posts &&
										posts
											.sort(
												(a, b) =>
													new Date(b.date).getTime() -
													new Date(a.date).getTime(),
											)
											.filter(
												(post) =>
													post && new Date(post.date).getFullYear() === year,
											)
											.map(
												(post) =>
													post && (
														<Card
															key={post.slug}
															slug={post.slug}
															title={post.title}
															excerpt={post.excerpt}
															date={post.date}
														/>
													),
											)}
								</ul>
							</Fragment>
						);
					})}
			</section>
		</Layout>
	);
}
