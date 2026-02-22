"use client";

import { getDictionary } from "@/locales/dictionaries";
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
const LEGAL_PAGES = [
	{
		label: "Privacy Policy",
		href: "/legal",
		icon: "shield",
	},
	{
		label: "Terms of Service",
		href: "/legal/terms",
		icon: "description",
	},
];
const PRIVACY_TOC = [
	{
		label: "1. Introduction",
		href: "#introduction",
	},
	{
		label: "2. Data We Collect",
		href: "#data-collection",
	},
	{
		label: "3. How We Use Data",
		href: "#data-usage",
	},
	{
		label: "4. User Responsibilities",
		href: "#user-responsibilities",
	},
	{
		label: "5. Security",
		href: "#security",
	},
	{
		label: "6. Termination",
		href: "#termination",
	},
	{
		label: "7. Contact Us",
		href: "#contact",
	},
];
const TERMS_TOC = [
	{
		label: "1. Acceptance of Terms",
		href: "#introduction",
	},
	{
		label: "2. Accounts",
		href: "#accounts",
	},
	{
		label: "3. Content",
		href: "#content",
	},
	{
		label: "4. Termination",
		href: "#termination",
	},
];
export function LegalSidebar({ dict }: { dict: any }) {
	const pathname = usePathname();
	const currentToc = pathname === "/legal/terms" ? TERMS_TOC : PRIVACY_TOC;
	return (
		<Sidebar
			className="top-0 h-[calc(100svh-4rem)] border-r bg-background"
			collapsible="offcanvas"
			side="left"
		>
			<SidebarContent>
				{/* Document Switcher */}
				<SidebarGroup>
					<SidebarGroupLabel>{dict.LegalSidebar.text_1}</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{LEGAL_PAGES.map((page) => {
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
