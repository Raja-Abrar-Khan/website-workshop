import { CalendarIcon, MapPinIcon, ClockIcon, CheckCircleIcon, SparklesIcon } from '../components/Icons'

export default function VenuePage({ onNavigate }) {
  const schedule = [
    { day: "Day 1", date: "Dec 7, 2026", time: "08:30 AM – 05:00 PM", topic: "Inauguration, Quantum Information Principles & State Tomography Lab" },
    { day: "Day 2", date: "Dec 8, 2026", time: "08:45 AM – 05:00 PM", topic: "Quantum Communication, QKD (BB84/E91) & Error Correction Lab" },
    { day: "Day 3", date: "Dec 9, 2026", time: "08:45 AM – 05:00 PM", topic: "Quantum Repeaters, Memory & NetSquid Multi-Hop Network Routing" },
    { day: "Day 4", date: "Dec 10, 2026", time: "08:45 AM – 05:00 PM", topic: "NIST Post-Quantum Cryptography (ML-KEM & ML-DSA) liboqs Labs" },
    { day: "Day 5", date: "Dec 11, 2026", time: "08:45 AM – 04:45 PM", topic: "Capstone Lab, Hybrid TLS 1.3 Tunnel, Hackathon & Valedictory" },
  ]

  const facilities = [
    { title: "Simulation Hall B (Ground Floor)", desc: "50 dedicated high-performance Linux/Windows rigs with dual monitors and pre-configured simulation stacks." },
    { title: "Optical Testbed Wing (Room 104)", desc: "Experimental demonstration bench with single-photon generation kits and polarization state analyzers." },
    { title: "Central Seminar Auditorium", desc: "Acoustic amphitheater for morning theoretical deep-dives and keynote lectures." },
    { title: "Executive Dining Pavilion", desc: "Dedicated dining zone for morning breakfast, networking buffet lunch, and evening refreshments." },
  ]

  return (
    <div className="bg-white py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            CONFIRMED LOGISTICS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Dates & Venue Details
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Confirmed operational schedule, laboratory infrastructure coordinates, and travel guidelines for all delegates.
          </p>
        </div>

        {/* 2 Columns: Dates and Venue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Confirmed Dates Timeline */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">December 7 – 11, 2026</h3>
                  <span className="text-xs text-slate-500">5 Full Days • Monday through Friday</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                LOCKED
              </span>
            </div>

            <div className="space-y-3">
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col justify-between gap-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-700">{item.day}: {item.date}</span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {item.time}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 leading-snug">{item.topic}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Daily Reporting: 08:30 AM</span>
              <span>Adjournment: 05:00 PM</span>
            </div>
          </div>

          {/* Confirmed Venue & Campus */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Campus Venue Details</h3>
                  <span className="text-xs text-slate-500">Quantum Technology Research Complex</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  OFFICIAL ADDRESS
                </span>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Centre for Quantum Technologies (CYQT Lab), Department of Computer Science & Quantum Engineering
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Near Advanced Computing Block & Nano-Optics Wing, Main Campus.
                </div>
              </div>

              <div className="space-y-2.5">
                {facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">{fac.title}</div>
                      <div className="text-[11px] text-slate-500">{fac.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs text-slate-700 flex items-start gap-2.5">
              <SparklesIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong>Accommodation & Travel Assistance:</strong> Guest house booking facilitation and campus transit details are provided upon registration confirmation.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Register for Workshop at this Venue →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
