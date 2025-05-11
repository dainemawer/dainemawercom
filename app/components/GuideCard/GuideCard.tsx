import type { FC } from "react";
import type { GuideCardProps } from "./GuideCard.types";
import Link from "next/link";
import { LocalDate } from "~components/LocalDate/LocalDate";

import styles from "./GuideCard.module.css";

export const GuideCard: FC<GuideCardProps> = ({
	slug,
	title,
	excerpt,
	date,
	readingTime,
}) => {
	return (
		<article id="" aria-label="" className={styles.article}>
			<h3>
				<Link href={`/guides/${slug}`}>{title}</Link>
			</h3>
			<p>{excerpt}</p>
			<ul className="flex list-none p-0 m-0 not-prose">
				{date && (
					<li className="p-0">
						<LocalDate className="text-sm" dateString={date} />
					</li>
				)}
				<li className="ml-4">
					<span>|</span>
				</li>
				{readingTime && (
					<li className="p-0 ml-4">
						<span className="text-sm">{readingTime} min read</span>
					</li>
				)}
			</ul>
		</article>
	);
};

GuideCard.displayName = "GuideCard";
