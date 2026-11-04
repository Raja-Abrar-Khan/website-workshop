import { CalendarIcon, MapPinIcon, AwardIcon, SparklesIcon, UsersIcon, NetworkIcon, ShieldCheckIcon, CpuIcon, KeyIcon } from '../components/Icons'
import Countdown from '../components/Countdown'

export default function Home({ onNavigate }) {
  const pillars = [
    {
      title: "Quantum Cryptography",
      tagline: "Next-gen encryption for a safer digital world",
      desc: "Harnessing quantum mechanics to establish cryptographic keys with provable unconditional security against computational eavesdropping.",
      icon: KeyIcon,
      accent: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      title: "Post-Quantum Security",
      tagline: "Defending against future quantum threats",
      desc: "Deploying NIST-standardized lattice-based algorithms (ML-KEM & ML-DSA) to safeguard classical systems before Q-Day arrives.",
      icon: ShieldCheckIcon,
      accent: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      title: "QKD Networks",
      tagline: "Ultra-secure communication links",
      desc: "Fiber and free-space quantum key distribution networks enabling trusted and entanglement-based cryptographic key exchange.",
      icon: NetworkIcon,
      accent: "text-sky-600 bg-sky-50 border-sky-200"
    },
    {
      title: "Quantum Repeaters & Memory",
      tagline: "Building the long-distance quantum backbone",
      desc: "Overcoming fiber attenuation limits through quantum memory nodes, entanglement swapping, and multi-hop routing protocols.",
      icon: CpuIcon,
      accent: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      title: "Satellite & Free-Space Comms",
      tagline: "Global connectivity beyond terrestrial limits",
      desc: "Low-Earth orbit satellite downlinks and atmospheric line-of-sight quantum optical communication across distributed testbeds.",
      icon: SparklesIcon,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
  ]

  return (
    <div className="bg-white">
      {/* 1. Sleek Hero Section */}
      <section className="pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Date Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-6 shadow-2xs">
            <CalendarIcon className="w-4 h-4 text-blue-600" />
            December 7 – 11, 2026 • 5-Day National Workshop
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            A Hands-on Workshop on{' '}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Quantum Communication, Quantum Network,
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">
              Post-Quantum Cryptography
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bridging fundamental quantum optics with cutting-edge cybersecurity. Learn through simulated QKD hardware, quantum repeater routing, and NIST PQC migration.
          </p>

          {/* Minimalist Live Countdown */}
          <Countdown />

          {/* Just ONE clean primary button + ONE simple link */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all text-sm cursor-pointer"
            >
              Apply / Register Online →
            </button>
            <button
              onClick={() => onNavigate('curriculum')}
              className="text-xs font-bold text-slate-600 hover:text-blue-700 py-2 px-3 cursor-pointer"
            >
              View 5-Day Curriculum ↓
            </button>
          </div>

          {/* 4 Minimal Metric Chips */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
              <div className="text-lg font-black text-slate-900">5 Days</div>
              <div className="text-xs text-slate-500 font-medium">Dec 7 – 11, 2026</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
              <div className="text-lg font-black text-slate-900">50 Seats</div>
              <div className="text-xs text-slate-500 font-medium">Dedicated Rigs</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
              <div className="text-lg font-black text-slate-900">60% Hands-on</div>
              <div className="text-xs text-slate-500 font-medium">Lab & Code Simulation</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
              <div className="text-lg font-black text-slate-900">Accredited</div>
              <div className="text-xs text-slate-500 font-medium">Certificate Included</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Featured Event Flyer Banner (Image 5 style, sleek) */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Official Poster Card */}
              <div className="lg:col-span-7 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center font-black text-slate-950 text-xs">
                        Q
                      </div>
                      <span className="text-xs font-bold tracking-wider uppercase">CYQT LAB</span>
                    </div>
                    <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
                      NATIONAL QUANTUM MISSION
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10">DST</span>
                  </div>

                  <div className="my-4 text-center">
                    <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 mb-2">
                      5-Day National Workshop
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Quantum Communication, Quantum Network, and Post-Quantum Cryptography
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs my-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Host</div>
                      <div className="font-bold text-white text-xs">CYQT Lab, CS Department</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-[10px] text-slate-400">Coordinators</div>
                      <div className="font-bold text-white text-xs">Dr. A.K. Sharma & Prof. P. Nair</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-300 font-mono">
                  <span>📅 Dec 7–11, 2026</span>
                  <span>📍 Simulation Hall B</span>
                </div>
              </div>

              {/* Right Column: Brief Overview & Clean Action */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white text-slate-800">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
                    Featured Workshop
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-3">
                    Emerging Frontiers in Quantum Telecommunications
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    Explore quantum key distribution protocols, multi-node quantum repeaters, and modern NIST post-quantum cryptographic standards with individual simulation workstations.
                  </p>

                  <div className="space-y-2 text-xs text-slate-700 font-medium">
                    <div className="flex items-center gap-2">
                      <AwardIcon className="w-4 h-4 text-emerald-600" />
                      <span>Accredited Completion Certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-blue-600" />
                      <span>Confirmed Campus Venue: Hall B</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-4 h-4 text-indigo-600" />
                      <span>Mentored by Foremost Quantum Scientists</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-xs shadow-xs transition-all cursor-pointer text-center"
                  >
                    Register for Workshop
                  </button>
                  <button
                    onClick={() => onNavigate('venue')}
                    className="py-3 px-4 rounded-xl font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs transition-all cursor-pointer text-center"
                  >
                    Venue Details
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Five Quantum Pillars (Image 2 style, clean & whitish) */}
      <section className="py-16 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              National Quantum Communication Ecosystem
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Aligned with the 5 core focus areas of India's National Quantum Mission (2023–2031).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <div>
                    <div className={`w-11 h-11 rounded-xl ${pillar.accent} border flex items-center justify-center mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{pillar.title}</h3>
                    <div className="text-xs font-semibold text-blue-600 mb-2">{pillar.tagline}</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                    Pillar {idx + 1} • Hands-on Covered
                  </div>
                </div>
              )
            })}

            {/* 6th Card: NQM Alignment Card */}
            <div className="rounded-2xl bg-slate-900 text-white p-6 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
                  NATIONAL QUANTUM MISSION
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Building Indigenous Quantum Security
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dedicated to training the next generation of researchers and engineers on QKD, repeaters, and post-quantum cryptographic standards.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-cyan-300">
                December 7–11, 2026
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Page Navigator CTA */}
      <section className="py-14 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-slate-900">Explore Workshop Details</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-6">
            Navigate through our dedicated pages for curriculum, trainers, confirmed venue, and participant kits.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('objectives')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
            >
              Objectives →
            </button>
            <button
              onClick={() => onNavigate('venue')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
            >
              Dates & Venue →
            </button>
            <button
              onClick={() => onNavigate('curriculum')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
            >
              Curriculum & Schedule →
            </button>
            <button
              onClick={() => onNavigate('trainers')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
            >
              Trainers & Faculty →
            </button>
            <button
              onClick={() => onNavigate('brand')}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors cursor-pointer"
            >
              Brand & Perks →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

