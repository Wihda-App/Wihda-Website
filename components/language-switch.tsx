"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className: string }) {
	const pathname = usePathname();
	const router = useRouter();

	const switchLanguage = (newLocale: string) => {
		// 1. Set a cookie so the middleware remembers the choice
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 year

		// 2. Change the URL to the new locale
		if (!pathname) return;
		const segments = pathname.split("/");
		segments[1] = newLocale; // Swap the 'en' or 'ar' segment

		router.push(segments.join("/"));
		router.refresh(); // Force a refresh to get new translations
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className={cn("rounded-full hover:bg-accent/50", className)}
				>
					<Globe className="h-5 w-5" />
					<span className="sr-only">Switch Language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => switchLanguage("en")}>
					English
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => switchLanguage("ar")}>
					العربية
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
