import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export function HeroSection({ dict }: { dict: any }) {
	return (
		<section className="relative pt-[216px] pb-16 bg-gradient-to-b from-[#f5f3f0] to-[#faf9f7]">
			<div className="max-w-[1060px] mx-auto px-4">
				<div className="flex flex-col items-center gap-12">
					{/* Hero Content */}
					<div className="max-w-[937px] flex flex-col items-center gap-3">
						<div className="flex flex-col items-center gap-6">
							<div className="inline-block px-4 py-2 rounded-full bg-[#d4e8c1]/40 border border-[#a8d583]/30 mb-2">
								<span className="text-[#2d5016] text-sm font-medium">
									{dict.HeroSection.text_1}
								</span>
							</div>
							<h1 className="max-w-[748px] text-center text-[#1a3a0a] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-sans">
								{dict.HeroSection.text_2}
							</h1>
							<p className="max-w-[506px] text-center text-[#2d5016]/80 text-lg font-medium leading-7">
								{dict.HeroSection.text_3}
							</p>
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex justify-center gap-4 flex-wrap">
						<Button className="h-10 px-12 bg-[#2d5016] hover:bg-[#1f3a0c] text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition-all">
							{dict.HeroSection.text_4}
						</Button>
						<Link href="/simulation">
							<Button
								variant="outline"
								className="h-10 px-8 border-[#2d5016] text-[#2d5016] hover:bg-[#2d5016]/5 rounded-full font-medium text-sm transition-all bg-transparent"
							>
								{dict.HeroSection.text_5}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
