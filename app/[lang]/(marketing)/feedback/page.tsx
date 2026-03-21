import { getDictionary } from "@/locales/dictionaries";
import { Footer } from "@/components/Footer";
import { FeedbackSection } from "@/components/FeedBackSection";
export default async function FeedBackPage({
	params,
}: {
	params: Promise<{
		lang: string;
	}>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	return (
		<>
			<main className="grow">
				<FeedbackSection dict={dict} />
			</main>
			<Footer dict={dict} />
		</>
	);
}
