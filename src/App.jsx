import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactForm from './components/ContactForm'
import './index.css'
import LightningBackground from './components/LightningBackground';



function App() {
  return (
    <>
     <LightningBackground />
      <HeroSection />
      <Projects />
      <Skills />
      <ContactForm />
    </>
  )
}

export default App
