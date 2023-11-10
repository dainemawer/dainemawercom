import type { FC } from "react";
import type { AuthorBioProps } from "./AuthorBio.types";
import Image from "next/image";

import styles from "./AuthorBio.module.css";

export const AuthorBio: FC<AuthorBioProps> = ({ excerpt, title, slug }) => {
	const url = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${slug}`;

	return (
		<div className={styles.bio}>
			<figure className={styles.figure}>
				<Image
					src="/dainemawer.jpeg"
					alt="Profile of Daine"
					width={100}
					height={100}
					className="rounded-full"
				/>
			</figure>
			<div className={styles.content}>
				<p className={styles.description}>
					<strong>Written by Daine Mawer.</strong> Thanks for reading! Im always
					posting new content. If you liked what you read, please subscribe to
					my <a href="/rss">RSS feed </a> or follow me on{" "}
					<a
						href="https://github.com/dainemawer"
						rel="noopener noreferrer"
						target="_blank"
					>
						Github
					</a>
					,{" "}
					<a
						href="https://twitter.com/dainemawer"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>{" "}
					or{" "}
					<a
						href="https://www.linkedin.com/in/dainemawer"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					. Im also always on the look out for new oppurtunities, engagements,
					contract work or just coffee! So please dont hesitate to{" "}
					<a href="mailto:hello@dainemawer.com">reach out</a>.
				</p>
				<nav className={styles.social}>
					<ul className={styles.nav}>
						<li>Share this article:</li>
						<li className={styles.share}>
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
						</li>
						<li className={styles.share}>
							<a
								href={`https://twitter.com/intent/tweet?url=${url}&text=`}
								target="_blank"
								rel="noreferrer"
							>
								Twitter
							</a>
						</li>
						<li className={styles.share}>
							<a
								href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
								target="_blank"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

AuthorBio.displayName = "AuthorBio";
