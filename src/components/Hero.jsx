import { CalendarIcon, MapPinIcon, UsersIcon, ShieldCheckIcon, AwardIcon, NetworkIcon } from './Icons'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
      {/* Background Soft Quantum Mesh */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.08),rgba(255,255,255,0))]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 shadow-xs">
            <CalendarIcon className="w-4 h-4 text-blue-600" />
            December 7 – 11, 2026
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200 shadow-xs">
            <MapPinIcon className="w-4 h-4 text-purple-600" />
            CYQT Lab • Hands-on Simulation Wing
          </span>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs">
            <AwardIcon className="w-4 h-4 text-emerald-600" />
            Authorized Certification of Completion
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-blue-700 mb-3">
            National Technical Immersion & Practical Lab Series
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            A Hands-on Workshop on{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">
              Quantum Communication, Quantum Network,
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 bg-clip-text text-transparent">
              Post-Quantum Cryptography
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Bridging fundamental quantum optics with cutting-edge cybersecurity. Experience 5 intensive days of simulated QKD hardware, quantum repeater routing, and practical migration to NIST Post-Quantum Cryptography standards.
          </p>

          {/* Live Countdown Timer (Whitish cards) */}
          <Countdown />

          {/* Action CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#communication"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 text-center text-sm"
            >
              Apply / Register Online →
            </a>
            <a
              href="#featured-event"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all text-center flex items-center justify-center gap-2 text-sm"
            >
              <CalendarIcon className="w-4 h-4 text-blue-600" />
              View Official Poster & Notice
            </a>
            <a
              href="#training"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-blue-700 hover:bg-blue-50/80 transition-all text-center text-sm"
            >
              Explore Curriculum ↓
            </a>
          </div>
        </div>

        {/* Quick Metric Bar (Whitish cards) */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">5 Full Days</div>
                <div className="text-xs font-medium text-slate-500">Dec 7 – 11, 2026</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <UsersIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">50 Seats</div>
                <div className="text-xs font-medium text-slate-500">Dedicated Lab Stations</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-purple-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
                <NetworkIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">60% Hands-on</div>
                <div className="text-xs font-medium text-slate-500">Lab & Code Simulation</div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-slate-900">PQC & QKD</div>
                <div className="text-xs font-medium text-slate-500">OpenSSL & NetSquid</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
