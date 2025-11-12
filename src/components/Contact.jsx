import { Mail, MapPin, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40">
            <h3 className="text-2xl font-semibold text-white">Get in <span className="text-amber-300">Touch</span></h3>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-white/80">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="How can we help?" />
              </div>
              <button type="button" className="w-full rounded-full bg-amber-400/90 text-gray-900 font-semibold px-6 py-3 shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:shadow-[0_0_35px_rgba(251,191,36,0.65)] hover:bg-amber-400 transition-all">Send Message</button>
            </form>
          </div>

          <div className="rounded-2xl p-8 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40">
            <h3 className="text-2xl font-semibold text-white">Contact <span className="text-amber-300">Info</span></h3>
            <div className="mt-6 space-y-4 text-white/80">
              <p className="flex items-center gap-3"><Mail size={18} className="text-amber-300" /> support@showsync.app</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-amber-300" /> New York, USA</p>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="p-2 rounded-full border border-amber-300/30 text-amber-300 hover:bg-amber-300/10 transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="#" className="p-2 rounded-full border border-amber-300/30 text-amber-300 hover:bg-amber-300/10 transition-colors" aria-label="YouTube"><Youtube size={18} /></a>
                <a href="#" className="p-2 rounded-full border border-amber-300/30 text-amber-300 hover:bg-amber-300/10 transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="mt-8">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <iframe title="map" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
