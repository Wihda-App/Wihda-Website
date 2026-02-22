import { getDictionary } from "@/locales/dictionaries";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-data";
import { BlogFeed } from "@/components/blog/BlogFeed";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
	title: "Blog - Wihda",
	description:
		"Insights for Impact. Stories, updates, and deep dives from the community building the future of civic engagement.",
};
export default async function BlogPage({
	params,
}: {
	params: Promise<{
		lang: string;
	}>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	const posts = getAllPosts();
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				<BlogFeed initialPosts={posts} dict={dict} />
			</main>
			<Footer dict={dict} />
		</div>
	);
}
