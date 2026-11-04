import { ShieldCheckIcon, NetworkIcon, CpuIcon, SparklesIcon, KeyIcon } from './Icons'

export default function QuantumEcosystem() {
  const pillars = [
    {
      title: "Quantum Cryptography",
      tagline: "Next-generation encryption for a safer digital world",
      desc: "Harnessing the laws of quantum mechanics to establish cryptographic keys with provable unconditional security against computational attacks.",
      icon: KeyIcon,
      color: "from-blue-600 to-cyan-500",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      title: "Post-Quantum Security",
      tagline: "Defending against future quantum threats",
      desc: "Designing and deploying NIST-standardized lattice-based algorithms (ML-KEM & ML-DSA) to safeguard classical infrastructure before Q-Day arrives.",
      icon: ShieldCheckIcon,
      color: "from-purple-600 to-indigo-600",
      iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      title: "QKD Networks",
      tagline: "Ultra-secure communication through quantum networks",
      desc: "Fiber and free-space quantum key distribution networks enabling trusted and entanglement-based cryptographic key exchange between distributed endpoints.",
      icon: NetworkIcon,
      color: "from-sky-500 to-blue-600",
      iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    },
    {
      title: "Quantum Memory & Repeaters",
      tagline: "Building the backbone for long-distance quantum networks",
      desc: "Overcoming physical optical fiber attenuation through quantum state storage, entanglement swapping, and multi-hop quantum repeater nodes.",
      icon: CpuIcon,
      color: "from-amber-500 to-orange-600",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      title: "Satellite & Free-Space Quantum",
      tagline: "Global, secure connectivity beyond terrestrial limits",
      desc: "Low-Earth orbit (LEO) satellite downlinks and atmospheric line-of-sight quantum optical communication connecting cross-continent testbeds.",
      icon: SparklesIcon,
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            National Quantum Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            National Quantum Communication Ecosystem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Aligned with the vision of the <strong>National Quantum Mission (NQM 2023–2031)</strong>, our workshop curriculum covers the 5 foundational pillars driving quantum telecommunications.
          </p>
        </div>

        {/* 5 Pillars Layout with Central Quantum Network Node */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    {pillar.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono font-medium text-slate-500 flex items-center justify-between">
                  <span>Pillar {idx + 1} of 5</span>
                  <span className="text-blue-600 font-bold">Hands-on Covered</span>
                </div>
              </div>
            )
          })}

          {/* 6th Card: National Mission Alignment Callout (Royal Blue) */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 border border-blue-900 p-7 flex flex-col justify-between text-white shadow-xl">
            <div>
              <div className="inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold text-amber-300 bg-amber-400/20 border border-amber-400/30 mb-4">
                NATIONAL QUANTUM MISSION (2023–2031)
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Accelerating India's Quantum Leap
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                "Developing indigenous capabilities in quantum communication, QKD networks, quantum repeaters, and post-quantum cryptographic security to build a self-reliant quantum-secure digital infrastructure."
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-cyan-300 font-mono font-semibold">
              <span>DST Supported Hub</span>
              <span>Dec 7–11, 2026</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
