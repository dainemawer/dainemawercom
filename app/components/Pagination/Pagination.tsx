"use client";

import type { FC } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { generatePagination } from "~lib/pagination";

import { PaginationProps } from "./Pagination.types";

export const Pagination: FC<PaginationProps> = ({ totalPages }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const allPages = generatePagination(currentPage, totalPages);

	return (
		<nav className="flex justify-center">
			{!(currentPage <= 1) && (
				<Link
					className="inline-flex items-center justify-center mr-4"
					href={createPageURL(currentPage - 1)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
						/>
					</svg>
				</Link>
			)}

			{allPages.map((page) => {
				return (
					<PaginationNumber
						key={page}
						href={createPageURL(page)}
						page={page}
						isActive={currentPage === page}
					/>
				);
			})}
			{!(currentPage >= totalPages) && (
				<Link
					className="inline-flex items-center justify-center"
					href={createPageURL(currentPage + 1)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
						/>
					</svg>
				</Link>
			)}
		</nav>
	);
};

function PaginationNumber({
	page,
	href,
	isActive,
}: {
	href: string;
	isActive: boolean;
	page: number | string;
}) {
	return isActive ? (
		<div className="px-3 py-2 mr-4 text-blue-600 text-sm block leading-none border border-blue-600">
			{page}
		</div>
	) : (
		<Link
			className="px-3 py-2 mr-4 text-sm  block leading-none border hover:text-blue-600 no-underline"
			href={href}
		>
			{page}
		</Link>
	);
}
