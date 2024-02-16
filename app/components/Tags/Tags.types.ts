export type Tag = {
	slug: {
		current: string;
	};
	title: string;
};

export type TagsProps = {
	tags: Tag[];
};
