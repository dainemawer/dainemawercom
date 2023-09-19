import type { Post } from "~types";

export type PostNavigationProps = {
	next: Post | null;
	previous: Post | null;
};
