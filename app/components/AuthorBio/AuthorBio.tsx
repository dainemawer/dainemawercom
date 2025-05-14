import type { FC } from "react";
import type { AuthorBioProps } from "./AuthorBio.types";
import Image from "next/image";
import Link from "next/link";

export const AuthorBio: FC<AuthorBioProps> = ({ excerpt, title, slug }) => {
	const url = `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/${slug}`;

	return (
		<div className="flex flex-wrap items-center px-6 py-8 mb-8 bg-white border-2 border-black h-card">
			<figure className="shrink-0 mb-4 lg:mr-6 u-photo">
				<a
					rel="author"
					className="u-url u-uid p-author"
					href="https://dainemawer.com"
				>
					<Image
						src="/dainemawer.jpeg"
						alt="Daine Mawer"
						width={100}
						height={100}
						className="rounded-full"
					/>
				</a>
			</figure>
			<div className="grow">
				<p className="text-sm p-note">
					<strong>
						Written by <span className="p-name">Daine Mawer</span>.
					</strong>{" "}
					Enjoy reading the{" "}
					<Link
						className="u-url text-slate-700 font-bold border-b-2 border-transparent hover:border-slate-700 inline-block"
						href={slug}
					>
						article
					</Link>
					? Im always posting new content. If you liked what you read, please
					subscribe to my{" "}
					<a
						href="/rss"
						className="text-slate-700 font-bold border-b-2 border-transparent hover:border-slate-700 inline-block"
					>
						RSS feed{" "}
					</a>{" "}
					or follow me on{" "}
					<a
						className="u-url text-slate-700 font-bold border-b-2 border-transparent hover:border-slate-700 inline-block"
						href="https://github.com/dainemawer"
						rel="noopener noreferrer me"
						target="_blank"
					>
						Github
					</a>
					,{" "}
					<a
						className="u-url text-slate-700 font-bold border-b-2 border-transparent hover:border-slate-700 inline-block"
						href="https://twitter.com/dainemawer"
						target="_blank"
						rel="noopener noreferrer me"
					>
						Twitter
					</a>{" "}
					or{" "}
					<a
						className="u-url text-slate-700 font-bold border-b-2 border-transparent hover:border-slate-700 inline-block"
						href="https://www.linkedin.com/in/dainemawer"
						target="_blank"
						rel="noopener noreferrer me"
					>
						LinkedIn
					</a>
					. Im also always on the look out for new oppurtunities, engagements,
					contract work or just coffee! So please dont hesitate to{" "}
					<a
						href="mailto:hello@dainemawer.com"
						rel="me"
						className="text-slate-700 font-bold border-b-2 border-transparent hover:border-slate-700 inline-block"
					>
						reach out
					</a>
					.
				</p>
				<nav className="mt-6 text-sm">
					<ul className="flex flex-wrap">
						<li className="w-full sm:w-auto mb-4 lg:mb-0 mr-4 last:mr-0">
							Share this article:
						</li>
						<li className="mb-4 lg:mb-0 mr-4 last:mr-0">
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
								target="_blank"
								rel="noreferrer"
								className="transition-colors bg-black border-2 border-transparent hover:border-black py-2 px-4 text-white hover:text-black hover:bg-white rounded-sm"
							>
								Facebook
							</a>
						</li>
						<li className="mb-4 lg:mb-0 mr-4 last:mr-0">
							<a
								href={`https://twitter.com/intent/tweet?url=${url}&text=`}
								target="_blank"
								rel="noreferrer"
								className="transition-colors bg-black border-2 border-transparent hover:border-black py-2 px-4 text-white hover:text-black hover:bg-white rounded-sm"
							>
								Twitter
							</a>
						</li>
						<li className="mb-4 lg:mb-0 mr-4 last:mr-0">
							<a
								href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
								target="_blank"
								rel="noreferrer"
								className="transition-colors bg-black border-2 border-transparent hover:border-black py-2 px-4 text-white hover:text-black hover:bg-white rounded-sm"
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
