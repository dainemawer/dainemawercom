import { defineType } from "sanity";

export default defineType({
	name: "customCode",
	title: "Code Block",
	type: "object",
	fields: [
		{
			name: "language",
			title: "Language",
			type: "string",
			options: {
				list: [
					{ title: "JavaScript", value: "javascript" },
					{ title: "TypeScript", value: "typescript" },
					{ title: "HTML", value: "html" },
					{ title: "CSS", value: "css" },
					{ title: "SCSS", value: "scss" },
					{ title: "Markdown", value: "markdown" },
					{ title: "JSON", value: "json" },
					{ title: "Bash", value: "bash" },
					{ title: "PHP", value: "php" },
					{ title: "YAML", value: "yaml" },
					{ title: "Python", value: "python" },
				],
			},
		},
		{
			name: "content",
			title: "Code Content",
			type: "text",
		},
	],
});
