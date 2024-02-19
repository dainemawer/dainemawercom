import type { FC } from "react";
import type { PostNavigationProps } from "./PostBody.types";

import Link from "next/link";

import styles from "./Navigation.module.css";

export const PostNavigation: FC<PostNavigationProps> = ({ previous, next }) => {
	return (
		<nav className={styles.nav}>
			{previous && (
				<div className={styles.item}>
					<Link
						className={styles.link}
						href={`/articles/${previous.slug.current}`}
					>
						<span>← Older</span>
						<h4>{previous.title}</h4>
					</Link>
				</div>
			)}
			{next && (
				<div className={styles.item}>
					<Link className={styles.link} href={`/articles/${next.slug.current}`}>
						<span>Newer →</span>
						<h4>{next.title}</h4>
					</Link>
				</div>
			)}
		</nav>
	);
};

PostNavigation.displayName = "PostNavigation";
