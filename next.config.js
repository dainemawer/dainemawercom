/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	reactStrictMode: true,
	headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		];
	},
	async redirects() {
		return [
			{
				source: "/how-to-motivate-and-inspire-individual-contributors",
				destination:
					"/articles/how-to-motivate-and-inspire-individual-contributors",
				permanent: true,
			},
			{
				source:
					"/articles/waking-up-early-a-crash-course-for-software-engineers",
				destination: "/articles/waking-up-early-a-crash-course-for-engineers",
				permanent: true,
			},
			{
				source: "/four-surprising-benefits-of-intermittent-fasting",
				destination:
					"/articles/four-surprising-benefits-of-intermittent-fasting",
				permanent: true,
			},
			{
				source:
					"/articles/five-surprising-benefits-of-intermittent-fasting-for-software-engineers",
				destination:
					"articles/four-surprising-benefits-of-intermittent-fasting",
				permanent: true,
			},
			{
				source: "/leveraging-commitlint-for-consistency",
				destination: "/articles/leveraging-commitlint-for-consistency",
				permanent: true,
			},
			{
				source: "/blog/leveraging-commitlint-for-consistency",
				destination: "/articles/leveraging-commitlint-for-consistency",
				permanent: true,
			},
			{
				source:
					"/five-frontend-file-architectures-for-better-code-organisation",
				destination:
					"/articles/five-frontend-file-architectures-for-better-code-organisation",
				permanent: true,
			},
			{
				source:
					"/five-frontend-file-architectures-for-better-code-organisation",
				destination:
					"/articles/five-frontend-file-architectures-for-better-code-organisation",
				permanent: true,
			},
			{
				source: "/four-tips-for-properly-using-the-return-statement",
				destination:
					"/articles/four-tips-for-properly-using-the-return-statement",
				permanent: true,
			},
			{
				source: "/blog/four-surprising-benefits-of-intermittent-fasting",
				destination:
					"/articles/four-surprising-benefits-of-intermittent-fasting",
				permanent: true,
			},
			{
				source: "/blog/four-surprising-benefits-of-intermittent-fasting",
				destination:
					"/articles/four-surprising-benefits-of-intermittent-fasting",
				permanent: true,
			},
			{
				source: "/ten-proven-techniques-for-effective-code-reviews",
				destination:
					"/articles/ten-proven-techniques-for-effective-code-reviews",
				permanent: true,
			},
			{
				source: "/ten-proven-techniques-for-effective-code-reviews",
				destination:
					"/articles/ten-proven-techniques-for-effective-code-reviews",
				permanent: true,
			},
			{
				source: "/blog",
				destination: "/articles",
				permanent: true,
			},
			{
				source:
					"/blog/five-frontend-file-architectures-for-better-code-organisation",
				destination:
					"/articles/five-frontend-file-architectures-for-better-code-organisation",
				permanent: true,
			},
			{
				source: "/blog/ten-proven-techniques-for-effective-code-reviews",
				destination:
					"/articles/ten-proven-techniques-for-effective-code-reviews",
				permanent: true,
			},
			{
				source: "/blog/how-to-motivate-and-inspire-individual-contributors",
				destination:
					"/articles/how-to-motivate-and-inspire-individual-contributors",
				permanent: true,
			},
			{
				source:
					"/articles/how-commitlint-can-improve-your-projects-quality-and-documentation",
				destination: "/articles/leveraging-commitlint-for-consistency",
				permanent: true,
			},
			{
				source:
					"/articles/how-commitlint-can-improve-your-projects-quality-and-documentation",
				destination: "/articles/leveraging-commitlint-for-consistency",
				permanent: true,
			},
		];
	},
};

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' data:;
`;

const securityHeaders = [
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\n/g, ""),
	},
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin",
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=31536000; includeSubDomains; preload",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
];

module.exports = nextConfig;
