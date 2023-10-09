import Link from "next/link";
import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";
import { Schema } from "~components/Schema/Schema";

import { getPatterns } from "~lib/patterns";

export const metadata = {
	title: "Patterns",
	alternates: {
		canonical: "https://dainemawer.com/articles/patterns",
	},
	openGraph: {
		title: "Patterns",
		description:
			"Daine Mawers Blog - find useful articles that I post from time to time outlining my experience as a Frontend Engineer and Engineering Manager.",
		url: "https://dainemawer.com/articles/patterns",
	},
};

export default async function Patterns() {
	const patterns = await getPatterns();

	if (!patterns) return null;

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
				<h1>Patterns</h1>
				{patterns && (
					<ul>
						{patterns.map((pattern) => (
							<li key={pattern.slug}>
								<Link href={`/patterns/${pattern.slug}`}>{pattern.title}</Link>
							</li>
						))}
					</ul>
				)}
			</section>
		</Layout>
	);
}
