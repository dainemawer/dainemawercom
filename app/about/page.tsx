import { Metadata } from "next";
import { WebPage, WithContext } from "schema-dts";
import Image from "next/image";
import Layout from "~components/Layout/Layout";
import { Recommendations } from "~components/Recommendations/Recommendations";

import styles from "./about.module.css";

export const metadata: Metadata = {
	title: "About",
	description:
		"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	alternates: {
		canonical: "https://dainemawer.com/about",
	},
	openGraph: {
		title: "About",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
		url: "https://dainemawer.com/about",
	}
};

export default function About() {
	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "About Daine Mawer",
		description:
			"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
	};

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<section className="section">
				<header className={styles.header}>
					<figure className={styles.figure}>
						<Image
							src="/dainemawer.jpeg"
							alt="Daine in Iceland"
							width={65}
							height={65}
							className="object-cover rounded-full"
						/>
					</figure>
					<h1>Hey! Im Daine.</h1>
				</header>
				<p>
					An Associate Director of Front-end Engineering, EMEA at 10up – a
					full-service agency that&apos;s worked with big names like Google,
					TIME, ESPN, and BBC America. With over 12 years of experience under
					his belt, he&apos;s basically a self-taught wizard when it comes to
					Front-end Engineering and web performance. His mission? Making awesome
					user experiences available to all.
				</p>

				<p>
					In the world of Front-end Engineering, Daine&apos;s like the tech guru
					you wish you had as a friend. He&apos;s known for being the go-to
					person, whether you need advice, a great article, or an inspiring
					talk. Plus, he&apos;s a certified Scrum Master with Agile42 and
					can&apos;t get enough of tech toys like React, NextJS, TypeScript,
					Storybook, Jest, and more.
				</p>

				<p>
					Over at 10up, Daine&apos;s the one who makes sure projects run like a
					well-oiled machine. He keeps the front-end engineers in check and
					drops wisdom on infrastructure, architecture, and best practices.
				</p>

				<p>
					Lately, he&apos;s been all about boosting web performance worldwide.
					He&apos;s been jet-setting, sharing his wisdom, and helping the team
					up their game. He&apos;s been writing docs, setting the gold standard,
					and making sure clients and teams are on the same wavelength.
				</p>

				<section className={`${styles.resume} not-prose`}>
					<h4 className="font-bold">Looking for my resume?</h4>
					<a className={styles.button} href="https://www.linkedin.com/resume-builder/urn:li:fsd_memberResume:67120068/" target="_blank" rel="noopener noreferrer">
						View Resume
					</a>
				</section>

				<p>
					Daine&apos;s got a BA in Strategic Brand Communication Degree from
					Vega and a pretty impressive resume in tech. He&apos;s been a Training
					Coordinator and Lead Corporate Trainer at Friends of Design and even a
					Lead Open-Source Engineer for 24.com.
				</p>

				<p>
					Besides being a WordPress whiz, Daine&apos;s all about open-source and
					lifting up women in tech. He&apos;s a true champion of equality and
					skills-building.
				</p>

				<p>
					Daine&apos;s secret sauce? He&apos;s a learning machine with a knack
					for Design, UX, Accessibility, and Front-end tech. Change is his
					playground, and he&apos;s a pro at helping teams cook up front-end
					strategies.
				</p>

				<Recommendations title="Endorsements" />
			</section>
		</Layout>
	);
}
