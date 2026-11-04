import { useState } from 'react'
import { CpuIcon, NetworkIcon, ShieldCheckIcon, AwardIcon, CheckCircleIcon } from './Icons'

export default function ProposedTraining() {
  const [activeTab, setActiveTab] = useState(0)

  const modules = [
    {
      id: "mod-1",
      title: "Module 1: Fundamentals of Quantum Information",
      subtitle: "Day 1 • Mathematics, Optics & State Representation",
      icon: CpuIcon,
      overview: "Provides deep conceptual clarity on quantum mechanical principles essential for communication systems without overwhelming classical engineers.",
      topics: [
        "Qubits, Superposition & Dirac bra-ket notation",
        "Single-qubit quantum gates (Pauli-X, Y, Z, Hadamard, Phase)",
        "Two-qubit gates & Entanglement (Bell states, GHZ states)",
        "No-Cloning Theorem & its implications for cybersecurity",
        "Photonic polarization states & single photon detection basics"
      ],
      handsOn: "Jupyter Notebook lab: Simulating state tomography and quantum logic gates using Python & Qiskit."
    },
    {
      id: "mod-2",
      title: "Module 2: Quantum Key Distribution (QKD) Protocols",
      subtitle: "Day 2 • Physical Layer Cryptographic Key Exchange",
      icon: NetworkIcon,
      overview: "Deep dive into discrete-variable and continuous-variable QKD protocols with real-world optical channel considerations.",
      topics: [
        "The Bennett-Brassard 1984 (BB84) protocol end-to-end",
        "Decoy-state method to mitigate Photon Number Splitting (PNS) attacks",
        "Entanglement-based QKD: Ekert 91 (E91) protocol & Bell inequality test",
        "Quantum Bit Error Rate (QBER) estimation and threshold limits",
        "Classical post-processing: Sifting, Error Correction (Cascade/LDPC) & Privacy Amplification"
      ],
      handsOn: "Live simulation: Building a full BB84 transmission loop, injecting eavesdropping noise (Eve), and calculating secret key rate."
    },
    {
      id: "mod-3",
      title: "Module 3: Quantum Repeaters & Network Architecture",
      subtitle: "Day 3 • Scaling Beyond Fiber Attenuation Limits",
      icon: NetworkIcon,
      overview: "Addressing the 100km fiber distance barrier through quantum memory nodes, entanglement purification, and quantum routing.",
      topics: [
        "Optical fiber attenuation and why classical amplification destroys quantum states",
        "Quantum Repeaters: Principles, quantum memory, and Bell-state measurements",
        "Entanglement Swapping: Linking distant nodes without direct quantum transmission",
        "Entanglement Purification & Distillation protocols",
        "Quantum Network Stack: Physical, Link, Network, and Transport layer abstractions"
      ],
      handsOn: "NetSquid simulation: Creating a multi-hop quantum repeater chain and benchmarking end-to-end entanglement generation fidelity."
    },
    {
      id: "mod-4",
      title: "Module 4: Post-Quantum Cryptography (PQC)",
      subtitle: "Day 4 • NIST Standards & Algorithmic Hardness",
      icon: ShieldCheckIcon,
      overview: "Analyzing the quantum threat to RSA/ECC and mastering the modern NIST-standardized quantum-resistant cryptographic algorithms.",
      topics: [
        "The Quantum Threat: Shor's algorithm (discrete log/factoring) & Grover's search speedup",
        "Lattice-based cryptography: Learning With Errors (LWE) & Module-LWE",
        "NIST FIPS 203: ML-KEM (formerly CRYSTALS-Kyber) for Key Encapsulation",
        "NIST FIPS 204: ML-DSA (CRYSTALS-Dilithium) & FIPS 205: SLH-DSA (SPHINCS+)",
        "Key sizes, ciphertext overhead, performance tradeoffs vs. classical primitives"
      ],
      handsOn: "liboqs & Python workshop: Generating ML-KEM keypairs, encapsulating shared secrets, and executing quantum-safe signatures."
    },
    {
      id: "mod-5",
      title: "Module 5: Quantum-Safe Migration & Capstone Lab",
      subtitle: "Day 5 • Real-world Infrastructure Integration",
      icon: AwardIcon,
      overview: "Hands-on implementation of hybrid cryptographic tunnels and developing realistic enterprise migration roadmaps.",
      topics: [
        "Hybrid key exchange: Combining Classical ECDH with ML-KEM in TLS 1.3",
        "Quantum-Safe PKI: Certificates, X.509 extensions, and root of trust",
        "QKD integration with classical IPsec/MACsec encryptors",
        "Evaluating real-world migration challenges and regulatory mandates",
        "Capstone Group Challenge: Designing an end-to-end quantum-secured enterprise network"
      ],
      handsOn: "Capstone Project: Deploying an OpenSSL 3.x PQC-enabled web server and establishing a quantum-resistant HTTPS connection."
    }
  ]

  return (
    <section id="training" className="py-20 bg-slate-50/80 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 mb-3">
            Comprehensive Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Final Workshop Curriculum & Agenda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A balanced 5-day curriculum combining rigorous foundational lectures with afternoon code labs and physical hardware demonstrations.
          </p>
        </div>

        {/* Desktop Tabs (Whitish pill buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {modules.map((m, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === idx
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-white text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-slate-200 shadow-xs"
              }`}
            >
              Day {idx + 1}: Module {idx + 1}
            </button>
          ))}
        </div>

        {/* Active Module Card (Pure white card with soft shadows) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Topics */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest mb-1.5">
                {modules[activeTab].subtitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                {modules[activeTab].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                {modules[activeTab].overview}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Core Lecture & Practical Syllabus:
                </div>
                {modules[activeTab].topics.map((topic, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hands-on Lab Session Details */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border border-blue-200 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                  Lab Practical Assignment
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  Hands-on Workstation Exercise
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                  {modules[activeTab].handsOn}
                </p>

                <div className="border-t border-blue-200/60 pt-4 space-y-2">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Toolkits Utilized:</div>
                  <div className="flex flex-wrap gap-2">
                    {["Python 3.11", "Qiskit", "NetSquid", "OpenSSL 3.x", "liboqs", "JupyterLab"].map((tool, toolIdx) => (
                      <span key={toolIdx} className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-white text-blue-800 border border-blue-200 shadow-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-blue-200/60 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Duration: 2.5 Hours Practical</span>
                <span className="text-blue-700 font-bold">Instructor Guided</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
