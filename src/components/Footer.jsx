import { CalendarIcon, MapPinIcon, SparklesIcon } from './Icons'

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNav = (page) => {
    onNavigate(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-600 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                <SparklesIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-extrabold text-slate-900 text-sm tracking-tight">
                CYQT Quantum Workshop 2026
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-sm">
              A Hands-on Workshop on Quantum Communication, Quantum Network, and Post-Quantum Cryptography. Conducted by CYQT Lab under the National Quantum Mission.
            </p>
            <div className="text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>December 7 – 11, 2026 (5 Full Days)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPinIcon className="w-3.5 h-3.5 text-purple-600" />
                <span>Simulation Hall B, CYQT Lab Complex</span>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Pages
            </span>
            <ul className="space-y-1.5">
              <li><button onClick={() => handleNav('home')} className="hover:text-blue-600 cursor-pointer">Home Overview</button></li>
              <li><button onClick={() => handleNav('objectives')} className="hover:text-blue-600 cursor-pointer">Workshop Objectives</button></li>
              <li><button onClick={() => handleNav('dates-venue')} className="hover:text-blue-600 cursor-pointer">Confirmed Dates & Venue</button></li>
              <li><button onClick={() => handleNav('curriculum')} className="hover:text-blue-600 cursor-pointer">Curriculum & Schedule</button></li>
              <li><button onClick={() => handleNav('trainers')} className="hover:text-blue-600 cursor-pointer">Trainers & Faculty</button></li>
              <li><button onClick={() => handleNav('brand')} className="hover:text-blue-600 cursor-pointer">Brand, Perks & Photos</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-blue-600 cursor-pointer">Contact & Apply</button></li>
            </ul>
          </div>

          {/* Contact & Secretariat */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-900 block">
              Organizing Secretariat
            </span>
            <div className="space-y-1 text-slate-500">
              <div>Email: <a href="mailto:workshop.quantum@cyqtlab.org" className="text-blue-600 font-medium">workshop.quantum@cyqtlab.org</a></div>
              <div>Desk Phone: <span className="text-slate-800 font-medium">+91 98765 43210</span></div>
              <div>Operating Hours: 9:00 AM – 6:00 PM IST</div>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-3 text-slate-400 hover:text-slate-800 text-[11px] font-medium cursor-pointer block"
            >
              ↑ Back to top
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span>© 2026 CYQT Lab & National Quantum Mission. All rights reserved.</span>
          <span>5-Day National Practical Immersion</span>
        </div>
      </div>
    </footer>
  )
}
