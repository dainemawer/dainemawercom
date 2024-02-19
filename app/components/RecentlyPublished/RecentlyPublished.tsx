import type { FC } from "react";
import type { RecentylPublishedProps } from "./RecentlyPublished.types";
import { Card } from "~components/Card/Card";

import styles from "./RecentlyPublished.module.css";

export const RecentlyPublished: FC<RecentylPublishedProps> = ({ posts }) => {
	if (!posts) return null;

	return (
		<section className={styles.recent}>
			<h2>Recently Published</h2>
			{posts.slice(0, 4).map((post) => (
				<Card
					body={post?.body}
					category={post.category}
					key={post._id}
					title={post.title}
					excerpt={post.excerpt}
					slug={post.slug.current}
					date={post.publishedAt}
					readingTime={post.estimatedReadingTime}
				/>
			))}
		</section>
	);
};

RecentlyPublished.displayName = "RecentlyPublished";
