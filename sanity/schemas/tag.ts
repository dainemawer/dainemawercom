import { defineField, defineType } from "sanity";

export default defineType({
	name: "tag",
	title: "Tags",
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
			name: "description",
			title: "Description",
			type: "text",
		}),
	],
});
