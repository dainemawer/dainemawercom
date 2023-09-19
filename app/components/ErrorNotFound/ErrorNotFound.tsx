import type { FC } from "react";
import Link from "next/link";

import styles from "./ErrorNotFound.module.css";

export const ErrorNotFound: FC = () => {
	return (
		<section className={styles.section}>
			<h1>404</h1>
			<h2>Oops, looks like this this page no longer exists.</h2>
			<div className={styles.buttons}>
				<Link className="button" href="/">
					Home
				</Link>
				<Link className="button" href="/blog">
					Blog
				</Link>
			</div>
		</section>
	);
};

ErrorNotFound.displayName = "ErrorNotFound";
