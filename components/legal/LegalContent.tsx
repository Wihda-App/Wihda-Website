import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export function LegalContent({ dict }: { dict: any }) {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<Card className="rounded-xl shadow-sm border border-border overflow-hidden">
				<CardContent className="p-8 sm:p-12 relative">
					{/* Decorative top accent */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>

					{/* Last Updated Badge */}
					<div className="flex justify-between items-start mb-10">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-2">
								{dict.LegalContent.text_1}
							</h2>
							<p className="text-muted-foreground text-sm">
								{dict.LegalContent.text_2}
							</p>
						</div>
						<Badge
							variant="secondary"
							className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-secondary/20"
						>
							<span className="material-icons text-sm">
								{dict.LegalContent.text_3}
							</span>
							{dict.LegalContent.text_4}
						</Badge>
					</div>

					{/* Summary Card (TL;DR) */}
					<div className="bg-muted/50 rounded-lg p-6 mb-12 border border-border">
						<h4 className="font-bold text-foreground flex items-center gap-2 mb-3">
							<span className="material-icons text-primary">
								{dict.LegalContent.text_5}
							</span>
							{dict.LegalContent.text_6}
						</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
								{dict.LegalContent.text_7}
							</li>
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
								{dict.LegalContent.text_8}
							</li>
							<li className="flex items-start gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
								{dict.LegalContent.text_9}
							</li>
						</ul>
					</div>

					{/* Legal Content */}
					<div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground transition-colors">
						<section id="introduction" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_10}
							</h3>
							<p className="mb-4">{dict.LegalContent.text_11}</p>
							<p>{dict.LegalContent.text_12}</p>
						</section>

						<div className="w-full h-px bg-border my-8"></div>

						<section id="data-collection" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_13}
							</h3>
							<p className="mb-4">{dict.LegalContent.text_14}</p>
							<div className="grid md:grid-cols-2 gap-4 my-6">
								<div className="bg-muted/50 p-4 rounded-lg border border-border">
									<h5 className="font-bold text-foreground mb-2 text-sm">
										{dict.LegalContent.text_15}
									</h5>
									<p className="text-sm">{dict.LegalContent.text_16}</p>
								</div>
								<div className="bg-muted/50 p-4 rounded-lg border border-border">
									<h5 className="font-bold text-foreground mb-2 text-sm">
										{dict.LegalContent.text_17}
									</h5>
									<p className="text-sm">{dict.LegalContent.text_18}</p>
								</div>
							</div>
							<p>{dict.LegalContent.text_19}</p>
						</section>

						<div className="w-full h-px bg-border my-8"></div>

						<section id="data-usage" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_20}
							</h3>
							<p className="mb-4">{dict.LegalContent.text_21}</p>
							<ul className="list-none pl-0 space-y-3 mt-4">
								<li className="flex gap-3">
									<span className="material-icons text-primary">
										{dict.LegalContent.text_22}
									</span>
									<span>{dict.LegalContent.text_23}</span>
								</li>
								<li className="flex gap-3">
									<span className="material-icons text-primary">
										{dict.LegalContent.text_24}
									</span>
									<span>{dict.LegalContent.text_25}</span>
								</li>
								<li className="flex gap-3">
									<span className="material-icons text-primary">
										{dict.LegalContent.text_26}
									</span>
									<span>{dict.LegalContent.text_27}</span>
								</li>
							</ul>
						</section>

						<div className="w-full h-px bg-border my-8"></div>

						<section id="user-responsibilities" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_28}
							</h3>
							<p className="mb-4">{dict.LegalContent.text_29}</p>
							<div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
								<p className="text-sm text-foreground font-medium">
									<strong>{dict.LegalContent.text_30}</strong>
									{dict.LegalContent.text_31}
								</p>
							</div>
						</section>

						<div className="w-full h-px bg-border my-8"></div>

						<section id="security" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_32}
							</h3>
							<p className="mb-4">{dict.LegalContent.text_33}</p>
						</section>

						<div className="w-full h-px bg-border my-8"></div>

						<section id="termination" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_34}
							</h3>
							<p className="mb-4">{dict.LegalContent.text_35}</p>
						</section>

						<section id="contact" className="mb-12 scroll-mt-32">
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{dict.LegalContent.text_36}
							</h3>
							<div className="bg-card text-card-foreground rounded-xl p-8 relative overflow-hidden bg-slate-900 text-white">
								<div className="relative z-10">
									<p className="mb-6 opacity-90">
										{dict.LegalContent.text_37}{" "}
										<Link
											href="#"
											className="text-primary hover:text-white underline decoration-primary underline-offset-4"
										>
											{dict.LegalContent.text_38}
										</Link>{" "}
										{dict.LegalContent.text_39}
									</p>
									<address className="not-italic opacity-80 mb-6">
										{dict.LegalContent.text_40}
										<br />
										{dict.LegalContent.text_41}
										<br />
										{dict.LegalContent.text_42}
										<br />
										{dict.LegalContent.text_43}
									</address>
									<Button className="bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
										{dict.LegalContent.text_44}
									</Button>
								</div>
								<div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
									<span className="material-icons text-[16rem]">
										{dict.LegalContent.text_45}
									</span>
								</div>
							</div>
						</section>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
