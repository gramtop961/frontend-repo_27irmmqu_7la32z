import Reveal from './Reveal'

export default function Gallery() {
  const items = [
    { id: 1, title: 'Neon Nights', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop' },
    { id: 2, title: 'Symphony Live', src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1400&auto=format&fit=crop' },
    { id: 3, title: 'Festival Pulse', src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop' },
    { id: 4, title: 'Backstage Flow', src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1400&auto=format&fit=crop' },
    { id: 5, title: 'Spotlight Stage', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop' },
    { id: 6, title: 'City Showcase', src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwTmlnaHRzfGVufDB8MHx8fDE3NjI5NDM3OTZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-10 left-1/4 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/5 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Event <span className="text-amber-300">Highlights</span></h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">A glimpse into moments crafted with precision, energy, and style.</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
                <img src={item.src} alt={item.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1022]/80 via-[#0b1022]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold drop-shadow">{item.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
