import { Metadata } from "next";

import "./styles.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://dainemawer.com"),
	title: {
		default: "Daine Mawer",
		template: "%s | Daine Mawer",
	},
	openGraph: {
		title: "Daine Mawer",
		description: "Lead Front-end Engineer and Engineering Manager.",
		url: "https://dainemawer.com",
		siteName: "Daine Mawer",
		locale: "en_ZA",
		type: "website",
		images: [
			{
				url: `https://dainemawer.com/api/og?title=${encodeURIComponent(
					"Daine Mawer, Engineering Manager and Front-end Engineer",
				)}`,
				width: 1200,
				height: 630,
				alt: "",
			},
		],
	},
	twitter: {
		title: "Daine Mawer",
		card: "summary_large_image",
		creator: "@daine_mawer",
	},
	alternates: {
		types: {
			"application/rss+xml": "https://dainemawer.com/feed.xml",
		},
	},
	description:
		"Daine Mawer is an Engineering Manager and Frontend Engineer, living in South Africa 🇿🇦",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="scroll-smooth" lang="en">
			<body>{children}</body>
		</html>
	);
}
