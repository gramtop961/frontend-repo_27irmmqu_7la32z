import { useEffect, useMemo, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Event Producer',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
    review: 'ShowSync made coordination effortless. The live sync tools saved us days of planning.'
  },
  {
    name: 'Liam Chen',
    role: 'Festival Director',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    review: 'The platform feels premium and powerful. Our team loved the analytics and QR check-ins.'
  },
  {
    name: 'Maya Rodriguez',
    role: 'Creative Lead',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    review: 'Beautiful and functional. The AI assistant is genuinely helpful during live shows.'
  },
  {
    name: 'Noah Patel',
    role: 'Stage Manager',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    review: 'Everything stays in sync. The design is gorgeous and the experience is smooth.'
  },
  {
    name: 'Sophia Williams',
    role: 'Venue Owner',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1635358155375-91fc9cdc8d26?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI5NDM3OTZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    review: 'A polished platform that truly understands events. Highly recommended.'
  }
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < count ? '' : 'opacity-30'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slidesPerView, setSlidesPerView] = useState(3)

  // Responsive slides per view: 1 (sm), 2 (md), 3 (lg+)
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      if (w < 640) return 1
      if (w < 1024) return 2
      return 3
    }
    const apply = () => setSlidesPerView(compute())
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  const maxIndex = useMemo(() => Math.max(0, testimonials.length - slidesPerView), [slidesPerView])
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [maxIndex, index])

  // Auto-play
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(id)
  }, [maxIndex, paused])

  const goPrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  const goNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))

  // Touch swipe support
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let startX = 0
    let dx = 0
    const onTouchStart = (e) => {
      startX = e.touches[0].clientX
      dx = 0
    }
    const onTouchMove = (e) => {
      dx = e.touches[0].clientX - startX
    }
    const onTouchEnd = () => {
      if (dx > 50) goPrev()
      if (dx < -50) goNext()
    }
    el.addEventListener('touchstart', onTouchStart)
    el.addEventListener('touchmove', onTouchMove)
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [maxIndex])

  const card = (t) => (
    <motion.div
      key={t.name}
      className="group relative rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40 hover:border-amber-300/30 transition-all min-h-[260px] flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 250, damping: 24 }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-300/0 via-amber-300/0 to-amber-300/0 group-hover:from-amber-300/10 group-hover:via-transparent group-hover:to-transparent" />
      <div className="flex items-center gap-4">
        <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full object-cover object-center border-2 border-amber-300/60" />
        <div>
          <p className="text-white font-semibold leading-tight">{t.name}</p>
          <p className="text-white/70 text-sm">{t.role}</p>
        </div>
      </div>
      <div className="mt-4">
        <Stars count={t.rating} />
        <p className="mt-3 text-white/80">“{t.review}”</p>
      </div>
    </motion.div>
  )

  const trackWidth = (testimonials.length / slidesPerView) * 100
  const translateX = -(index * (100 / slidesPerView))

  // Create a duplicated array for seamless looping perception on hover/drag (visual only)
  const items = testimonials

  return (
    <section id="testimonials" className="relative py-28">
      {/* Decorative background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6" ref={containerRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Voices we <span className="text-amber-300">Cherish</span></h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">Real stories from creators and organizers using ShowSync to elevate their events.</p>
        </div>

        <div className="relative mt-12">
          {/* Carousel viewport */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              style={{ width: `${trackWidth}%` }}
              animate={{ x: `${translateX}%` }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.7 }}
            >
              {items.map((t) => (
                <div key={t.name} className="basis-full sm:basis-1/2 lg:basis-1/3 shrink-0">
                  {card(t)}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                aria-label="Previous testimonials"
                onClick={goPrev}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-amber-300/40 hover:bg-amber-300/10 transition grid place-items-center backdrop-blur"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonials"
                onClick={goNext}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-amber-300/40 hover:bg-amber-300/10 transition grid place-items-center backdrop-blur"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    i === index ? 'bg-amber-300 shadow-[0_0_20px_2px_rgba(251,191,36,0.45)]' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
