import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/40">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-400/60 to-blue-500/60 border border-white/20 shadow-inner" />
              <span className="text-lg font-semibold tracking-wide text-white">Show<span className="text-amber-300">Sync</span></span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-amber-300 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center rounded-full bg-amber-400/90 text-gray-900 font-semibold px-5 py-2 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.55)] hover:bg-amber-400 transition-all">
                Get Started
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden px-6 pb-6 space-y-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/80 hover:text-amber-300">
                  {item.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-amber-400/90 text-gray-900 font-semibold px-5 py-2 shadow-[0_0_20px_rgba(251,191,36,0.35)]">
                Join Now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
