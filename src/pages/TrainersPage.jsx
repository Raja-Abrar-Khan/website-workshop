export default function TrainersPage() {
  const trainers = [
    {
      name: "Dr. A. K. Sharma",
      title: "Senior Principal Scientist & Workshop Convener",
      affiliation: "CYQT Lab & National Quantum Hub",
      expertise: "Quantum Communication & Discrete Variable QKD",
      module: "Lead Instructor (Days 1 & 2): BB84, Decoy-State QKD & QBER Analysis",
      initials: "AS",
      color: "bg-blue-600 text-white"
    },
    {
      name: "Prof. Priya Nair",
      title: "Professor of Quantum Engineering",
      affiliation: "Institute of Quantum Technologies",
      expertise: "Quantum Repeaters & Entanglement Swapping",
      module: "Lead Instructor (Day 3): Multi-hop Quantum Networks & NetSquid Routing",
      initials: "PN",
      color: "bg-indigo-600 text-white"
    },
    {
      name: "Dr. Rohan Deshmukh",
      title: "Chief Cryptographic Architect",
      affiliation: "National Cybersecurity & PQC Center",
      expertise: "Lattice Cryptography & NIST PQC Standards",
      module: "Lead Instructor (Day 4): ML-KEM (Kyber) & ML-DSA (Dilithium) in liboqs",
      initials: "RD",
      color: "bg-purple-600 text-white"
    },
    {
      name: "Dr. Meera Swaminathan",
      title: "Experimental Quantum Optics Lead",
      affiliation: "Photonic Systems & Quantum Optics Lab",
      expertise: "Single Photon Sources & Bell Inequality Tests",
      module: "Specialist Instructor (Day 2): Experimental Optical Bench Demonstration",
      initials: "MS",
      color: "bg-emerald-600 text-white"
    },
    {
      name: "Er. Vikram Patel",
      title: "Senior Scientific Officer & Simulation Architect",
      affiliation: "Centre for Quantum Computing & Networks",
      expertise: "Quantum Software Toolchains (NetSquid, SimulaQron, Qiskit)",
      module: "Laboratory Director: Overseeing Daily 2.5-Hour Hands-on Workstation Labs",
      initials: "VP",
      color: "bg-amber-600 text-white"
    },
    {
      name: "Dr. Kavita Iyer",
      title: "Research Director in Network Security",
      affiliation: "Enterprise Security & Quantum Migration Advisory",
      expertise: "Quantum-Safe TLS 1.3 & Hybrid Key Exchange",
      module: "Capstone Director (Day 5): Building Quantum-Resistant Web Tunnels with OpenSSL",
      initials: "KI",
      color: "bg-sky-600 text-white"
    }
  ]

  const organizingCommittee = [
    { name: "Dr. A. K. Sharma", role: "General Chair & Workshop Convener", duty: "Overall academic oversight and keynote coordination." },
    { name: "Prof. Priya Nair", role: "Technical Program Chair", duty: "Curating practical simulation notebooks and code review." },
    { name: "Er. Rajesh Verma", role: "Logistics & Hospitality Lead", duty: "Managing simulation hall, daily catering menus, and accommodations." },
    { name: "Dr. Sneha Roy", role: "Registrations & Communications", duty: "Screening application forms and helpline support." },
    { name: "Er. Vikram Patel", role: "Computing Infrastructure Lead", duty: "Workstation rigs, NetSquid environments, and lab intranet." },
    { name: "Ananya Mukherjee", role: "Student Volunteer & Media Lead", duty: "Event documentation, kit handovers, and lab assistance." },
  ]

  return (
    <div className="bg-white py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            FACULTY & MENTORS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Proposed Trainers & Research Personnel
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Learn directly from foremost researchers, system architects, and lab mentors actively pioneering India's national quantum communication and cryptographic infrastructure.
          </p>
        </div>

        {/* Trainers Grid in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {trainers.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${t.color} flex items-center justify-center font-black text-sm shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{t.name}</h3>
                    <div className="text-xs text-blue-600 font-semibold">{t.title}</div>
                    <div className="text-[11px] text-slate-400">{t.affiliation}</div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Expertise:
                    </span>
                    <span className="text-slate-700 font-medium">{t.expertise}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-bold uppercase text-blue-600 block mb-0.5">
                      Assigned Workshop Training:
                    </span>
                    <span className="text-slate-700 text-xs leading-relaxed block">
                      {t.module}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium flex items-center justify-between">
                <span>Personal Lab Mentorship</span>
                <span className="text-blue-600 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Organizing Committee Strip */}
        <div className="border-t border-slate-200 pt-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
              OPERATIONS
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Event Management & Organizing Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Handling venue logistics, workstation setup, catering menus, and participant documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizingCommittee.map((mem, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="font-bold text-slate-900 text-sm">{mem.name}</div>
                <div className="text-xs font-semibold text-blue-600 mb-1">{mem.role}</div>
                <div className="text-xs text-slate-500 leading-snug">{mem.duty}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
