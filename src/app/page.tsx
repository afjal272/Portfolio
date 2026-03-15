import Hero from "../sections/Hero"
import TechStack from "../sections/TechStack"
import Projects from "../sections/Projects"
import Experience from "../sections/Experience"
import Contact from "../sections/Contact"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}