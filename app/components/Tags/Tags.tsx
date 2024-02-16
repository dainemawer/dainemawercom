import type { FC } from "react";
import Link from "next/link";

import styles from "./Tags.module.css";
import { TagsProps } from "./Tags.types";

export const Tags: FC<TagsProps> = ({ tags }) => {
	const tagsAsArrayWithLinks = tags.map((tag) => (
		<li className={styles.tag} key={tag.slug.current}>
			<Link href={`/tags/${tag.slug.current}`}>#{tag.title.toLowerCase()}</Link>
		</li>
	));

	return (
		<ul className={styles.tags}>
			<li className={styles.tagHeading}>
				<strong>Tags:</strong>
			</li>
			{tagsAsArrayWithLinks}
		</ul>
	);
};
