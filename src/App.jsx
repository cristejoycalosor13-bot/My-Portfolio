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
      {/* Petals float behind everything (z-0) */}
      <FloatingPetals />

      {/* Navbar on top (z-50 via class) */}
      <Navbar />

      {/* Main content (z-10 to sit above petals) */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </main>

      <Footer className="relative z-10" />
    </div>
  )
}
