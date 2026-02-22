import { HelpSidebar } from "@/components/help/HelpSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";

export default function HelpLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider defaultOpen={true}>
			<HelpSidebar />
			<SidebarInset className="bg-background min-h-[calc(100vh-4rem)] pb-10">
				<SiteHeader />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
