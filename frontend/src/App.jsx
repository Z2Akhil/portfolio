import './App.css'
import ProfileCard from './components/ProfileCard'
import NavPills from './components/NavPills'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio-layout">
      {/* Navigation Pills - Top Center */}
      <NavPills />

      {/* Fixed Profile Card - Left Side */}
      <ProfileCard />

      {/* Main Content - Right Side */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
