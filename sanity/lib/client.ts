import "server-only";
import { type QueryParams, type ClientConfig } from "@sanity/client";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

const config: ClientConfig = {
	apiVersion,
	dataset,
	projectId,
	useCdn: true, // Enable CDN for better performance
	perspective: "published",
	timeout: 30000, // 30 seconds
	stega: {
		enabled: false,
	},
};

export const sanityClient = createClient(config);

export async function sanityFetch<QueryResponse>({
	query,
	qParams,
	tags,
}: {
	qParams?: QueryParams;
	query: string;
	tags: string[];
}): Promise<QueryResponse> {
	try {
		return await sanityClient.fetch<QueryResponse>(query, qParams, {
			next: {
				tags,
				revalidate: 3600 // Revalidate every hour
			},
		});
	} catch (error) {
		console.error("Sanity fetch error:", error);
		throw error;
	}
}
