import type { FC } from "react";
import type { PostNavigationProps } from "./PostBody.types";

import Link from "next/link";

export const PostNavigation: FC<PostNavigationProps> = ({ previous, next }) => {
	return (
		<nav className="flex justify-between gap-4 border-t border-gray-300 pt-6 mt-6">
			{previous && (
				<div className="flex flex-col max-w-[250px] only:max-w-full nth-2:text-right">
					<Link href={`/articles/${previous.slug.current}`}>
						<span className="text-sm">← Older</span>
						<h4 className="font-bold mt-2">{previous.title}</h4>
					</Link>
				</div>
			)}
			{next && (
				<div className="flex flex-col max-w-[250px] only:max-w-full nth-2:text-right">
					<Link href={`/articles/${next.slug.current}`}>
						<span className="text-sm">Newer →</span>
						<h4 className="font-bold mt-2">{next.title}</h4>
					</Link>
				</div>
			)}
		</nav>
	);
};

PostNavigation.displayName = "PostNavigation";
