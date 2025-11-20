import { Check } from 'lucide-react'

const tiers = [
  { name: 'Express', price: 79, points: ['Quick vacuum', 'Surface wipe-down', 'Windows inside', 'Deodorize'] },
  { name: 'Signature', price: 149, popular: true, points: ['Deep vacuum', 'Shampoo fabrics', 'Steam sanitize', 'Plastics dressed'] },
  { name: 'Ultimate', price: 229, points: ['All of Signature', 'Leather clean + condition', 'Ozone treatment', 'UV protectant'] }
]

export default function Pricing() {
  return (
    <section className="mt-10 grid gap-6 sm:grid-cols-3">
      {tiers.map((t) => (
        <div key={t.name} className={`rounded-2xl border ${t.popular ? 'border-blue-400/60 bg-blue-500/5' : 'border-white/10 bg-white/5'} p-6` }>
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-semibold text-white">{t.name}</h3>
            {t.popular && <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200">Most popular</span>}
          </div>
          <div className="mt-3 text-4xl font-bold text-white">${t.price}<span className="text-base text-white/60">/car</span></div>
          <ul className="mt-4 space-y-2">
            {t.points.map(p => (
              <li key={p} className="flex items-start gap-2 text-blue-100/90">
                <Check className="w-5 h-5 text-blue-300 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium py-2.5 transition">Book {t.name}</button>
        </div>
      ))}
    </section>
  )
}
