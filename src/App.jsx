import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Cases />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Ламповый Прокат. Все права защищены.</div>
          <div className="text-white/40 text-sm">Свет • Звук • Сцена</div>
        </div>
      </footer>
    </div>
  )
}

export default App
