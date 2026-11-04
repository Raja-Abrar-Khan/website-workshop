import { UsersIcon, SparklesIcon, CheckCircleIcon } from './Icons'

export default function TrainersAndResearchers() {
  const trainers = [
    {
      name: "Dr. A. K. Sharma",
      title: "Senior Principal Scientist & Convener",
      affiliation: "CYQT Lab & National Quantum Hub",
      expertise: "Quantum Communication & Discrete Variable QKD Protocols",
      trainingTopics: "BB84, Decoy-State Methods & Quantum Bit Error Rate (QBER) Calculations",
      role: "Lead Trainer (Days 1 & 2)",
      avatarBg: "from-blue-600 to-indigo-700",
      initials: "AS"
    },
    {
      name: "Prof. Priya Nair",
      title: "Professor of Quantum Engineering",
      affiliation: "Institute of Quantum Technologies",
      expertise: "Quantum Repeaters, Entanglement Swapping & NetSquid Routing",
      trainingTopics: "Multi-node Quantum Networks, Quantum Memory Modeling & Discrete-Event Simulation",
      role: "Lead Trainer (Day 3)",
      avatarBg: "from-indigo-600 to-purple-700",
      initials: "PN"
    },
    {
      name: "Dr. Rohan Deshmukh",
      title: "Chief Cryptographic Architect",
      affiliation: "National Cybersecurity & PQC Center",
      expertise: "Lattice-Based Cryptography & NIST FIPS Standards",
      trainingTopics: "ML-KEM (Kyber), ML-DSA (Dilithium) & Classical Shor Threat Analysis",
      role: "Lead Trainer (Day 4)",
      avatarBg: "from-purple-600 to-pink-600",
      initials: "RD"
    },
    {
      name: "Dr. Meera Swaminathan",
      title: "Experimental Quantum Optics Lead",
      affiliation: "Photonic Systems & Quantum Optics Lab",
      expertise: "Single Photon Sources, Bell Test Verifications & Free-Space QKD",
      trainingTopics: "Hands-on Optical Testbed Demonstration & Polarization Measurement",
      role: "Research Specialist (Day 2)",
      avatarBg: "from-emerald-600 to-teal-700",
      initials: "MS"
    },
    {
      name: "Er. Vikram Patel",
      title: "Senior Scientific Officer & Simulation Architect",
      affiliation: "Centre for Quantum Computing & Networks",
      expertise: "Quantum Software Toolchains (NetSquid, SimulaQron, Qiskit)",
      trainingTopics: "Directing 2.5-hour Daily Workstation Labs & Capstone Hackathon Mentorship",
      role: "Lab Lead & Instructor (All Days)",
      avatarBg: "from-amber-500 to-orange-600",
      initials: "VP"
    },
    {
      name: "Dr. Kavita Iyer",
      title: "Research Director in Network Security",
      affiliation: "Enterprise Security & Quantum Migration Advisory",
      expertise: "Quantum-Safe TLS 1.3, Hybrid Key Exchange & liboqs",
      trainingTopics: "Capstone Lab: Building Quantum-Safe Web Tunnels with OpenSSL 3.x",
      role: "Research Specialist (Day 5)",
      avatarBg: "from-cyan-600 to-blue-700",
      initials: "KI"
    }
  ]

  return (
    <section id="trainers" className="py-20 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 mb-3">
            <UsersIcon className="w-4 h-4 text-indigo-600" />
            Distinguished Faculty & Scientists
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Proposed Trainers & Research Personnel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Learn directly from foremost researchers, system architects, and lab mentors actively pioneering India's national quantum communication and cryptographic infrastructure.
          </p>
        </div>

        {/* Trainers Grid in Pure White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
            >
              <div>
                {/* Trainer Avatar & Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${trainer.avatarBg} flex items-center justify-center text-white text-lg font-black shadow-md group-hover:scale-105 transition-transform shrink-0`}>
                    {trainer.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {trainer.name}
                    </h3>
                    <div className="text-xs text-blue-700 font-semibold">
                      {trainer.title}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate max-w-[200px]">
                      {trainer.affiliation}
                    </div>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="mb-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5 w-fit">
                    <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                    {trainer.role}
                  </span>
                </div>

                {/* Expertise & Topics */}
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-500 font-bold block uppercase tracking-wider text-[10px]">
                      Research Specialization:
                    </span>
                    <span className="text-slate-800 font-medium">{trainer.expertise}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-blue-800 font-bold block text-[11px] mb-1 flex items-center gap-1">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                      Assigned Workshop Training:
                    </span>
                    <span className="text-slate-700 leading-relaxed block text-[11px]">
                      {trainer.trainingTopics}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between font-medium">
                <span>Personal Mentorship: 1:1 Labs</span>
                <span className="text-blue-700 font-bold">Verified Faculty</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
