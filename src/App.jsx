import PromoReel from './components/PromoReel'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.06),transparent_40%)]" />

      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/30" />
            <span className="text-xl font-semibold text-white">InsideShine</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <section className="pt-6">
          <h1 className="sr-only">InsideShine — Interior Car Cleaning & Detailing</h1>
          <PromoReel />
          <p className="mt-6 text-lg text-blue-200/90 max-w-3xl">Professional interior detailing focused on health, comfort and feel. We deep clean, sanitize and protect every surface — leaving your cabin fresh, balanced and ready for the road.</p>
        </section>

        <section id="services" className="mt-14 grid gap-6 sm:grid-cols-3">
          {[{t:'Fabric shampoo',d:'Lift stains and odors from seats and carpets'},{t:'Steam clean',d:'Sanitize vents, seams and hard-to-reach areas'},{t:'Leather care',d:'Clean, condition and protect with a satin finish'}].map(s => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{s.t}</h3>
              <p className="text-blue-100/80 mt-1">{s.d}</p>
            </div>
          ))}
        </section>

        <section id="pricing" className="mt-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Transparent pricing</h2>
          <Pricing />
        </section>

        <section id="contact" className="mt-14">
          <h2 className="text-2xl font-semibold text-white mb-3">Book your interior refresh</h2>
          <Contact />
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} InsideShine</span>
          <span>Interior Detailing • Mobile service available</span>
        </div>
      </footer>
    </div>
  )
}

export default App
