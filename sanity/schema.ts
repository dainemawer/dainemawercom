import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import tag from "./schemas/tag";
import post from "./schemas/post";
import guide from "./schemas/guide";
import author from "./schemas/author";
import youtube from "./schemas/youtube";
import articleMetadata from "./schemas/articleMetadata";
import faq from "./schemas/faq";
import code from "./schemas/code";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		guide,
		author,
		category,
		tag,
		blockContent,
		youtube,
		articleMetadata,
		faq,
		code,
	],
};
