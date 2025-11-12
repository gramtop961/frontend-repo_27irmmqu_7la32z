export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl p-10 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to <span className="text-amber-300">Sync</span> Your Next Show?</h3>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">Start organizing and elevating your events with ShowSync’s intelligent tools and immersive experience.</p>
          <a href="#contact" className="inline-flex mt-8 items-center justify-center rounded-full bg-amber-400/90 text-gray-900 font-semibold px-8 py-3 shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:shadow-[0_0_35px_rgba(251,191,36,0.65)] hover:bg-amber-400 transition-all">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
