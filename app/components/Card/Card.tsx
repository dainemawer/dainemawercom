import type { FC } from "react";
import type { CardProps } from "./Card.types";
import Link from "next/link";
import { LocalDate } from "~components/LocalDate/LocalDate";
import readingTime from "reading-time";

import styles from "./Card.module.css";

export const Card: FC<CardProps> = ({
	category,
	slug,
	title,
	excerpt,
	body,
	date,
}) => {
	const label = category.replace("-", " ");
	const { text } = readingTime(body);

	return (
		<article id="" aria-label="" className={styles.article}>
			<h3>
				<Link href={`/articles/${slug}`}>{title}</Link>
			</h3>
			<p>{excerpt}</p>
			<ul className="flex list-none p-0 m-0 not-prose">
				{category && (
					<li className="p-0 mr-4 relative">
						<span
							className={`capitalize text-sm inline-block border py-1 px-2 rounded-md border-slate-300 bg-slate-50 is-${category}`}
						>
							{label}
						</span>
					</li>
				)}
				{date && (
					<li className="p-0">
						<LocalDate className="text-sm" dateString={date} />
					</li>
				)}
				<li className="ml-4">
					<span>|</span>
				</li>
				{text && (
					<li className="p-0 ml-4">
						<span className="text-sm">{text}</span>
					</li>
				)}
			</ul>
		</article>
	);
};

Card.displayName = "Card";
