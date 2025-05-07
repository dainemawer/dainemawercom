import { defineType } from "sanity";

export default defineType({
	name: "faq",
	type: "object",
	title: "FAQ Item",
	fields: [
		{
			name: "question",
			type: "string",
			title: "Question",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "answer",
			type: "text",
			title: "Answer",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "question",
			subtitle: "answer",
		},
		prepare({ title, subtitle }) {
			return {
				title: title || "Untitled Question",
				subtitle: subtitle
					? subtitle.substring(0, 50) + "..."
					: "No answer provided",
			};
		},
	},
});
