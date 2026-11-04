import { useState, useEffect } from 'react'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    designation: 'Faculty',
    statement: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setRegistered(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif antialiased selection:bg-red-100 selection:text-red-900">
      
      {/* Top Subtle Academic Bar */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-2 px-4 text-xs font-sans text-slate-600">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">National Quantum Mission (NQM)</span>
            <span>•</span>
            <span>Department of Science and Technology (DST), Govt. of India</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#register" className="text-blue-700 hover:underline font-medium">Apply for Seat</a>
            <span>•</span>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact Desk</a>
          </div>
        </div>
      </div>

      {/* Main Document Container (ACM / NISER Academic Width) */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-16">
        
        {/* ========================================================= */}
        {/* HEADER SECTION (EXACT REPLICA OF REFERENCE STYLE) */}
        {/* ========================================================= */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-slate-900 leading-[1.2] mb-3">
            A Hands-on Workshop on Quantum Communication, Quantum Network, and Post-Quantum Cryptography
          </h1>

          {/* Distinctive Crimson-Red Dates from Screenshot */}
          <div className="text-2xl sm:text-3xl text-[#991b1b] font-normal tracking-tight my-2">
            7–11 December 2026
          </div>

          <div className="text-base sm:text-lg text-slate-800 font-normal mt-1">
            National Technical Immersion & Faculty Development Programme
          </div>

          <div className="text-base sm:text-lg text-blue-800 hover:text-blue-900 font-normal mt-1">
            <a href="#venue" className="hover:underline">
              Centre for Quantum Technologies (CYQT Lab), Department of Computer Science & Quantum Engineering
            </a>
          </div>

          <hr className="my-6 border-t border-slate-300" />

          <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
            Organised by CYQT Lab in collaboration with the National Quantum Mission (NQM) & Department of Science and Technology (DST), hosted at CYQT Lab Simulation Wing.
          </p>
        </header>

        {/* Quick Academic Jump Links (Minimal & Uncluttered) */}
        <nav className="my-6 py-2 border-y border-slate-200 font-sans text-xs sm:text-sm text-slate-600 flex flex-wrap gap-x-5 gap-y-2">
          <a href="#about" className="hover:text-blue-800 hover:underline">About</a>
          <a href="#objectives" className="hover:text-blue-800 hover:underline">Objectives</a>
          <a href="#dates-venue" className="hover:text-blue-800 hover:underline">Dates & Venue</a>
          <a href="#curriculum" className="hover:text-blue-800 hover:underline">Curriculum & Labs</a>
          <a href="#schedule" className="hover:text-blue-800 hover:underline">Daily Schedule & Menu</a>
          <a href="#trainers" className="hover:text-blue-800 hover:underline">Faculty & Trainers</a>
          <a href="#capacity" className="hover:text-blue-800 hover:underline">Capacity & Facilities</a>
          <a href="#brand" className="hover:text-blue-800 hover:underline">Participant Perks</a>
          <a href="#register" className="text-blue-800 font-semibold hover:underline">Registration</a>
        </nav>

        {/* ========================================================= */}
        {/* 1. ABOUT SECTION */}
        {/* ========================================================= */}
        <section id="about" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            About the Workshop
          </h2>
          <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4">
            <p>
              Quantum communication and next-generation cybersecurity are rapidly entering higher academic curricula and national defense infrastructure across India. This five-day intensive programme is designed to provide a rigorous grounding in quantum information theory, from discrete-variable photonic states and Quantum Key Distribution (QKD) to multi-node quantum repeaters and NIST-standardized Post-Quantum Cryptography (PQC).
            </p>
            <p>
              Along with theoretical rigor, over 60% of the program duration is dedicated to individual hands-on simulation workstations. Participants will directly interact with simulation toolchains (NetSquid, QuISP, Qiskit) and cryptographic libraries (liboqs, OpenSSL 3.x), taking back practical teaching exercises and experimental intuition to their research labs and classrooms. A trained educator reaches hundreds of students each year; this programme is structured to create exactly that national multiplier effect.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 2. OBJECTIVES & STRUCTURE */}
        {/* ========================================================= */}
        <section id="objectives" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            Workshop Objectives
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
            The pedagogical structure is anchored on four foundational milestones:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base text-slate-800 leading-relaxed">
            <li>
              <strong>Final Workshop Curriculum & Practical Agenda:</strong> Imparting rigorous mathematical modeling of qubits, Bell states, BB84/E91 protocols, Quantum Bit Error Rate (QBER) estimation, and NIST FIPS 203/204 algorithms through 2.5-hour daily code assignments.
            </li>
            <li>
              <strong>Engagement with Proposed Trainers & Research Personnel:</strong> Facilitating direct interaction with eminent university faculty, senior scientists from national quantum hubs, and cryptographic engineers guiding 1:1 laboratory benchmarks.
            </li>
            <li>
              <strong>Confirmed Operational Logistics & Facilities:</strong> Providing guaranteed access to dedicated high-performance Linux workstations within a 2,500+ sq. ft. Simulation Hall, alongside verified attendance tracking and dining schedules.
            </li>
            <li>
              <strong>Brand Identity & Participant Documentation:</strong> Awarding authorized completion certificates jointly accredited under the National Quantum Mission initiative, delegate passes, lab manuals, and official archival photography.
            </li>
          </ol>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 3. CONFIRMED DATES & VENUE DETAILS */}
        {/* ========================================================= */}
        <section id="dates-venue" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            Confirmed Dates & Venue Details
          </h2>
          
          <div className="bg-slate-50 border border-slate-200 p-5 rounded-sm my-4 font-sans text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-bold text-slate-900 block mb-1">Dates & Duration</span>
                <p className="text-slate-700">7–11 December 2026 (5 Full Days, Monday to Friday)</p>
                <p className="text-slate-500 text-xs mt-0.5">Daily Timings: 08:30 AM to 05:00 PM IST</p>
              </div>
              <div>
                <span className="font-bold text-slate-900 block mb-1">Physical Venue</span>
                <p className="text-slate-700">CYQT Lab Complex, Simulation Hall B (Ground Floor)</p>
                <p className="text-slate-500 text-xs mt-0.5">Dept. of Computer Science & Quantum Engineering</p>
              </div>
            </div>
          </div>

          <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-3 mt-4">
            <p>
              <strong>Venue Infrastructure:</strong> The workshop will be conducted in Simulation Hall B, equipped with 50 high-performance multi-core workstations, dual-screen setups, gigabit campus research intranet, and an adjoining Optical Testbed Wing (Room 104) for physical polarization demonstrations.
            </p>
            <p>
              <strong>Travel & Transit:</strong> The campus is conveniently connected via major railway terminals (12 km) and the domestic/international airport (25 km). Outstation candidates requiring campus guest house accommodation should indicate their requirement on the registration form.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 4. CURRICULUM & PROPOSED TRAINING */}
        {/* ========================================================= */}
        <section id="curriculum" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            Final Workshop Curriculum & Laboratory Syllabus
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed">
            The curriculum spans five distinct technical modules progressing from foundational quantum physics to modern post-quantum protocol deployments:
          </p>

          <div className="space-y-6 text-sm sm:text-base text-slate-800">
            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900">Module 1 (Day 1): Foundations of Quantum Information & Optics</h3>
              <p className="text-slate-700 text-sm mt-1">
                Dirac bra-ket notation, state vectors, single-qubit rotations (Pauli matrices, Hadamard), two-qubit entanglement, Bell states, No-Cloning Theorem, and photonic polarization basics.
              </p>
              <div className="text-xs font-sans text-slate-600 bg-slate-50 p-2.5 mt-2 rounded-xs border border-slate-200">
                <strong>Lab Session 1:</strong> Simulating state tomography and quantum logic gates using Python and Qiskit.
              </div>
            </div>

            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900">Module 2 (Day 2): Quantum Key Distribution (QKD) Protocols</h3>
              <p className="text-slate-700 text-sm mt-1">
                The Bennett-Brassard 1984 (BB84) protocol, photon number splitting attacks, decoy-state implementation, Ekert 91 (E91) entanglement scheme, QBER thresholds, sifting, error correction, and privacy amplification.
              </p>
              <div className="text-xs font-sans text-slate-600 bg-slate-50 p-2.5 mt-2 rounded-xs border border-slate-200">
                <strong>Lab Session 2:</strong> Implementing an end-to-end BB84 transmission loop with simulated eavesdropping (Eve) and secret key extraction.
              </div>
            </div>

            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900">Module 3 (Day 3): Quantum Repeaters & Quantum Internet Architecture</h3>
              <p className="text-slate-700 text-sm mt-1">
                Optical fiber loss mechanisms, quantum memory node modeling, entanglement swapping, entanglement purification, and discrete-event quantum network protocol layering.
              </p>
              <div className="text-xs font-sans text-slate-600 bg-slate-50 p-2.5 mt-2 rounded-xs border border-slate-200">
                <strong>Lab Session 3:</strong> Modeling a multi-hop quantum repeater chain in NetSquid and tracking end-to-end fidelity.
              </div>
            </div>

            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900">Module 4 (Day 4): Post-Quantum Cryptography (PQC) & Hard Problems</h3>
              <p className="text-slate-700 text-sm mt-1">
                Shor's algorithm impact on RSA/ECC, Learning With Errors (LWE) and Module-LWE, NIST FIPS 203 (ML-KEM / Kyber), NIST FIPS 204 (ML-DSA / Dilithium), key sizes, and ciphertext overhead benchmarks.
              </p>
              <div className="text-xs font-sans text-slate-600 bg-slate-50 p-2.5 mt-2 rounded-xs border border-slate-200">
                <strong>Lab Session 4:</strong> Keypair generation, encapsulation, and signature verification with liboqs and Python bindings.
              </div>
            </div>

            <div className="border-l-2 border-slate-400 pl-4">
              <h3 className="font-bold text-slate-900">Module 5 (Day 5): Quantum-Safe Hybrid Migration & Capstone Lab</h3>
              <p className="text-slate-700 text-sm mt-1">
                Hybrid classical-quantum key exchange in TLS 1.3, quantum-safe PKI and certificates, real-world migration blueprints, and group capstone evaluation.
              </p>
              <div className="text-xs font-sans text-slate-600 bg-slate-50 p-2.5 mt-2 rounded-xs border border-slate-200">
                <strong>Lab Session 5:</strong> Deploying an OpenSSL 3.x PQC-enabled web server and testing a quantum-resistant HTTPS connection.
              </div>
            </div>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 5. DAILY SCHEDULE & HOSPITALITY MENU */}
        {/* ========================================================= */}
        <section id="schedule" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            Daily Timetable & Hospitality Schedule
          </h2>

          {/* Academic Table Format */}
          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs sm:text-sm font-sans border border-slate-300">
              <thead className="bg-slate-100 text-slate-800 border-b border-slate-300">
                <tr>
                  <th className="p-3 font-semibold">Time Window</th>
                  <th className="p-3 font-semibold">Session Description</th>
                  <th className="p-3 font-semibold">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">08:30 – 09:30</td>
                  <td className="p-3">Welcome Breakfast, Registration Desk & Check-in</td>
                  <td className="p-3 text-slate-500">Hospitality</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 font-mono font-medium text-slate-900">09:30 – 11:00</td>
                  <td className="p-3">Morning Theoretical Foundations & Protocol Derivations</td>
                  <td className="p-3 text-slate-500">Lecture</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">11:00 – 11:30</td>
                  <td className="p-3">Tea, Coffee & Informal Research Exchange Break</td>
                  <td className="p-3 text-slate-500">Break</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 font-mono font-medium text-slate-900">11:30 – 01:00</td>
                  <td className="p-3">Architecture Deep-Dives, Mathematical Modeling & Algorithms</td>
                  <td className="p-3 text-slate-500">Lecture</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">01:00 – 02:00</td>
                  <td className="p-3">Executive Buffet Lunch at Campus Dining Hall</td>
                  <td className="p-3 text-slate-500">Hospitality</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 font-mono font-medium text-slate-900">02:00 – 04:30</td>
                  <td className="p-3">Individual Hands-on Simulation Lab on Dedicated Workstations</td>
                  <td className="p-3 text-blue-800 font-medium">Hands-on Lab</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">04:30 – 05:00</td>
                  <td className="p-3">Evening High-Tea, Daily Code Review & Open Q&A Session</td>
                  <td className="p-3 text-slate-500">Discussion</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hospitality & Daily Menu Details */}
          <div className="mt-6 text-sm text-slate-800 leading-relaxed">
            <h3 className="font-bold text-slate-900 text-base mb-2">Catering & Dining Provisions</h3>
            <p className="text-slate-700 mb-3">
              Complimentary catering is provided for all registered participants throughout the five days:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li><strong>Breakfast (08:30 AM):</strong> Fresh South/North Indian breakfast options (Idlis, Vada, Poha, Parathas, seasonal fruits, tea & filter coffee).</li>
              <li><strong>Buffet Lunch (01:00 PM):</strong> Full vegetarian and non-vegetarian spread with regional gravies, rice varieties, fresh salads, and desserts.</li>
              <li><strong>Evening High-Tea (04:30 PM):</strong> Fresh savoury snacks, bakery cookies, tea, and coffee.</li>
              <li><strong>Gala Networking Dinner (Dec 10 Evening):</strong> Hosted banquet with invited keynote speakers and committee members.</li>
            </ul>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 6. TRAINERS & RESEARCH PERSONNEL */}
        {/* ========================================================= */}
        <section id="trainers" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            List of Proposed Trainers & Research Personnel
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed">
            The sessions and workstation laboratories will be directed by senior quantum faculty and system architects:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
            <div className="border border-slate-200 p-4 rounded-sm bg-slate-50/40">
              <div className="font-bold text-slate-900">Dr. A. K. Sharma</div>
              <div className="text-xs text-blue-800 font-sans font-medium">Senior Principal Scientist & Workshop Convener</div>
              <div className="text-xs text-slate-500 mt-0.5">CYQT Lab & National Quantum Hub</div>
              <p className="text-xs text-slate-700 mt-2">
                Specialization in discrete-variable QKD protocols, single-photon sources, and QBER threshold limits. Conducting Days 1 & 2.
              </p>
            </div>

            <div className="border border-slate-200 p-4 rounded-sm bg-slate-50/40">
              <div className="font-bold text-slate-900">Prof. Priya Nair</div>
              <div className="text-xs text-blue-800 font-sans font-medium">Professor of Quantum Engineering</div>
              <div className="text-xs text-slate-500 mt-0.5">Institute of Quantum Technologies</div>
              <p className="text-xs text-slate-700 mt-2">
                Specialization in quantum repeaters, memory architectures, and multi-hop entanglement routing. Directing Day 3.
              </p>
            </div>

            <div className="border border-slate-200 p-4 rounded-sm bg-slate-50/40">
              <div className="font-bold text-slate-900">Dr. Rohan Deshmukh</div>
              <div className="text-xs text-blue-800 font-sans font-medium">Chief Cryptographic Architect</div>
              <div className="text-xs text-slate-500 mt-0.5">National Cybersecurity & PQC Center</div>
              <p className="text-xs text-slate-700 mt-2">
                Specialization in lattice-based cryptography, NIST FIPS 203/204 algorithms, and OpenSSL 3.x integration. Directing Day 4.
              </p>
            </div>

            <div className="border border-slate-200 p-4 rounded-sm bg-slate-50/40">
              <div className="font-bold text-slate-900">Dr. Meera Swaminathan</div>
              <div className="text-xs text-blue-800 font-sans font-medium">Experimental Quantum Optics Lead</div>
              <div className="text-xs text-slate-500 mt-0.5">Photonic Systems & Quantum Optics Lab</div>
              <p className="text-xs text-slate-700 mt-2">
                Specialization in photon polarization testbeds, Bell inequality verifications, and free-space quantum optical links.
              </p>
            </div>

            <div className="border border-slate-200 p-4 rounded-sm bg-slate-50/40">
              <div className="font-bold text-slate-900">Er. Vikram Patel</div>
              <div className="text-xs text-blue-800 font-sans font-medium">Senior Scientific Officer & Simulation Architect</div>
              <div className="text-xs text-slate-500 mt-0.5">Centre for Quantum Computing & Networks</div>
              <p className="text-xs text-slate-700 mt-2">
                Lead Laboratory Director overseeing the 50 high-performance workstation environments (NetSquid, QuISP, Python 3.11).
              </p>
            </div>

            <div className="border border-slate-200 p-4 rounded-sm bg-slate-50/40">
              <div className="font-bold text-slate-900">Dr. Kavita Iyer</div>
              <div className="text-xs text-blue-800 font-sans font-medium">Research Director in Network Security</div>
              <div className="text-xs text-slate-500 mt-0.5">Enterprise Security & Quantum Migration Advisory</div>
              <p className="text-xs text-slate-700 mt-2">
                Specialization in quantum-safe hybrid TLS 1.3 handshakes and capstone project evaluation. Directing Day 5.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 7. CAPACITY BUILDING & LAB FACILITIES */}
        {/* ========================================================= */}
        <section id="capacity" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            Capacity Building & Facilities
          </h2>
          <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-3">
            <p>
              <strong>Cohort Limit:</strong> The workshop intake is strictly restricted to <strong>50 participants</strong> to guarantee that each attendee receives an individual, dedicated simulation terminal with full GPU/multi-core compute acceleration.
            </p>
            <p>
              <strong>Target Audience:</strong> Faculty members, post-doctoral scholars, Ph.D. students, and industry research engineers working across Computer Science, Electronics & Communication Engineering, Physics, and Applied Mathematics.
            </p>
            <p>
              <strong>Prerequisites:</strong> Familiarity with basic linear algebra (matrices, vector spaces), fundamental Python programming, and elementary networking concepts.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 8. BRAND IDENTITY & PARTICIPANT PERKS */}
        {/* ========================================================= */}
        <section id="brand" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            During-Event Brand & Participant Experience
          </h2>
          <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-3">
            <p>
              <strong>Identity & Co-Branding:</strong> All workshop kits, lanyards, delegate passes, and digital repositories carry official accreditation under the National Quantum Mission (NQM) and CYQT Lab.
            </p>
            <p>
              <strong>Delegate Kit:</strong> Registered attendees will receive an official delegate badge, 200+ page hardbound laboratory manual, git repository credentials, and a certificate of completion upon meeting 85% attendance.
            </p>
            <p>
              <strong>Event Photography:</strong> An inaugural group photograph is scheduled on Day 1 (10:45 AM). High-resolution digital photographs and lab session records will be shared with all participants.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-slate-200" />

        {/* ========================================================= */}
        {/* 9. REGISTRATION & CONTACT */}
        {/* ========================================================= */}
        <section id="register" className="my-10">
          <h2 className="text-xl sm:text-2xl font-normal text-slate-900 mb-4">
            Registration & Application
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-6 leading-relaxed">
            Interested candidates should submit their expression of interest using the form below. Due to limited workstation capacity (50 seats), early registration is strongly recommended.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Clean Application Form */}
            <div className="lg:col-span-7 border border-slate-300 p-6 rounded-sm bg-slate-50/50">
              <h3 className="font-bold text-slate-900 text-base mb-1">
                Participant Application Form
              </h3>
              <p className="text-xs text-slate-500 mb-5 font-sans">
                Please complete all fields. Acceptance letters will be issued via email.
              </p>

              {registered ? (
                <div className="p-5 border border-emerald-300 bg-emerald-50 text-emerald-900 text-sm rounded-sm">
                  <strong>Application Submitted Successfully.</strong>
                  <p className="text-xs mt-1">
                    Thank you, {formData.name || 'Applicant'}. Your application has been recorded for review. We will reach out to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => setRegistered(false)}
                    className="mt-3 text-xs font-sans text-emerald-800 underline cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xs bg-white text-slate-900 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="user@institute.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-xs bg-white text-slate-900 text-xs focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Designation</label>
                      <select
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full p-2 border border-slate-300 rounded-xs bg-white text-slate-900 text-xs focus:outline-none focus:border-blue-700"
                      >
                        <option value="Faculty">Faculty / Professor</option>
                        <option value="Postdoc">Post-Doctoral Fellow</option>
                        <option value="PhD">Ph.D. Research Scholar</option>
                        <option value="PG">Master's Student (M.Tech/M.Sc)</option>
                        <option value="Industry">Industry Scientist</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Institution / University *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. National Institute of Technology"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xs bg-white text-slate-900 text-xs focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Research Interest / Statement</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly state your motivation and current work in quantum communications or cryptography..."
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full p-2 border border-slate-300 rounded-xs bg-white text-slate-900 text-xs focus:outline-none focus:border-blue-700"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xs text-xs tracking-wide cursor-pointer transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>

            {/* Official Materials & Secretariat Contacts */}
            <div id="contact" className="lg:col-span-5 space-y-6 text-sm">
              <div className="border border-slate-200 p-5 rounded-sm bg-white">
                <h4 className="font-bold text-slate-900 mb-2">Organizing Secretariat</h4>
                <div className="text-xs font-sans text-slate-600 space-y-1.5 leading-relaxed">
                  <p><strong>Convener:</strong> Dr. A. K. Sharma (General Chair)</p>
                  <p><strong>Technical Lead:</strong> Prof. Priya Nair (Program Chair)</p>
                  <p><strong>Email:</strong> <a href="mailto:workshop.quantum@cyqtlab.org" className="text-blue-700 underline">workshop.quantum@cyqtlab.org</a></p>
                  <p><strong>Helpline:</strong> +91 98765 43210 (9:00 AM – 6:00 PM IST)</p>
                  <p><strong>Desk:</strong> CYQT Lab Complex, Room 204, Quantum Research Wing</p>
                </div>
              </div>

              <div className="border border-slate-200 p-5 rounded-sm bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-2">Downloadable Materials</h4>
                <div className="text-xs font-sans text-slate-600 space-y-2">
                  <div>
                    <a href="#brochure" onClick={() => alert("Downloading Official Workshop Brochure (PDF)...")} className="text-blue-700 underline font-medium block">
                      📄 Workshop Brochure & Syllabus (PDF)
                    </a>
                    <span className="text-slate-500 text-[11px]">Approved for academic distribution</span>
                  </div>
                  <div>
                    <a href="#flyer" onClick={() => alert("Downloading Notice Board Flyer (PDF)...")} className="text-blue-700 underline font-medium block">
                      📋 Notice Board Circular & Poster (PDF)
                    </a>
                    <span className="text-slate-500 text-[11px]">Department notice board print format</span>
                  </div>
                  <div>
                    <a href="#od" onClick={() => alert("Downloading On-Duty (OD) Requisition Template...")} className="text-blue-700 underline font-medium block">
                      📝 Institutional On-Duty (OD) Requisition Template
                    </a>
                    <span className="text-slate-500 text-[11px]">For submission to Head / Principal</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-300 text-xs font-sans text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 CYQT Lab & National Quantum Mission. All rights reserved.</p>
          <p>A Hands-on Workshop on Quantum Communication, Quantum Network, and Post-Quantum Cryptography</p>
        </footer>

      </main>

      {/* Subtle "Top" Button in Bottom-Right Corner (Exact Replica of Screenshot) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-slate-600 hover:bg-slate-700 text-white text-[11px] font-sans font-medium px-2.5 py-1 rounded shadow-sm cursor-pointer transition-colors"
          title="Back to Top"
        >
          Top
        </button>
      )}

    </div>
  )
}
