import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Define localized interface since we are replacing the file content anyway and to avoid import issues if types change
interface ValueItem {
	icon: React.ReactNode;
	title: string;
	description: string;
	bgClass: string;
	iconBgClass: string;
	iconColorClass?: string;
	className?: string;
}

const getValues = (dict: any): ValueItem[] => [
	{
		icon: <span className="material-icons">{dict.VALUES.text_1}</span>,
		title: dict.ValueCards.text_1,
		description: dict.ValueCards.text_2,
		bgClass: "bg-[#eef8fe] dark:bg-primary/10",
		iconBgClass: "bg-primary text-white",
	},
	{
		icon: <span className="material-icons">{dict.VALUES.text_2}</span>,
		title: dict.ValueCards.text_3,
		description: dict.ValueCards.text_4,
		bgClass: "bg-[#f2f9e7] dark:bg-secondary/10",
		iconBgClass: "bg-secondary text-white",
	},
	{
		icon: <span className="material-icons">{dict.VALUES.text_3}</span>,
		title: dict.ValueCards.text_5,
		description: dict.ValueCards.text_6,
		bgClass: "bg-gray-50 dark:bg-gray-800",
		iconBgClass: "bg-gray-900 dark:bg-white",
		iconColorClass: "text-white dark:text-gray-900",
		className: "sm:mt-8",
	},
	{
		icon: <span className="material-icons">{dict.VALUES.text_4}</span>,
		title: dict.ValueCards.text_7,
		description: dict.ValueCards.text_8,
		bgClass: "bg-[#fff4e5] dark:bg-orange-900/20",
		iconBgClass: "bg-orange-400 text-white",
		className: "sm:mt-8",
	},
];

export const Values = ({ dict }: { dict: any }) => {
	const VALUES = getValues(dict);

	return (
		<section className="py-24 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					<div className="lg:sticky lg:top-32">
						<h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
							{dict.Values.text_1}
							<br />
							<span className="text-primary">{dict.Values.text_2}</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
							{dict.Values.text_3}
						</p>
						<a
							href="#"
							className="inline-flex items-center text-primary font-bold hover:text-primary-dark text-lg group"
						>
							{dict.Values.text_4}
							{/* Changed ml-2 to ms-2 for RTL Arabic support */}
							<span className="material-icons ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
								{dict.Values.text_5}
							</span>
						</a>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{VALUES.map((value, index) => (
							<Card
								key={index}
								className={cn(
									"border-none shadow-none flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 h-64",
									value.bgClass,
									value.className,
								)}
							>
								<CardContent className="p-8 h-full flex flex-col justify-between">
									<div
										className={cn(
											"w-10 h-10 rounded-full flex items-center justify-center shadow-sm",
											value.iconBgClass,
											value.iconColorClass,
										)}
									>
										{value.icon}
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
											{value.title}
										</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
											{value.description}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
