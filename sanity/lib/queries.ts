export const fetchAllBlogPosts = `
	*[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
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

export const fetchBlogPostBySlug = `
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

export const fetchAllPostsByCategory = `
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

export const fetchAllPostsByTag = `
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

export const fetchAllTags = `
	*[_type == "tag"] {
		_id,
		title,
		excerpt,
		slug
	}
`;

export const fetchAllCategories = `
	*[_type == "category"] {
		_id,
		title,
		excerpt,
		slug
	}
`;
