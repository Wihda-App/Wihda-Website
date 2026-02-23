import { getDictionary } from "@/locales/dictionaries";
import { DownloadPageComponent } from "@/components/DownloadPage";
export default async function DownloadPage({
	params,
}: {
	params: Promise<{
		lang: string;
	}>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);
	return <DownloadPageComponent dict={dict} />;
}
