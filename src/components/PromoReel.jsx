import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'intro',
    headline: 'InsideShine',
    sub: 'Premium Interior Detailing',
    bg: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
    vo: 'Introducing InsideShine — professional interior detailing for a showroom-fresh cabin.'
  },
  {
    id: 'vacuum',
    headline: 'Deep Vacuum',
    sub: 'Crumbs, sand, and dust — gone',
    bg: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)',
    vo: 'We remove embedded debris with commercial-grade suction for a crisp, clean base.'
  },
  {
    id: 'steam',
    headline: 'Steam Sanitize',
    sub: 'Kills 99.9% of bacteria',
    bg: 'url(https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop)',
    vo: 'Targeted steam lifts grime from vents, cupholders and seams, sanitizing your space.'
  },
  {
    id: 'leather',
    headline: 'Leather Care',
    sub: 'Clean • Condition • Protect',
    bg: 'url(https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop)',
    vo: 'pH-balanced cleaners and conditioners restore softness and a satin factory finish.'
  },
  {
    id: 'finish',
    headline: 'That New-Car Feel',
    sub: 'Breathe easy. Drive happy.',
    bg: 'url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop)',
    vo: 'Finish with UV protectants and a hypoallergenic refresh. InsideShine — detail, redefined.'
  }
]

export default function PromoReel() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3200)
    return () => clearInterval(timer.current)
  }, [])

  return (
    <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{ backgroundImage: slides[index].bg, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-slate-950/70" />
          <div className="relative h-full flex items-end p-8 sm:p-12">
            <div className="max-w-2xl">
              <motion.h2
                className="text-4xl sm:text-6xl font-bold text-white tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slides[index].headline}
              </motion.h2>
              <motion.p
                className="mt-3 sm:mt-4 text-lg sm:text-xl text-blue-100/90"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                {slides[index].sub}
              </motion.p>
              <motion.p
                className="mt-4 text-sm text-blue-200/80"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                VO: {slides[index].vo}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-4 right-4 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 text-xs text-white/70 bg-slate-900/40 backdrop-blur px-2 py-1 rounded">
        InsideShine — interior detailing
      </div>
    </div>
  )
}
