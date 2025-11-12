import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <Reveal>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">About Show<span className="text-amber-300">Sync</span></h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  ShowSync connects creators, performers, and audiences through smart event synchronization, technology, and design. Our mission is to simplify coordination while fostering creativity and collaboration.
                </p>
                <p className="mt-4 text-white/70">
                  From concept to curtain call, our platform ensures your production is organized, aligned, and unforgettable.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="order-1 md:order-2">
            <Reveal delay={0.1}>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop" alt="ShowSync mockup" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1022]/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
