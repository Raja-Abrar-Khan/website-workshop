import { UsersIcon, MailIcon, PhoneIcon, CheckCircleIcon } from './Icons'

export default function EventManagement() {
  const teamMembers = [
    {
      name: "Dr. A. K. Sharma",
      role: "General Chair & Workshop Convener",
      division: "Academic Oversight & Keynotes",
      handling: "Overall workshop coordination, patron engagement, keynote speaker curation, and academic certification sign-off.",
      email: "chair.quantum@cyqtlab.org",
      phone: "+91 98765 43210",
      avatarBg: "from-blue-600 to-indigo-700",
      initials: "AS"
    },
    {
      name: "Prof. Priya Nair",
      role: "Technical Program Chair",
      division: "Hands-on Lab & Curriculum",
      handling: "Curating practical simulation notebooks, QKD software benchmarks, NetSquid lab sessions, and participant code reviews.",
      email: "technical@cyqtlab.org",
      phone: "+91 98765 43211",
      avatarBg: "from-indigo-600 to-purple-700",
      initials: "PN"
    },
    {
      name: "Er. Rajesh Verma",
      role: "Logistics & Hospitality Lead",
      division: "Venue, Dining & Accommodations",
      handling: "Managing the 2,500 sq.ft. simulation hall, daily buffet catering menus, accommodation coordination, and guest transport.",
      email: "logistics@cyqtlab.org",
      phone: "+91 98765 43212",
      avatarBg: "from-emerald-600 to-teal-700",
      initials: "RV"
    },
    {
      name: "Dr. Sneha Roy",
      role: "Registrations & Communications",
      division: "Inquiries & Participant Support",
      handling: "Screening application forms, issuing acceptance letters, communication material distribution, and helpline support.",
      email: "registrations@cyqtlab.org",
      phone: "+91 98765 43213",
      avatarBg: "from-pink-600 to-rose-700",
      initials: "SR"
    },
    {
      name: "Er. Vikram Patel",
      role: "IT & Computing Infrastructure Lead",
      division: "Workstations & Network Labs",
      handling: "Configuring 50+ high-performance Linux rigs, Qiskit/OpenSSL environments, lab intranet security, and hardware testbeds.",
      email: "sysadmin@cyqtlab.org",
      phone: "+91 98765 43214",
      avatarBg: "from-amber-500 to-orange-600",
      initials: "VP"
    },
    {
      name: "Ananya Mukherjee",
      role: "Media & Student Volunteer Lead",
      division: "Event Coverage & On-ground Help",
      handling: "Photography, event video recordings, participant kit handovers, daily attendance verification, and on-ground lab assistance.",
      email: "volunteers@cyqtlab.org",
      phone: "+91 98765 43215",
      avatarBg: "from-purple-600 to-indigo-700",
      initials: "AM"
    }
  ]

  return (
    <section id="team" className="py-20 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            <UsersIcon className="w-4 h-4 text-blue-600" />
            Organizing Committee
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Event Management & Organizing Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Meet the team managing every dimension of the December 7–11 workshop — from hands-on lab curation to catering and participant support.
          </p>
        </div>

        {/* Tip on updating photos and details */}
        <div className="mb-10 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-600">
          <span>
            📸 <strong className="text-slate-900">Photo & Details Customization:</strong> You can replace these avatar badges with real photos from your assets folder anytime.
          </span>
          <span className="hidden sm:inline-block font-mono text-blue-700 font-semibold">src/components/EventManagement.jsx</span>
        </div>

        {/* Team Grid in Pure White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
            >
              <div>
                {/* Photo / Avatar Placeholder */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.avatarBg} flex items-center justify-center text-white text-xl font-black shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-blue-700">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {member.division}
                    </div>
                  </div>
                </div>

                {/* What they are handling */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-5">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircleIcon className="w-3.5 h-3.5 text-blue-600" />
                    Responsibility / Handling:
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {member.handling}
                  </p>
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1.5 hover:text-blue-700 transition-colors font-medium"
                  title={member.email}
                >
                  <MailIcon className="w-4 h-4 text-slate-400" />
                  <span className="truncate max-w-[130px]">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-1 hover:text-blue-700 transition-colors font-medium"
                >
                  <PhoneIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
