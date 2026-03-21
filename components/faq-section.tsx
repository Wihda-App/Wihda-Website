"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
interface FAQItem {
	question: string;
	answer: string;
}
const faqData: FAQItem[] = [
	{
		question: "What is Wihda and who can use it?",
		answer:
			"Wihda is a neighborhood civic app that connects communities to share leftovers, organize cleanups, and discover local campaigns. Anyone in a participating neighborhood can join for free and start making a positive impact.",
	},
	{
		question: "How do I share leftovers on Wihda?",
		answer:
			"Simply post extra food you have to share, specify pickup details, and connect with neighbors who need it. The app handles matching and communication through a secure chat thread until the transaction is complete.",
	},
	{
		question: "What are Wihda coins and how do I earn them?",
		answer:
			"Wihda coins are earned through community actions like sharing leftovers or completing cleanups. These coins can be used to unlock rewards and celebrate your contribution to the neighborhood.",
	},
	{
		question: "Is Wihda available in my area?",
		answer:
			"Wihda is currently launching in select neighborhoods across the region. You can check if your neighborhood is available in the app, and we're expanding regularly. Contact us to request coverage in your area.",
	},
	{
		question: "How does Wihda keep users safe?",
		answer:
			"We prioritize community safety through verified profiles, moderated content, and secure transactions. Our community guidelines ensure a respectful environment for all users.",
	},
	{
		question: "Is the Wihda app really free?",
		answer:
			"Yes! Wihda is completely free to download and use. We're focused on building community impact, not monetization. Future premium features may be offered, but core community features remain free.",
	},
];
function ChevronDownIcon({
	className,
	dict,
}: {
	className?: string;
	dict: any;
}) {
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m6 9 6 6 6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
export default function FAQSection({ dict }: { dict: any }) {
	const [openItems, setOpenItems] = useState<number[]>([]);
	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		);
	};
	return (
		<div className="w-full flex justify-center items-start">
			<div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
				{/* Left Column - Header */}
				<div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
					<div className="w-full flex flex-col justify-center text-[#1a3a0a] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
						{dict.FAQSection.text_1}
					</div>
					<div className="w-full text-[#2d5016]/70 text-base font-normal leading-7 font-sans">
						{dict.FAQSection.text_2}
					</div>
				</div>

				{/* Right Column - FAQ Items */}
				<div className="w-full lg:flex-1 flex flex-col justify-center items-center">
					<div className="w-full flex flex-col">
						{faqData.map((item, index) => {
							const isOpen = openItems.includes(index);
							return (
								<div
									key={index}
									className="w-full border-b border-[#a8d583]/30 overflow-hidden"
								>
									<button
										onClick={() => toggleItem(index)}
										className={cn(
											"w-full px-5 py-4.5 flex justify-between items-center gap-5 text-left hover:bg-[#d4e8c1]/10 transition-colors duration-200",
											dict.TEXT_DIRECTION == "rtl" && "text-right",
										)}
										aria-expanded={isOpen}
									>
										<div className="flex-1 text-[#1a3a0a] text-base font-medium leading-6 font-sans">
											{item.question}
										</div>
										<div className="flex justify-center items-center">
											<ChevronDownIcon
												className={`w-6 h-6 text-[#2d5016]/60 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
												dict={dict}
											/>
										</div>
									</button>

									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
									>
										<div className="px-5 pb-[18px] text-[#2d5016]/70 text-sm font-normal leading-6 font-sans">
											{item.answer}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
