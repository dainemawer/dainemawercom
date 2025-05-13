"use client";

import type { FC } from "react";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ReactIcon } from "~components/Icons/React";
import { NextJSIcon } from "~components/Icons/NextJS";
import { TypeScriptIcon } from "~components/Icons/TypeScript";

export const Hero: FC = () => {
	return (
		<section className="pt-8 lg:pt-14 pb-8 lg:pb-20">
			<h1 className="text-5xl lg:text-6xl font-bold leading-tight">
				<Balancer>
					Im Daine, an{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
						Engineering Manager
					</span>{" "}
					and{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
						Frontend Engineer
					</span>
					, living in South Africa 🇿🇦
				</Balancer>
			</h1>
			<p className="flex text-sm lg:text-xl text-gray-500 font-normal my-8">
				I focus on
				<a
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:text-black focus:text-black transition-colors"
				>
					<ReactIcon />
					React
				</a>
				,
				<a
					href="https://nextjs.org/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:text-black focus:text-black transition-colors"
				>
					<NextJSIcon />
					NextJS
				</a>
				,
				<a
					href="https://www.typescriptlang.org/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:text-black focus:text-black transition-colors"
				>
					<TypeScriptIcon />
					TypeScript
				</a>
				.
			</p>
			<div className="flex items-center">
				<Link className="button" href="/about">
					Hire me
				</Link>
				<a
					href="https://adplist.org/mentors/daine-mawer"
					className="inline-block ml-4 text-sm text-gray-500 border-b-transparent border-b-2 hover:border-b-blue-600 transition-colors hover:text-blue-600"
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
