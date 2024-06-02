"use client";

import type { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.copyright}>Copyright &copy; 2023 Daine Mawer.</p>
			<nav id="" aria-label="">
				<ul className={styles.list}>
					<li>
						<a
							href="https://github.com/dainemawer"
							target="_blank"
							rel="noopener noreferrer me"
						>
							<span>Github</span>
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/dainemawer"
							target="_blank"
							rel="noopener noreferrer me"
						>
							<span>LinkedIn</span>
						</a>
					</li>
					<li>
						<a
							href="https://bmc.link/dainelindleymawer"
							target="_blank"
							rel="noopener noreferrer me"
						>
							<span>Buy Me Coffee</span>
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

Footer.displayName = "Footer";

export default Footer;
