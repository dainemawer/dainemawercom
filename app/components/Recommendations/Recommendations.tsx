import type { FC } from "react";
import type { RecommendationsProps } from "./Recommendations.types";
import Image from "next/image";

export const Recommendations: FC<RecommendationsProps> = ({ title }) => {
	return (
		<section>
			<h2>{title}</h2>
			<div className="flex flex-nowrap overflow-auto gap-8">
				<article
					className="flex flex-col justify-center shrink-0 grow-0 max-w-sm lg:max-w-lg bg-slate-50 lg:p-8 p-6 lg:px-12"
					id=""
				>
					<header className="flex flex-wrap items-center mb-4">
						<figure className="mb-2 lg:m-0">
							<Image
								className="rounded-full mr-4"
								src="/mike-recommendation.jpeg"
								width="60"
								height="60"
								alt="Profile picture of Mike"
							/>
						</figure>
						<div>
							<h3 className="text-base font-semibold text-slate-900 m-0">
								Mike Bal
							</h3>
							<p className="text-sm text-gray-500 leading-normal m-0">
								Product Leader - Growth | Product Market Fit
							</p>
						</div>
					</header>
					<p className="text-sm text-gray-500 leading-normal m-0">
						I was lucky enough to have Daine on my team when he started at 10up
						and in different dynamics for the years after as we both advanced
						our careers. I&apos;ve always been impressed with the high standards
						Daine holds for quality of work, and how it applies to every aspect
						of ite.g. accessibility, performance, usability. It&apos;s been
						incredible to see him evolve as a senior leader and mentor to
						others. Any organization would be lucky to have Daine as part of
						their engineering team.
					</p>
				</article>
				<article
					className="flex flex-col justify-center shrink-0 grow-0 max-w-sm lg:max-w-lg bg-slate-50 lg:p-8 p-6 lg:px-12"
					id=""
				>
					<header className="flex flex-wrap items-center mb-4">
						<figure className="mb-2 lg:m-0">
							<Image
								className="rounded-full mr-4"
								src="/tim-recommendation.jpeg"
								width="60"
								height="60"
								alt="Profile picture of Tim"
							/>
						</figure>
						<div>
							<h3 className="text-base font-semibold text-slate-900 m-0">
								Tim Hoang
							</h3>
							<p className="text-sm text-gray-500 leading-normal m-0">
								Senior Talent Acquisition Strategy
							</p>
						</div>
					</header>
					<p className="text-sm text-gray-500 leading-normal m-0">
						During my tenure there, I was able to watch Daine grow and flourish
						as he rose up the proverbial ranks. Something I always appreciated
						about Daine was his curiosity and hunger to learn more and do
						better. It&apos;s no wonder he&apos;s now in an AD role. He respects
						all people and genuinely wants to get to know people and help them
						how he can. Being technically sound/good at your job is one thing,
						being a genuinely kind human being and team player is another; and
						Daine possesses both.
					</p>
				</article>
				<article
					className="flex flex-col justify-center shrink-0 grow-0 max-w-sm lg:max-w-lg bg-slate-50 lg:p-8 p-6 lg:px-12"
					id=""
				>
					<header className="flex flex-wrap items-center mb-4">
						<figure className="mb-2 lg:m-0">
							<Image
								className="rounded-full mr-4"
								src="/matt-recommendation.jpeg"
								width="60"
								height="60"
								alt="Profile picture of Matt"
							/>
						</figure>
						<div>
							<h3 className="text-base font-semibold text-slate-900 m-0">
								Matthew McAchran
							</h3>
							<p className="text-sm text-gray-500 leading-normal m-0">
								Lead Software Engineer
							</p>
						</div>
					</header>
					<p className="text-sm text-gray-500 leading-normal m-0">
						I had the pleasure of working with Daine during my time at 10up.
						During that time we collaborated on several projects, the biggest
						being a complex site utilizing Salesforce APIs as an authentication
						endpoint and various styling challenges. Daine was instrumental in
						figuring out these challenges. His positive attitude and
						out-of-the-box thinking was an invaluable asset. I highly recommend
						Daine and he will be an asset to any company!
					</p>
				</article>
				<article
					className="flex flex-col justify-center shrink-0 grow-0 max-w-sm lg:max-w-lg bg-slate-50 lg:p-8 p-6 lg:px-12"
					id=""
				>
					<header className="flex flex-wrap items-center mb-4">
						<figure className="mb-2 lg:m-0">
							<Image
								className="rounded-full mr-4"
								src="/byron-recommendation.jpeg"
								width="60"
								height="60"
								alt="Profile picture of Tim"
							/>
						</figure>
						<div>
							<h3 className="text-base font-semibold text-slate-900 m-0">
								Byron Mawer
							</h3>
							<p className="text-sm text-gray-500 leading-normal m-0">
								Associate at JG Afrika
							</p>
						</div>
					</header>
					<p className="text-sm text-gray-500 leading-normal m-0">
						Daine has throughout his career managed and produced web platforms
						for Client&apos;s of mine, as well as myself. He has a talent for
						learning and adapting to current trends in industry, and producing
						high quality work. My experience is that he is constantly trying to
						improve his skills and learn more, which has led to a dynamic and
						professional service offering. Highly recommended.
					</p>
				</article>
			</div>
		</section>
	);
};

Recommendations.displayName = "Recommendations";
