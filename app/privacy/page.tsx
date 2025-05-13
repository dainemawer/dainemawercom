import { Metadata } from "next";
import { WebPage, WithContext } from "schema-dts";
import Layout from "~components/Layout/Layout";

export const metadata: Metadata = {
	title: "Privacy",
	description:
		"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	alternates: {
		canonical: "https://dainemawer.com/privacy",
	},
	openGraph: {
		title: "Privacy",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
		url: "https://dainemawer.com/privacy",
		siteName: "Daine Mawer",
	},
};

export default function Privacy() {
	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Privacy",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	};

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<section className="prose prose-zinc prose-h1:leading-snug prose-h1:font-bold prose-h1:mt-8 prose-p:leading-loose prose-a:text-blue-600 prose-a:underline-offset-2 prose-a:decoration-2 hover:prose-a:underline prose-a:no-underline max-w-none lg:prose-lg">
				<h1>Privacy</h1>
				<p>
					Daine Mawer&apos;s Privacy Policy is designed to help you understand
					how we collect and use the personal information you decide to share,
					and help you make informed decisions when using Daine Mawer.
				</p>

				<p>
					By using or accessing Daine Mawer, you agree to be bound by the terms
					of this Privacy Policy.If you do not agree to these terms, please do
					not use Daine Mawer.
				</p>

				<h2>Information We Collect and How We Use It</h2>

				<p>
					We use commercially reasonable efforts to ensure that the collection
					of personal information is limited to that which is necessary to
					fulfill the purposes identified below. If we use your information in a
					manner different than the purpose for which it is collected, then we
					will ask you for your consent prior to such use.
				</p>

				<p>
					<strong>
						<em>Feedback</em>
					</strong>
					&nbsp;- If you contact me to provide feedback, register a complaint,
					or ask a question, we will record any personal information and other
					content that you provide in your communication so that we can
					effectively respond to your communication. You do not need a User
					account to contact Daine Mawer. Please understand that we are not
					obligated to compensate you for any feedback you provide.
				</p>

				<p>
					<strong>
						<em>Cookies</em>
					</strong>
					&nbsp;- We send cookies to your computer in order to uniquely identify
					your browser and improve the quality of our service. The term
					&quot;cookies&quot; refers to small pieces of information that a
					website sends to your computer&apos;s hard drive while you are viewing
					the site. We may use both session cookies (which expire once you close
					your browser) and persistent cookies (which stay on your computer
					until you delete them). Persistent cookies can be removed by following
					your browser help file directions.
				</p>

				<p>
					<strong>
						<em>
							This Privacy Policy covers the use of cookies by Daine Mawer and
							does not cover the use of cookies or other tracking technologies
							by any of its advertisers.
						</em>
					</strong>
				</p>

				<h2>Controlling Your Personal Data</h2>

				<p>
					Although we allow you to set privacy options that limit access to the
					information on your User profile, please be aware that no security
					measures are perfect or impenetrable. We cannot control the actions of
					other Users with whom you may choose to share your User profile and
					information. Therefore, we cannot and do not guarantee that the
					User-Generated content you post on the Website will not be viewed by
					unauthorized persons. We are not responsible for the circumvention of
					any privacy settings or security measures contained on the Website.
					You understand and acknowledge that, even after removal, copies of
					your User-Generated Content may remain viewable in cached and archived
					pages or if other Users have copied or stored your User-Generated
					Content.
				</p>

				<p>
					You may request deletion of your Personal Information by email
					submission to&nbsp;
					<a href="mailto:%20hello@dainemawer.com">hello@dainemawer.com</a>
				</p>

				<p>
					<strong>
						<em>
							You hereby acknowledge that Daine Mawer is not responsible for any
							intercepted information sent via the internet, and you hereby
							release us from any and all claims arising out of or related to
							the use of intercepted information in any unauthorized manner.
						</em>
					</strong>
				</p>

				<h2>E-mails and Opt-out</h2>

				<p>
					You may opt-out of receiving personal messages from specific Users by
					changing the notification settings under the “Account” tab after you
					log on to Daine Mawer Unregistered Users who receive e-mails from us
					may also opt-out of receiving further e-mails by following the
					instructions contained in our e-mails.
				</p>

				<p>
					Managing the cookies is also possible in your web browser. You can
					either delete cookies from your cookie folder once you have finished
					your visit at our website or you can set your preferences with regard
					to the use of cookies before you begin browsing our website. Further
					information can be found at:&nbsp;
					<a
						href="https://www.google.com/intl/en/chrome/privacy/"
						target="_blank"
						rel="noreferrer noopener"
					>
						Google
					</a>
					&nbsp;/&nbsp;
					<a
						href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox"
						target="_blank"
						rel="noreferrer noopener"
					>
						Firefox
					</a>
					&nbsp;/&nbsp;
					<a
						href="https://support.microsoft.com/en-us/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
						target="_blank"
						rel="noreferrer noopener"
					>
						Windows
					</a>
					&nbsp;/&nbsp;
					<a
						href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
						target="_blank"
						rel="noreferrer noopener"
					>
						Safari
					</a>
					.
				</p>

				<p>
					Please note, that deleting or rejecting cookies may adversely affect
					your user experience of our website. Also note that opting out does
					not mean you will stop seeing advertisements, but that the
					advertisements you do see will not be influenced by the usage data
					collected by Daine Mawer. You may still see ads based on factors such
					as your overall location, your IP address, your browser type, and your
					search terms.
				</p>

				<h2>User Rights under GDPR</h2>

				<p>
					You have various rights under the GDPR as regards personal data we may
					hold on you. You have the right: to be informed as to what data we
					hold and request copies of such; to have us rectify or complete any
					such data you deem incorrect or incomplete; to have us erase any such
					data we may hold on you; to ask that we transfer such data to another
					organization or to you; to object to or restrict us from processing
					any such personal data. You also have the right to complain to the
					Information Commissioner&apos;s Officer (ICO), which regulates data
					protection compliance in the UK, if you are unhappy with how we have
					processed any of your personal data.&nbsp;
					<a
						href="https://ico.org.uk/"
						target="_blank"
						rel="noreferrer noopener"
					>
						Visit the ICO&apos;s website for more information.
					</a>
				</p>

				<h2>Third party data collection</h2>

				<h2>Terms of Service, Notices and Revisions</h2>

				<p>
					Your use of Daine Mawer, and any disputes arising from it, is subject
					to this Privacy Policy as well as our Terms of Service and all of its
					dispute resolution provisions including limitation on damages and
					choice of law. We reserve the right to change our Privacy Policy and
					our Terms of Service at any time. Non-material changes and
					clarifications will take effect immediately, and material changes will
					take effect within 30 days of their posting on this site. If we make
					changes, we will post them and will indicate at the top of this page
					the policy&apos;s new effective date. Your continued use of Daine
					Mawer indicates your agreement to these changes. It is solely your
					responsible to check for updates of this policy. We encourage you to
					refer to this policy on an ongoing basis so that you understand our
					current Privacy Policy. Unless stated otherwise, our current Privacy
					Policy applies to all information that we have about you and your
					account.
				</p>

				<h2>Contacting the Website</h2>

				<p>
					If you have any questions about this Privacy Policy, the privacy
					practices of this Website, or if you want to exercise any of the
					rights that you are given under this Privacy Policy, you can contact
					us at&nbsp;
					<a href="mailto:hello@dainemawer.com">hello@dainemawer.com</a>
					<a href="https://www.Daine Mawer.com/"></a>
				</p>
			</section>
		</Layout>
	);
}
