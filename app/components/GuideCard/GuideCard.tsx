import type { FC } from "react";
import type { GuideCardProps } from "./GuideCard.types";
import Link from "next/link";
import { LocalDate } from "~components/LocalDate/LocalDate";

export const GuideCard: FC<GuideCardProps> = ({
	slug,
	title,
	excerpt,
	date,
	readingTime,
}) => {
	return (
		<article id="" aria-label="" className="mb-8">
			<h3 className="text-2xl font-bold mb-2">
				<Link
					href={`/guides/${slug}`}
					className="text-blue-600 hover:text-blue-800"
				>
					{title}
				</Link>
			</h3>
			<p className="text-gray-600 mb-4">{excerpt}</p>
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
