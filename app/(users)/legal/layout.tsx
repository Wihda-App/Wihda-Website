import { LegalSidebar } from "@/components/legal/LegalSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function LegalLayout({
	children,
	dict,
}: {
	children: React.ReactNode;
	dict: any;
}) {
	return (
		<SidebarProvider defaultOpen={true}>
			<LegalSidebar dict={dict} />
			<SidebarInset className="bg-background min-h-[calc(100vh-4rem)] pt-20 md:pt-24 pb-10">
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
