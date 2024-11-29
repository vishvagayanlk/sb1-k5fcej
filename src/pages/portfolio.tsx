import { NextSeo } from 'next-seo'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { FeaturedProjects } from '../components/FeaturedProjects'
import { Contact } from '../components/Contact'
import { SciFiBackground } from '../components/SciFiBackground'

export default function Portfolio() {
  return (
    <>
      <NextSeo
        title="Portfolio - Wish | Full Stack Developer"
        description="Professional portfolio of Wishwa Wijayasinghe, Full Stack Developer"
      />
      <SciFiBackground />
      <main>
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Contact />
      </main>
    </>
  )
}