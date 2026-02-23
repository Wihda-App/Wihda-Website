"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog-data";
import { BlogCard } from "./BlogCard";
import { Newsletter } from "./Newsletter";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
interface BlogFeedProps {
	initialPosts: BlogPost[];
	dict: any;
}
const getCategories = (dict: any) =>
	dict.BlogFeedCategories || [
		"All",
		"Impact",
		"Community",
		"Tech",
		"Policy",
		"Leadership",
		"Story",
		"Update",
	];
export function BlogFeed({ initialPosts, dict }: BlogFeedProps) {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");
	const featuredPost =
		initialPosts.find((post) => post.featured) || initialPosts[0];
	const filteredPosts = useMemo(() => {
		return initialPosts.filter((post) => {
			const matchesCategory =
				selectedCategory === "All" || post.category === selectedCategory;
			const matchesSearch =
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			return (
				matchesCategory && matchesSearch && post.slug !== featuredPost.slug
			); // Exclude featured from grid
		});
	}, [initialPosts, selectedCategory, searchQuery, featuredPost]);
	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
				<div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50 -z-10" />
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 dark:brightness-0 mix-blend-overlay"></div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 animate-fade-in">
							{dict.BlogFeed.text_1}
						</span>
						<h1 className="text-5xl lg:text-7xl font-sans font-medium tracking-tight text-gray-900 dark:text-white mb-6">
							<span>{dict.BlogFeed.text_2}</span>{" "}
							{/* This is the natural space */}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic mx-2">
								{dict.BlogFeed.text_3}
							</span>{" "}
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
							{dict.BlogFeed.text_4}
						</p>
					</div>

					{/* Filters & Search */}
					<div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
						<div className="flex flex-wrap justify-center gap-2">
							{(Object.entries(getCategories(dict)) as any[]).map(
								([key, value]) => (
									<button
										key={key}
										onClick={() => setSelectedCategory(key)}
										className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === key ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent shadow-lg transform -translate-y-0.5" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-750"}`}
									>
										{value}
									</button>
								),
							)}
						</div>

						<div className="relative w-full max-w-xs group">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
								<Search className="h-5 w-5" />
							</div>
							<input
								type="text"
								className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
								placeholder={dict.Input_PlaceHolder.blog_search}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Post */}
			{selectedCategory === "All" && !searchQuery && (
				<section className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-800">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
							<div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
								<div className="flex items-center gap-3 mb-6">
									<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
										{dict.BlogFeed.text_5}
									</span>
									<span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
										{featuredPost.date}
									</span>
								</div>
								<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 group-hover:text-primary transition-colors cursor-pointer">
									<Link href={`/blog/${featuredPost.slug}`}>
										{featuredPost.title}
									</Link>
								</h2>
								<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed line-clamp-3">
									{featuredPost.excerpt}
								</p>
								<div className="flex items-center gap-4">
									<div className="flex items-center gap-3">
										<img
											src={featuredPost.author.avatar}
											alt={featuredPost.author.name}
											className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800"
										/>
										<div className="text-sm">
											<p className="font-bold text-gray-900 dark:text-white">
												{featuredPost.author.name}
											</p>
											<p className="text-gray-500 dark:text-gray-400">
												{featuredPost.readTime}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="lg:col-span-7 order-1 lg:order-2 relative">
								<Link
									href={`/blog/${featuredPost.slug}`}
									className="block overflow-hidden rounded-3xl shadow-2xl"
								>
									<div className="absolute inset-0 bg-primary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl mix-blend-overlay pointer-events-none"></div>
									<img
										alt={featuredPost.title}
										className="w-full h-[400px] lg:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
										src={featuredPost.image}
									/>
								</Link>
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Main Grid */}
			<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts.map((post) => (
							<BlogCard key={post.slug} post={post} dict={dict} />
						))}
					</div>

					{filteredPosts.length === 0 && (
						<div className="text-center py-20">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
								{dict.BlogFeed.text_6}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{dict.BlogFeed.text_7}
							</p>
						</div>
					)}

					{filteredPosts.length > 0 && (
						<div className="mt-16 text-center">
							<button className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md">
								{dict.BlogFeed.text_8}
							</button>
						</div>
					)}
				</div>
			</section>

			<Newsletter dict={dict} />
		</div>
	);
}
