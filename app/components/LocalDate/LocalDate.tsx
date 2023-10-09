import type { FC } from "react";
import type { LocalDateProps } from "./LocalDate.types";
import { parseISO, format } from "date-fns";

export const LocalDate: FC<LocalDateProps> = ({ className, dateString }) => {
	if (!dateString) return null;
	const date = parseISO(dateString);

	return (
		<time className={className} dateTime={dateString}>
			{format(date, "LLLL	d, yyyy")}
		</time>
	);
};

LocalDate.displayName = "LocalDate";
