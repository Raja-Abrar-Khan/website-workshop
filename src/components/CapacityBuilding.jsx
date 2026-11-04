import { UsersIcon, MapPinIcon, CpuIcon, AwardIcon, CheckCircleIcon } from './Icons'

export default function CapacityBuilding() {
  const facilityHighlights = [
    {
      title: "Participant Cohort Limit",
      stat: "50 Seats Only",
      desc: "Strictly capped to ensure individual 1:1 access to high-performance simulation workstations and personalized instructor mentoring.",
      icon: UsersIcon,
      accent: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      title: "Lab Area & Infrastructure",
      stat: "2,500+ Sq. Ft.",
      desc: "Dedicated Quantum Simulation Hall & Optics Testbed Wing equipped with gigabit research intranet, dual-monitor workstations, and projection displays.",
      icon: MapPinIcon,
      accent: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      title: "Compute & Simulation Kits",
      stat: "50+ Workstations",
      desc: "Pre-configured Linux/Windows environments with NetSquid, SimulaQron, Qiskit, QuISP, and NIST PQC liboqs toolchains ready for live coding.",
      icon: CpuIcon,
      accent: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      title: "Certification & Credentials",
      stat: "Accredited",
      desc: "Official Certificate of Completion awarded upon meeting 85% attendance and submitting the end-of-workshop hands-on project report.",
      icon: AwardIcon,
      accent: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
  ]

  const eligibilityGroups = [
    {
      category: "Academic Faculty",
      desc: "Professors, Associate & Assistant Professors in Computer Science, Electronics & Communication, Information Technology, Physics, and Mathematics.",
    },
    {
      category: "Research Scholars & Postgraduates",
      desc: "PhD and Master's (M.Tech / M.S. / M.Sc.) students actively working or aspiring to conduct research in quantum networks and security.",
    },
    {
      category: "Industry & R&D Professionals",
      desc: "Network architects, cryptographic security engineers, defense technologists, and telecom specialists preparing for post-quantum migration.",
    },
    {
      category: "Pre-requisites",
      desc: "Basic understanding of linear algebra, basic Python programming, and fundamentals of classical networking and cryptography.",
    },
  ]

  return (
    <section id="capacity" className="py-20 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            Infrastructure & Intake
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Capacity Building & Lab Facilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Engineered to deliver an uncompromising hands-on experience with dedicated compute resources, physical lab wings, and a focused cohort size.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityHighlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.accent} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                    {item.stat}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mb-3">
                    {item.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Eligibility & Workstation Specifications */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Target Audience */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-blue-600" />
              Target Audience & Eligibility
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Applications are welcome from nationwide institutions and organizations. Early registration is strongly advised due to fixed workstation limits.
            </p>

            <div className="space-y-3.5">
              {eligibilityGroups.map((group, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-sm text-slate-900 mb-1 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    {group.category}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 pl-6 font-normal">
                    {group.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Setup & Workstation Provisions */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-200 p-8 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-blue-800 bg-white border border-blue-200 mb-3 shadow-2xs">
                LAB ENVIRONMENT
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Dedicated Hands-on Workstation
              </h3>
              <p className="text-sm text-slate-700 mb-5 leading-relaxed font-normal">
                Each participant is allocated a fully setup development workstation equipped with all required quantum simulation libraries, test scripts, and datasets.
              </p>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span><strong className="text-slate-900">Simulation Rigs:</strong> NetSquid, QuISP & SimulaQron discrete-event simulators</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 shrink-0"></span>
                  <span><strong className="text-slate-900">Cryptographic Toolchains:</strong> OpenSSL 3.x, liboqs (C & Python wrapper), Kyber/ML-KEM demo benchmarks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 shrink-0"></span>
                  <span><strong className="text-slate-900">Optics Demonstration:</strong> QKD BB84 photon polarization optical testbed demonstration session</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0"></span>
                  <span><strong className="text-slate-900">Connectivity:</strong> High-bandwidth isolated campus lab intranet & remote backup repository access</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-blue-200 text-xs text-slate-600 font-medium flex items-center justify-between">
              <span>Host Wing: Quantum Computing Lab B</span>
              <span className="text-blue-700 font-bold">December 7–11, 2026</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
