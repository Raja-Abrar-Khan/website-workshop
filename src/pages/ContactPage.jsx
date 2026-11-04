import { useState } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon, DownloadIcon, FileTextIcon, CheckCircleIcon } from '../components/Icons'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    category: 'Faculty',
    note: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const downloads = [
    { title: "Official Workshop Brochure (PDF)", desc: "Complete syllabus, prerequisites, schedule, and speaker profiles." },
    { title: "Circular Poster & Notice Flyer", desc: "Approved notice for university department display and notice boards." },
    { title: "Institutional On-Duty (OD) Letter", desc: "Formal leave/sponsorship requisition template for Principal/Dean." },
    { title: "Campus & Travel Advisory", desc: "Transit routes, airport connections, and guest house reservations." },
  ]

  return (
    <div className="bg-white py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            COMMUNICATION & REGISTRATION
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Register or Inquire
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Apply for one of the 50 dedicated workstations, download official circulars, or connect directly with the organizing desk.
          </p>
        </div>

        {/* 2 Columns: Form on Left/Right, Contacts & Downloads */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Workshop Application / Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below. The organizing secretariat will respond within 4 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircleIcon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Application Received</h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name || 'Delegate'}</strong>. A confirmation has been logged for <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 cursor-pointer"
                >
                  Submit Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Aryan Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="aryan.mehta@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Affiliation / College *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. National Institute of Tech"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
                    >
                      <option value="Faculty">Academic Faculty / Professor</option>
                      <option value="PhD">PhD / Postdoc Scholar</option>
                      <option value="PG">Master's / Postgraduate Student</option>
                      <option value="Industry">Industry / Defense Specialist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message or Query</label>
                  <textarea
                    rows={3}
                    placeholder="Inquire about workstation requirements, accommodation, or institutional sponsorship..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-xs shadow-xs cursor-pointer"
                >
                  Submit Application →
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contacts & Downloads */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Contacts Box */}
            <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60">
              <h4 className="text-sm font-bold text-slate-900 mb-4">
                Ways to Communicate with Team
              </h4>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <MailIcon className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Official Email</span>
                    <a href="mailto:workshop.quantum@cyqtlab.org" className="text-slate-900 font-semibold hover:text-blue-600">
                      workshop.quantum@cyqtlab.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneIcon className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Helpline & WhatsApp Desk</span>
                    <span className="text-slate-900 font-semibold">+91 98765 43210</span>
                    <div className="text-[11px] text-slate-500">Mon – Sat, 9 AM – 6 PM</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Physical Venue</span>
                    <span className="text-slate-900 font-semibold">CYQT Lab, Hall B</span>
                    <div className="text-[11px] text-slate-500">Quantum Research Wing, Main Campus</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Downloads Box */}
            <div className="rounded-2xl border border-slate-200 p-6 bg-white">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileTextIcon className="w-4 h-4 text-blue-600" />
                Official Downloads
              </h4>

              <div className="space-y-2">
                {downloads.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => alert(`Starting download: ${item.title}`)}
                    className="w-full text-left p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700">{item.title}</div>
                      <div className="text-[11px] text-slate-400">{item.desc}</div>
                    </div>
                    <DownloadIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

