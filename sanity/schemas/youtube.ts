import { defineType } from "sanity";

export default defineType({
	name: "youtube",
	type: "object",
	title: "YouTube Embed",
	fields: [
		{
			name: "url",
			type: "url",
			title: "YouTube video URL",
			description:
				"Paste the video URL from YouTube (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "title",
			type: "string",
			title: "Video Title",
			description: "Add a title for better accessibility and SEO",
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: "title",
			url: "url",
		},
		prepare({ title, url }) {
			return {
				title: title || "Untitled Video",
				subtitle: url,
			};
		},
	},
});
