import { getDictionary } from "@/locales/dictionaries";
import { HelpSearch } from "@/components/help/HelpSearch";
import { HelpTopics } from "@/components/help/HelpTopics";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export default async function HelpPage({
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
				<div className="w-full max-w-7xl flex items-center justify-start mb-6 lg:hidden">
					<SidebarTrigger />
					<span className="ml-2 font-semibold text-sm">
						{dict.HelpPage.text_1}
					</span>
				</div>

				{/* Hero */}
				<div className="w-full max-w-200 flex flex-col items-center text-center mb-16">
					<nav className="flex items-center gap-2 text-sm font-medium mb-6 text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">
							{dict.HelpPage.text_2}
						</Link>
						<span className="material-icons text-sm">
							{dict.HelpPage.text_3}
						</span>
						<span className="text-foreground">{dict.HelpPage.text_4}</span>
					</nav>

					<h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-8 tracking-tight">
						{dict.HelpPage.text_5}
					</h2>

					<HelpSearch dict={dict} />
				</div>

				{/* All Articles */}
				<div className="w-full max-w-4xl">
					<HelpTopics dict={dict} />
				</div>
			</main>

			{/* Decorative blobs */}
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
