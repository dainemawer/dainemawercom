import type { FC } from "react";
import type { LayoutProps } from "./Layout.types";
import Header from "~components/Header/Header";
import Footer from "~components/Footer/Footer";

import styles from './Layout.module.css'

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.layout}>
				{children}
			</main>
			<Footer />
		</>
	);
};

Layout.displayName = "Layout";

export default Layout;
