"use client";

import type { FC } from "react";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ReactIcon } from "~components/Icons/React";
import { NextJSIcon } from "~components/Icons/NextJS";
import { TypeScriptIcon } from "~components/Icons/TypeScript";

import styles from "./Hero.module.css";

export const Hero: FC = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.title}>
				<Balancer>
					Im Daine, an{" "}
					<span className={styles.purple}>Engineering Manager</span> and{" "}
					<span className={styles.blue}>Frontend Engineer</span>, living in
					South Africa 🇿🇦
				</Balancer>
			</h1>
			<p className={styles.description}>
				I focus on
				<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					<ReactIcon />
					React
				</a>
				,
				<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
					<NextJSIcon />
					NextJS
				</a>
				,
				<a
					href="https://www.typescriptlang.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TypeScriptIcon />
					TypeScript
				</a>
				.
			</p>
			<div className={styles.cta}>
				<Link className="button" href="/about">
					Hire me
				</Link>
				<a
					href="https://adplist.com"
					className={styles.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					Looking for mentorship?
				</a>
			</div>
		</section>
	);
};

Hero.displayName = "Hero";
