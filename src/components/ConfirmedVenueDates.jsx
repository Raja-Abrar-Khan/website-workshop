import { CalendarIcon, MapPinIcon, ClockIcon, CheckCircleIcon, SparklesIcon } from './Icons'

export default function ConfirmedVenueDates() {
  const datesBreakdown = [
    { day: "Day 1", date: "Dec 7, 2026", time: "08:30 AM – 05:00 PM", topic: "Inauguration & Quantum Information Foundations" },
    { day: "Day 2", date: "Dec 8, 2026", time: "08:45 AM – 05:00 PM", topic: "QKD Protocols & BB84/E91 Simulation Lab" },
    { day: "Day 3", date: "Dec 9, 2026", time: "08:45 AM – 05:00 PM", topic: "Quantum Repeaters & NetSquid Routing Network" },
    { day: "Day 4", date: "Dec 10, 2026", time: "08:45 AM – 05:00 PM", topic: "NIST Post-Quantum Cryptography & liboqs Labs" },
    { day: "Day 5", date: "Dec 11, 2026", time: "08:45 AM – 04:45 PM", topic: "Capstone Lab, Presentations & Valedictory Ceremony" },
  ]

  const venueFeatures = [
    { title: "Quantum Simulation Hall B", desc: "Hall B, Ground Floor • 50 high-performance multi-core workstations with dual monitors." },
    { title: "Optical Testbed Wing", desc: "Optics Room 104 • Photon-pair generation demo setups and polarization analysis kits." },
    { title: "Seminar & Keynote Auditorium", desc: "Central Hall 2 • Acoustic audio-visual setup for morning expert lectures and group discussions." },
    { title: "Dining & Networking Lounge", desc: "Executive Dining Area • Daily buffet lunch, morning tea, and evening refreshments." },
  ]

  return (
    <section id="venue-dates" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <CalendarIcon className="w-4 h-4 text-emerald-600" />
            Confirmed Event Logistics
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Confirmed Dates & Venue Details
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Please review the confirmed 5-day schedule timeline, daily reporting times, and official campus venue coordinates.
          </p>
        </div>

        {/* 2-Column: Confirmed Dates on Left, Confirmed Venue on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Confirmed Dates Column */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-50/80 border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Dates: Dec 7 – 11, 2026</h3>
                  <span className="text-xs text-slate-500 font-medium">5 Full Days • Monday through Friday</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                LOCKED & CONFIRMED
              </span>
            </div>

            <div className="space-y-3">
              {datesBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between hover:border-blue-400 hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-700">{item.day}: {item.date}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">{item.topic}</div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 shrink-0 flex items-center gap-1 pl-2">
                    <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Morning Reporting: <strong>08:30 AM</strong></span>
              <span>Daily Adjournment: <strong>05:00 PM</strong></span>
            </div>
          </div>

          {/* Confirmed Venue Column */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-50/80 border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-100 text-indigo-700">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Venue: CYQT Lab Campus</h3>
                  <span className="text-xs text-slate-500 font-medium">Quantum Technology Research Wing</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                50 Workstations
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-6 shadow-xs">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                Official Campus Address
              </div>
              <div className="text-sm font-bold text-slate-900">
                Centre for Quantum Technologies (CYQT Lab), Department of Computer Science & Quantum Engineering
              </div>
              <div className="text-xs text-slate-500 mt-1">
                National Research Complex, Main Campus. Landmark: Near Advanced Computing Centre & Nano-Optics Block.
              </div>
            </div>

            <div className="space-y-3">
              {venueFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-800">{feat.title}</div>
                    <div className="text-[11px] sm:text-xs text-slate-600">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                High-speed Gigabit Research LAN
              </span>
              <span className="text-blue-700 font-bold">Accommodation Assistance Available</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
