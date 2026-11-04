import { CheckCircleIcon, SparklesIcon, CalendarIcon, UsersIcon, AwardIcon } from '../components/Icons'

export default function ObjectivesPage({ onNavigate }) {
  const objectives = [
    {
      number: "01",
      title: "Final Workshop Curriculum & Practical Agenda",
      subtitle: "Hands-on Technical Syllabus & 5-Day Progression",
      desc: "Delivering an exhaustive, industry-grade curriculum spanning quantum mechanics foundations, BB84/E91 QKD protocols, NetSquid quantum repeater simulations, and NIST Post-Quantum Cryptography (ML-KEM / ML-DSA).",
      deliverables: [
        "Comprehensive 5-day lecture and laboratory syllabus",
        "Over 60% dedicated hands-on coding and optical testbed time",
        "Individual simulation workstation benchmarks and capstone project"
      ],
      icon: SparklesIcon,
      target: "curriculum",
      badge: "Curriculum & Agenda",
      iconColor: "text-blue-600 bg-blue-50/80 border-blue-200/80"
    },
    {
      number: "02",
      title: "List of Proposed Trainers & Research Personnel",
      subtitle: "Eminent Academic Faculty & Industry Cryptographers",
      desc: "Mobilizing distinguished professors, senior quantum research scientists, and cryptographic engineers from leading national hubs to mentor participants through lectures and personalized 1:1 lab sessions.",
      deliverables: [
        "Keynote talks by leading Quantum Communication pioneers",
        "Direct mentorship by Ph.D. scholars and simulation lab leads",
        "Interactive Q&A panels on research grant drafting and doctoral pathways"
      ],
      icon: UsersIcon,
      target: "trainers",
      badge: "Trainers & Researchers",
      iconColor: "text-purple-600 bg-purple-50/80 border-purple-200/80"
    },
    {
      number: "03",
      title: "Confirmed Dates & Venue Details",
      subtitle: "December 7 to 11, 2026 • Dedicated Quantum Lab Wing",
      desc: "Providing precise operational logistics: confirmed 5-day schedule, reporting timings, campus lab venue, simulation facility area, travel advisory, and accommodation assistance for outstation candidates.",
      deliverables: [
        "Confirmed workshop window: December 7 to 11, 2026",
        "Venue: CYQT Lab, 2,500+ sq. ft. Quantum Simulation Hall B",
        "Daily attendance verification and executive dining timings"
      ],
      icon: CalendarIcon,
      target: "dates-venue",
      badge: "Dates & Venue",
      iconColor: "text-emerald-600 bg-emerald-50/80 border-emerald-200/80"
    },
    {
      number: "04",
      title: "During Event Workshop: Brand, Participant Info & Photos",
      subtitle: "Identity, Participant Experience & Media Coverage",
      desc: "Ensuring an elite on-ground experience: co-branding showcase (CYQT Lab & National Quantum Mission), participant kits, authorized badges, daily photo sessions, and end-of-workshop certificate distribution.",
      deliverables: [
        "Participant welcome kits, ID badges & physical workshop manuals",
        "High-resolution event photography and group photo documentation",
        "Official Certificate of Completion accredited by the organizing body"
      ],
      icon: AwardIcon,
      target: "brand",
      badge: "Brand & Experience",
      iconColor: "text-amber-600 bg-amber-50/80 border-amber-200/80"
    },
  ]

  return (
    <div className="bg-white py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            STRATEGIC FRAMEWORK
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Workshop Objectives
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Formulated to ensure clear academic rigor, world-class trainer engagement, confirmed operational logistics, and an exceptional participant experience.
          </p>
        </div>

        {/* 4 Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-lg ${obj.iconColor} border flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        PILLAR {obj.number}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {obj.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {obj.title}
                  </h3>
                  <div className="text-xs text-blue-600 font-medium mb-3">
                    {obj.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {obj.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Outcomes:
                    </span>
                    {obj.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(obj.target)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    View {obj.badge} Page →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

