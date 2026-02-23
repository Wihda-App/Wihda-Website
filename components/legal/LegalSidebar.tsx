"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarFooter,
} from "@/components/ui/sidebar";
// Pages
export function getLegalPages(dict: any): any[] {
	return [
		{ label: dict.LegalSidebar.Pages.text_1, href: "/legal", icon: "shield" },
		{
			label: dict.LegalSidebar.Pages.text_2,
			href: "/legal/terms",
			icon: "description",
		},
	];
}

// Privacy TOC
export function getPrivacyTOC(dict: any): any[] {
	return [
		{ label: dict.LegalSidebar.PrivacyTOC.text_1, href: "#introduction" },
		{ label: dict.LegalSidebar.PrivacyTOC.text_2, href: "#data-collection" },
		{ label: dict.LegalSidebar.PrivacyTOC.text_3, href: "#data-usage" },
		{
			label: dict.LegalSidebar.PrivacyTOC.text_4,
			href: "#user-responsibilities",
		},
		{ label: dict.LegalSidebar.PrivacyTOC.text_5, href: "#security" },
		{ label: dict.LegalSidebar.PrivacyTOC.text_6, href: "#termination" },
		{ label: dict.LegalSidebar.PrivacyTOC.text_7, href: "#contact" },
	];
}

// Terms TOC
export function getTermsTOC(dict: any): any[] {
	return [
		{ label: dict.LegalSidebar.TermsTOC.text_1, href: "#introduction" },
		{ label: dict.LegalSidebar.TermsTOC.text_2, href: "#accounts" },
		{ label: dict.LegalSidebar.TermsTOC.text_3, href: "#content" },
		{ label: dict.LegalSidebar.TermsTOC.text_4, href: "#termination" },
	];
}
export function LegalSidebar({ dict }: { dict: any }) {
	const pages = getLegalPages(dict);
	const privacyToc = getPrivacyTOC(dict);
	const termsToc = getTermsTOC(dict);
	const pathname = usePathname();
	const currentToc = pathname === "/legal/terms" ? termsToc : privacyToc;
	return (
		<Sidebar
			className="top-0 h-[calc(100svh)] border-r bg-background"
			collapsible="offcanvas"
			side={dict["TEXT_DIRECTION"] == "rtl" ? "right" : "left"}
		>
			<SidebarContent>
				{/* Document Switcher */}
				<SidebarGroup>
					<SidebarGroupLabel>{dict.LegalSidebar.text_1}</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{pages.map((page) => {
								const isActive = pathname === page.href;
								return (
									<SidebarMenuItem key={page.href}>
										<SidebarMenuButton
											asChild
											isActive={isActive}
											tooltip={page.label}
											className="h-12"
										>
											<Link href={page.href}>
												<span
													className={`material-icons text-xl ${isActive ? "text-primary" : "text-muted-foreground"}`}
												>
													{page.icon}
												</span>
												<span className="text-base font-medium">
													{page.label}
												</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{/* Table of Contents */}
				<SidebarGroup>
					<SidebarGroupLabel>{dict.LegalSidebar.text_2}</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{currentToc.map((item) => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton asChild className="h-9">
										<Link href={item.href}>
											<span className="text-sm">{item.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="p-4">
				<Link
					href="#"
					className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-2"
				>
					<span className="material-icons text-lg">
						{dict.LegalSidebar.text_3}
					</span>
					{dict.LegalSidebar.text_4}
				</Link>
			</SidebarFooter>
		</Sidebar>
	);
}
