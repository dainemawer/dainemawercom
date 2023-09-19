import { Metadata } from "next";
import { Person, WithContext } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { Hero } from "~components/Hero/Hero";
import { Newsletter } from "~components/Newsletter/Newsletter";
import { RecentlyPublished } from "~components/RecentlyPublished/RecentlyPublished";
import { getPosts } from "~lib/posts";

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

	const posts = await getPosts();

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<Hero />
			<RecentlyPublished posts={posts} />
			<Newsletter />
		</Layout>
	);
}
