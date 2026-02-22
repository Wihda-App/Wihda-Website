import { Footer } from "@/components/Footer";
import { LegalContent } from "@/components/legal/LegalContent";
import { LegalSidebar } from "@/components/legal/LegalSidebar";
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Wihda Legal - Privacy & Terms",
	description:
		"Transparency & Trust. Understand your rights and our responsibilities.",
};

export default function LegalPage() {
	return (
		<SidebarProvider defaultOpen={true}>
			<LegalSidebar />
			<SidebarInset className="bg-background min-h-[calc(100vh-4rem)] pt-20 md:pt-24 pb-10">
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

						<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
							<span className="material-icons text-3xl text-primary">
								gavel
							</span>
						</div>

						<h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
							Transparency & Trust
						</h1>
						<p className="text-xl text-muted-foreground mb-8">
							We believe in building a civic platform rooted in clarity.
							Understand your rights, our responsibilities, and how we protect
							your data.
						</p>
					</div>

					<LegalContent />
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
			</SidebarInset>
		</SidebarProvider>
	);
}
