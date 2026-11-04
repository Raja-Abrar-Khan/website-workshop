import { useState } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon, DownloadIcon, FileTextIcon, CheckCircleIcon, SparklesIcon } from './Icons'

export default function CommunicationMaterial() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    category: 'Faculty',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const materials = [
    {
      title: "Official Workshop Brochure",
      type: "PDF Document (4.2 MB)",
      desc: "Complete program syllabus, lecture objectives, speaker profiles, fee details, and registration rules.",
      actionText: "Download Brochure",
      badge: "Full Guide"
    },
    {
      title: "Notice Board Poster & Circular",
      type: "High-Res Poster (PNG/PDF)",
      desc: "Approved flyer for display across university notice boards, departments, and research centers.",
      actionText: "Download Flyer",
      badge: "Circular"
    },
    {
      title: "Institutional Permission / OD Letter",
      type: "Word / PDF Template",
      desc: "Official requisition template to request On-Duty (OD) sponsorship or leave from your Dean/Principal.",
      actionText: "Get OD Template",
      badge: "Formal Letter"
    },
    {
      title: "Travel & Accommodation Advisory",
      type: "PDF Guide (1.8 MB)",
      desc: "Nearest airports, railway stations, recommended campus guest house bookings, and local transit info.",
      actionText: "Download Travel Info",
      badge: "Travel Advisory"
    }
  ]

  return (
    <section id="communication" className="py-20 bg-slate-50/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <MailIcon className="w-4 h-4 text-emerald-600" />
            Communication & Official Material
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            All Communication Material & Contact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Access official circulars, download workshop brochures, or reach out directly to the organizing committee for queries and registration assistance.
          </p>
        </div>

        {/* Section 1: Official Communication Material Downloads */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileTextIcon className="w-5 h-5 text-blue-600" />
              Download Official Workshop Materials
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline font-medium">Approved for institutional circulation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <DownloadIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <div className="text-xs font-mono font-semibold text-blue-700 mb-2">
                    {item.type}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => alert(`Starting download for: ${item.title}`)}
                  className="mt-6 w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-200 hover:border-blue-600 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <DownloadIcon className="w-4 h-4" />
                  {item.actionText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Direct Contact Channels & Quick Query Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Channels Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Ways to Communicate with the Team
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Our organizing desk is active daily to assist participants with eligibility, lab requirements, and travel logistics.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email Desks</div>
                    <a href="mailto:workshop.quantum@cyqtlab.org" className="text-sm font-bold text-slate-900 hover:text-blue-700 block">
                      workshop.quantum@cyqtlab.org
                    </a>
                    <a href="mailto:support@cyqtlab.org" className="text-xs text-slate-500 hover:text-blue-700">
                      support@cyqtlab.org (Technical)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Helpline & WhatsApp Support</div>
                    <div className="text-sm font-bold text-slate-900">+91 98765 43210 / +91 98765 43211</div>
                    <div className="text-xs text-slate-500 font-medium">Mon – Sat, 9:00 AM – 6:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Physical Lab Venue</div>
                    <div className="text-sm font-bold text-slate-900">CYQT Lab, Quantum Research Wing</div>
                    <div className="text-xs text-slate-500">Department of Computer Science & Quantum Technologies</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                  ⚡ <strong>Fast Track Inquiries:</strong> Include your affiliation and phone number for immediate response within 4 hours.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Query / Expression of Interest Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send an Inquiry or Register Your Interest
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 font-normal">
              Have questions regarding seat allotment, syllabus prerequisites, or group nominations? Fill in this form.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Inquiry Received Successfully!</h4>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you, <strong>{formData.name || 'Participant'}</strong>. The organizing committee will contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-all shadow-sm"
                >
                  Send another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Aryan Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aryan.mehta@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Affiliation / College / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. National Institute of Tech"
                      value={formData.affiliation}
                      onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Participant Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    >
                      <option value="Faculty">Academic Faculty / Professor</option>
                      <option value="PhD">PhD / Postdoc Scholar</option>
                      <option value="PG">Master's / Postgraduate Student</option>
                      <option value="Industry">Industry / Defense / R&D Specialist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Query or Registration Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about workstation requirements, objective syllabus, accommodation, or institutional billing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <SparklesIcon className="w-4 h-4 text-white" />
                  Submit Inquiry to Organizing Desk
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
