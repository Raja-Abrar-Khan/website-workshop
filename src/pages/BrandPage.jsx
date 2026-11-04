import { CheckCircleIcon } from '../components/Icons'

export default function BrandPage() {
  const perks = [
    { title: "Authorized Delegate Kit & ID Badge", desc: "Custom lanyard, RFID access card for simulation hall, and official CYQT Quantum Workshop badge." },
    { title: "Hardbound Lab Manual & Git Repository", desc: "Complete 200+ page laboratory workbook with theoretical derivations, simulation scripts, and Jupyter notebooks." },
    { title: "Compute Station & Cloud Credits", desc: "Personalized workstation login with high-speed internet and access to our high-performance NetSquid server cluster." },
    { title: "Official Accredited Certificate", desc: "Jointly accredited certificate issued by CYQT Lab & National Quantum Hub with verifiable security credentials." },
    { title: "Executive 5-Day Dining Privilege", desc: "All-inclusive access to daily welcome breakfast, networking buffet lunch, evening high-tea, and the Gala Dinner." },
    { title: "1-Year Alumni Research Network", desc: "Access to private research Slack/Discord groups for ongoing collaborative research and paper co-authorship." },
  ]

  const photos = [
    { title: "Inaugural Group Photograph", day: "Day 1 (Dec 7) • 10:45 AM", desc: "Grand group photo with all delegates, keynote dignitaries, conveners, and faculty members in the central courtyard." },
    { title: "Hands-on Lab Simulation Sessions", day: "Days 1 to 5 • 02:00 PM – 04:30 PM", desc: "Live candid documentation of delegates building quantum networks, writing Python code, and analyzing QBER data." },
    { title: "Optical QKD Testbed Demonstration", day: "Day 2 (Dec 8) • 03:00 PM", desc: "Delegates observing physical photon polarization and single-photon detector hardware experiments." },
    { title: "Valedictory & Certificate Awarding", day: "Day 5 (Dec 11) • 03:45 PM", desc: "Individual stage presentation of certificates with keynote chairs, followed by celebratory farewell high-tea." },
  ]

  return (
    <div className="bg-white py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            PARTICIPANT EXPERIENCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Brand Identity & Perks
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Co-branding standards, delegate accreditation kit, and official event photography documentation.
          </p>
        </div>

        {/* Identity & Delegate Badge Card */}
        <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                ACCREDITATION
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                National Brand Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                Every participant receives an authorized credential badge affiliated with the National Quantum Mission (NQM). All presentation materials and completion certificates carry security watermarks.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">CYQT Lab</span>
                <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">National Quantum Mission (NQM)</span>
                <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">DST Govt. of India</span>
              </div>
            </div>

            {/* Sleek Pass Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-xs rounded-xl bg-white border border-slate-200 p-5 shadow-sm text-left">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 text-[10px] font-mono">
                  <span className="text-blue-700 font-bold uppercase">DELEGATE PASS</span>
                  <span className="text-slate-400">DEC 7–11, 2026</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                    WS
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">Participant Name</div>
                    <div className="text-[11px] text-blue-600 font-medium">Research Scholar / Faculty</div>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[10px] text-slate-600 space-y-1">
                  <div><strong>Access:</strong> All Simulation Labs & Meals</div>
                  <div><strong>Workstation:</strong> WS-2026-Q04</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Participant Perks */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-slate-900 mb-5">
            What Every Participant Receives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((p, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 mb-1">{p.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Documentation Schedule */}
        <div className="border-t border-slate-200 pt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Event Photography & Moments
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Official media coverage scheduled throughout the 5 days.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((ph, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-600 block mb-1">{ph.day}</span>
                  <div className="text-xs font-bold text-slate-900 mb-1">{ph.title}</div>
                  <div className="text-xs text-slate-500 leading-snug">{ph.desc}</div>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                  📸 High-Res Download
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
