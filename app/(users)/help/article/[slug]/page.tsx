"use client";

import { getDictionary } from "@/locales/dictionaries";
import { useParams } from "next/navigation";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	getArticleBySlug,
	getCategoryBySlug,
	getArticlesByCategory,
	type HelpArticle,
} from "@/lib/help-data";
export default async function HelpArticlePage() {
	const params = useParams();
	const lang = params?.lang as string;
	const dict = await getDictionary(lang);
	const slug = params?.slug as string;
	const article = getArticleBySlug(slug);
	if (!article) {
		return (
			<main className="flex-grow flex flex-col items-center justify-center w-full px-4">
				<div className="text-center">
					<span className="material-icons text-6xl text-muted-foreground/30 mb-4">
						{dict.HelpArticlePage.text_1}
					</span>
					<h1 className="text-2xl font-bold text-foreground mb-2">
						{dict.HelpArticlePage.text_2}
					</h1>
					<p className="text-muted-foreground mb-6">
						{dict.HelpArticlePage.text_3}
					</p>
					<Button asChild>
						<Link href="/help">{dict.HelpArticlePage.text_4}</Link>
					</Button>
				</div>
			</main>
		);
	}
	const category = getCategoryBySlug(article.category);
	const relatedArticles = getArticlesByCategory(article.category).filter(
		(a) => a.slug !== article.slug,
	);

	// Split body into paragraphs (double newline separated)
	const paragraphs = article.body.split("\n\n");
	return (
		<section>
			<main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
				{/* Mobile Sidebar Trigger */}
				<div className="w-full max-w-4xl flex items-center justify-start mb-6 lg:hidden">
					<SidebarTrigger />
					<span className="ml-2 font-semibold text-sm">
						{dict.HelpArticlePage.text_5}
					</span>
				</div>

				{/* Breadcrumbs */}
				<div className="w-full max-w-4xl mb-8">
					<nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground flex-wrap">
						<Link href="/" className="hover:text-primary transition-colors">
							{dict.HelpArticlePage.text_6}
						</Link>
						<span className="material-icons text-sm">
							{dict.HelpArticlePage.text_7}
						</span>
						<Link href="/help" className="hover:text-primary transition-colors">
							{dict.HelpArticlePage.text_8}
						</Link>
						<span className="material-icons text-sm">
							{dict.HelpArticlePage.text_9}
						</span>
						{category && (
							<>
								<Link
									href={category.href}
									className="hover:text-primary transition-colors"
								>
									{category.label}
								</Link>
								<span className="material-icons text-sm">
									{dict.HelpArticlePage.text_10}
								</span>
							</>
						)}
						<span className="text-foreground truncate max-w-[200px]">
							{article.title}
						</span>
					</nav>
				</div>

				{/* Article Content */}
				<article className="w-full max-w-4xl">
					<Card className="mb-8">
						<CardContent className="p-8 md:p-12">
							{/* Title & Tag */}
							<div className="flex items-start gap-3 mb-2">
								{category && (
									<Link
										href={category.href}
										className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-4"
									>
										<span className="material-icons text-base">
											{category.icon}
										</span>
										{category.label}
									</Link>
								)}
							</div>

							<h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 tracking-tight">
								{article.title}
							</h1>

							{article.tag && (
								<Badge
									variant="secondary"
									className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide border-none mb-6 ${article.tagColor}`}
								>
									{article.tag}
								</Badge>
							)}

							<p className="text-lg text-muted-foreground mb-8 leading-relaxed">
								{article.description}
							</p>

							{/* Divider */}
							<div className="w-full h-px bg-border mb-8" />

							{/* Body */}
							<div className="prose prose-neutral max-w-none">
								{paragraphs.map((para, i) => {
									// Handle bold markers **text**
									const parts = para.split(/(\*\*[^*]+\*\*)/g);
									return (
										<p
											key={i}
											className="text-foreground/90 leading-relaxed mb-4 last:mb-0"
										>
											{parts.map((part, j) => {
												if (part.startsWith("**") && part.endsWith("**")) {
													return (
														<strong
															key={j}
															className="font-bold text-foreground"
														>
															{part.slice(2, -2)}
														</strong>
													);
												}
												return <span key={j}>{part}</span>;
											})}
										</p>
									);
								})}
							</div>
						</CardContent>
					</Card>

					{/* Helpful? */}
					<Card className="mb-8">
						<CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
							<p className="text-sm font-medium text-foreground">
								{dict.HelpArticlePage.text_11}
							</p>
							<div className="flex gap-3">
								<Button variant="outline" size="sm" className="gap-2">
									<span className="material-icons text-base">
										{dict.HelpArticlePage.text_12}
									</span>
									{dict.HelpArticlePage.text_13}
								</Button>
								<Button variant="outline" size="sm" className="gap-2">
									<span className="material-icons text-base">
										{dict.HelpArticlePage.text_14}
									</span>
									{dict.HelpArticlePage.text_15}
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Related Articles */}
					{relatedArticles.length > 0 && (
						<div className="mb-8">
							<h3 className="text-lg font-bold text-foreground mb-4">
								{dict.HelpArticlePage.text_16}
							</h3>
							<div className="space-y-3">
								{relatedArticles.map((related: HelpArticle) => (
									<Link
										key={related.slug}
										href={`/help/article/${related.slug}`}
										className="group block"
									>
										<Card className="border-transparent hover:border-primary/20 hover:shadow-md transition-all duration-200">
											<CardContent className="p-4 flex items-center justify-between gap-3">
												<div>
													<h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
														{related.title}
													</h4>
													<p className="text-sm text-muted-foreground line-clamp-1">
														{related.description}
													</p>
												</div>
												<span className="material-icons text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0">
													{dict.HelpArticlePage.text_17}
												</span>
											</CardContent>
										</Card>
									</Link>
								))}
							</div>
						</div>
					)}
				</article>
			</main>

			{/* Background blobs */}
			<div
				className="fixed top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2"
				aria-hidden="true"
			/>
			<div
				className="fixed bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none -translate-x-1/3 translate-y-1/4"
				aria-hidden="true"
			/>
		</section>
	);
}
