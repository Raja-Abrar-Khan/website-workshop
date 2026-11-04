import { CalendarIcon, MapPinIcon, AwardIcon, KeyIcon, ShieldCheckIcon, NetworkIcon, CpuIcon, SparklesIcon } from '../components/Icons'
import Countdown from '../components/Countdown'

export default function HomePage({ onNavigate }) {
  const pillars = [
    {
      title: "Quantum Cryptography",
      tagline: "Unconditional physical security",
      desc: "Information-theoretically secure communication based on the laws of quantum mechanics and the no-cloning theorem.",
      icon: KeyIcon,
      color: "text-blue-600 bg-blue-50/80 border-blue-200/80"
    },
    {
      title: "Post-Quantum Security",
      tagline: "NIST-standardized migration",
      desc: "Deploying lattice and hash-based cryptographic algorithms (ML-KEM & ML-DSA) to defend critical infrastructure against quantum computing threats.",
      icon: ShieldCheckIcon,
      color: "text-purple-600 bg-purple-50/80 border-purple-200/80"
    },
    {
      title: "QKD Networks",
      tagline: "Scalable key distribution",
      desc: "Practical fiber-optic and free-space QKD architectures enabling trusted and entanglement-based distribution across multi-user networks.",
      icon: NetworkIcon,
      color: "text-sky-600 bg-sky-50/80 border-sky-200/80"
    },
    {
      title: "Quantum Repeaters & Memory",
      tagline: "Overcoming physical distance limits",
      desc: "Quantum state storage, entanglement swapping, and multi-hop routing designed to build the foundational backbone of the Quantum Internet.",
      icon: CpuIcon,
      color: "text-amber-600 bg-amber-50/80 border-amber-200/80"
    },
    {
      title: "Satellite & Free-Space Links",
      tagline: "Global reach beyond fiber",
      desc: "Low-Earth orbit (LEO) satellite downlinks and atmospheric line-of-sight quantum channels linking distant metropolitan nodes.",
      icon: SparklesIcon,
      color: "text-emerald-600 bg-emerald-50/80 border-emerald-200/80"
    },
  ]

  return (
    <div className="bg-white">
      
      {/* 1. Sleek Hero Section */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          {/* Exact Sleek Pills from Reference Screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50/80 text-blue-700 border border-blue-200/80 shadow-2xs">
              <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
              December 7 – 11, 2026
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-purple-50/80 text-purple-700 border border-purple-200/80 shadow-2xs">
              <MapPinIcon className="w-3.5 h-3.5 text-purple-600" />
              CYQT Lab • Hands-on Simulation Wing
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50/80 text-emerald-700 border border-emerald-200/80 shadow-2xs">
              <AwardIcon className="w-3.5 h-3.5 text-emerald-600" />
              Authorized Certification of Completion
            </span>
          </div>

          {/* Clean Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            A Hands-on Workshop on{' '}
            <span className="text-blue-600">Quantum Communication</span>,{' '}
            <span className="text-indigo-600">Quantum Network</span>, and{' '}
            <span className="text-purple-600">Post-Quantum Cryptography</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bridging fundamental quantum optics with cutting-edge cybersecurity. An intensive 5-day national program with individual simulation workstations.
          </p>

          {/* Minimal Countdown Timer */}
          <Countdown />

          {/* Minimal Primary CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs hover:shadow-sm transition-all text-sm cursor-pointer"
            >
              Apply / Register Now →
            </button>
            <button
              onClick={() => onNavigate('curriculum')}
              className="text-xs font-bold text-slate-600 hover:text-blue-600 px-4 py-2 cursor-pointer transition-colors"
            >
              View Curriculum & Schedule
            </button>
          </div>

          {/* Clean 4-Metric Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
              <div className="text-sm font-extrabold text-slate-900">5 Days</div>
              <div className="text-xs text-slate-500">Dec 7 – 11, 2026</div>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
              <div className="text-sm font-extrabold text-slate-900">50 Seats</div>
              <div className="text-xs text-slate-500">Dedicated Rigs</div>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
              <div className="text-sm font-extrabold text-slate-900">60% Labs</div>
              <div className="text-xs text-slate-500">Hands-on Code</div>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200/80 bg-white">
              <div className="text-sm font-extrabold text-slate-900">Accredited</div>
              <div className="text-xs text-slate-500">NQM & CYQT Lab</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Featured Event Banner (Sleek Presentation) */}
      <section className="py-14 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-sm transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Poster Visual */}
              <div className="md:col-span-7 bg-slate-900 text-white p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs font-mono">
                    <span className="text-cyan-400 font-bold">CYQT LAB</span>
                    <span className="text-slate-400">NATIONAL QUANTUM MISSION</span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 mb-3">
                    Flagship Winter Workshop
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Quantum Communication, Quantum Network, and Post-Quantum Cryptography
                  </h3>

                  <p className="mt-2 text-xs text-slate-300">
                    Conducted at CYQT Lab, Department of Computer Science & Quantum Technologies.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 text-xs text-cyan-300 flex items-center justify-between font-mono">
                  <span>📅 Dec 7–11, 2026</span>
                  <span>📍 Hall B Simulation Wing</span>
                </div>
              </div>

              {/* Right Summary */}
              <div className="md:col-span-5 p-7 flex flex-col justify-between bg-white text-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                    PROGRAM OVERVIEW
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    Advanced Practical Curriculum
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Learn discrete-variable QKD (BB84, decoy states), entanglement-based routing (E91, NetSquid), and NIST PQC migration with individual high-performance workstations.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="flex-1 py-2.5 px-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 text-xs transition-colors cursor-pointer text-center"
                  >
                    Register Online
                  </button>
                  <button
                    onClick={() => onNavigate('dates-venue')}
                    className="py-2.5 px-3 rounded-lg font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs transition-colors cursor-pointer text-center"
                  >
                    Venue
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Five Quantum Pillars (Clean Minimalist Cards) */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Core Technical Focus Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Aligned with the 5 strategic pillars of the National Quantum Mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-slate-200/90 p-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className={`w-9 h-9 rounded-lg ${pillar.color} border flex items-center justify-center mb-3`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5">{pillar.title}</h3>
                    <div className="text-[11px] font-medium text-blue-600 mb-2">{pillar.tagline}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              )
            })}

            {/* Mission Card */}
            <div className="rounded-xl bg-slate-900 text-white p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
                  MISSION 2023–2031
                </span>
                <h3 className="text-sm font-bold text-white mb-1.5">
                  National Quantum Mission
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Building indigenous capabilities in quantum communication, QKD networks, and cryptographic resilience.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[10px] font-mono text-cyan-300">
                Dec 7–11, 2026
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

