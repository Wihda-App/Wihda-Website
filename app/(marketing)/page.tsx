import { getDictionary } from "@/locales/dictionaries";
import { CommunityGraph } from '@/components/CommunityGraph';
import { ContactSection } from '@/components/ContactSection';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Mockups } from '@/components/Mockups';
import { Partners } from '@/components/Parteners';
import { Values } from '@/components/Values';
import { Fragment } from 'react';
export default async function Home({
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
  return <Fragment>
      <main className="grow">
        <Hero dict={dict} />
        <FeaturesGrid dict={dict} />
        <CommunityGraph dict={dict} />
        <Mockups dict={dict} />
        <Partners dict={dict} />
       <Values dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} />
    </Fragment>;
}