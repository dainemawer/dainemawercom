import type { FC } from "react";
import type { TableOfContentProps } from "./TableOfContents.types";

export const TableOfContents: FC<TableOfContentProps> = ({
	outline,
	noWrapper,
}) => {
	if (!outline) return null;
	return (
		<div
			className={
				noWrapper
					? ""
					: "bg-gray-50 mt-8 mb-0 pt-6 pb-4 border-t-4 border-blue-400 px-8"
			}
		>
			<ol className="m-0">
				{outline.map((heading) => (
					<li className="my-0" key={heading.slug}>
						<a href={"#" + heading.slug}>{heading.text}</a>
						{heading.subheadings.length > 0 && (
							<TableOfContents outline={heading.subheadings} noWrapper />
						)}
					</li>
				))}
			</ol>
		</div>
	);
};
