import { defineType } from "sanity";

export default defineType({
	name: "articleMetadata",
	type: "object",
	title: "Article Metadata",
	fields: [
		{
			name: "keywords",
			type: "array",
			title: "Keywords",
			description: "Add relevant keywords for SEO (max 5-7 keywords)",
			of: [{ type: "string" }],
			validation: (Rule) => Rule.max(7),
		},
		{
			name: "structuredData",
			type: "object",
			title: "Structured Data",
			fields: [
				{
					name: "articleType",
					type: "string",
					title: "Article Type",
					options: {
						list: [
							{ title: "Blog Posting", value: "BlogPosting" },
							{ title: "News Article", value: "NewsArticle" },
							{ title: "Tech Article", value: "TechArticle" },
							{ title: "How-to", value: "HowTo" },
						],
					},
					initialValue: "BlogPosting",
				},
			],
		},
		{
			name: "socialSharing",
			type: "object",
			title: "Social Sharing",
			fields: [
				{
					name: "ogImage",
					type: "image",
					title: "Social Share Image",
					description:
						"Custom image for social media sharing (1200x630px recommended)",
					options: {
						hotspot: true,
					},
				},
				{
					name: "twitterCard",
					type: "string",
					title: "Twitter Card Type",
					options: {
						list: [
							{ title: "Summary", value: "summary" },
							{ title: "Summary Large Image", value: "summary_large_image" },
						],
					},
					initialValue: "summary_large_image",
				},
			],
		},
	],
});
