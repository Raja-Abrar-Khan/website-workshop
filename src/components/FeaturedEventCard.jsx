import { CalendarIcon, ClockIcon, MapPinIcon, AwardIcon, SparklesIcon, DownloadIcon } from './Icons'

export default function FeaturedEventCard() {
  return (
    <section className="py-16 bg-slate-100/60 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200 mb-2">
              <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
              Flagship Winter Program
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Upcoming Featured Event
            </h2>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-700 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
            Cohort 2026 • Limited 50 Workstations
          </span>
        </div>

        {/* Featured Card matching reference layout (Image 5) in a crisp white wrapper */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Official Poster / Flyer Canvas */}
            <div className="lg:col-span-7 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-6 sm:p-9 relative border-b lg:border-b-0 lg:border-r border-slate-200 text-white">
              
              {/* Poster Header with Institutional Logos */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400 flex items-center justify-center font-black text-slate-950 text-sm shadow-md">
                    Q
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-white tracking-wider uppercase">CYQT LAB</div>
                    <div className="text-[9px] text-cyan-300 font-mono">National Quantum Research</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                    In Collaboration With
                  </div>
                  <div className="text-xs font-black text-cyan-300 tracking-tight">
                    NATIONAL QUANTUM MISSION (NQM)
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-xs shadow-md">
                    DST
                  </div>
                </div>
              </div>

              {/* Poster Title Badge */}
              <div className="text-center my-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md">
                  ★ A 5-Day National Practical Workshop ★
                </span>
                
                <h3 className="mt-4 text-xl sm:text-2xl font-black text-white leading-tight">
                  Quantum Communication, Quantum Network, and Post-Quantum Cryptography
                </h3>
                
                <p className="mt-2 text-xs text-cyan-300 font-semibold">
                  National Hub for Quantum Technologies & Advanced Network Simulation
                </p>
              </div>

              {/* Poster Coordinator & Host Badges */}
              <div className="grid grid-cols-2 gap-3 my-6 text-left">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="text-[10px] uppercase font-bold text-slate-300">Organized by</div>
                  <div className="text-xs font-bold text-white mt-0.5">CYQT Lab & Dept of CS/Quantum Tech</div>
                  <div className="text-[10px] text-cyan-300">Quantum Network Division</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="text-[10px] uppercase font-bold text-slate-300">Program Coordinators</div>
                  <div className="text-xs font-bold text-white mt-0.5">Dr. A. K. Sharma & Prof. Priya Nair</div>
                  <div className="text-[10px] text-indigo-300">Conveners & Lab Leads</div>
                </div>
              </div>

              {/* Poster Quick Info Badges (Date, Time, Venue) */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-cyan-300">
                    <CalendarIcon className="w-4 h-4" />
                    Dec 7–11
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">2026 (5 Days)</div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-950/70 border border-indigo-500/40 text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-indigo-300">
                    <ClockIcon className="w-4 h-4" />
                    9 AM – 5 PM
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">Daily Schedule</div>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/40 text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-purple-300">
                    <MapPinIcon className="w-4 h-4" />
                    CYQT Lab
                  </div>
                  <div className="text-[10px] text-slate-300 mt-0.5">Simulation Hall B</div>
                </div>
              </div>

            </div>

            {/* Right Column: Event Narrative & Call to Action (Image 5 style on white) */}
            <div className="lg:col-span-5 p-6 sm:p-9 flex flex-col justify-between bg-white text-slate-800">
              <div>
                <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-2">
                  Official Workshop Notice
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-4">
                  Emerging Frontiers in Quantum Networks & Post-Quantum Security
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Explore the latest advancements in quantum communication, QKD hardware testbeds, and NIST PQC migration. Join this premier 5-day national technical program to enhance your theoretical mastery and practical hands-on simulation skills.
                </p>

                <div className="space-y-3.5 border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <AwardIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-medium">Government/Institutional Authorized Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <SparklesIcon className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-medium">Dedicated Workstations with NetSquid, QuISP & liboqs</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <CalendarIcon className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="font-medium">Confirmed Dates: <strong className="text-slate-900">December 7 to 11, 2026</strong></span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="#communication"
                  className="flex-1 py-3.5 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-center text-sm shadow-md shadow-blue-600/20 transition-all"
                >
                  Register for This Event →
                </a>
                <button
                  onClick={() => alert("Downloading Official Workshop Circular & Poster...")}
                  className="py-3.5 px-4 rounded-xl font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 text-center text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <DownloadIcon className="w-4 h-4 text-slate-600" />
                  Save Poster
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
