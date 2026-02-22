import { HelpSidebar } from "@/components/help/HelpSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
export default function HelpLayout({
	children,
	dict,
}: {
	children: React.ReactNode;
	dict: any;
}) {
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
