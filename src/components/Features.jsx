import { Calendar, Bot, MessageSquare, QrCode, BarChart3, Shield, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const features = [
  {
    title: 'Smart Event Management',
    desc: 'Plan, organize, and orchestrate shows with intelligent tools and workflows.',
    icon: Sparkles,
  },
  {
    title: 'Live Sync Calendar',
    desc: 'Keep teams aligned in real time with a collaborative scheduling system.',
    icon: Calendar,
  },
  {
    title: 'AI Assistant',
    desc: 'Your on-call copilot for support, coordination, and creative suggestions.',
    icon: Bot,
  },
  {
    title: 'Feedback & Reviews',
    desc: 'Collect rich responses from performers and audience effortlessly.',
    icon: MessageSquare,
  },
  {
    title: 'QR Check-In',
    desc: 'Streamlined entry management with secure QR-based verification.',
    icon: QrCode,
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Unlock insights with engagement metrics and performance reports.',
    icon: BarChart3,
  },
  {
    title: 'Secure Auth + OTP',
    desc: 'Protect accounts with robust authentication for email & mobile.',
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-16 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Powerful <span className="text-amber-300">Features</span></h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto">Everything you need to coordinate world-class events, wrapped in a premium experience.</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.05}>
              <div className="group relative rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl shadow-black/40 hover:border-amber-300/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-300/30 to-transparent border border-amber-300/30 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-3 text-white/70">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
