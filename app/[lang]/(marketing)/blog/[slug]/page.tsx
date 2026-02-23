import { getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/lib/blog-data";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/blog/Newsletter";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogContent } from "@/components/blog/BlogContent";
import Link from "next/link";
import {
	ArrowLeft,
	Clock,
	Calendar,
	Share2,
	Facebook,
	Twitter,
	Linkedin,
} from "lucide-react";
interface BlogPostPageProps {
	params: Promise<{
		slug: string;
		lang: string;
	}>;
}
export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}
export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) {
		return {
			title: "Post Not Found - Wihda",
		};
	}
	return {
		title: `${post.title} - Wihda Blog`,
		description: post.excerpt,
		openGraph: {
			images: [post.image],
		},
	};
}
export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) {
		notFound();
	}
	const relatedPosts = getRelatedPosts(slug, 3);
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<main className="grow pt-24">
				{/* Article Header */}
				<header className="relative py-16 lg:py-24 overflow-hidden">
					<div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50 -z-10" />
					<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 dark:brightness-0 mix-blend-overlay"></div>

					<div
						className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
						dir="ltr"
					>
						<div className="flex justify-center items-center mb-6">
							<Link
								href="/blog"
								className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors group "
							>
								<ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform align-baseline" />
								{dict.BlogPostPage.text_1}
							</Link>

							<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider  animate-fade-in mx-2">
								{dict.BlogFeedCategories[post.category]}
							</div>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-900 dark:text-white leading-tight mb-8">
							{post.title}
						</h1>

						<div className="flex items-center justify-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
							<div className="flex items-center gap-2">
								<img
									src={post.author.avatar}
									alt={post.author.name}
									className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
								/>
								<span className="font-medium text-gray-900 dark:text-white">
									{post.author.name}
								</span>
							</div>
							<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4" />
								<time>{post.date}</time>
							</div>
							<span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
							<div className="flex items-center gap-2">
								<Clock className="w-4 h-4" />
								<span>{post.readTime}</span>
							</div>
						</div>
					</div>
				</header>

				{/* Featured Image */}
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16 relative z-10">
					<div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 aspect-video">
						<img
							src={post.image}
							alt={post.title}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Article Content */}
				<article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
					<BlogContent dict={dict} content={post.content} />

					{/* Share & Tags */}
					<div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
						<div className="text-sm font-medium text-gray-500 dark:text-gray-400">
							{dict.BlogPostPage.text_2}
							<span className="text-gray-900 dark:text-white ml-2">
								{post.category}
								{dict.BlogPostPage.text_3}
							</span>
						</div>
						<div className="flex items-center gap-4">
							<span className="text-sm font-medium text-gray-500 dark:text-gray-400">
								{dict.BlogPostPage.text_4}
							</span>
							<button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors">
								<Twitter className="w-4 h-4" />
							</button>
							<button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors">
								<Linkedin className="w-4 h-4" />
							</button>
							<button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors">
								<Facebook className="w-4 h-4" />
							</button>
							<button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/10 transition-colors">
								<Share2 className="w-4 h-4" />
							</button>
						</div>
					</div>
				</article>

				{/* Related Posts */}
				{relatedPosts.length > 0 && (
					<section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
								{dict.BlogPostPage.text_5}
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{relatedPosts.map((post) => (
									<BlogCard dict={dict} key={post.slug} post={post} />
								))}
							</div>
						</div>
					</section>
				)}

				<Newsletter dict={dict} />
			</main>

			<Footer dict={dict} />
		</div>
	);
}
