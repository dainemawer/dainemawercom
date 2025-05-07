"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQProps {
	answer: string;
	question: string;
}

export const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="my-4 border border-gray-200 rounded-lg">
			<button
				className="flex items-center justify-between w-full px-4 py-3 text-left focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
			>
				<h3 className="text-lg font-medium">{question}</h3>
				<ChevronDownIcon
					className={`w-5 h-5 transition-transform ${
						isOpen ? "transform rotate-180" : ""
					}`}
				/>
			</button>
			{isOpen && (
				<div className="px-4 pb-4">
					<p className="text-gray-600">{answer}</p>
				</div>
			)}
		</div>
	);
};
