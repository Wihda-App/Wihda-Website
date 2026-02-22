import { getDictionary } from "@/locales/dictionaries";
import { Audience } from '@/components/Audience';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { OurStory } from '@/components/OurStory';
import { Values } from '@/components/Values';
export default async function About({
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
      <OurStory dict={dict} />
      <Values dict={dict} />
      <Audience dict={dict} />
      <ContactSection dict={dict} />
    </main>
    <Footer dict={dict} />
  </>;
}