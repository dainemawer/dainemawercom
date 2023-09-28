import type { FC } from "react";
import Link from "next/link";

import styles from "./ErrorNotFound.module.css";

export const ErrorNotFound: FC = () => {
	return (
		<section className={styles.section}>
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
