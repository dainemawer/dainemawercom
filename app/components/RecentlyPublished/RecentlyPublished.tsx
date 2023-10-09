import type { FC } from "react";
import type { RecentylPublishedProps } from "./RecentlyPublished.types";
import { Card } from "~components/Card/Card";

import styles from "./RecentlyPublished.module.css";

export const RecentlyPublished: FC<RecentylPublishedProps> = ({ posts }) => {
	if (!posts) return null;

	return (
		<section className={styles.recent}>
			<h2>Recently Published</h2>
			{posts
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.slice(0, 4)
				.map((post) => (
					<Card
						key={post?.slug}
						title={post?.title}
						excerpt={post?.excerpt}
						slug={post?.slug}
						date={post?.date}
					/>
				))}
		</section>
	);
};

RecentlyPublished.displayName = "RecentlyPublished";
