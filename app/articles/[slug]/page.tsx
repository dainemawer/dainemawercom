import type { Post } from "~types";
import type { Metadata } from "next";
import { Code } from "bright";
import speakingurl from "speakingurl";

import { BlogPosting, BreadcrumbList, WithContext } from "schema-dts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Balancer } from "react-wrap-balancer";
import Layout from "~components/Layout/Layout";
import { LocalDate } from "~components/LocalDate/LocalDate";
import { PostNavigation } from "~components/PostBody/Navigation";
import { AuthorBio } from "~components/AuthorBio/AuthorBio";
import { Progress } from "~components/Progress/Progress";
import { Breadcrumbs } from "~components/Breadcrumbs/Breadcrumbs";
import { Tags } from "~components/Tags/Tags";
import { TableOfContents } from "~components/TableOfContents/TableOfContents";
import { PortableText } from "@portabletext/react";
import { FAQ } from "~components/FAQ/FAQ";

import styles from "./article.module.css";

import { sanityFetch } from "../../../sanity/lib/client";
import { fetchAllBlogPosts } from "../../../sanity/lib/queries";

import { parseOutline } from "~lib/outline";

type OpenGraphType = "article" | "website" | "book" | "profile" | "video.other";
type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

export async function generateStaticParams() {
	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
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
	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});
	const article = articles.find((a) => a.slug.current === params.slug);
	const description = article?.metaDescription || article?.excerpt;
	const keywords = article?.seo?.keywords?.join(", ");
	const ogImage = article?.seo?.socialSharing?.ogImage?.asset?.url;
	const twitterCard = (article?.seo?.socialSharing?.twitterCard ||
		"summary_large_image") as TwitterCardType;

	// Map article type to OpenGraph type
	const getOpenGraphType = (type?: string): OpenGraphType => {
		switch (type?.toLowerCase()) {
			case "blogposting":
			case "newsarticle":
			case "techarticle":
			case "howto":
				return "article";
			default:
				return "article";
		}
	};

	return {
		title: article?.title,
		description,
		keywords,
		openGraph: {
			title: article?.title,
			description,
			url: `https://dainemawer.com/articles/${params.slug}`,
			siteName: "Daine Mawer",
			images: ogImage ? [{ url: ogImage }] : undefined,
			type: getOpenGraphType(article?.seo?.structuredData?.articleType),
		},
		twitter: {
			card: twitterCard,
			title: article?.title,
			description,
			images: ogImage ? [ogImage] : undefined,
		},
		alternates: {
			canonical:
				article?.canonical || `https://dainemawer.com/articles/${params.slug}`,
		},
	};
};

const components = {
	block: {
		h3: ({ children }) => {
			return <h3 id={`${speakingurl(children[0])}`}>{children}</h3>;
		},
	},
	types: {
		code: (props: any) => {
			return (
				<Code lang={props.value.language} lineNumbers>
					{props.value.code as any}
				</Code>
			);
		},
		faq: (props: any) => {
			return (
				<FAQ question={props.value.question} answer={props.value.answer} />
			);
		},
	},
};

async function getData({ slug }: { slug: string }) {
	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});

	const currentArticle = articles.findIndex((a) => a.slug.current === slug);
	const article = articles[currentArticle];
	const { ...rest } = article;

	const previous = articles[currentArticle + 1];
	const next = articles[currentArticle - 1];

	return {
		previous,
		next,
		article,
		...rest,
	};
}

export default async function SinglePost({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const { article, previous, next } = await getData(params);
	const outline = parseOutline(article?.body);

	if (!article) return notFound();

	const schema: WithContext<BlogPosting> = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: `${article?.title}`,
		alternativeHeadline: `${article?.title}`,
		image: "http://dainemawer.com/opengraph.jpg",
		timeRequired: `{article?.estimatedReadingTime} min read`,
		editor: "Daine Mawer",
		publisher: "Daine Mawer",
		url: `https://dainemawer.com/${params.slug}`,
		datePublished: `${article?.publishedAt}`,
		dateCreated: `${article?.publishedAt}`,
		dateModified: `${article?.publishedAt}`,
		description: `${article?.excerpt}`,
		// articleBody: `${post?.body}`,
		author: {
			"@type": "Person",
			name: "Daine Mawer",
		},
	};

	const breadcrumbSchema: WithContext<BreadcrumbList> = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://dainemawer.com",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Articles",
				item: "https://dainemawer.com/articles",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `${article.category.title}`,
				item: `https://dainemawer.com/category/${article.category.slug.current}`,
			},
		],
	};

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
			<Progress />
			<article
				id=""
				className={`section is-${article.category.slug.current}-page`}
				aria-label=""
			>
				<Breadcrumbs
					category={article.category.slug.current}
					slug={article.slug.current}
					title={article.title}
				/>
				<header className={styles.header}>
					<h1>
						<Balancer>{article?.title}</Balancer>
					</h1>
					<div className="flex items-center justify-center">
						<Link
							className="capitalize"
							href={`/category/${article.category.slug.current}`}
						>
							{article.category.title}
						</Link>
						<span className="mx-4">|</span>
						<LocalDate dateString={article?.publishedAt} />
						<span className="mx-4">|</span>
						<p className={styles.readingTime}>
							{article.estimatedReadingTime} min read
						</p>
					</div>
				</header>
				<TableOfContents outline={outline as any} />
				<PortableText
					components={components as any}
					value={article.body as any}
				/>
			</article>
			<Tags tags={article.tags} />
			<AuthorBio
				excerpt={article?.excerpt}
				title={article?.excerpt}
				slug={params.slug}
			/>
			<PostNavigation previous={previous} next={next} />
		</Layout>
	);
}
