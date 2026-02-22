import { getDictionary } from "@/locales/dictionaries";
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
export default async function ContactPage({
  params
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const {
    lang
  } = await params;
  const dict = await getDictionary(lang);
  return <>
      <main className="grow">
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </>;
}