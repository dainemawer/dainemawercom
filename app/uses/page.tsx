import { Metadata } from "next";
import { WithContext, WebPage } from "schema-dts";
import Layout from "~components/Layout/Layout";

export const metadata: Metadata = {
	title: "Uses",
	description:
		"Welcome to my uses page. Here you will find all the tools I use to get the job done on the daily.",
	alternates: {
		canonical: "https://dainemawer.com/uses",
	},
	openGraph: {
		title: "Uses",
		description:
			"Welcome to my uses page. Here you will find all the tools I use to get the job done on the daily.",
		url: "https://dainemawer.com/uses",
		siteName: "Daine Mawer",
	},
};

export default function Uses() {
	const schema: WithContext<WebPage> = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: "Uses",
		description:
			"Welcome to my uses page. Here you will find all the tools I use to get the job done on the daily.",
	};

	return (
		<Layout>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>
			<section className="prose prose-zinc prose-h1:leading-snug prose-h1:font-bold prose-h1:mt-8 prose-p:leading-loose prose-a:text-blue-600 prose-a:underline-offset-2 prose-a:decoration-2 prose-a:hover:underline prose-a:no-underline max-w-none lg:prose-lg">
				<header>
					<h1>Uses</h1>
				</header>
				<p>
					Hey! Welcome to my uses page! Here you will find a collection of
					software, hardware and other nifty gadgets I use daily to bust out
					work.
				</p>
				<p>
					If you have any questions, please feel free to reach out to me. Until
					then, take it easy!
				</p>
				<h3>Website</h3>
				<ul>
					<li>
						<p>
							<a href="https://nextjs.org/">
								<strong>NextJS</strong>
							</a>
							: Used by some of the world&apos;s largest companies, Next.js
							enables you to create full-stack web applications by extending the
							latest React features, and integrating powerful Rust-based
							JavaScript tooling for the fastest builds.
						</p>
					</li>
					<li>
						<p>
							<a href="https://vercel.com/">
								<strong>Vercel</strong>
							</a>
							<strong>:</strong> Vercel is the platform for frontend developers,
							providing the speed and reliability innovators need to create at
							the moment of inspiration.
						</p>
					</li>
					<li>
						<p>
							<a href="https://reactjs.org/">
								<strong>React</strong>
							</a>
							<strong>:</strong> A JavaScript library for building user
							interfaces
						</p>
					</li>
				</ul>
				<h3>Hardware</h3>
				<ul>
					<li>
						<p>
							<a href="https://www.apple.com/za/macbook-pro-14-and-16/">
								<strong>16&quot; Macbook Pro M1</strong>
							</a>
							: my workhorse for all things development and career focused.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.apple.com/za/airpods-pro/">
								<strong>AirPods Pro</strong>
							</a>
							: lightweight addition for calls and travelling. Also for running
							/ errands. Great productivity tool.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD">
								<strong>Bose Quiet Comfort II</strong>
							</a>
							: I&apos;ve had my Bose headphones for years. Absolute necessity
							for calls and travelling. I would be lost with out them.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.samsung.com/za/monitors/high-resolution/s65ua-34-inch-ls34a650uxaxxa/?gclid=CjwKCAiA_vKeBhAdEiwAFb_nrWcVonteN5hsgJ1_-gdDN43kuWDAm36LALA_L-zfoGQxDEqjZ_UU4BoCKlMQAvD_BwE">
								<strong>34&quot; Ultra WQHD Monitor, Samsung</strong>
							</a>
							: its a reasonably large monitor with plenty of real estate to
							allow for multiple windows. I have it mounted to the wall above my
							desk so I can eventually fit a desk shelf.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.apple.com/shop/product/MK2E3AM/A/magic-mouse-white-multi-touch-surface">
								<strong>Magic Mouse</strong>
							</a>{" "}
							and{" "}
							<a href="https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english">
								<strong>Magic Keyboard</strong>
							</a>
							: for better desk ergonomics and comfort.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.oliverpeoples.com/usa">
								<strong>Oliver Peoples</strong>
							</a>
							<strong>:</strong> prescription glasses with blue light lens.
						</p>
					</li>
				</ul>
				<h3>IDE</h3>
				<ul>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/">
								<strong>Visual Studio Code:</strong>
							</a>{" "}
							an open source and configurable editor.
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme">
								<strong>One Dark Pro Theme</strong>
							</a>{" "}
							and{" "}
							<a href="https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons">
								<strong>VSCode Icons</strong>
							</a>
						</p>
					</li>
				</ul>
				<h3>Extensions</h3>
				<ul>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig">
								<strong>EditorConfig for VSCode</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
								<strong>ESLint</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot">
								<strong>Github CoPilot</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">
								<strong>GitLens</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css">
								<strong>HTML CSS Support</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense">
								<strong>NPM Intellisense</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense">
								<strong>Path Intellisense</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=csstools.postcss">
								<strong>PostCSS Language Support</strong>
							</a>
						</p>
					</li>
					<li>
						<p>
							<a href="https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint">
								<strong>StyeLint</strong>
							</a>
						</p>
					</li>
				</ul>
				<h3>Terminal</h3>
				<ul>
					<li>
						<p>
							<a href="https://iterm2.com/">
								<strong>iTerm2:</strong>
							</a>{" "}
							A terminal emulator for Mac OS X.
						</p>
					</li>
					<li>
						<p>
							<a href="https://ohmyz.sh/">
								<strong>Oh My Zsh</strong>
							</a>
							: is a delightful, open source, community-driven framework for
							managing your Zsh configuration.
						</p>
					</li>
					<li>
						<p>
							<a href="https://github.com/tonsky/FiraCode">
								<strong>Fira Code + Ligatures:</strong>
							</a>{" "}
							easy on the eye, open source font design for writing code.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.google.com/chrome/">
								<strong>Chrome:</strong>
							</a>{" "}
							there&apos;s no place like Chrome.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.figma.com/">
								<strong>Figma</strong>
							</a>
							<strong>:</strong> connects everyone in the design process so
							teams can deliver better products, faster.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.docker.com/">
								<strong>Docker</strong>
							</a>
							<strong>:</strong> The most-loved Tool in Stack Overflow’s 2022
							Developer Survey.
						</p>
					</li>
				</ul>
				<h3>Productivity</h3>
				<ul>
					<li>
						<p>
							<a href="https://www.raycast.com/">
								<strong>Raycast:</strong>
							</a>{" "}
							a blazingly fast, totally extendable launcher. It lets you
							complete tasks, calculate, share common links, and much more.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.notion.so/">
								<strong>Notion</strong>
							</a>
							: we’re more than a doc. Or a table. Customize Notion to work the
							way you do.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.moleskine.com/en-gb/shop/planners/">
								<strong>Moleskine Diary</strong>
							</a>
							: discover all our collections from notebooks and planners to
							backpacks. Start to create your own story with Moleskine.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.montblanc.com/en-za/ballpoint-pens_cod30828384629622771.html?gclid=CjwKCAiA_vKeBhAdEiwAFb_nrTo5Tw75XaDhENnP2DecgwkZBOxxuGms6zKEIK-b7XSSlLxYXNTdChoCIzEQAvD_BwE&amp;gclsrc=aw.ds">
								<strong>Mont Blanc Pen</strong>
							</a>
							: visit the Official Montblanc website to discover the timeless
							beauty of Montblanc watches, writing instruments, jewellery,
							leather goods, fragrance and eyewear.
						</p>
					</li>
					<li>
						<p>
							<a href="https://www.grammarly.com/">
								<strong>Grammarly:</strong>
							</a>{" "}
							Millions trust Grammarly&apos;s free writing app to make their
							online writing clear and effective.
						</p>
					</li>
					<li>
						<p>
							<a href="https://buffer.com/">
								<strong>Buffer:</strong>
							</a>{" "}
							helps you build an audience organically. We&apos;re a
							values-driven company that provides affordable, intuitive
							marketing tools for ambitious people.
						</p>
					</li>
					<li>
						<p>
							<a href="https://open.spotify.com/">
								<strong>Spotify:</strong>
							</a>{" "}
							for all my music needs during the day and night.
						</p>
					</li>
				</ul>
			</section>
		</Layout>
	);
}
