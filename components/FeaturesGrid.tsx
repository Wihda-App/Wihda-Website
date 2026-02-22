import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
export const FeaturesGrid = ({ dict }: { dict: any }) => {
	return (
		<section className="py-24 px-6 bg-white dark:bg-background-dark/50">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-end mb-12">
					<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-dark dark:text-white">
						{dict.FeaturesGrid.text_1}
						<br />
						<span className="text-wihda-blue italic">
							{dict.FeaturesGrid.text_2}
						</span>
					</h2>
					<Link
						href="/blog"
						className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all text-neutral-dark dark:text-white/80"
					>
						{dict.FeaturesGrid.text_3}
						<span className="material-icons text-sm">
							{dict.FeaturesGrid.text_4}
						</span>
					</Link>
				</div>

				{/* Grid Container */}
				<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
					{/* Card 1: Large Feature Image */}
					<Link
						href="/blog/digital-tools-analog-problems"
						className="group relative md:col-span-2 md:row-span-2 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
					>
						<Image
							alt="Bridging the Gap: Digital Tools for Analog Problems"
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-110"
							src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
						<div className="absolute bottom-0 left-0 p-6 text-white">
							<span className="inline-block px-3 py-1 bg-wihda-green text-neutral-dark text-xs font-bold uppercase tracking-wider rounded-full mb-3">
								{dict.FeaturesGrid.text_5}
							</span>
							<h3 className="text-2xl font-bold">{dict.FeaturesGrid.text_6}</h3>
						</div>
					</Link>

					{/* Card 2: Stat Card (Blue) */}
					<Card className="bg-wihda-blue text-white p-8 rounded-xl border-none flex flex-col justify-between hover:bg-wihda-blue/90 transition-colors shadow-sm">
						<div>
							<span className="material-icons text-4xl mb-4 opacity-80">
								{dict.FeaturesGrid.text_7}
							</span>
							<h3 className="text-lg font-medium opacity-90">
								{dict.FeaturesGrid.text_8}
							</h3>
						</div>
						<div>
							<span className="text-5xl font-black tracking-tighter">
								{dict.FeaturesGrid.text_9}
							</span>
							<p className="text-sm opacity-70 mt-1">
								{dict.FeaturesGrid.text_10}
							</p>
						</div>
					</Card>

					{/* Card 3: Portrait Image */}
					<Link
						href="/blog/vacant-lot-transformation"
						className="group relative md:row-span-2 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
					>
						<Image
							alt="How One Neighborhood Transformed a Vacant Lot"
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-110"
							src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop"
						/>
						<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
						<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-neutral-dark rounded-full p-2 w-10 h-10 flex items-center justify-center">
							<span className="material-icons text-sm">
								{dict.FeaturesGrid.text_11}
							</span>
						</div>
						<div className="absolute bottom-6 left-6 text-white">
							<p className="text-lg font-bold">{dict.FeaturesGrid.text_12}</p>
						</div>
					</Link>

					{/* Card 4: Minimal Text Card */}
					<Card className="bg-background-light border border-gray-200 dark:border-white/10 dark:bg-white/5 p-8 rounded-xl flex flex-col justify-center items-center text-center hover:border-wihda-green transition-colors group  shadow-none">
						<div className="w-16 h-16 rounded-full bg-wihda-green/20 text-wihda-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
							<span className="material-icons text-3xl">
								{dict.FeaturesGrid.text_13}
							</span>
						</div>
						<h3 className="text-xl font-bold mb-2 text-neutral-dark dark:text-white">
							{dict.FeaturesGrid.text_14}
						</h3>
						<p className="text-sm opacity-60 text-neutral-dark dark:text-white/60">
							{dict.FeaturesGrid.text_15}
						</p>
					</Card>

					{/* Card 5: Wide Image (Bottom Left) */}
					<Link
						href="/blog/new-civic-engagement-framework"
						className="group relative md:col-span-2 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
					>
						<Image
							alt="Understanding the New Civic Engagement Framework"
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-110"
							src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/80 to-transparent"></div>
						<div className="absolute inset-0 p-8 flex flex-col justify-center items-start text-white">
							<h3 className="text-3xl font-bold mb-2">
								{dict.FeaturesGrid.text_16}
								<br />
								{dict.FeaturesGrid.text_17}
							</h3>
							<div className="text-sm font-bold border-b border-white pb-1 hover:text-wihda-green hover:border-wihda-green transition-colors mt-4">
								{dict.FeaturesGrid.text_18}
							</div>
						</div>
					</Link>

					{/* Card 6: Action Card (Green Gradient) */}
					<Link href="/download" className="block h-full">
						<Card className="relative h-full bg-gradient-to-br from-wihda-green to-[#a3d95b] border-none p-8 rounded-xl flex flex-col justify-between overflow-hidden group cursor-pointer shadow-sm">
							<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
							<h3 className="text-neutral-dark text-2xl font-bold leading-tight relative z-10">
								{dict.FeaturesGrid.text_19}
								<br />
								{dict.FeaturesGrid.text_20}
							</h3>
							<div className="flex justify-between items-end relative z-10">
								<span className="text-neutral-dark font-medium text-sm">
									{dict.FeaturesGrid.text_21}
								</span>
								<div className="w-10 h-10 bg-neutral-dark rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-wihda-green transition-colors">
									<span className="material-icons text-sm">
										{dict.FeaturesGrid.text_22}
									</span>
								</div>
							</div>
						</Card>
					</Link>
				</div>

				<div className="mt-8 text-center md:hidden">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-neutral-dark dark:border-white pb-1 text-neutral-dark dark:text-white"
					>
						{dict.FeaturesGrid.text_23}
						<span className="material-icons text-sm">
							{dict.FeaturesGrid.text_24}
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};
