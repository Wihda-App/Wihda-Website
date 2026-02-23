import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/locales/dictionaries";

export default async function MarketingLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}>) {
	// 3. Await the params!
	const { lang } = await params;
	const dict = await getDictionary(lang);
	return (
		<section>
			<SiteHeader dict={dict} />
			{children}
		</section>
	);
}
