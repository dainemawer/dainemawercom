import type { FC } from "react";

export const Schema: FC<any> = ({ schema }) => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
};

Schema.displayName = "Schema";
