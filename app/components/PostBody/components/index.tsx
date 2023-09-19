import { Code } from "bright";
import { MDXComponents } from "mdx/types";

Code.theme = {
	dark: "github-dark",
	light: "github-light",
};

export const mdxComponents: MDXComponents = {
	pre: ({
		children,
		...props
	}: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLPreElement
	>) => {
		return (
			<Code {...props} lineNumbers>
				{children as any}
			</Code>
		);
	},
};
