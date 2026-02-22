import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";
interface BlogCardProps {
	post: BlogPost;
	dict: any;
}
export function BlogCard({ post, dict }: BlogCardProps) {
	return (
		<article className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
			<Link
				href={`/blog/${post.slug}`}
				className="relative h-60 overflow-hidden"
			>
				<img
					src={post.image}
					alt={post.title}
					className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
				<div className="absolute top-4 left-4">
					<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-sm text-primary shadow-sm border border-gray-100 dark:border-gray-700 animate-fade-in">
						{post.category}
					</span>
				</div>
			</Link>

			<div className="flex flex-col flex-grow p-6">
				<div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
					<time dateTime={post.date}>{post.date}</time>
					<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
					<span>{post.readTime}</span>
				</div>

				<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
					<Link href={`/blog/${post.slug}`}>{post.title}</Link>
				</h3>

				<p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
					{post.excerpt}
				</p>

				<div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
					<div className="flex items-center gap-3">
						<img
							src={post.author.avatar}
							alt={post.author.name}
							className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
						/>
						<span className="text-sm font-medium text-gray-900 dark:text-white">
							{post.author.name}
						</span>
					</div>
					<Link
						href={`/blog/${post.slug}`}
						className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
					>
						{dict.BlogCard.text_1}
						<ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
					</Link>
				</div>
			</div>
		</article>
	);
}
