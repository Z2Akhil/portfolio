import './App.css'
import {
  Header,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
