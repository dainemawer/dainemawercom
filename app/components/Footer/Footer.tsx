"use client";

import type { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="flex flex-wrap border-t border-gray-200 items-center justify-center lg:justify-between container max-w-4xl py-6 lg:py-4 px-6 xl:px-0">
			<p className="text-sm text-center lg:text-left text-slate-700 mb-2 lg:mb-0 w-full lg:w-auto">
				Copyright &copy; 2023 Daine Mawer.
			</p>
			<nav id="" aria-label="">
				<ul className="flex">
					<li className="mr-4 last:mr-0">
						<a
							href="https://github.com/dainemawer"
							target="_blank"
							rel="noopener noreferrer me"
							className="flex items-center text-sm text-slate-700 border-b-2 border-transparent hover:border-slate-700"
						>
							<span className="mr-1">Github</span>
						</a>
					</li>
					<li className="mr-4 last:mr-0">
						<a
							href="https://www.linkedin.com/in/dainemawer"
							target="_blank"
							rel="noopener noreferrer me"
							className="flex items-center text-sm text-slate-700 border-b-2 border-transparent hover:border-slate-700"
						>
							<span className="mr-1">LinkedIn</span>
						</a>
					</li>
					<li className="mr-4 last:mr-0">
						<a
							href="https://bmc.link/dainelindleymawer"
							target="_blank"
							rel="noopener noreferrer me"
							className="flex items-center text-sm text-slate-700 border-b-2 border-transparent hover:border-slate-700"
						>
							<span className="mr-1">Buy Me Coffee</span>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

Footer.displayName = "Footer";

export default Footer;
