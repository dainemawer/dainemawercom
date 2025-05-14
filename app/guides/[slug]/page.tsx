import type { Post } from "~types";
import type { Metadata } from "next";
import { Code } from "bright";
import speakingurl from "speakingurl";
import Image from "next/image";

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

import { sanityFetch } from "../../../sanity/lib/client";
import { fetchAllGuides, fetchGuideBySlug } from "../../../sanity/lib/queries";

import { parseOutline } from "~lib/outline";

type OpenGraphType = "article" | "website" | "book" | "profile" | "video.other";
type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

export async function generateStaticParams() {
	const guides: Post[] = await sanityFetch({
		query: fetchAllGuides,
		tags: ["guide"],
	});
	return guides.map((guide: Post) => ({ slug: guide.slug.current }));
}

export const generateMetadata = async ({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> => {
	const guides: Post[] = await sanityFetch({
		query: fetchAllGuides,
		tags: ["guide"],
	});
	const guide = guides.find((g) => g.slug.current === params.slug);
	const description = guide?.metaDescription || guide?.excerpt;
	const keywords = guide?.seo?.keywords?.join(", ");
	const ogImage = guide?.seo?.socialSharing?.ogImage?.asset?.url;
	const twitterCard = (guide?.seo?.socialSharing?.twitterCard ||
		"summary_large_image") as TwitterCardType;

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
		title: guide?.title,
		description,
		keywords,
		openGraph: {
			title: guide?.title,
			description,
			url: `https://dainemawer.com/guides/${params.slug}`,
			siteName: "Daine Mawer",
			images: ogImage ? [{ url: ogImage }] : undefined,
			type: getOpenGraphType(guide?.seo?.structuredData?.articleType),
		},
		twitter: {
			card: twitterCard,
			title: guide?.title,
			description,
			images: ogImage ? [ogImage] : undefined,
		},
		alternates: {
			canonical:
				guide?.canonical || `https://dainemawer.com/guides/${params.slug}`,
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
		image: ({ value }: any) => {
			const dimensions = value.asset.metadata?.dimensions;
			const lqip = value.asset.metadata?.lqip;

			return (
				<figure className="my-8">
					<Image
						src={value.asset.url}
						alt={value.alt || ""}
						width={dimensions?.width || 1200}
						height={dimensions?.height || 800}
						className="rounded-lg"
						loading="lazy"
						quality={85}
						placeholder={lqip ? "blur-sm" : "empty"}
						blurDataURL={lqip}
					/>
					{value.caption && (
						<figcaption className="mt-2 text-center text-sm text-gray-500">
							{value.caption}
						</figcaption>
					)}
				</figure>
			);
		},
	},
};

async function getData({ slug }: { slug: string }) {
	const guides: Post[] = await sanityFetch({
		query: fetchAllGuides,
		tags: ["guide"],
	});

	const currentGuide = guides.findIndex((g) => g.slug.current === slug);
	const guide = guides[currentGuide];
	const { ...rest } = guide;

	const previous = guides[currentGuide + 1];
	const next = guides[currentGuide - 1];

	return {
		previous,
		next,
		guide,
		...rest,
	};
}

export default async function SingleGuide({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const { guide, previous, next } = await getData(params);
	const outline = parseOutline(guide?.body);

	if (!guide) return notFound();

	const schema: WithContext<BlogPosting> = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: `${guide?.title}`,
		alternativeHeadline: `${guide?.title}`,
		image: "http://dainemawer.com/opengraph.jpg",
		timeRequired: `{guide?.estimatedReadingTime} min read`,
		editor: "Daine Mawer",
		publisher: "Daine Mawer",
		url: `https://dainemawer.com/guides/${params.slug}`,
		datePublished: `${guide?.publishedAt}`,
		dateCreated: `${guide?.publishedAt}`,
		dateModified: `${guide?.publishedAt}`,
		description: `${guide?.excerpt}`,
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
				name: "Guides",
				item: "https://dainemawer.com/guides",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `${guide.category.title}`,
				item: `https://dainemawer.com/category/${guide.category.slug.current}`,
			},
		],
	};

	return (
		<Layout>
			<div className="h-entry">
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
					className={`section is-${guide.category.slug.current}-page e-content`}
					aria-label=""
				>
					<Breadcrumbs
						category={guide.category.slug.current}
						slug={guide.slug.current}
						title={guide.title}
					/>
					<header className="mb-8 text-center">
						<h1 className="p-name">
							<Balancer>{guide?.title}</Balancer>
						</h1>
						<div className="flex items-center justify-center">
							<Link
								className="capitalize"
								href={`/category/${guide.category.slug.current}`}
							>
								{guide.category.title}
							</Link>
							<span className="mx-4">|</span>
							<LocalDate
								className="dt-published"
								dateString={guide?.publishedAt}
							/>
							<span className="mx-4">|</span>
							<p className="text-sm text-gray-500">
								{guide.estimatedReadingTime} min read
							</p>
						</div>
					</header>
					<TableOfContents outline={outline as any} />
					<PortableText
						components={components as any}
						value={guide.body as any}
					/>
				</article>
				<Tags tags={guide.tags} />
				<AuthorBio
					excerpt={guide?.excerpt}
					title={guide?.excerpt}
					slug={params.slug}
				/>
				<PostNavigation previous={previous} next={next} />
			</div>
		</Layout>
	);
}
