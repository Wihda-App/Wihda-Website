import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	HELP_ARTICLES,
	getArticlesByCategory,
	type HelpArticle,
} from "@/lib/help-data";
import { cn } from "@/lib/utils";
interface HelpTopicsProps {
	/** When provided, only articles for this category are shown */
	category?: string;
	dict: any;
}
export function HelpTopics({ category, dict }: HelpTopicsProps) {
	const articles: HelpArticle[] = category
		? getArticlesByCategory(category)
		: HELP_ARTICLES;
	if (articles.length === 0) {
		return (
			<section>
				<p className="text-muted-foreground text-center py-12">
					{dict.HelpTopics.text_1}
				</p>
			</section>
		);
	}
	return (
		<section>
			<div className="flex items-center justify-between mb-6">
				<h3 className="text-xl font-bold text-foreground">
					{category ? dict.helpHeader.text_1 : dict.helpHeader.text_2}
				</h3>
				<div className="flex gap-2">
					<Button
						variant="ghost"
						size="icon"
						className="text-muted-foreground "
						title="Grid View"
					>
						<span className="material-icons">{dict.HelpTopics.text_2}</span>
					</Button>
					<Button
						variant="secondary"
						size="icon"
						className="shadow-sm"
						title="List View"
					>
						<span className="material-icons">{dict.HelpTopics.text_3}</span>
					</Button>
				</div>
			</div>

			<div className="space-y-4">
				{articles.map((article) => (
					<Link
						key={article.slug}
						href={`/help/article/${article.slug}`}
						className="group block"
					>
						<Card className="border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
							<div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
							<CardContent className="p-6 flex justify-between items-start gap-4">
								<div>
									<div className="flex items-center gap-3 mb-2">
										<h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
											{article.title}
										</h4>
										{article.tag && (
											<Badge
												variant="secondary"
												className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide border-none ${article.tagColor}`}
											>
												{article.tag}
											</Badge>
										)}
									</div>
									<p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
										{article.description}
									</p>
								</div>
								<span className="material-icons text-muted-foreground/50 group-hover:text-primary transition-colors mt-1">
									{dict.HelpTopics.text_4}
								</span>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>

			{!category && articles.length > 5 && (
				<div
					className={cn(
						"mt-8 text-center lg:text-left",
						dict.TEXT_DIRECTION == "rtl" && "lg:text-right",
					)}
				>
					<Button
						variant="ghost"
						className="text-primary font-bold hover:text-primary/80 gap-2 mx-auto lg:mx-0"
					>
						{dict.HelpTopics.text_5}
						{articles.length}
						{dict.HelpTopics.text_6}
						<span className="material-icons text-sm">
							{dict.HelpTopics.text_7}
						</span>
					</Button>
				</div>
			)}
		</section>
	);
}
