import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-[#0b1022]/70 to-[#070b18] pointer-events-none" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/40">
            <p className="text-amber-300 tracking-widest text-xs sm:text-sm uppercase mb-3">Sync Your Shows. Inspire the World.</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Orchestrate Events with Precision & Style
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              ShowSync is the creative, intelligent platform for managing, synchronizing, and elevating live experiences for creators, organizers, and audiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#features" className="inline-flex items-center justify-center rounded-full bg-amber-400/90 text-gray-900 font-semibold px-6 py-3 shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:shadow-[0_0_35px_rgba(251,191,36,0.65)] hover:bg-amber-400 transition-all">
                Explore Now
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-amber-300/30 text-amber-300 px-6 py-3 hover:bg-amber-300/10 transition-all">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
