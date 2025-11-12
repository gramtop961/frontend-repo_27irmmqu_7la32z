import { Star } from 'lucide-react'

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
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">What People <span className="text-amber-300">Say</span></h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">Real stories from creators and organizers using ShowSync to elevate their events.</p>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.name} className="relative rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40 hover:border-amber-300/30 transition-all min-h-[260px] flex flex-col">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
