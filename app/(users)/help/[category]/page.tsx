"use client";

import { getDictionary } from "@/locales/dictionaries";
import { useParams } from "next/navigation";
import { HelpSearch } from "@/components/help/HelpSearch";
import { HelpTopics } from "@/components/help/HelpTopics";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import { getCategoryBySlug } from "@/lib/help-data";
export default async function HelpCategoryPage() {
	const params = useParams();
	const lang = params?.lang as string;
	const dict = await getDictionary(lang);
	const slug = params?.category as string;
	const category = getCategoryBySlug(slug);
	const title = category?.label ?? "Topic Not Found";
	const description =
		category?.description ?? "The requested help topic could not be found.";
	return (
		<section>
			<main className="flex-grow flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
				{/* Mobile Sidebar Trigger */}
				<div className="w-full max-w-7xl flex items-center justify-start mb-6 lg:hidden">
					<SidebarTrigger />
					<span className="ml-2 font-semibold text-sm">
						{dict.HelpCategoryPage.text_1}
					</span>
				</div>

				{/* Header */}
				<div className="w-full max-w-[800px] flex flex-col items-center text-center mb-12">
					<nav className="flex items-center gap-2 text-sm font-medium mb-6 text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">
							{dict.HelpCategoryPage.text_2}
						</Link>
						<span className="material-icons text-sm">
							{dict.HelpCategoryPage.text_3}
						</span>
						<Link href="/help" className="hover:text-primary transition-colors">
							{dict.HelpCategoryPage.text_4}
						</Link>
						<span className="material-icons text-sm">
							{dict.HelpCategoryPage.text_5}
						</span>
						<span className="text-foreground">{title}</span>
					</nav>

					<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
						<span className="material-icons text-3xl text-primary">
							{category?.icon ?? "help_outline"}
						</span>
					</div>

					<h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
						{title}
					</h1>
					<p className="text-xl text-muted-foreground mb-8">{description}</p>

					<HelpSearch dict={dict} />
				</div>

				{/* Articles */}
				<div className="w-full max-w-4xl">
					<HelpTopics category={slug} dict={dict} />
				</div>
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
