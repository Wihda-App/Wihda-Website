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

export function SiteHeader() {
	const pathname = usePathname();
	const relativePaths = ["/help", "/legal"];
	const isRelative = relativePaths.some(path => pathname.startsWith(path));

	return (
		<header className={cn(
			isRelative ? "relative " : "absolute",
			"top-10 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 max-w-7xl mx-auto z-50 md:w-[calc(100%-2rem)] bg-transparent"
		)}>
			<div className="px-6 h-20 flex items-center justify-between">
				<div className="flex items-center gap-10">
					<Link href="/" className="flex items-center gap-2 group">
						<Logo className="h-24 w-24"/>
						<span className="font-sans font-extrabold text-4xl  text-foreground">
							Wihda
						</span>
					</Link>

					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xl font-bold px-6 h-12",
										pathname === "/" && "text-primary",
									)}
								>
									Platform
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink
									href="/about"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xl font-bold px-6 h-12",
										pathname === "/about" && "text-primary",
									)}
								>
									About
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink
									href="/blog"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xl font-bold px-6 h-12",
										pathname === "/blog" && "text-primary",
									)}
								>
									Blog
								</NavigationMenuLink>
							</NavigationMenuItem>

							<NavigationMenuItem>
								<NavigationMenuLink
									href="/help"
									className={cn(
										navigationMenuTriggerStyle(),
										"bg-transparent hover:bg-accent/50 text-xl font-bold px-6 h-12",
										pathname === "/help" && "text-primary",
									)}
								>
									Help Center
								</NavigationMenuLink>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				{/* Desktop Actions */}
				<div className="hidden md:flex items-center gap-4">
					<Button asChild size="lg" className="font-bold rounded-full px-8 text-lg pb-1">
						<Link href="/download">
							<Download className="mr-2 h-5 w-5" />
							Download App
						</Link>
					</Button>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex items-center gap-4">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="-mr-2">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="flex flex-col w-[300px] sm:w-[400px] p-0 border-l border-border">
							<SheetHeader className="p-6 text-left border-b border-border bg-muted/20">
								<div className="flex items-center gap-3">
									<Logo className="h-16 w-16"/>
									<SheetTitle className="font-sans font-bold text-3xl tracking-tight">
										Wihda
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
										<span>Platform</span>
									</Link>
									<Link
										href="/about"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/about" && "text-primary bg-primary/5",
										)}
									>
										<Info className="h-5 w-5" />
										<span>About</span>
									</Link>
									<Link
										href="/blog"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/blog" && "text-primary bg-primary/5",
										)}
									>
										<Newspaper className="h-5 w-5" />
										<span>Blog</span>
									</Link>
									<Link
										href="/help"
										className={cn(
											"flex items-center gap-4 text-2xl font-bold transition-colors hover:text-primary p-4 -ml-4 rounded-md hover:bg-accent/50",
											pathname === "/help" && "text-primary bg-primary/5",
										)}
									>
										<HelpCircle className="h-5 w-5" />
										<span>Help Center</span>
									</Link>
								</div>
							</div>

							<div className="p-6 bg-muted/20 border-t border-border mt-auto">
								<Button asChild className="w-full font-bold rounded-full py-8 text-xl" size="lg">
									<Link href="/download">
										<Download className="mr-2 h-6 w-6" />
										Download App
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
