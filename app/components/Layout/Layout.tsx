import type { FC } from "react";
import type { LayoutProps } from "./Layout.types";
import Header from "~components/Header/Header";
import Footer from "~components/Footer/Footer";

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="container max-w-4xl py-8 lg:py-16 px-6 xl:px-0">
				{children}
			</main>
			<Footer />
		</>
	);
};

Layout.displayName = "Layout";

export default Layout;
