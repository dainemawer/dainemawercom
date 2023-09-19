"use client";
import type { FC } from "react";
import { useEffect, useState } from "react";

import styles from "./Progress.module.css";

export const Progress: FC = () => {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		const progressBarHandler = () => {
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scroll = Number(`${totalScroll / windowHeight}`);

			setScroll(scroll);
		};

		window.addEventListener("scroll", progressBarHandler);

		return () => window.removeEventListener("scroll", progressBarHandler);
	}, []);

	return (
		<div className={styles.progress}>
			<div
				className={styles.bar}
				style={{ transform: `scale(${scroll}, 1)` }}
				role="progressbar"
				aria-valuenow={0}
				aria-valuemin={0}
				aria-valuemax={100}
			/>
		</div>
	);
};

Progress.displayName = "Progress";
