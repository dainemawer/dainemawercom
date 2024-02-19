import type { FC } from "react";
import type { TableOfContentProps } from "./TableOfContents.types";
import styles from "./TableOfContents.module.css";

export const TableOfContents: FC<TableOfContentProps> = ({
	outline,
	noWrapper,
}) => {
	if (!outline) return null;
	return (
		<div className={noWrapper ? "" : styles.toc}>
			<ol>
				{outline.map((heading) => (
					<li key={heading.slug}>
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
