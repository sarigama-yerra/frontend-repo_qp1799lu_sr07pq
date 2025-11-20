import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks — we will be in touch shortly!')
  }

  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">Get a quote</h3>
      <p className="text-blue-100/80 mt-1">Tell us about your vehicle and goals.</p>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-4 sm:grid-cols-2">
        <input required placeholder="Name" className="col-span-2 sm:col-span-1 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input required type="tel" placeholder="Phone" className="col-span-2 sm:col-span-1 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input required placeholder="Car make & model" className="col-span-2 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea rows={4} placeholder="Notes, problem areas, preferences" className="col-span-2 rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="col-span-2 flex items-center gap-3">
          <button className="rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium px-4 py-2.5 transition">Request quote</button>
          <span className="text-sm text-blue-200/80">{status}</span>
        </div>
      </form>
    </section>
  )
}
