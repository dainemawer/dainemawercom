import type { FC } from "react";
import Link from "next/link";

import styles from "./ErrorNotFound.module.css";

export const ErrorNotFound: FC = () => {
	return (
		<section className="prose prose-zinc prose-h1:leading-snug prose-h1:font-bold prose-h1:mt-8 prose-p:leading-loose prose-a:text-blue-600 prose-a:underline-offset-2 prose-a:decoration-2 hover:prose-a:underline prose-a:no-underline max-w-none lg:prose-lg">
			<h1>404</h1>
			<h2>Oops, looks like this this page no longer exists.</h2>
			<div className={styles.description}>
				<p>
					Return <Link href="/">home</Link> or visit the{" "}
					<Link href="/articles">articles</Link> page.
				</p>
			</div>
		</section>
	);
};

ErrorNotFound.displayName = "ErrorNotFound";
