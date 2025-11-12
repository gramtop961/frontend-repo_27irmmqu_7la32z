import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1022] via-[#0a0f1e] to-[#060913]">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
