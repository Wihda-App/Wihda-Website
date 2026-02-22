import { Footer } from "@/components/Footer";
import { LegalSidebar } from "@/components/legal/LegalSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Wihda Legal - Terms of Service",
	description:
		"Understand the rules and regulations governing the use of the Wihda platform.",
};

export default function TermsPage() {
	return (
		<section>
			<main className="grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
				{/* Mobile Sidebar Trigger */}
				<div className="w-full max-w-4xl flex items-center justify-start mb-6 lg:hidden">
					<SidebarTrigger />
					<span className="ml-2 font-semibold text-sm">Menu</span>
				</div>

				{/* Header Section */}
				<div className="w-full max-w-200 flex flex-col items-center text-center mb-12">
					<nav className="flex items-center gap-2 text-sm font-medium mb-6 text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">
							Home
						</Link>
						<span className="material-icons text-sm">chevron_right</span>
						<span className="text-foreground">Legal Center</span>
					</nav>

					<div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
						<span className="material-icons text-3xl text-secondary">
							description
						</span>
					</div>

					<h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
						Terms of Service
					</h1>
					<p className="text-xl text-muted-foreground mb-8">
						Please read these terms carefully before using our service. They
						outline your rights and obligations as a user of the Wihda platform.
					</p>
				</div>

				{/* Main Content */}
				<div className="w-full max-w-4xl mx-auto">
					<Card className="rounded-xl shadow-sm border border-border overflow-hidden">
						<CardContent className="p-8 sm:p-12 relative">
							{/* Decorative top accent */}
							<div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary"></div>

							{/* Last Updated Badge */}
							<div className="flex justify-between items-start mb-10">
								<div>
									<h2 className="text-3xl font-bold text-foreground mb-2">
										Terms of Service
									</h2>
									<p className="text-muted-foreground text-sm">
										Agreement between User and Wihda.
									</p>
								</div>
								<Badge
									variant="secondary"
									className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-secondary/20"
								>
									<span className="material-icons text-sm">check_circle</span>
									Last Updated: Oct 24, 2025
								</Badge>
							</div>

							<div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground transition-colors">
								<section id="introduction" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										1. Acceptance of Terms
									</h3>
									<p className="mb-4">
										By accessing or using the Wihda platform, you agree to be
										bound by these Terms. If you disagree with any part of the
										terms, then you may not access the Service.
									</p>
								</section>

								<div className="w-full h-px bg-border my-8"></div>

								<section id="accounts" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										2. Accounts
									</h3>
									<p className="mb-4">
										When you create an account with us, you must provide us
										information that is accurate, complete, and current at all
										times. Failure to do so constitutes a breach of the Terms,
										which may result in immediate termination of your account on
										our Service.
									</p>
								</section>

								<div className="w-full h-px bg-border my-8"></div>

								<section id="content" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										3. Content
									</h3>
									<p className="mb-4">
										Our Service allows you to post, link, store, share and
										otherwise make available certain information, text,
										graphics, videos, or other material ("Content"). You are
										responsible for the Content that you post to the Service,
										including its legality, reliability, and appropriateness.
									</p>
								</section>

								<div className="w-full h-px bg-border my-8"></div>

								<section id="termination" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										4. Termination
									</h3>
									<p className="mb-4">
										We may terminate or suspend access to our Service
										immediately, without prior notice or liability, for any
										reason whatsoever, including without limitation if you
										breach the Terms.
									</p>
								</section>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>

			{/* Background blobs */}
			<div
				className="fixed top-0 right-0 -z-10 w-150 h-150 bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2"
				aria-hidden="true"
			/>
			<div
				className="fixed bottom-0 left-0 -z-10 w-125 h-125 bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none -translate-x-1/3 translate-y-1/4"
				aria-hidden="true"
			/>

			<Footer />
		</section>
	);
}
