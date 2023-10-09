import type { Post } from "~types";
import type { Metadata } from "next";

import { BlogPosting, WithContext } from "schema-dts";
import { notFound } from "next/navigation";
import { Balancer } from "react-wrap-balancer";
import Layout from "~components/Layout/Layout";
import { PostBody } from "~components/PostBody/PostBody";
import { LocalDate } from "~components/LocalDate/LocalDate";
import { PostNavigation } from "~components/PostBody/Navigation";
import { AuthorBio } from "~components/AuthorBio/AuthorBio";
import { Progress } from "~components/Progress/Progress";

import styles from "./patterns.module.css";

import { getPatterns, getPattern } from "~lib/patterns";

export async function generateStaticParams() {
	const patterns = await getPatterns();
	return patterns.map((pattern: Post) => ({ slug: pattern.slug }));
}

export const generateMetadata = async ({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> => {
	const pattern = (await getPatterns()).find((p) => p?.slug === params.slug);
	return {
		title: pattern?.title,
		description: pattern?.excerpt,
		openGraph: {
			title: pattern?.title,
			description: pattern?.excerpt,
			url: `https://dainemawer.com/patterns/${params.slug}`,
		},
		alternates: {
			canonical: `https://dainemawer.com/patterns/${params.slug}`,
		},
	};
};

async function getData({ slug }: { slug: string }) {
	const patterns = await getPatterns();

	const patternIndex = patterns && patterns.findIndex((p) => p?.slug === slug);
	const post = patterns && patterns[patternIndex];
	const { ...rest } = post;

	return {
		previous: (patterns && patterns[patternIndex + 1]) || null,
		next: (patterns && patterns[patternIndex - 1]) || null,
		...rest,
	};
}

export default async function Pattern({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const pattern = await getPattern(params.slug);

	if (!pattern) return notFound();

	const data = await getData(params);

	const schema: WithContext<BlogPosting> = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: `${pattern?.title}`,
		alternativeHeadline: `${pattern?.title}`,
		image: "http://dainemawer.com/opengraph.jpg",
		editor: "Daine Mawer",
		publisher: "Daine Mawer",
		url: `https://dainemawer.com/${params.slug}`,
		datePublished: `${pattern?.date}`,
		dateCreated: `${pattern?.date}`,
		dateModified: `${pattern?.date}`,
		description: `${pattern?.excerpt}`,
		articleBody: `${pattern?.body}`,
		author: {
			"@type": "Person",
			name: "Daine Mawer",
		},
	};

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<Progress />
			<article id="" className="section" aria-label="">
				<header className={styles.header}>
					<h1>
						<Balancer>{pattern?.title}</Balancer>
					</h1>
					<div className="flex items-center justify-center">
						<LocalDate dateString={pattern?.date} />
					</div>
				</header>
				<PostBody>{pattern?.body}</PostBody>
			</article>
			<AuthorBio
				excerpt={pattern?.excerpt}
				title={pattern?.excerpt}
				slug={params.slug}
			/>
			<PostNavigation previous={data?.previous} next={data?.next} />
		</Layout>
	);
}
