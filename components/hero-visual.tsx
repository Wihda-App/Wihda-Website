"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Leaf, Trophy, MapPin, Calendar, Star } from "lucide-react";
export const HeroVisual = ({ dict }: { dict: any }) => {
	return (
		<div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-1000 my-8 md:my-0 scale-90 sm:scale-100">
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[580px] md:w-[320px] md:h-[620px] bg-gradient-to-tr from-primary to-secondary opacity-50 dark:opacity-20 rounded-[3rem] blur-3xl -z-10 animate-pulse-slow"></div>
			{/* Central Phone */}
			<div className="relative border-gray-900 dark:border-gray-900 bg-gray-900 border-[10px] md:border-[14px] rounded-[2rem] md:rounded-[2.5rem] h-[500px] w-[250px] md:h-[600px] md:w-[300px] shadow-2xl flex flex-col items-center select-none z-10 overflow-hidden transform transition-transform duration-700 hover:rotate-0 rotate-y-6 md:rotate-y-12 rotate-z-1 md:rotate-z-2 mx-auto">
				{/* Notch & Buttons */}
				<div className="h-[24px] md:h-[32px] w-[3px] bg-gray-800 absolute -left-[13px] md:-left-[17px] top-[60px] md:top-[72px] rounded-l-lg"></div>
				<div className="h-[36px] md:h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] md:-left-[17px] top-[100px] md:top-[124px] rounded-l-lg"></div>
				<div className="h-[36px] md:h-[46px] w-[3px] bg-gray-800 absolute -left-[13px] md:-left-[17px] top-[144px] md:top-[178px] rounded-l-lg"></div>
				<div className="h-[48px] md:h-[64px] w-[3px] bg-gray-800 absolute -right-[13px] md:-right-[17px] top-[115px] md:top-[142px] rounded-r-lg"></div>

				{/* Screen Content */}
				<div className="w-full h-full bg-background relative overflow-hidden flex flex-col">
					{/* Status Bar */}
					<div className="w-full h-8 md:h-12 flex justify-between items-center px-4 md:px-6 pt-2">
						<span className="text-[9px] md:text-[10px] font-bold">
							{dict.HeroVisual.text_1}
						</span>
						<div className="flex gap-1">
							<div className="w-2 md:w-3 h-2 md:h-3 bg-foreground rounded-full opacity-20"></div>
							<div className="w-2 md:w-3 h-2 md:h-3 bg-foreground rounded-full opacity-20"></div>
						</div>
					</div>

					{/* App Header */}
					<div className="px-4 md:px-6 pb-4">
						<div className="h-6 md:h-8 w-20 md:w-24 bg-muted rounded-full mb-4 md:mb-6"></div>
						<div className="space-y-3">
							<div className="h-28 md:h-32 w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 flex flex-col justify-end relative overflow-hidden">
								<div className="absolute top-0 right-0 p-3 opacity-10">
									<Leaf className="w-12 h-12 text-primary" />
								</div>
								<div className="w-7 h-7 md:w-8 md:h-8 bg-primary/20 rounded-lg mb-2 flex items-center justify-center">
									<Leaf className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
								</div>
								<div className="h-1.5 md:h-2 w-20 md:w-24 bg-primary/20 rounded-full mb-1"></div>
								<div className="h-1.5 md:h-2 w-12 md:w-16 bg-primary/20 rounded-full"></div>
							</div>

							<div className="grid grid-cols-2 gap-2 md:gap-3">
								<div className="h-20 md:h-24 bg-muted/50 rounded-2xl p-3 relative overflow-hidden">
									<div className="w-5 h-5 md:w-6 md:h-6 bg-secondary/10 rounded-full mb-2"></div>
									<div className="h-1.5 md:h-2 w-10 md:w-12 bg-muted-foreground/20 rounded-full"></div>
								</div>
								<div className="h-20 md:h-24 bg-muted/50 rounded-2xl p-3 relative overflow-hidden">
									<div className="w-5 h-5 md:w-6 md:h-6 bg-accent/10 rounded-full mb-2"></div>
									<div className="h-1.5 md:h-2 w-10 md:w-12 bg-muted-foreground/20 rounded-full"></div>
								</div>
							</div>

							<div className="h-32 md:h-40 w-full bg-muted/30 rounded-2xl p-4">
								<div className="flex items-center gap-3 mb-3">
									<div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-muted"></div>
									<div className="space-y-1">
										<div className="h-1.5 md:h-2 w-16 md:w-20 bg-muted-foreground/20 rounded-full"></div>
										<div className="h-1 md:h-1.5 w-10 md:w-12 bg-muted-foreground/10 rounded-full"></div>
									</div>
								</div>
								<div className="h-1.5 md:h-2 w-full bg-muted-foreground/10 rounded-full mb-2"></div>
								<div className="h-1.5 md:h-2 w-3/4 bg-muted-foreground/10 rounded-full"></div>
							</div>
						</div>
					</div>

					{/* Bottom Nav */}
					<div className="mt-auto h-16 md:h-20 bg-background/80 backdrop-blur border-t flex justify-around items-center px-4 md:px-6 pb-2">
						<div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded-full"></div>
						<div className="w-5 h-5 md:w-6 md:h-6 bg-muted rounded-full"></div>
						<div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center -mt-6 md:-mt-8 border-[3px] md:border-4 border-background">
							<div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-sm"></div>
						</div>
						<div className="w-5 h-5 md:w-6 md:h-6 bg-muted rounded-full"></div>
						<div className="w-5 h-5 md:w-6 md:h-6 bg-muted rounded-full"></div>
					</div>
				</div>
			</div>

			{/* Floating Card 1: Neighbors (Top Right) */}
			<Card className="absolute top-[8%] -right-[5%] md:top-24 md:-right-6 w-56 md:w-64 shadow-xl border-primary/20 animate-float-slow z-50 bg-background/95 backdrop-blur perspective-500 hover:scale-105 transition-transform duration-300">
				<CardContent className="p-3 md:p-4 flex items-center gap-3">
					<div className="relative">
						<Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-primary/10">
							<AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" />
							<AvatarFallback>{dict.HeroVisual.text_2}</AvatarFallback>
						</Avatar>
						<div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-background w-4 h-4 rounded-full"></div>
					</div>
					<div className="flex-1 min-w-0">
						<div className="flex justify-between items-start">
							<p className="text-xs md:text-sm font-bold leading-none mb-1 truncate">
								{dict.HeroVisual.text_3}
							</p>
							<Badge
								variant="outline"
								className="text-[9px] h-4 px-1 border-primary/20 text-primary"
							>
								{dict.HeroVisual.text_4}
							</Badge>
						</div>
						<p className="text-[10px] md:text-xs text-muted-foreground truncate">
							{dict.HeroVisual.text_5}{" "}
							<span className="text-foreground font-medium">
								{dict.HeroVisual.text_6}
							</span>
						</p>
						<div className="flex items-center gap-1 mt-1">
							<MapPin className="w-3 h-3 text-muted-foreground" />
							<span className="text-[9px] text-muted-foreground">
								{dict.HeroVisual.text_7}
							</span>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Floating Card 2: NGO/Impact (Bottom Right) */}
			<Card className="absolute bottom-[15%] -right-[8%] md:bottom-32 md:-right-12 w-52 md:w-60 shadow-xl border-secondary/20 animate-float-medium z-40 bg-background/95 backdrop-blur hover:scale-105 transition-transform duration-300">
				<CardContent className="p-3 md:p-4">
					<div className="flex justify-between items-start mb-2">
						<Badge
							variant="secondary"
							className="text-[9px] md:text-[10px] h-5 px-1.5 bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/20"
						>
							<Calendar className="w-3 h-3 mr-1" />
							{dict.HeroVisual.text_8}
						</Badge>
						<span className="text-[9px] md:text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
							{dict.HeroVisual.text_9}
						</span>
					</div>
					<h4 className="text-xs md:text-sm font-bold mb-1 line-clamp-1">
						{dict.HeroVisual.text_10}
					</h4>
					<div className="flex items-center justify-between mt-2">
						<div className="flex items-center gap-1.5">
							<div className="flex -space-x-2">
								<Avatar className="w-5 h-5 border-2 border-background">
									<AvatarFallback className="text-[8px] bg-primary/10">
										A
									</AvatarFallback>
								</Avatar>
								<Avatar className="w-5 h-5 border-2 border-background">
									<AvatarFallback className="text-[8px] bg-secondary/10">
										B
									</AvatarFallback>
								</Avatar>
								<Avatar className="w-5 h-5 border-2 border-background">
									<AvatarFallback className="text-[8px] bg-muted">
										C
									</AvatarFallback>
								</Avatar>
							</div>
							<span className="text-[9px] md:text-[10px] text-muted-foreground font-medium">
								{dict.HeroVisual.text_11}
							</span>
						</div>
						<div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
							<Users className="w-3 h-3 text-secondary" />
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Floating Card 3: Rewards (Bottom Left) */}
			<Card className="absolute bottom-[40%] -left-[5%] md:bottom-24 md:-left-8 w-56 md:w-64 shadow-xl border-yellow-500/20 animate-float-fast z-50 bg-background/95 backdrop-blur hover:scale-105 transition-transform duration-300">
				<CardContent className="p-3 md:p-4 flex gap-3 text-left">
					<div className="relative">
						<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center shrink-0 border border-yellow-500/20">
							<Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 drop-shadow-sm" />
						</div>
						<div className="absolute -top-1 -right-1">
							<Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
						</div>
					</div>
					<div>
						<p className="text-xs md:text-sm font-bold text-yellow-600 mb-0.5">
							{dict.HeroVisual.text_12}
						</p>
						<p className="text-[10px] md:text-xs text-foreground/80 leading-tight">
							{dict.HeroVisual.text_13}{" "}
							<span className="font-bold text-yellow-600">
								{dict.HeroVisual.text_14}
							</span>
							{dict.HeroVisual.text_15}
						</p>
						<div className="w-full bg-muted h-1 mt-2 rounded-full overflow-hidden">
							<div className="bg-yellow-500 h-full w-3/4 rounded-full"></div>
						</div>
						<p className="text-[9px] text-muted-foreground mt-1 text-right">
							{dict.HeroVisual.text_16}
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
