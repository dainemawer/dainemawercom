import "server-only";
import { type QueryParams, type ClientConfig } from "@sanity/client";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

const config: ClientConfig = {
	apiVersion,
	dataset,
	projectId,
	useCdn: false,
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
	return sanityClient.fetch<QueryResponse>(query, qParams, {
		cache: "no-store",
		next: { tags },
	});
}
