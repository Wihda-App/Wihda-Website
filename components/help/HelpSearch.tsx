"use client";

import { Input } from "@/components/ui/input";
export function HelpSearch({ dict }: { dict: any }) {
	return (
		<div className="w-full relative group">
			<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
				<span className="material-icons text-muted-foreground group-focus-within:text-primary transition-colors">
					{dict.HelpSearch.text_1}
				</span>
			</div>
			<Input
				type="text"
				className="block w-full pl-12 pr-16 py-6 bg-background border-2 border-transparent focus-visible:ring-0 focus-visible:border-primary/50 text-foreground rounded-xl shadow-sm placeholder:text-muted-foreground/70 text-lg transition-all"
				placeholder={dict.Input_PlaceHolder.help_search}
			/>
			<div className="absolute inset-y-0 right-3 flex items-center">
				<span className="hidden sm:inline-block bg-muted text-xs font-semibold px-2 py-1 rounded text-muted-foreground border border-border">
					{dict.HelpSearch.text_2}
				</span>
			</div>
		</div>
	);
}
