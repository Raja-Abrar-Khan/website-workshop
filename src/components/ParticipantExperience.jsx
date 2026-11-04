import { AwardIcon, SparklesIcon, CheckCircleIcon, UsersIcon } from './Icons'

export default function ParticipantExperience() {
  const kitItems = [
    {
      title: "Authorized Delegate Kit & ID Badge",
      desc: "Custom lanyard, RFID access card for simulation hall, and official CYQT Quantum Workshop badge.",
    },
    {
      title: "Hardbound Lab Manual & Code Repository",
      desc: "Complete 200+ page laboratory workbook with theoretical derivations, simulation scripts, and Jupyter notebooks.",
    },
    {
      title: "Compute Station & Cloud Credits",
      desc: "Personalized workstation login with high-speed internet and access to our high-performance NetSquid server cluster.",
    },
    {
      title: "Official Accredited Certificate",
      desc: "Jointly accredited certificate issued by CYQT Lab & National Quantum Hub with verifiable security credentials.",
    },
    {
      title: "Executive 5-Day Dining Privilege",
      desc: "All-inclusive access to daily welcome breakfast, networking buffet lunch, evening high-tea, and the Gala Dinner.",
    },
    {
      title: "1-Year Alumni Research Network",
      desc: "Access to private research Slack/Discord groups for ongoing collaborative research and paper co-authorship.",
    },
  ]

  const photoMoments = [
    {
      title: "Inaugural Group Photograph",
      day: "Day 1 (Dec 7) • 10:45 AM",
      desc: "Grand group photo with all delegates, keynote dignitaries, conveners, and faculty members in the central courtyard.",
      badge: "Official Record",
      accent: "border-blue-200 bg-blue-50/40",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Hands-on Lab Simulation Sessions",
      day: "Days 1 to 5 • 02:00 PM – 04:30 PM",
      desc: "Live candid documentation of delegates building quantum networks, writing Python code, and analyzing QBER data.",
      badge: "Practical Work",
      accent: "border-indigo-200 bg-indigo-50/40",
      badgeColor: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "Optical QKD Testbed Demonstration",
      day: "Day 2 (Dec 8) • 03:00 PM",
      desc: "Delegates observing physical photon polarization and single-photon detector hardware experiments.",
      badge: "Hardware Demo",
      accent: "border-purple-200 bg-purple-50/40",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Valedictory & Certificate Awarding",
      day: "Day 5 (Dec 11) • 03:45 PM",
      desc: "Individual stage presentation of certificates with keynote chairs, followed by celebratory farewell high-tea.",
      badge: "Graduation Moment",
      accent: "border-emerald-200 bg-emerald-50/40",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-50/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200 mb-3">
            <SparklesIcon className="w-4 h-4 text-purple-600" />
            During Event Workshop Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Workshop Branding, Participant Perks & Event Moments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A premium, professional experience designed to maximize participant learning, institutional identity, networking, and memorable documentation.
          </p>
        </div>

        {/* Section A: Institutional Co-Branding Identity Card (Whitish & Clean) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                Official Workshop Identity & Badging
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-4">
                National Brand Standards & Delegate Identity
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Every delegate wears the official CYQT Workshop Credential Badge affiliated with the <strong>National Quantum Mission (NQM)</strong>. All presentation materials, lab code, and certificates carry verified security watermarks and accreditation identifiers.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs font-bold text-slate-800 shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-black">
                    Q
                  </div>
                  CYQT Lab Brand
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs font-bold text-slate-800 shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-indigo-700 flex items-center justify-center text-white text-[10px] font-black">
                    NQM
                  </div>
                  National Quantum Mission
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5 text-xs font-bold text-slate-800 shadow-2xs">
                  <div className="w-6 h-6 rounded-md bg-emerald-600 flex items-center justify-center text-white text-[10px] font-black">
                    DST
                  </div>
                  Govt. of India Initiative
                </div>
              </div>
            </div>

            {/* Visual Badge Card Preview (Crisp Official Identity Card) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-white border-2 border-blue-500/40 p-6 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-extrabold">
                    OFFICIAL DELEGATE PASS
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    DEC 7–11, 2026
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                    <UsersIcon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900">Participant Name</div>
                    <div className="text-xs text-blue-700 font-semibold">Registered Research Delegate</div>
                    <div className="text-[10px] text-slate-400 font-mono">Workstation ID: WS-2026-Q04</div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200 text-[11px] text-slate-700 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Workshop:</span>
                    <span className="font-bold text-slate-900">Quantum Comms & PQC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Venue:</span>
                    <span className="text-slate-900 font-medium">CYQT Simulation Hall B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Access:</span>
                    <span className="text-emerald-700 font-bold">All Labs & Meals Included</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section B: Participant Kit & Amenities in Pure White Cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AwardIcon className="w-5 h-5 text-blue-600" />
            What Participants Receive During the Workshop
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3.5">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section C: Event Moments & Photo Documentation */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-blue-600" />
                Scheduled Event Photography & Documentation Moments
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Official media team documentation throughout the workshop. All high-resolution photos will be shared with participants.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Live Photo Desk
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoMoments.map((moment, idx) => (
              <div
                key={idx}
                className={`rounded-2xl bg-white border p-6 flex flex-col justify-between ${moment.accent} hover:shadow-lg transition-all`}
              >
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${moment.badgeColor} border border-slate-200`}>
                    {moment.badge}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-3 mb-1">
                    {moment.title}
                  </h4>
                  <div className="text-xs font-mono font-semibold text-blue-700 mb-3">
                    {moment.day}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {moment.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 font-medium">
                  📸 High-Res Download Access
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
