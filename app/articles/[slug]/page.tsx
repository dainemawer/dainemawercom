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
import readingTime from "reading-time";

import styles from "./article.module.css";

import { getPosts, getPost } from "~lib/posts";

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
	const post = (await getPosts()).find((p) => p?.slug === params.slug);
	return {
		title: post?.title,
		description: post?.excerpt,
		openGraph: {
			title: post?.title,
			description: post?.excerpt,
			url: `https://dainemawer.com/blog/${params.slug}`,
		},
		alternates: {
			canonical: `https://dainemawer.com/blog/${params.slug}`,
		},
	};
};

async function getData({ slug }: { slug: string }) {
	const posts = await getPosts();

	const postIndex = posts && posts.findIndex((p) => p?.slug === slug);
	const post = posts && posts[postIndex];
	const { ...rest } = post;

	return {
		previous: (posts && posts[postIndex + 1]) || null,
		next: (posts && posts[postIndex - 1]) || null,
		...rest,
	};
}

export default async function Post({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const post = await getPost(params.slug);

	if (!post) return notFound();

	const data = await getData(params);
	const { text } = readingTime(post?.body);

	const schema: WithContext<BlogPosting> = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: `${post?.title}`,
		alternativeHeadline: `${post?.title}`,
		image: "http://dainemawer.com/opengraph.jpg",
		timeRequired: `${text}`,
		editor: "Daine Mawer",
		publisher: "Daine Mawer",
		url: `https://dainemawer.com/${params.slug}`,
		datePublished: `${post?.date}`,
		dateCreated: `${post?.date}`,
		dateModified: `${post?.date}`,
		description: `${post?.excerpt}`,
		articleBody: `${post?.body}`,
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
						<Balancer>{post?.title}</Balancer>
					</h1>
					<div className="flex items-center justify-center">
						<LocalDate dateString={post?.date} />
						<span className="mx-4">|</span>
						<p className={styles.readingTime}>{text}</p>
					</div>
				</header>
				<PostBody>{post?.body}</PostBody>
			</article>
			<AuthorBio
				excerpt={post?.excerpt}
				title={post?.excerpt}
				slug={params.slug}
			/>
			<PostNavigation previous={data?.previous} next={data?.next} />
		</Layout>
	);
}
