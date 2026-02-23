import { LegalSidebar } from "@/components/legal/LegalSidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Wihda Legal - Terms of Service",
	description:
		"Understand the rules and regulations governing the use of the Wihda platform.",
};
export default async function LegalLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	// 3. Await the params!
	const { lang } = await params;
	const dict = await getDictionary(lang);
	return (
		<SidebarProvider defaultOpen={true}>
			<LegalSidebar dict={dict} />
			<SidebarInset className="bg-background min-h-[calc(100vh-4rem)]  pb-10">
				<SiteHeader dict={dict} />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
