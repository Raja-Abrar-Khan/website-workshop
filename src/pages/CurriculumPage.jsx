import { useState } from 'react'
import { CpuIcon, NetworkIcon, ShieldCheckIcon, AwardIcon, CheckCircleIcon } from '../components/Icons'

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState('modules') // 'modules', 'timeline', 'menu'
  const [selectedModule, setSelectedModule] = useState(0)

  const modules = [
    {
      title: "Module 1: Fundamentals of Quantum Information",
      day: "Day 1 • Mon, Dec 7",
      icon: CpuIcon,
      overview: "Develop intuitive mathematical and physical understanding of qubits, state vectors, superposition, and quantum optical channels.",
      topics: [
        "Qubits, Superposition & Dirac bra-ket notation",
        "Single-qubit quantum gates (Pauli-X, Y, Z, Hadamard, Phase)",
        "Two-qubit gates & Entanglement (Bell states, GHZ states)",
        "No-Cloning Theorem & its implications for cybersecurity",
        "Photonic polarization states & single photon detection basics"
      ],
      lab: "Jupyter Lab: Simulating state tomography and quantum logic gates using Python & Qiskit."
    },
    {
      title: "Module 2: Quantum Key Distribution (QKD) Protocols",
      day: "Day 2 • Tue, Dec 8",
      icon: NetworkIcon,
      overview: "Discrete-variable and continuous-variable QKD protocols with real-world fiber attenuation and error budget calculations.",
      topics: [
        "The Bennett-Brassard 1984 (BB84) protocol end-to-end",
        "Decoy-state method to mitigate Photon Number Splitting (PNS) attacks",
        "Entanglement-based QKD: Ekert 91 (E91) protocol & Bell inequality test",
        "Quantum Bit Error Rate (QBER) estimation and threshold limits",
        "Classical post-processing: Sifting, Error Correction (Cascade/LDPC) & Privacy Amplification"
      ],
      lab: "Live simulation: Building a full BB84 transmission loop, injecting eavesdropping noise (Eve), and calculating secret key rate."
    },
    {
      title: "Module 3: Quantum Repeaters & Network Architecture",
      day: "Day 3 • Wed, Dec 9",
      icon: NetworkIcon,
      overview: "Overcoming fiber attenuation through quantum memory nodes, entanglement swapping, and multi-hop routing.",
      topics: [
        "Optical fiber attenuation and why classical amplification destroys quantum states",
        "Quantum Repeaters: Principles, quantum memory, and Bell-state measurements",
        "Entanglement Swapping: Linking distant nodes without direct transmission",
        "Entanglement Purification & Distillation protocols",
        "Quantum Network Stack: Physical, Link, Network, and Transport layer abstractions"
      ],
      lab: "NetSquid simulation: Creating a multi-hop quantum repeater chain and benchmarking end-to-end entanglement generation fidelity."
    },
    {
      title: "Module 4: Post-Quantum Cryptography (PQC)",
      day: "Day 4 • Thu, Dec 10",
      icon: ShieldCheckIcon,
      overview: "Mastering modern NIST-standardized quantum-resistant cryptographic algorithms to replace vulnerable RSA and ECC.",
      topics: [
        "The Quantum Threat: Shor's algorithm & Grover's search speedup",
        "Lattice-based cryptography: Learning With Errors (LWE) & Module-LWE",
        "NIST FIPS 203: ML-KEM (formerly CRYSTALS-Kyber) for Key Encapsulation",
        "NIST FIPS 204: ML-DSA (CRYSTALS-Dilithium) & FIPS 205: SLH-DSA (SPHINCS+)",
        "Key sizes, ciphertext overhead, performance tradeoffs vs. classical primitives"
      ],
      lab: "liboqs & Python workshop: Generating ML-KEM keypairs, encapsulating shared secrets, and executing quantum-safe signatures."
    },
    {
      title: "Module 5: Quantum-Safe Migration & Capstone Lab",
      day: "Day 5 • Fri, Dec 11",
      icon: AwardIcon,
      overview: "Practical hands-on implementation of hybrid cryptographic tunnels and developing realistic enterprise migration roadmaps.",
      topics: [
        "Hybrid key exchange: Combining Classical ECDH with ML-KEM in TLS 1.3",
        "Quantum-Safe PKI: Certificates, X.509 extensions, and root of trust",
        "QKD integration with classical IPsec/MACsec encryptors",
        "Evaluating real-world migration challenges and regulatory mandates",
        "Capstone Group Challenge: Designing an end-to-end quantum-secured enterprise network"
      ],
      lab: "Capstone Project: Deploying an OpenSSL 3.x PQC-enabled web server and establishing a quantum-resistant HTTPS connection."
    }
  ]

  const dailyAgenda = [
    { time: "08:30 AM – 09:30 AM", title: "Morning Reporting, Welcome Breakfast & Check-in", type: "Meal" },
    { time: "09:30 AM – 11:00 AM", title: "Morning Theoretical Lecture & Mathematical Deep-dive", type: "Lecture" },
    { time: "11:00 AM – 11:30 AM", title: "Mid-Morning Tea, Coffee & Discussion Break", type: "Break" },
    { time: "11:30 AM – 01:00 PM", title: "Architectural Analysis, Protocols & Case Studies", type: "Lecture" },
    { time: "01:00 PM – 02:00 PM", title: "Executive Networking Buffet Lunch", type: "Meal" },
    { time: "02:00 PM – 04:30 PM", title: "Hands-on Lab Simulation on Individual Dedicated Workstations", type: "Lab" },
    { time: "04:30 PM – 05:00 PM", title: "Evening High-Tea, Daily Code Review & Wrap-up", type: "Break" },
  ]

  const menu = [
    { day: "Day 1 (Dec 7)", breakfast: "Steaming Idlis, Medu Vada, Sambar, Chutneys, Fresh Fruits, Tea & Filter Coffee", lunch: "Paneer Butter Masala, Dal Makhani, Jeera Pulao, Butter Naan, Garden Salad, Gulab Jamun" },
    { day: "Day 2 (Dec 8)", breakfast: "Poha with Roasted Peanuts, Veg Upma, Banana, Sprouts/Eggs, Tea & Coffee", lunch: "Kadai Paneer, Yellow Dal Tadka, Veg Biryani, Raita, Tandoori Roti, Papad, Rasgulla" },
    { day: "Day 3 (Dec 9)", breakfast: "Masala Dosa, Uttapam with Sambar, Papaya Slices, Filter Coffee & Tea", lunch: "Methi Malai Matar, Chana Masala, Kashmiri Pulao, Garlic Naan, Cucumber Raita, Gajar Halwa" },
    { day: "Day 4 (Dec 10)", breakfast: "Aloo Paratha with Curd & Pickle, Fresh Fruits, Boiled Eggs, Tea & Coffee", lunch: "Shahi Paneer, Dal Bukhara, Peas Pulao, Laccha Paratha, Fresh Green Salad, Ice Cream", gala: "★ Evening Gala Dinner: Live Pasta Counter, Mughlai Curries, Tandoori Breads & Mocktails" },
    { day: "Day 5 (Dec 11)", breakfast: "Pongal with Ghee & Chutney, Poori with Potato Masala, Fresh Juice, Tea & Coffee", lunch: "Grand Farewell Feast: Dum Biryani (Veg/Non-Veg), Paneer Tikka Masala, Dal Maharani, Rasmalai" },
  ]

  return (
    <div className="bg-white py-14 sm:py-18">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
            ACADEMIC PROGRAM
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Curriculum & Schedule
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            5-day progression linking theoretical foundations to 2.5-hour afternoon hands-on simulation labs.
          </p>
        </div>

        {/* Sleek Sub-Tabs (No clutter) */}
        <div className="flex border-b border-slate-200 mb-8 gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('modules')}
            className={`pb-3 cursor-pointer transition-colors ${
              activeTab === 'modules'
                ? 'text-blue-600 border-b-2 border-blue-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            5 Training Modules
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`pb-3 cursor-pointer transition-colors ${
              activeTab === 'timeline'
                ? 'text-blue-600 border-b-2 border-blue-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Daily Timetable
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`pb-3 cursor-pointer transition-colors ${
              activeTab === 'menu'
                ? 'text-blue-600 border-b-2 border-blue-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Hospitality & Menu
          </button>
        </div>

        {/* Tab 1: Modules */}
        {activeTab === 'modules' && (
          <div>
            {/* Minimal Day selector */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
              {modules.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedModule(idx)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedModule === idx
                      ? 'bg-blue-50/80 border-blue-300 text-blue-800 font-bold'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold uppercase text-blue-600">Day 0{idx + 1}</div>
                  <div className="text-xs font-bold text-slate-900 truncate">Module {idx + 1}</div>
                </button>
              ))}
            </div>

            {/* Active Module Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 block">
                    {modules[selectedModule].day}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {modules[selectedModule].title}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 w-fit">
                  2.5 Hours Lab Included
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {modules[selectedModule].overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Lecture Topics Covered:
                  </div>
                  <div className="space-y-2">
                    {modules[selectedModule].topics.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-blue-600 block mb-1">
                      HANDS-ON WORKSTATION ASSIGNMENT
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">
                      Laboratory Practical:
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {modules[selectedModule].lab}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-500">
                    Toolkits: NetSquid • Qiskit • OpenSSL 3.x • liboqs
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Daily Schedule */}
        {activeTab === 'timeline' && (
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Standard Daily Workshop Schedule (Days 1 to 5)
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Daily operational timings adhered to from Monday Dec 7 to Friday Dec 11.
            </p>

            <div className="space-y-2.5">
              {dailyAgenda.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-700 min-w-[150px]">
                      {item.time}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shrink-0">
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Menu */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menu.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                  <span className="font-bold text-slate-900 text-sm">{m.day}</span>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Included</span>
                </div>
                <div className="space-y-2 text-xs text-slate-600">
                  <div>
                    <strong className="text-slate-800 block text-[11px]">Breakfast (08:30 AM):</strong>
                    {m.breakfast}
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-[11px]">Buffet Lunch (01:00 PM):</strong>
                    {m.lunch}
                  </div>
                  {m.gala && (
                    <div className="p-2.5 rounded-lg bg-purple-50 text-purple-900 text-[11px] font-medium border border-purple-200 mt-2">
                      {m.gala}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
