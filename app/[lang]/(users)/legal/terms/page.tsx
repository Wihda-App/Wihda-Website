import { getDictionary } from "@/locales/dictionaries";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export default async function TermsPage({
	params,
}: {
	params: Promise<{
		lang: string;
	}>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	return (
		<section>
			<main className="grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
				{/* Mobile Sidebar Trigger */}
				<div className="w-full max-w-4xl flex items-center justify-start mb-6 lg:hidden">
					<SidebarTrigger />
					<span className="ml-2 font-semibold text-sm">
						{dict.TermsPage.text_1}
					</span>
				</div>

				{/* Header Section */}
				<div className="w-full max-w-200 flex flex-col items-center text-center mb-12">
					<nav className="flex items-center gap-2 text-sm font-medium mb-6 text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">
							{dict.TermsPage.text_2}
						</Link>
						<span className="material-icons text-sm">
							{dict.TermsPage.text_3}
						</span>
						<span className="text-foreground">{dict.TermsPage.text_4}</span>
					</nav>

					<div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
						<span className="material-icons text-3xl text-secondary">
							{dict.TermsPage.text_5}
						</span>
					</div>

					<h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
						{dict.TermsPage.text_6}
					</h1>
					<p className="text-xl text-muted-foreground mb-8">
						{dict.TermsPage.text_7}
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
										{dict.TermsPage.text_8}
									</h2>
									<p className="text-muted-foreground text-sm">
										{dict.TermsPage.text_9}
									</p>
								</div>
								<Badge
									variant="secondary"
									className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-secondary/20"
								>
									<span className="material-icons text-sm">
										{dict.TermsPage.text_10}
									</span>
									{dict.TermsPage.text_11}
								</Badge>
							</div>

							<div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground transition-colors">
								<section id="introduction" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										{dict.TermsPage.text_12}
									</h3>
									<p className="mb-4">{dict.TermsPage.text_13}</p>
								</section>

								<div className="w-full h-px bg-border my-8"></div>

								<section id="accounts" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										{dict.TermsPage.text_14}
									</h3>
									<p className="mb-4">{dict.TermsPage.text_15}</p>
								</section>

								<div className="w-full h-px bg-border my-8"></div>

								<section id="content" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										{dict.TermsPage.text_16}
									</h3>
									<p className="mb-4">{dict.TermsPage.text_17}</p>
								</section>

								<div className="w-full h-px bg-border my-8"></div>

								<section id="termination" className="mb-12 scroll-mt-32">
									<h3 className="text-2xl font-bold text-foreground mb-4">
										{dict.TermsPage.text_18}
									</h3>
									<p className="mb-4">{dict.TermsPage.text_19}</p>
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
		</section>
	);
}
