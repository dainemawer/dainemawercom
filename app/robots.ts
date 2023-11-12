import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "Googlebot",
				disallow: "/*?ND",
			},
			{
				userAgent: "Googlebot",
				disallow: "/*?page_id=",
			},
			{
				userAgent: "Googlebot",
				disallow: "/*?portfolio=",
			},
			{
				userAgent: "Googlebot",
				disallow: "/api/outstatic/login",
			},
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: "https://dainemawer.com/sitemap.xml",
	};
}
