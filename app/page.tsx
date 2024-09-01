import { Metadata } from "next";
import { Person, WithContext } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { Hero } from "~components/Hero/Hero";
import { Newsletter } from "~components/Newsletter/Newsletter";
import { RecentlyPublished } from "~components/RecentlyPublished/RecentlyPublished";
import { Post } from "~types";

import { sanityFetch } from "../sanity/lib/client";
import { fetchAllBlogPosts } from "../sanity/lib/queries";

export const metadata: Metadata = {
	title: "Home | Daine Mawer",
	description:
		"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	alternates: {
		canonical: "https://dainemawer.com/",
	},
	openGraph: {
		title: "Home",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
		url: "https://dainemawer.com/",
		siteName: "Daine Mawer",
	},
};

export default async function Home() {
	const schema: WithContext<Person> = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Daine Mawer",
		jobTitle: "Engineering Manager and Frontend Engineer",
		image: "https://dainemawer.com/dainemawer.jpeg",
		sameAs: [
			"https://twitter.com/dainemawer",
			"https://www.linkedin.com/in/dainemawer",
			"https://github.com/dainemawer",
		],
	};

	const articles: Post[] = await sanityFetch({
		query: fetchAllBlogPosts,
		tags: ["post"],
	});

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<Hero />
			<RecentlyPublished posts={articles} />
			<Newsletter />
		</Layout>
	);
}
