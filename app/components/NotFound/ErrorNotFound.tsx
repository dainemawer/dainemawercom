import type { FC } from "react";
import Link from "next/link";

export const NotFound: FC = () => {
	return (
		<section className="prose my-16 text-center prose-h1:text-7xl prose-h2:my-8 prose-h1:mb-0">
			<h1>404</h1>
			<h2>Oops, looks like this this page no longer exists.</h2>
			<div className="flex justify-center not-prose">
				<Link className="button" href="/">
					Home
				</Link>
				<Link className="button" href="/articles">
					Articles
				</Link>
			</div>
		</section>
	);
};

NotFound.displayName = "NotFound";
