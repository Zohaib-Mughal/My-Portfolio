
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Banner from './components/Banner'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Analytics />
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
