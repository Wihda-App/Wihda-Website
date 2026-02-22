import { Audience } from '@/components/Audience'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { OurStory } from '@/components/OurStory'
import { Values } from '@/components/Values'

export default function About() {
  return (
   <>
    <main className="grow">
      <OurStory />
      <Values />
      <Audience />
      <ContactSection />
    </main>
    <Footer />
  </>
  )
}
