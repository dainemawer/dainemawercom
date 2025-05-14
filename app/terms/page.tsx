import { Metadata } from "next";
import { WebPage, WithContext } from "schema-dts";
import Layout from "~components/Layout/Layout";

import styles from "../about/about.module.css";

export const metadata: Metadata = {
	title: "Terms",
	description:
		"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	alternates: {
		canonical: "https://dainemawer.com/terms",
	},
	openGraph: {
		title: "Terms",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
		url: "https://dainemawer.com/terms",
		siteName: "Daine Mawer",
	},
};

export default function Terms() {
	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Terms",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	};

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<section className="prose prose-zinc prose-h1:leading-snug prose-h1:font-bold prose-h1:mt-8 prose-p:leading-loose prose-a:text-blue-600 prose-a:underline-offset-2 prose-a:decoration-2 prose-a:hover:underline prose-a:no-underline max-w-none lg:prose-lg">
				<h1>Terms</h1>
				<p>Last update: October 09, 2023</p>
				<p>
					If you continue to browse and use this website, you are agreeing to
					comply with and be bound by the following terms and conditions of use,
					which together with our privacy policy govern Daine Mawer’s
					relationship with you in relation to this website. If you disagree
					with any part of these terms and conditions, please do not use our
					website. The term ‘Daine Mawer’ or ‘us’ or ‘we’ refers to the owner of
					the website whose registered office is [address]. The term ‘you’
					refers to the user or viewer of our website.
				</p>
				<p>
					The use of this website is subject to the following terms of use: The
					content of the pages of this website is for your general information
					and use only. It is subject to change without notice. This website
					uses cookies to monitor browsing preferences.
				</p>
				<p>
					Neither we nor any third parties provide any warranty or guarantee as
					to the accuracy, timeliness, performance, completeness or suitability
					of the information and materials found or offered on this website for
					any particular purpose.
				</p>
				<p>
					You acknowledge that such information and materials may contain
					inaccuracies or errors and we expressly exclude liability for any such
					inaccuracies or errors to the fullest extent permitted by law. Your
					use of any information or materials on this website is entirely at
					your own risk, for which we shall not be liable.
				</p>
				<p>
					It shall be your own responsibility to ensure that any products,
					services or information available through this website meet your
					specific requirements. This website contains material which is owned
					by or licensed to us. This material includes, but is not limited to,
					the design, layout, look, appearance and graphics.
				</p>
				<p>
					Reproduction is prohibited other than in accordance with the copyright
					notice, which forms part of these terms and conditions. All trademarks
					reproduced in this website, which are not the property of, or licensed
					to the operator, are acknowledged on the website.
				</p>
				<p>
					Unauthorised use of this website may give rise to a claim for damages
					and/or be a criminal offence. From time to time, this website may also
					include links to other websites. These links are provided for your
					convenience to provide further information. They do not signify that
					we endorse the website(s).
				</p>
				<p>
					We have no responsibility for the content of the linked website(s).
					Your use of this website and any dispute arising out of such use of
					the website is subject to the laws of South Africa.
				</p>
			</section>
		</Layout>
	);
}
