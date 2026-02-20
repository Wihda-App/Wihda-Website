
import { CommunityGraph } from '@/components/CommunityGraph'
import { ContactSection } from '@/components/ContactSection'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Mockups } from '@/components/Mockups'
import { Partners } from '@/components/Parteners'
import { Values } from '@/components/Values'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <main className="grow">
        <Hero />
        <FeaturesGrid />
        <CommunityGraph />
        <Mockups />
        <Partners />
       <Values />
        <ContactSection />
      </main>
      <Footer />
    </Fragment>
  )
}
