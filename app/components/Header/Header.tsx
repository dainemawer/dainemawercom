"use client";

import { useEffect, useRef, useState, FC } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

const Header: FC = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);
	const drawerRef = useRef(null);
	const buttonRef = useRef(null);
	const pathname = usePathname();

	function handleClick() {
		setIsDrawerOpen(!isDrawerOpen);
		drawerRef.current?.classList.add("animating");
		document.body.classList.toggle("overflow-hidden");
	}

	useEffect(() => {
		function activateStickyHeader() {
			const header = headerRef.current;

			if (header) {
				const headerHeight = header.offsetHeight;
				const scrollPosition = window.scrollY;

				if (scrollPosition > headerHeight) {
					setIsSticky(true);
				} else {
					setIsSticky(false);
				}
			}
		}

		function handleEscapeClick(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsDrawerOpen(false);
				document.body.classList.remove("overflow-hidden");
			}
		}

		function handleClickOutside(event: MouseEvent) {
			if (
				!drawerRef.current?.contains(event.target as Node) &&
				!buttonRef.current?.contains(event.target as Node)
			) {
				setIsDrawerOpen(false);
				document.body.classList.remove("overflow-hidden");
			}
		}

		function handleTransitionEnd() {
			drawerRef.current?.classList.remove("animating");
		}

		window.addEventListener("scroll", activateStickyHeader);
		document.addEventListener("click", handleClickOutside);
		document.addEventListener("keydown", handleEscapeClick);
		drawerRef.current.addEventListener("transitionend", handleTransitionEnd);

		return () => {
			window.removeEventListener("scroll", activateStickyHeader);
			document.removeEventListener("keydown", handleEscapeClick);
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className={classnames(
				"sticky top-0 w-full z-40",
				isSticky && "backdrop-blur-lg border-b border-b-gray-200 bg-white/80",
			)}
		>
			<div className="flex items-center justify-between container max-w-4xl py-4 px-6 xl:px-0">
				<Link href="/">
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-8 h-6 mr-4 pointer-events-none hover:opacity-50 focus:opacity-50 transition-opacity"
						viewBox="0 0 39 35"
					>
						<path
							d="M37 31V5C14.353 8.168 12.871 15.015 12 31h25Z"
							stroke="#000"
							strokeWidth="4"
						/>
						<path
							d="M4 31V5c22.647 3.168 24.128 10.015 25 26H4Z"
							stroke="#fff"
							strokeWidth="8"
						/>
						<path
							d="M4 31V5c22.647 3.168 24.128 10.015 25 26H4Z"
							stroke="#000"
							strokeWidth="4"
						/>
					</svg>
				</Link>
				<nav id="" aria-label="">
					<button
						ref={buttonRef}
						onClick={handleClick}
						aria-expanded={isDrawerOpen ? "true" : "false"}
						aria-controls="drawer"
						className="trigger"
						type="button"
					>
						<span className="sr-only">Trigger Menu</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div className="pointer-events-none lg:pointer-events-auto transition-all duration-300 fixed left-0 top-0 w-screen h-screen overflow-hidden z-30 lg:static lg:w-auto lg:h-auto lg:overflow-auto after:pointer-events-none lg:after:pointer-events-auto after:block after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-0 after:will-change-auto after:z-30 stage">
						<div
							ref={drawerRef}
							className={`relative transition-all duration-300 max-w-[320px] ml-auto h-full bottom-0 bg-white lg:bg-transparent w-full lg:w-auto lg:pointer-events-auto z-40 pt-6 pb-8 px-8 lg:p-0 lg:opacity-100 lg:visible lg:translate-x-0 lg:max-w-none ${
								isDrawerOpen
									? "pointer-events-auto visible translate-x-0 opacity-100"
									: "invisible translate-x-[320px] opacity-0 pointer-events-none"
							}`}
							aria-hidden={isDrawerOpen ? "false" : "true"}
						>
							<p className="block lg:hidden uppercase font-bold mb-8">Menu</p>
							<ul className="flex flex-col lg:flex-row lg:items-center">
								<li className="mb-6 lg:mb-0 lg:mr-4 last:mr-0 text-slate-700 text-sm">
									<Link
										className={` inline-block lg:block transition-colors text-base lg:text-sm border-b-2 border-transparent hover:border-slate-700 ${
											pathname === "/articles" ? "border-slate-700" : ""
										}`}
										href="/articles"
									>
										articles
									</Link>
								</li>
								<li className="mb-6 lg:mb-0 lg:mr-4 last:mr-0 text-slate-700 text-sm">
									<Link
										className={` inline-block lg:block transition-colors text-base lg:text-sm border-b-2 border-transparent hover:border-slate-700 ${
											pathname === "/guides" ? "border-slate-700" : ""
										}`}
										href="/guides"
									>
										guides
									</Link>
								</li>
								<li className="mb-6 lg:mb-0 lg:mr-4 last:mr-0 text-slate-700 text-sm">
									<Link
										className={`inline-block lg:block transition-colors text-base lg:text-sm border-b-2 border-transparent hover:border-slate-700 ${
											pathname === "/about" ? "border-slate-700" : ""
										}`}
										href="/about"
									>
										about
									</Link>
								</li>
								<li className="mb-6 lg:mb-0 lg:mr-4 last:mr-0 text-slate-700 text-sm">
									<Link
										className={`inline-block lg:block transition-colors text-base lg:text-sm border-b-2 border-transparent hover:border-slate-700 ${
											pathname === "/uses" ? "border-slate-700" : ""
										}`}
										href="/uses"
									>
										uses
									</Link>
								</li>
								<li className="mb-6 lg:mb-0 lg:mr-4 last:mr-0 text-slate-700 text-sm">
									<a
										className="inline-block lg:block transition-colors text-base lg:text-sm border-b-2 border-transparent hover:border-slate-700 button"
										href="mailto:hello@dainemawer.com"
										rel="me"
									>
										hello@dainemawer.com
									</a>
								</li>
								<li className="mb-6 lg:mb-0 lg:mr-4 last:mr-0 text-slate-700 text-sm">
									<a
										className="inline-block lg:block transition-colors text-base lg:text-sm border-b-2 border-transparent hover:border-slate-700 button-inverted"
										href="/rss.xml"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2}
											stroke="currentColor"
											className="w-4 h-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

Header.displayName = "Header";

export default Header;
