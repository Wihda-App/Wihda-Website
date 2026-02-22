import React from "react";
import { FeatureCardProps } from "../types";
const CARDS: FeatureCardProps[] = [
	{
		icon: "face",
		title: "Citizens",
		description:
			"Make your voice heard. Report issues, propose ideas, and track the progress of civic projects in your neighborhood.",
		colorClass: "bg-primary",
		iconBgClass:
			"bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
		hoverClass: "group-hover:scale-150",
	},
	{
		icon: "account_balance",
		title: "Leaders",
		description:
			"Connect directly with constituents. Understand real-time needs and demonstrate transparency in your governance.",
		colorClass: "bg-secondary",
		iconBgClass:
			"bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
		hoverClass: "group-hover:scale-150",
	},
	{
		icon: "handshake",
		title: "Partners",
		description:
			"Amplify your impact. NGOs and businesses can coordinate resources and volunteers more effectively.",
		colorClass: "bg-purple-500",
		iconBgClass:
			"bg-purple-100 dark:bg-purple-900/30 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
		hoverClass: "group-hover:scale-150",
	},
];
export const Audience = ({ dict }: { dict: any }) => {
	return (
		<section className="py-24 bg-background-light dark:bg-background-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						{dict.Audience.text_1}
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						{dict.Audience.text_2}
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{CARDS.map((card, index) => (
						<div
							key={index}
							className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
						>
							{/* Decorative Circle Animation */}
							<div
								className={`absolute top-0 right-0 w-32 h-32 ${card.colorClass} opacity-5 rounded-full -mr-16 -mt-16 transition-transform duration-500 ${card.hoverClass}`}
							></div>

							<div
								className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${card.iconBgClass}`}
							>
								<span className="material-icons text-3xl">{card.icon}</span>
							</div>

							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
								{card.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
								{card.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
