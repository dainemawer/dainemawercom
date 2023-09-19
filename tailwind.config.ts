import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				"fade-in": "fade-in 300ms ease-in 1",
			},
		},
		container: {
			center: true,
		},
	},
	darkMode: "class",
	plugins: [typography],
} satisfies Config;
