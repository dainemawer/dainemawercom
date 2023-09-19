import type { FC } from "react";
import type { CardProps } from "./Card.types";
import Link from "next/link";
import { LocalDate } from "~components/LocalDate/LocalDate";

import styles from "./Card.module.css";

export const Card: FC<CardProps> = ({ slug, title, excerpt, date }) => {
	return (
		<article id="" aria-label="" className={styles.article}>
			<h3>
				<Link href={`/articles/${slug}`}>{title}</Link>
			</h3>
			<p>{excerpt}</p>
			<LocalDate dateString={date} />
		</article>
	);
};

Card.displayName = "Card";
