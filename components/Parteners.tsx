import React from "react";
import { PartnersCarousel } from "./PartnersCarousel";
import MenaLogo from "./mena-logo";

interface Partner {
	name: string;
	logo: string | React.JSX.Element;
	url: string;
	className?: string;
	whiteLogo?: boolean;
}

const PARTNERS: Partner[] = [
	{
		name: "Code for MENA",
		logo: <MenaLogo />,
		url: "https://codeformena.org",
		className: "h-16 md:h-24 text-black dark:text-white",
	},
	{
		name: "Digital Democracy Initiative",
		logo: "/images/digital-democracy-initiative.jpg",
		url: "https://www.civicus.org/index.php/what-we-do/enabling-and-resourcing/digital-democracy-initiative",
		className: "h-24 md:h-32",
	},
	{
		name: "CIVICUS",
		logo: "https://codeformena.org/wp-content/uploads/2025/07/Untitled-1-01-a1.png",
		url: "https://www.civicus.org",
		className: "h-20 md:h-32",
	},
	{
		name: "SmartGov",
		logo: "https://codeformena.org/wp-content/uploads/2025/07/Untitled-1-01-13.png",
		url: "https://smartgov.tech",
		className: "h-16 md:h-24",
	},
];

export const Partners: React.FC = () => {
	return (
		<section className="py-16 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
						Trusted By
					</h2>
					<div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
				</div>

				<div className="w-full flex justify-center">
					<PartnersCarousel partners={PARTNERS} />
				</div>
			</div>
		</section>
	);
};
