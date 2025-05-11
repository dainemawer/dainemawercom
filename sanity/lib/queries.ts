import { groq } from "next-sanity";

export const fetchAllBlogPosts = groq`
	*[_type == "post"] | order(publishedAt desc) {
		_id,
		title,
		slug,
		publishedAt,
		canonical,
		includeInSitemap,
		excerpt,
		category->{
			title,
			slug,
		},
		tags[]->{
			title,
			slug
		},
		author->{
			name,
			slug,
			image {
				asset->{
					url,
					metadata {
						dimensions {
							width,
							height
						}
					}
				}
			}
		},
		"numberOfCharacters": length(pt::text(body)),
		"estimatedWordCount": round(length(pt::text(body)) / 5),
		"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
		"headings": body[length(style) == 2 && string::startsWith(style, "h")],
		body,
	}
`;

export const fetchBlogPostBySlug = groq`
	*[_type == "post" && slug.current == $slug][0]{
		title,
		excerpt,
		body,
		publishedAt,
		canonical,
		includeInSitemap,
		author->{
			name,
			slug
		},
		tags[]->{
			title,
			slug
		},
		category->{
			title,
			slug,
		},
		"numberOfCharacters": length(pt::text(body)),
		"estimatedWordCount": round(length(pt::text(body)) / 5),
		"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
		"headings": body[length(style) == 2 && string::startsWith(style, "h")],
		slug
	}
`;

export const fetchAllPostsByCategory = groq`
	*[_type == "post" && category.slug.current == $slug[0] && publishedAt < now()] | order(publishedAt desc) {
		_id,
		title,
		slug,
		excerpt,
		publishedAt,
		canonical,
		includeInSitemap,
		category->{
			title,
			slug,
		},
		tags[]->{
			title,
			slug
		},
		author->{
			name,
			slug,
			image {
				asset->{
					url,
					metadata {
						dimensions {
							width,
							height
						}
					}
				}
			}
		},
		"numberOfCharacters": length(pt::text(body)),
		"estimatedWordCount": round(length(pt::text(body)) / 5),
		"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
		body,
	}
`;

export const fetchAllPostsByTag = groq`
	*[_type == "post" && tag.slug.current == $slug[0] && publishedAt < now()] | order(publishedAt desc) {
		_id,
		title,
		slug,
		excerpt,
		publishedAt,
		canonical,
		includeInSitemap,
		category->{
			title,
			slug,
		},
		tags[]->{
			title,
			slug
		},
		author->{
			name,
			slug,
			image {
				asset->{
					url,
					metadata {
						dimensions {
							width,
							height
						}
					}
				}
			}
		},
		"numberOfCharacters": length(pt::text(body)),
		"estimatedWordCount": round(length(pt::text(body)) / 5),
		"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
		body,
	}
`;

export const fetchAllTags = groq`
	*[_type == "tag"] {
		_id,
		title,
		excerpt,
		slug
	}
`;

export const fetchAllCategories = groq`
	*[_type == "category"] {
		_id,
		title,
		excerpt,
		slug
	}
`;

export const fetchAllGuides = groq`
	*[_type == "guide"] | order(publishedAt desc) {
		_id,
		title,
		slug,
		excerpt,
		publishedAt,
		estimatedReadingTime,
		tags[]->{
			title,
			slug
		},
		"numberOfCharacters": length(pt::text(body)),
		"estimatedWordCount": round(length(pt::text(body)) / 5),
		"estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
		body
	}
`;

export const fetchGuideBySlug = groq`
	*[_type == "guide" && slug.current == $slug][0] {
		_id,
		title,
		slug,
		excerpt,
		publishedAt,
		estimatedReadingTime,
		metaDescription,
		seo,
		canonical,
		tags[]->{
			title,
			slug
		},
		body
	}
`;
