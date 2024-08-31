import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./styles.css";
import Script from "next/script";

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
			<GoogleTagManager gtmId="GTM-THBB4GB" />
			<SpeedInsights />
			<Script strategy="lazyOnload" id="crisp">
				{`window.$crisp=[];window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_ID}";(function(){d = document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
			</Script>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
