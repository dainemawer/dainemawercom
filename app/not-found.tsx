import Layout from "~components/Layout/Layout";
import { ErrorNotFound } from "~components/ErrorNotFound/ErrorNotFound";

export default async function NotFound() {
	return (
		<Layout>
			<ErrorNotFound />
		</Layout>
	);
}
