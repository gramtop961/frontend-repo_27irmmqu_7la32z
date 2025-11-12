export default function Footer() {
  return (
    <footer className="relative py-10 mt-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400/60 to-blue-500/60 border border-white/20 shadow-inner" />
              <span className="text-lg font-semibold tracking-wide text-white">Show<span className="text-amber-300">Sync</span></span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-white/70">
              <a href="#about" className="hover:text-amber-300">About</a>
              <a href="#features" className="hover:text-amber-300">Features</a>
              <a href="#testimonials" className="hover:text-amber-300">Testimonials</a>
              <a href="#contact" className="hover:text-amber-300">Contact</a>
            </nav>
          </div>
          <p className="text-center text-white/60 text-sm mt-6">© 2025 ShowSync. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
