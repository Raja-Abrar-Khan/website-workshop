import { CheckCircleIcon, SparklesIcon, CalendarIcon, UsersIcon, AwardIcon } from './Icons'

export default function Objectives() {
  const coreObjectives = [
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
      targetHref: "#training",
      badge: "Curriculum & Agenda",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200"
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
      targetHref: "#trainers",
      badge: "Trainers & Researchers",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200"
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
      targetHref: "#venue-dates",
      badge: "Dates & Venue",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200"
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
      targetHref: "#experience",
      badge: "Brand & Experience",
      iconBg: "bg-purple-50 text-purple-600 border-purple-200"
    },
  ]

  return (
    <section id="objectives" className="py-20 bg-slate-50/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            Core Objectives
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Workshop Objectives & Strategic Goals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Formulated to ensure clear academic rigor, world-class trainer engagement, confirmed operational logistics, and an exceptional participant experience.
          </p>
        </div>

        {/* 4 Core Objectives Grid in Pure White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreObjectives.map((obj, idx) => {
            const Icon = obj.icon
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl ${obj.iconBg} border flex items-center justify-center group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black font-mono text-blue-900">
                        {obj.number}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {obj.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                    {obj.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mb-3">
                    {obj.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {obj.desc}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Key Outcomes & Focus:
                  </div>
                  <ul className="space-y-2 mb-6">
                    {obj.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={obj.targetHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors group-hover:translate-x-0.5"
                  >
                    Explore details for {obj.badge} →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
