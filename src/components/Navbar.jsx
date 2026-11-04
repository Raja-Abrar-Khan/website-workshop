import { useState } from 'react'
import { MenuIcon, CloseIcon, SparklesIcon } from './Icons'

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'dates-venue', label: 'Dates & Venue' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'brand', label: 'Brand & Perks' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNav = (id) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Minimalist Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 text-left cursor-pointer group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs group-hover:bg-blue-700 transition-colors">
              <SparklesIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-base font-extrabold text-slate-900 tracking-tight block">
                CYQT <span className="text-blue-600 font-mono text-xs font-bold">2026</span>
              </span>
            </div>
          </button>

          {/* Sleek Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = currentPage === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    active
                      ? 'text-blue-700 bg-blue-50/80 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Single Sleek Action */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => handleNav('contact')}
              className="px-4 py-2 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs hover:shadow-sm transition-all cursor-pointer"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-5 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                currentPage === link.id
                  ? 'text-blue-700 bg-blue-50 font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-center py-2.5 rounded-lg text-sm font-bold text-white bg-blue-600 shadow-xs cursor-pointer"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
