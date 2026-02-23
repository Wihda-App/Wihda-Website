import { getDictionary } from "@/locales/dictionaries";
import { LegalContent } from "@/components/legal/LegalContent";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export default async function LegalPage({
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
						{dict.LegalPage.text_1}
					</span>
				</div>

				{/* Header Section */}
				<div className="w-full max-w-200 flex flex-col items-center text-center mb-12">
					<nav className="flex items-center gap-2 text-sm font-medium mb-6 text-muted-foreground">
						<Link href="/" className="hover:text-primary transition-colors">
							{dict.LegalPage.text_2}
						</Link>
						<span className="material-icons text-sm">
							{dict.LegalPage.text_3}
						</span>
						<span className="text-foreground">{dict.LegalPage.text_4}</span>
					</nav>

					<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
						<span className="material-icons text-3xl text-primary">
							{dict.LegalPage.text_5}
						</span>
					</div>

					<h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
						{dict.LegalPage.text_6}
					</h1>
					<p className="text-xl text-muted-foreground mb-8">
						{dict.LegalPage.text_7}
					</p>
				</div>

				<LegalContent dict={dict} />
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
