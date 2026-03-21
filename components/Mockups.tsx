import { cn } from "@/lib/utils";
import Link from "next/link";
export const Mockups = ({ dict }: { dict: any }) => {
	return (
		<section className="py-32 overflow-hidden bg-background-light dark:bg-background-dark relative">
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center mb-24 max-w-3xl mx-auto">
					<h2 className="text-4xl md:text-7xl font-black tracking-normal leading-[1.2] mb-8 text-neutral-dark dark:text-white">
						{dict.Mockups.text_1}
						<br />
						<span className="text-wihda-blue">{dict.Mockups.text_2}</span>{" "}
						{/* <-- THIS IS THE REAL SPACE */}
						<span>{dict.Mockups.text_3}</span>
						<br />
						<span className="text-wihda-green">{dict.Mockups.text_4}</span>
					</h2>
					<p className="text-lg md:text-xl opacity-70">{dict.Mockups.text_5}</p>
				</div>

				<div className="relative flex flex-col md:flex-row items-center justify-center gap-32 md:gap-0 mt-16 md:mt-0">
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-r from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl -z-10"></div>

					{/* Left Mockup */}
					<div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-12 z-20 group perspective-1000">
						<div className="relative w-70 md:w-[320px] rounded-[3rem] border-8 border-neutral-dark bg-neutral-dark overflow-hidden mockup-shadow transform md:-rotate-12 transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0">
							<img
								alt="Need Something App Screen"
								className="w-full h-auto object-cover aspect-[9/19.5]"
								src="/images/neighbors.PNG"
							/>
						</div>
						<div
							className={cn(
								"absolute -bottom-24 left-1/2 -translate-x-1/2 md:bottom-auto md:-top-12 md:-left-12 md:translate-x-0 bg-white/90 dark:bg-neutral-dark/90 backdrop-blur p-4 rounded-xl border border-secondary shadow-lg max-w-[180px] text-center md:text-left",
								dict.TEXT_DIRECTION == "rtl" && "md:text-right",
							)}
						>
							<p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
								{dict.Mockups.text_6}
							</p>
							<p className="text-sm font-sans leading-tight">
								{dict.Mockups.text_7}
							</p>
						</div>
					</div>

					{/* Center Mockup */}
					<div className="relative z-30 transform md:-translate-y-12">
						<div className="w-[300px] md:w-[340px] rounded-[3.5rem] border-8 border-neutral-dark bg-neutral-dark overflow-hidden mockup-shadow shadow-2xl transition-transform duration-500 hover:scale-105">
							<img
								alt="Activity Feed App Screen"
								className="w-full h-auto object-cover aspect-[9/19.5]"
								src="/images/ngo.PNG"
							/>
						</div>
						<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-neutral-dark text-white px-6 py-3 rounded-full shadow-xl whitespace-nowrap z-40">
							<span className="font-bold">{dict.Mockups.text_8}</span> •{" "}
							<span className="opacity-70 text-sm">{dict.Mockups.text_9}</span>
						</div>
					</div>

					{/* Right Mockup */}
					<div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-12 z-20 group perspective-1000">
						<div className="relative w-[280px] md:w-[320px] rounded-[3rem] border-8 border-neutral-dark bg-neutral-dark overflow-hidden mockup-shadow transform md:rotate-12 transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0">
							<img
								alt="Rewards Marketplace App Screen"
								className="w-full h-auto object-cover aspect-[9/19.5]"
								src="/images/rewards.PNG"
							/>
						</div>
						<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 md:-bottom-12 md:-right-4 md:left-auto md:translate-x-0 bg-white/90 dark:bg-neutral-dark/90 backdrop-blur p-4 rounded-xl border border-primary shadow-lg max-w-[180px] text-center md:text-right">
							<p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
								{dict.Mockups.text_10}
							</p>
							<p className="text-sm font-sans leading-tight">
								{dict.Mockups.text_11}
							</p>
						</div>
					</div>
				</div>

				<div className="md:mt-24 mt-36 flex justify-center">
					<Link
						href="/download"
						className="h-auto bg-neutral-dark dark:bg-white text-white dark:text-neutral-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-primary dark:hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-xl flex items-center gap-3"
					>
						<span className="material-icons">{dict.Mockups.text_12}</span>
						{dict.Mockups.text_13}
					</Link>
				</div>
			</div>
		</section>
	);
};
