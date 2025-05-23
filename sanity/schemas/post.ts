import { defineField, defineType } from "sanity";

export default defineType({
	name: "post",
	title: "Articles",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "canonical",
			title: "Canonical",
			type: "url",
		}),
		defineField({
			name: "metaDescription",
			title: "Meta Description",
			type: "text",
			description:
				"Override the default meta description for SEO. If left empty, the excerpt will be used.",
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: [{ type: "category" }],
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "reference", to: { type: "tag" } }],
		}),
		defineField({
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		}),
		defineField({
			name: "includeInSitemap",
			title: "Include In Sitemap",
			type: "boolean",
			initialValue: true,
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
		}),
		defineField({
			name: "seo",
			title: "SEO & Social Sharing",
			type: "articleMetadata",
			description: "Additional metadata for SEO and social sharing",
		}),
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
});
