"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";

export const Newsletter = () => {
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = () => {
		window.open(
			"https://tinyletter.com/dainelindleymawer",
			"popupwindow",
			"scrollbars=yes,width=800,height=600",
		);
		setSubscribed(true);
		return true;
	};

	return (
		<section className="my-12">
			<h2 className="text-center text-4xl font-bold max-w-xl mx-auto my-8">
				<Balancer>Get my latest posts delivered right to your inbox</Balancer>
			</h2>

			<form
				action="https://tinyletter.com/dainelindleymawer"
				method="post"
				target="popupwindow"
				onSubmit={handleSubmit}
			>
				<div className="flex max-w-xl mx-auto">
					<label className="flex flex-auto mr-4" htmlFor="tlemail">
						<input
							className="focus:border-black transition-colors focus:outline-hidden text-sm border-2 border-slate-200 w-full p-2 px-4 min-h-[50px] rounded-sm"
							id="tlemail"
							type="email"
							placeholder="Enter your email address"
							name="email"
						/>
						<input type="hidden" value="1" name="embed" />
					</label>
					<button
						className="inline-block text-sm justify-center items-center transition-colors text-slate-700 bg-white border-2 border-black w-32 hover:bg-black hover:text-white rounded-sm"
						type="submit"
					>
						Join
					</button>
				</div>
				{subscribed && (
					<p className="text-sm max-w-xl flex items-center justify-center text-green-800 text-center mx-auto mt-4 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 mr-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						After completing the steps in the popup, please verify your email to
						join the list.
					</p>
				)}
			</form>
		</section>
	);
};
