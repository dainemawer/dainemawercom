import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { GuideCard } from "~components/GuideCard/GuideCard";
import { Schema } from "~components/Schema/Schema";
import { Post } from "~types";

import { sanityFetch } from "../../sanity/lib/client";
import { fetchAllGuides } from "../../sanity/lib/queries";

import { Pagination } from "~components/Pagination/Pagination";

export const metadata = {
	title: "Guides",
	description:
		"Long-form technical guides and tutorials about software development, engineering management, and technology.",
	alternates: {
		canonical: "https://dainemawer.com/guides",
	},
	openGraph: {
		title: "Guides",
		url: "https://dainemawer.com/guides",
		siteName: "Daine Mawer",
	},
};

export default async function Guides({
	searchParams,
}: {
	searchParams?: {
		page?: string;
		query?: string;
	};
}) {
	const guides: Post[] = await sanityFetch({
		query: fetchAllGuides,
		tags: ["guide"],
	});

	const currentPage = Number(searchParams?.page) || 1;
	const totalPages = Math.ceil(guides.length / 5);

	if (!guides) return null;

	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Daine Mawers Guides",
		description:
			"Long-form technical guides and tutorials about software development, engineering management, and technology.",
	};

	return (
		<Layout>
			<Schema schema={schema} />
			<section className="prose">
				<h1>Guides</h1>
				{guides && (
					<ul className="pl-0">
						{guides
							.slice((currentPage - 1) * 5, currentPage * 5)
							.map(
								(guide) =>
									guide && (
										<GuideCard
											key={guide._id}
											slug={guide.slug.current}
											title={guide.title}
											excerpt={guide.excerpt}
											date={guide.publishedAt}
											readingTime={guide.estimatedReadingTime}
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
