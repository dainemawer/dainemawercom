"use client";

import { useEffect, useRef, useState, FC } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

import styles from "./Header.module.css";

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
		document.body.classList.toggle("drawer-open");
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
				document.body.classList.remove("drawer-open");
			}
		}

		function handleClickOutside(event: MouseEvent) {
			if (
				!drawerRef.current?.contains(event.target as Node) &&
				!buttonRef.current?.contains(event.target as Node)
			) {
				setIsDrawerOpen(false);
				document.body.classList.remove("drawer-open");
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
			className={classnames(styles.header, isSticky && styles.stuck)}
		>
			<div className={styles.wrap}>
				<Link className={styles.logo} href="/">
					<svg
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-8 h-6 mr-4 pointer-events-none"
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
						className={styles.trigger}
						type="button"
					>
						<span className="sr-only">Trigger Menu</span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div className={styles.stage}>
						<div
							ref={drawerRef}
							className={styles.drawer}
							aria-hidden={isDrawerOpen ? "false" : "true"}
						>
							<p className={styles.label}>Menu</p>
							<ul className={styles.list}>
								<li>
									<Link
										className={pathname === "/articles" ? styles.active : ""}
										href="/articles"
									>
										articles
									</Link>
								</li>
								<li>
									<Link
										className={pathname === "/about" ? styles.active : ""}
										href="/about"
									>
										about
									</Link>
								</li>
								<li>
									<Link
										className={pathname === "/patterns" ? styles.active : ""}
										href="/patterns"
									>
										patterns
									</Link>
								</li>
								<li>
									<Link
										className={pathname === "/uses" ? styles.active : ""}
										href="/uses"
									>
										uses
									</Link>
								</li>
								<li>
									<a className="button" href="mailto:hello@dainemawer.com">
										hello@dainemawer.com
									</a>
								</li>
								<li>
									<a className="button-inverted" href="/rss.xml">
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
