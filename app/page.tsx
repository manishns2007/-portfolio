import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Certifications } from '@/components/certifications'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="relative w-full">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
