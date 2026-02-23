import { HelpSidebar } from "@/components/help/HelpSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next/types";
export const metadata: Metadata = {
	title: "Wihda Help Center",
	description: "Find answers, browse topics, and get support for Wihda.",
};
export default async function HelpLayout({
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
			<HelpSidebar dict={dict} />
			<SidebarInset className="bg-background min-h-[calc(100vh-4rem)] pb-10">
				<SiteHeader dict={dict} />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
