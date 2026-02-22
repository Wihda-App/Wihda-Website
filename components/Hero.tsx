import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero-visual";
export const Hero = ({ dict }: { dict: any }) => {
	return (
		<header className="relative pt-32 md:pb-32 pb-16 overflow-hidden">
			{/* Abstract Background Shapes */}
			<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] 2xl:w-[900px] 2xl:h-[900px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] 2xl:w-[600px] 2xl:h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>

			<div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
					<div className="space-y-8 animate-fade-in-up text-center lg:text-left">
						<h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
							{dict.Hero.text_1}
							<br />
							{dict.Hero.text_2}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
								{dict.Hero.text_3}
							</span>
							.
						</h1>

						<p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
							{dict.Hero.text_4}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Link href="/download" passHref>
								<Button
									size="lg"
									className="h-14 px-8 rounded-xl text-base gap-3 shadow-lg hover:translate-y-[-2px] transition-all cursor-pointer"
								>
									<span className="material-icons text-2xl">
										{dict.Hero.text_5}
									</span>
									<span className="font-bold">{dict.Hero.text_6}</span>
								</Button>
							</Link>
							<Link href="#contact" passHref>
								<Button
									size="lg"
									variant="secondary"
									className="h-14 px-8 rounded-xl text-base gap-3 shadow-lg hover:translate-y-[-2px] transition-all bg-neutral-dark text-white hover:bg-neutral-dark/90 cursor-pointer"
								>
									<span className="material-icons text-2xl">
										{dict.Hero.text_7}
									</span>
									<span className="font-bold">{dict.Hero.text_8}</span>
								</Button>
							</Link>
						</div>

						<div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
							<div className="flex -space-x-3">
								<img
									className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
									src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
									alt="User"
								/>
								<img
									className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
									src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
									alt="User"
								/>
								<img
									className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900"
									src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
									alt="User"
								/>
								<div className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
									{dict.Hero.text_9}
								</div>
							</div>
							<div className="text-sm font-medium text-gray-500">
								<span className="text-primary font-bold">
									{dict.Hero.text_10}
								</span>
								{dict.Hero.text_11}
							</div>
						</div>
					</div>

					{/* Interactive Hero Visual */}
					<div className="relative flex justify-center w-full">
						<HeroVisual dict={dict} />
					</div>
				</div>
			</div>
		</header>
	);
};
