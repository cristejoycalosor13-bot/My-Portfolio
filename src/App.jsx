import FloatingPetals from './components/ui/FloatingPetals'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import Skills        from './components/sections/Skills'
import Experience    from './components/sections/Experience'
import Education     from './components/sections/Education'
import Portfolio     from './components/sections/Portfolio'
import Contact       from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative">
      <FloatingPetals />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />

        {/* Experience + Portfolio side by side on desktop */}
        <div className="grid lg:grid-cols-2 items-start divide-y lg:divide-y-0 lg:divide-x divide-rose-100">
          <Experience />
          <Portfolio />
        </div>

        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer className="relative z-10" />
    </div>
  )
}
