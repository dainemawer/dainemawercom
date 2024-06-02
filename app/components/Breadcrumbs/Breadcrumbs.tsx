import type { FC } from "react";
import type { BreadcrumbsProps } from "./Breadcrumbs.types";
import Link from "next/link";

import styles from "./Breadcrumbs.module.css";

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ slug, category }) => {
	return (
		<ol className="text-sm text-gray m-0 p-0 flex items-center list-none marker:hidden justify-center not-prose">
			<li className="mr-2">
				<Link className={styles.anchor} href="/">
					Home
				</Link>
			</li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-3 h-3 mr-2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 4.5l7.5 7.5-7.5 7.5"
				/>
			</svg>
			<li className="mr-2">
				<Link className={styles.anchor} href="/articles">
					Articles
				</Link>
			</li>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-3 h-3 mr-2"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M8.25 4.5l7.5 7.5-7.5 7.5"
				/>
			</svg>

			<li>
				<Link
					className={`capitalize p-category ${styles.anchor}`}
					href={`/category/${category}`}
				>
					{category.replace("-", " ")}
				</Link>
			</li>
		</ol>
	);
};

Breadcrumbs.displayName = "Breadcrumbs";
