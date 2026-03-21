"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	Menu,
	Home,
	Info,
	Newspaper,
	HelpCircle,
	Download,
} from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { ModeToggle } from "./theme-button";
import { LanguageSwitcher } from "./language-switch";
export function SiteHeader({ dict }: { dict: any }) {
	const pathname = usePathname();

	const relativePaths = ["help", "legal"];

	const isRelative = relativePaths.some((segment) =>
		pathname.includes(`/${segment}`),
	);

	return (
		<header
			className={cn(
				isRelative ? "relative py-4" : "absolute inset-x-0 top-4 md:top-10",
				"z-50 mx-auto bg-transparent",
				"max-w-7xl w-[calc(100%-2rem)]",
			)}
		>
			<div className="px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
				<div className="flex items-center gap-2 md:gap-4 xl:gap-10">
					<Link href="/" className="flex items-center gap-2 group">
						<Logo className="h-10 w-10 md:h-12 md:w-12 xl:h-20 xl:w-20" />
						<span className="font-sans font-extrabold text-xl md:text-2xl xl:text-4xl text-foreground">
							{dict.SiteHeader.text_1}
						</span>
					</Link>

					<NavigationMenu className="hidden lg:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/about"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xs md:text-lg xl:text-xl font-bold px-2 md:px-3 xl:px-6 h-10 md:h-12",
										pathname === "/about" && "text-primary",
									)}
								>
									{dict.SiteHeader.text_2}
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink
									href="/blog"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xs md:text-lg xl:text-xl font-bold px-2 md:px-3 xl:px-6 h-10 md:h-12",
										pathname === "/blog" && "text-primary",
									)}
								>
									{dict.SiteHeader.text_3}
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink
									href="/help"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xs md:text-lg xl:text-xl font-bold px-2 md:px-3 xl:px-6 h-10 md:h-12",
										pathname === "/help" && "text-primary",
									)}
								>
									{dict.SiteHeader.text_4}
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Desktop Actions */}
				<div className="hidden lg:flex items-center gap-2 xl:gap-4">
					<LanguageSwitcher className="h-9 w-9 md:h-11 md:w-11 [&_svg]:h-5 [&_svg]:w-5" />
					<ModeToggle
						dict={dict}
						className="h-9 w-9 md:h-11 md:w-11 [&_svg]:h-5 [&_svg]:w-5"
					/>
					<Button
						asChild
						size="lg"
						className="font-bold rounded-full px-3 md:px-4 xl:px-8 text-xs md:text-lg xl:text-xl h-9 md:h-11"
					>
						<Link href="/download">
							<Download className="mr-2 h-4 w-4 xl:h-5 xl:w-5" />
							{dict.SiteHeader.text_5}
						</Link>
					</Button>
				</div>

				{/* Mobile Navigation */}
				<div className="lg:hidden flex items-center gap-1">
					<LanguageSwitcher className="h-9 w-9 md:h-11 md:w-11 [&_svg]:h-5 [&_svg]:w-5" />

					<ModeToggle dict={dict} className="h-9 w-9 [&_svg]:h-4 [&_svg]:w-4" />
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="-mr-2 hover:bg-accent/50"
							>
								<Menu className="h-6 w-6" />
								<span className="sr-only">{dict.SiteHeader.text_6}</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side="right"
							className="flex flex-col w-75 sm:w-100 p-0 border-l border-border"
						>
							<SheetHeader
								className={cn(
									"p-6 text-left border-b border-border bg-muted/20",
									dict.TEXT_DIRECTION == "rtl" && "text-right",
								)}
							>
								<div className="flex items-center gap-3">
									<Logo className="h-16 w-16" />
									<SheetTitle className="font-sans font-bold text-3xl tracking-tight">
										{dict.SiteHeader.text_7}
									</SheetTitle>
								</div>
							</SheetHeader>

							<div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
								<div className="space-y-2">
									<Link
										href="/"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/" && "text-primary bg-primary/5",
										)}
									>
										<Home className="h-5 w-5" />
										<span>{dict.SiteHeader.text_8}</span>
									</Link>
									<Link
										href="/about"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/about" && "text-primary bg-primary/5",
										)}
									>
										<Info className="h-5 w-5" />
										<span>{dict.SiteHeader.text_9}</span>
									</Link>
									<Link
										href="/blog"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/blog" && "text-primary bg-primary/5",
										)}
									>
										<Newspaper className="h-5 w-5" />
										<span>{dict.SiteHeader.text_10}</span>
									</Link>
									<Link
										href="/help"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/help" && "text-primary bg-primary/5",
										)}
									>
										<HelpCircle className="h-5 w-5" />
										<span>{dict.SiteHeader.text_11}</span>
									</Link>
								</div>
							</div>

							<div className="p-6 bg-muted/20 border-t border-border mt-auto">
								<Button
									asChild
									className="w-full font-bold rounded-full py-8 text-xl"
									size="lg"
								>
									<Link href="/download">
										<Download className="mr-2 h-6 w-6" />
										{dict.SiteHeader.text_12}
									</Link>
								</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
