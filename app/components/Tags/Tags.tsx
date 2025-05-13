import type { FC } from "react";
import Link from "next/link";

import { TagsProps } from "./Tags.types";

export const Tags: FC<TagsProps> = ({ tags }) => {
	const tagsAsArrayWithLinks = tags.map((tag) => (
		<li
			className="mr-4 last:mr-0 text-sm bg-slate-50 border border-slate-300 py-1 px-2 hover:bg-slate-100 hover:text-blue-600 transition-all"
			key={tag.slug.current}
		>
			<Link href={`/tags/${tag.slug.current}`}>#{tag.title.toLowerCase()}</Link>
		</li>
	));

	return (
		<ul className="items-center flex mb-6 flex-wrap">
			<li className="text-sm mr-4">
				<strong>Tags:</strong>
			</li>
			{tagsAsArrayWithLinks}
		</ul>
	);
};
