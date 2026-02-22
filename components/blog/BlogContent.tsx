"use client";

import React from "react";
import Markdown from "markdown-to-jsx";
interface BlogContentProps {
	content: string;
	dict: any;
}
export const BlogContent: React.FC<BlogContentProps> = ({ content, dict }) => {
	return (
		<div className="prose prose-lg dark:prose-invert prose-headings:font-sans prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl max-w-none">
			<Markdown
				options={{
					overrides: {
						h1: {
							component: "h2",
							props: {
								className: "text-3xl font-bold mt-12 mb-6",
							},
						},
						h2: {
							component: "h3",
							props: {
								className: "text-2xl font-bold mt-10 mb-4",
							},
						},
						p: {
							component: "p",
							props: {
								className:
									"mb-6 leading-relaxed text-gray-700 dark:text-gray-300",
							},
						},
						ul: {
							component: "ul",
							props: {
								className: "list-disc pl-6 mb-6 space-y-2",
							},
						},
						ol: {
							component: "ol",
							props: {
								className: "list-decimal pl-6 mb-6 space-y-2",
							},
						},
						blockquote: {
							component: "blockquote",
							props: {
								className:
									"border-l-4 border-primary pl-6 italic text-gray-700 dark:text-gray-300 my-8",
							},
						},
					},
				}}
			>
				{content}
			</Markdown>
		</div>
	);
};
