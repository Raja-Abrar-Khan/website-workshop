import { useState, useEffect } from 'react'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 250)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Replace this placeholder with your actual Google Form URL
  const googleFormUrl = "https://forms.google.com"

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-serif antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Main Academic Container (Clean, Standalone & Authoritative) */}
      <main className="max-w-[820px] mx-auto px-6 sm:px-10 py-12 sm:py-16">
        
        {/* ========================================================= */}
        {/* HEADER: PURE ACADEMIC SIMPLICITY (EXACT NISER/ACM STYLE) */}
        {/* ========================================================= */}
        <header className="mb-8">
          
          {/* Workshop Title */}
          <h1 className="text-3xl sm:text-[38px] lg:text-[42px] font-normal tracking-tight text-[#111827] leading-[1.25] mb-2.5">
            A Hands-on Workshop on Quantum Communication, Quantum Network, and Post-Quantum Cryptography
          </h1>

          {/* Date Headline in Distinctive Academic Royal Blue */}
          <div className="text-2xl sm:text-[32px] text-[#1e40af] font-normal tracking-tight my-2">
            7–11 December 2026
          </div>

          {/* Subtitle Line */}
          <div className="text-base sm:text-lg text-[#374151] font-normal mt-1">
            ACM India & National Quantum Mission Initiative : A Technical Faculty & Researcher Workshop
          </div>

          {/* Host University / Lab in Academic Blue */}
          <div className="text-base sm:text-lg text-[#1d4ed8] font-normal mt-1">
            <a href="#venue" className="hover:underline">
              Centre for Quantum Technologies (CYQT Lab), Department of Computer Science & Quantum Engineering
            </a>
          </div>

          {/* Clean Academic Divider */}
          <hr className="my-6 border-t border-[#d1d5db]" />

          {/* Organizing Attribution */}
          <p className="text-sm sm:text-base text-[#4b5563] italic leading-relaxed">
            Organised by CYQT Lab in collaboration with the National Quantum Mission (NQM) & Department of Science and Technology (DST), hosted at CYQT Lab Simulation Wing.
          </p>
        </header>

        {/* Minimalist Academic Navigation Links */}
        <nav className="my-6 py-2 border-y border-[#e5e7eb] font-sans text-xs sm:text-sm text-[#4b5563] flex flex-wrap gap-x-5 gap-y-2">
          <a href="#about" className="hover:text-[#1d4ed8] hover:underline">About</a>
          <a href="#objectives" className="hover:text-[#1d4ed8] hover:underline">Objectives</a>
          <a href="#curriculum" className="hover:text-[#1d4ed8] hover:underline">Curriculum & Labs</a>
          <a href="#schedule" className="hover:text-[#1d4ed8] hover:underline">Schedule & Menu</a>
          <a href="#speakers" className="hover:text-[#1d4ed8] hover:underline">Speakers & Trainers</a>
          <a href="#capacity" className="hover:text-[#1d4ed8] hover:underline">Capacity & Facilities</a>
          <a href="#venue" className="hover:text-[#1d4ed8] hover:underline">Dates & Venue</a>
          <a href="#register" className="text-[#1d4ed8] font-semibold hover:underline">Registration (Google Form)</a>
        </nav>

        {/* ========================================================= */}
        {/* 1. ABOUT */}
        {/* ========================================================= */}
        <section id="about" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            About
          </h2>
          <div className="text-[15px] sm:text-base text-[#1f2937] leading-[1.75] space-y-4">
            <p>
              Quantum communication and cryptographic security are rapidly entering academic curricula and national telecommunication infrastructure across India. This five-day programme is designed to provide a rigorous grounding in quantum information theory, from discrete-variable photonic states and Quantum Key Distribution (QKD) to quantum repeaters, entanglement distribution networks, and NIST-standardized Post-Quantum Cryptography (PQC).
            </p>
            <p>
              Along with mathematical rigor, over 60% of the program duration is dedicated to individual hands-on simulation workstations. Participants will directly write simulation models (NetSquid, QuISP, Qiskit) and integrate cryptographic libraries (liboqs, OpenSSL 3.x), taking back practical teaching exercises and experimental intuition to their research labs and classrooms. A trained educator reaches hundreds of students each year; this Faculty Development Programme is designed to create exactly that multiplier effect.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 2. OBJECTIVES */}
        {/* ========================================================= */}
        <section id="objectives" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Objectives
          </h2>
          <p className="text-[15px] sm:text-base text-[#374151] mb-4 leading-relaxed">
            The workshop is structured around four primary objectives:
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-[15px] sm:text-base text-[#1f2937] leading-[1.7]">
            <li>
              <strong>Final Workshop Curriculum & Practical Agenda:</strong> Mastering fundamental quantum principles (Bloch sphere, Bell inequality, state tomography), discrete-variable QKD protocols (BB84, decoy states, E91), and modern lattice-based cryptographic algorithms (NIST FIPS 203/204) through daily 2.5-hour hands-on coding sessions.
            </li>
            <li>
              <strong>List of Proposed Trainers & Research Personnel:</strong> Mentorship from eminent university faculty, scientists from national quantum hubs, and cryptographic engineers guiding personalized 1:1 workstation benchmarks and doctoral research directions.
            </li>
            <li>
              <strong>Confirmed Operational Logistics & Facilities:</strong> Providing 50 dedicated high-performance Linux workstations within a 2,500+ sq. ft. Simulation Hall (Hall B) and adjoining Optical Testbed Wing (Room 104) with verified attendance tracking and executive dining.
            </li>
            <li>
              <strong>Brand Identity & Participant Experience:</strong> Joint accreditation under the National Quantum Mission (NQM), official delegate passes, hardbound laboratory manuals, high-resolution group photography, and authorized Completion Certificates.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 3. CURRICULUM & LABORATORY MODULES */}
        {/* ========================================================= */}
        <section id="curriculum" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Workshop Curriculum & Laboratory Modules
          </h2>
          <p className="text-[15px] sm:text-base text-[#374151] mb-6 leading-relaxed">
            The five-day progression balances morning lecture foundations with afternoon workstation assignments:
          </p>

          <div className="space-y-6 text-[15px] sm:text-base text-[#1f2937]">
            <div className="border-l-[3px] border-[#4b5563] pl-4">
              <h3 className="font-bold text-[#111827]">Module 1 (Day 1): Foundations of Quantum Information & Photonic States</h3>
              <p className="text-[#374151] text-sm mt-1 leading-relaxed">
                Dirac bra-ket notation, single-qubit quantum gates (Pauli-X, Y, Z, Hadamard, Phase), two-qubit entanglement, Bell states, No-Cloning Theorem, and photonic polarization basics.
              </p>
              <p className="text-xs font-sans text-[#1f2937] bg-[#f9fafb] p-2.5 mt-2 border border-[#e5e7eb]">
                <strong>Lab 1:</strong> Simulating state tomography, single-qubit rotations, and quantum logic gates using Python and Qiskit.
              </p>
            </div>

            <div className="border-l-[3px] border-[#4b5563] pl-4">
              <h3 className="font-bold text-[#111827]">Module 2 (Day 2): Quantum Key Distribution (QKD) Protocols</h3>
              <p className="text-[#374151] text-sm mt-1 leading-relaxed">
                The Bennett-Brassard 1984 (BB84) protocol, photon number splitting attacks, decoy-state implementation, Ekert 91 (E91) protocol, QBER thresholds, basis sifting, error correction (Cascade/LDPC), and privacy amplification.
              </p>
              <p className="text-xs font-sans text-[#1f2937] bg-[#f9fafb] p-2.5 mt-2 border border-[#e5e7eb]">
                <strong>Lab 2:</strong> Building an end-to-end BB84 transmission loop in Python with simulated eavesdropping (Eve) and secret key extraction.
              </p>
            </div>

            <div className="border-l-[3px] border-[#4b5563] pl-4">
              <h3 className="font-bold text-[#111827]">Module 3 (Day 3): Quantum Repeaters & Quantum Internet Architecture</h3>
              <p className="text-[#374151] text-sm mt-1 leading-relaxed">
                Optical fiber loss mechanisms, quantum memory node modeling, entanglement swapping without direct transmission, entanglement purification, and discrete-event quantum network protocol layering.
              </p>
              <p className="text-xs font-sans text-[#1f2937] bg-[#f9fafb] p-2.5 mt-2 border border-[#e5e7eb]">
                <strong>Lab 3:</strong> Modeling a multi-hop quantum repeater chain in NetSquid and tracking end-to-end entanglement fidelity.
              </p>
            </div>

            <div className="border-l-[3px] border-[#4b5563] pl-4">
              <h3 className="font-bold text-[#111827]">Module 4 (Day 4): Post-Quantum Cryptography (PQC) & NIST Standards</h3>
              <p className="text-[#374151] text-sm mt-1 leading-relaxed">
                Shor's algorithm impact on RSA/ECC, Learning With Errors (LWE) and Module-LWE, NIST FIPS 203 (ML-KEM / Kyber), NIST FIPS 204 (ML-DSA / Dilithium), key sizes, ciphertext overhead, and performance benchmarks.
              </p>
              <p className="text-xs font-sans text-[#1f2937] bg-[#f9fafb] p-2.5 mt-2 border border-[#e5e7eb]">
                <strong>Lab 4:</strong> Generating ML-KEM keypairs, encapsulating shared secrets, and executing quantum-safe signatures using liboqs and Python.
              </p>
            </div>

            <div className="border-l-[3px] border-[#4b5563] pl-4">
              <h3 className="font-bold text-[#111827]">Module 5 (Day 5): Quantum-Safe Hybrid Migration & Capstone Lab</h3>
              <p className="text-[#374151] text-sm mt-1 leading-relaxed">
                Hybrid classical-quantum key exchange in TLS 1.3 (ECDH + ML-KEM), quantum-safe PKI and certificates, real-world migration roadmaps, and final project evaluation.
              </p>
              <p className="text-xs font-sans text-[#1f2937] bg-[#f9fafb] p-2.5 mt-2 border border-[#e5e7eb]">
                <strong>Lab 5:</strong> Deploying an OpenSSL 3.x PQC-enabled web server and establishing a quantum-resistant HTTPS connection.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 4. SCHEDULE & HOSPITALITY MENU */}
        {/* ========================================================= */}
        <section id="schedule" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Daily Schedule & Hospitality
          </h2>
          <p className="text-[15px] sm:text-base text-[#374151] mb-4 leading-relaxed">
            The workshop adheres to a standardized daily timetable across all five days:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs sm:text-sm font-sans border border-[#d1d5db]">
              <thead className="bg-[#f3f4f6] text-[#111827] border-b border-[#d1d5db]">
                <tr>
                  <th className="p-3 font-semibold">Time Window</th>
                  <th className="p-3 font-semibold">Session Outline</th>
                  <th className="p-3 font-semibold">Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] text-[#374151]">
                <tr>
                  <td className="p-3 font-mono font-medium text-[#111827]">08:30 – 09:30</td>
                  <td className="p-3 font-serif text-sm text-[#111827]">Welcome Breakfast, Registration Desk & Delegate Check-in</td>
                  <td className="p-3 text-[#6b7280]">Hospitality</td>
                </tr>
                <tr className="bg-[#f9fafb]">
                  <td className="p-3 font-mono font-medium text-[#111827]">09:30 – 11:00</td>
                  <td className="p-3 font-serif text-sm text-[#111827]">Morning Theoretical Foundations & Protocol Derivations</td>
                  <td className="p-3 text-[#6b7280]">Lecture</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-[#111827]">11:00 – 11:30</td>
                  <td className="p-3 font-serif text-sm text-[#111827]">Tea, Coffee & Research Discussion Break</td>
                  <td className="p-3 text-[#6b7280]">Break</td>
                </tr>
                <tr className="bg-[#f9fafb]">
                  <td className="p-3 font-mono font-medium text-[#111827]">11:30 – 01:00</td>
                  <td className="p-3 font-serif text-sm text-[#111827]">Architecture Deep-Dives, Mathematical Modeling & Algorithms</td>
                  <td className="p-3 text-[#6b7280]">Lecture</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-[#111827]">01:00 – 02:00</td>
                  <td className="p-3 font-serif text-sm text-[#111827]">Executive Networking Buffet Lunch at Campus Dining Hall</td>
                  <td className="p-3 text-[#6b7280]">Hospitality</td>
                </tr>
                <tr className="bg-[#f9fafb]">
                  <td className="p-3 font-mono font-medium text-[#111827]">02:00 – 04:30</td>
                  <td className="p-3 font-serif text-sm text-[#1d4ed8] font-semibold">Hands-on Lab Simulation on Individual Dedicated Workstations</td>
                  <td className="p-3 text-[#1d4ed8] font-medium">Hands-on Lab</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-[#111827]">04:30 – 05:00</td>
                  <td className="p-3 font-serif text-sm text-[#111827]">Evening High-Tea, Daily Code Review & Open Q&A Session</td>
                  <td className="p-3 text-[#6b7280]">Discussion</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-[#1f2937] leading-relaxed">
            <h3 className="font-bold text-[#111827] text-base mb-2">Hospitality & Daily Catering Menu</h3>
            <p className="text-[#374151] mb-3">
              Full complimentary catering is provided for all registered attendees from December 7 to 11:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-[#374151]">
              <li><strong>Welcome Breakfast (08:30 AM):</strong> Fresh South and North Indian breakfasts (Idlis, Medu Vada, Poha, Parathas, seasonal fruits, tea & filter coffee).</li>
              <li><strong>Buffet Lunch (01:00 PM):</strong> Full vegetarian and non-vegetarian spread with regional gravies, rice varieties, fresh salads, and desserts.</li>
              <li><strong>Evening High-Tea (04:30 PM):</strong> Fresh savoury snacks, bakery cookies, tea, and coffee.</li>
              <li><strong>Gala Networking Dinner (Dec 10 Evening):</strong> Hosted banquet with keynote dignitaries and organizing faculty.</li>
            </ul>
          </div>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 5. SPEAKERS & PROPOSED TRAINERS */}
        {/* ========================================================= */}
        <section id="speakers" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Speakers & Proposed Trainers
          </h2>
          <p className="text-[15px] sm:text-base text-[#374151] mb-6 leading-relaxed">
            Theoretical lectures and practical laboratories are directed by senior faculty and system architects:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <div className="font-bold text-[#111827] text-base">Dr. A. K. Sharma</div>
              <div className="text-xs text-[#1d4ed8] font-sans font-medium">Senior Principal Scientist & Workshop Convener</div>
              <div className="text-xs text-[#6b7280] font-sans">CYQT Lab & National Quantum Hub</div>
              <p className="text-xs text-[#374151] mt-2 font-serif leading-relaxed">
                Specialization in discrete-variable QKD protocols, single-photon sources, and QBER threshold limits. Conducting Days 1 & 2.
              </p>
            </div>

            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <div className="font-bold text-[#111827] text-base">Prof. Priya Nair</div>
              <div className="text-xs text-[#1d4ed8] font-sans font-medium">Professor of Quantum Engineering</div>
              <div className="text-xs text-[#6b7280] font-sans">Institute of Quantum Technologies</div>
              <p className="text-xs text-[#374151] mt-2 font-serif leading-relaxed">
                Specialization in quantum repeaters, memory architectures, and multi-hop entanglement routing. Directing Day 3.
              </p>
            </div>

            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <div className="font-bold text-[#111827] text-base">Dr. Rohan Deshmukh</div>
              <div className="text-xs text-[#1d4ed8] font-sans font-medium">Chief Cryptographic Architect</div>
              <div className="text-xs text-[#6b7280] font-sans">National Cybersecurity & PQC Center</div>
              <p className="text-xs text-[#374151] mt-2 font-serif leading-relaxed">
                Specialization in lattice-based cryptography, NIST FIPS 203/204 algorithms, and OpenSSL 3.x integration. Directing Day 4.
              </p>
            </div>

            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <div className="font-bold text-[#111827] text-base">Dr. Meera Swaminathan</div>
              <div className="text-xs text-[#1d4ed8] font-sans font-medium">Experimental Quantum Optics Lead</div>
              <div className="text-xs text-[#6b7280] font-sans">Photonic Systems & Quantum Optics Lab</div>
              <p className="text-xs text-[#374151] mt-2 font-serif leading-relaxed">
                Specialization in photon polarization testbeds, Bell inequality verifications, and free-space quantum optical links.
              </p>
            </div>

            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <div className="font-bold text-[#111827] text-base">Er. Vikram Patel</div>
              <div className="text-xs text-[#1d4ed8] font-sans font-medium">Senior Scientific Officer & Simulation Architect</div>
              <div className="text-xs text-[#6b7280] font-sans">Centre for Quantum Computing & Networks</div>
              <p className="text-xs text-[#374151] mt-2 font-serif leading-relaxed">
                Lead Laboratory Director overseeing the 50 high-performance workstation environments (NetSquid, QuISP, Python 3.11).
              </p>
            </div>

            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <div className="font-bold text-[#111827] text-base">Dr. Kavita Iyer</div>
              <div className="text-xs text-[#1d4ed8] font-sans font-medium">Research Director in Network Security</div>
              <div className="text-xs text-[#6b7280] font-sans">Enterprise Security & Quantum Migration Advisory</div>
              <p className="text-xs text-[#374151] mt-2 font-serif leading-relaxed">
                Specialization in quantum-safe hybrid TLS 1.3 handshakes and capstone project evaluation. Directing Day 5.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 6. CAPACITY BUILDING & LAB FACILITIES */}
        {/* ========================================================= */}
        <section id="capacity" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Capacity Building & Facilities
          </h2>
          <div className="text-[15px] sm:text-base text-[#1f2937] leading-[1.75] space-y-3">
            <p>
              <strong>Cohort Limit:</strong> The intake is strictly capped at <strong>50 participants</strong> to ensure that each candidate receives an individual, dedicated simulation terminal with full GPU/multi-core compute acceleration.
            </p>
            <p>
              <strong>Target Audience:</strong> Faculty members, post-doctoral scholars, Ph.D. students, and industry research engineers working across Computer Science, Electronics & Communication Engineering, Physics, and Applied Mathematics.
            </p>
            <p>
              <strong>Pre-requisites:</strong> Familiarity with basic linear algebra (matrices, vector spaces), fundamental Python programming, and elementary networking concepts.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 7. DATES, VENUE & ACCOMMODATION */}
        {/* ========================================================= */}
        <section id="venue" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Confirmed Dates & Venue Details
          </h2>
          
          <div className="bg-[#f9fafb] border border-[#e5e7eb] p-5 my-4 font-sans text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-bold text-[#111827] block mb-1">Confirmed Dates</span>
                <p className="text-[#1f2937] font-semibold">7–11 December 2026 (5 Full Days)</p>
                <p className="text-[#6b7280] text-xs mt-0.5">Daily Timings: 08:30 AM to 05:00 PM IST</p>
              </div>
              <div>
                <span className="font-bold text-[#111827] block mb-1">Host Laboratory</span>
                <p className="text-[#1f2937] font-semibold">CYQT Lab Complex, Simulation Hall B (Ground Floor)</p>
                <p className="text-[#6b7280] text-xs mt-0.5">Dept. of Computer Science & Quantum Engineering</p>
              </div>
            </div>
          </div>

          <div className="text-[15px] sm:text-base text-[#1f2937] leading-[1.75] space-y-3 mt-4">
            <p>
              <strong>Facility Specifications:</strong> The workshop is conducted in Simulation Hall B, equipped with 50 dedicated high-performance Linux workstations, dual-monitor consoles, isolated gigabit campus research intranet, and an adjoining Optical Testbed Wing (Room 104) equipped with single-photon generation kits and polarization state analyzers.
            </p>
            <p>
              <strong>Travel & Guest House:</strong> The campus is located within 12 km from the central railway junction and 25 km from the airport. Outstation candidates requiring campus guest house accommodation should indicate their requirement in the application.
            </p>
          </div>
        </section>

        <hr className="my-8 border-t border-[#e5e7eb]" />

        {/* ========================================================= */}
        {/* 8. REGISTRATION VIA GOOGLE FORM */}
        {/* ========================================================= */}
        <section id="register" className="my-10">
          <h2 className="text-2xl font-normal text-[#111827] mb-3.5">
            Registration & Application
          </h2>
          <div className="text-[15px] sm:text-base text-[#1f2937] leading-[1.75] space-y-3 mb-6">
            <p>
              All candidates (faculty members, research scholars, and industry professionals) are requested to complete the formal application process using the official Google Form below.
            </p>
            <p>
              Due to fixed workstation limits in Simulation Hall B (strictly 50 seats), applications will be scrutinized on a rolling basis. Selected candidates will receive official confirmation letters and travel/accommodation advisories via email.
            </p>
          </div>

          {/* Dedicated Google Form Box (Academic Standard) */}
          <div className="border-2 border-[#1d4ed8]/30 bg-[#eff6ff]/40 p-6 sm:p-7 rounded-sm my-6 text-center">
            <div className="max-w-xl mx-auto">
              <span className="text-xs font-mono font-bold text-[#1d4ed8] uppercase tracking-wider block mb-1.5">
                OFFICIAL WORKSHOP REGISTRATION PORTAL
              </span>
              <h3 className="text-xl sm:text-2xl font-normal text-[#111827] mb-2 font-serif">
                Fill Out the Workshop Registration Form
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#4b5563] mb-6">
                Please have your institutional affiliation details and brief research interest statement ready before starting.
              </p>

              {/* Direct Link to Google Form */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-sans font-semibold text-sm rounded shadow-xs transition-colors"
              >
                Open Google Form in New Window ↗
              </a>

              <p className="text-[11px] font-sans text-[#6b7280] mt-3">
                Direct link: <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] underline">{googleFormUrl}</a>
              </p>
            </div>
          </div>

          {/* Important Registration Deadlines & Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6 text-sm">
            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <h4 className="font-bold text-[#111827] font-serif mb-2">Important Deadlines</h4>
              <ul className="text-xs font-sans space-y-1.5 text-[#374151]">
                <li><strong>Registration Portal Opens:</strong> Active Now</li>
                <li><strong>Last Date for Submissions:</strong> November 25, 2026</li>
                <li><strong>Intimation of Selection:</strong> November 28, 2026</li>
                <li><strong>Workshop Dates:</strong> December 7–11, 2026</li>
              </ul>
            </div>

            <div className="border border-[#e5e7eb] p-4 bg-[#f9fafb]/50">
              <h4 className="font-bold text-[#111827] font-serif mb-2">Important Guidelines</h4>
              <ul className="text-xs font-sans space-y-1.5 text-[#374151]">
                <li><strong>Intake:</strong> Limited to 50 dedicated workstations</li>
                <li><strong>Selection:</strong> Scrutiny based on research profile</li>
                <li><strong>Certificate:</strong> Issued upon 85% attendance</li>
                <li><strong>Meals:</strong> Daily breakfast, buffet lunch & tea included</li>
              </ul>
            </div>
          </div>

          {/* Downloadable Materials & Secretariat Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-sm">
            <div className="border border-[#e5e7eb] p-5 bg-white">
              <h4 className="font-bold text-[#111827] mb-2 font-serif">Organizing Secretariat</h4>
              <div className="text-xs font-sans text-[#4b5563] space-y-1.5 leading-relaxed">
                <p><strong>Convener:</strong> Dr. A. K. Sharma (General Chair)</p>
                <p><strong>Technical Lead:</strong> Prof. Priya Nair (Program Chair)</p>
                <p><strong>Email:</strong> <a href="mailto:workshop.quantum@cyqtlab.org" className="text-[#1d4ed8] underline font-medium">workshop.quantum@cyqtlab.org</a></p>
                <p><strong>Helpline:</strong> +91 98765 43210 (9:00 AM – 6:00 PM IST)</p>
                <p><strong>Desk:</strong> CYQT Lab Complex, Room 204, Quantum Research Wing</p>
              </div>
            </div>

            <div className="border border-[#e5e7eb] p-5 bg-[#f9fafb]/50">
              <h4 className="font-bold text-[#111827] mb-2 font-serif">Downloadable Materials</h4>
              <div className="text-xs font-sans text-[#4b5563] space-y-2.5">
                <div>
                  <a href="#brochure" onClick={() => alert("Downloading Official Workshop Brochure (PDF)...")} className="text-[#1d4ed8] underline font-semibold block">
                    📄 Workshop Brochure & Syllabus (PDF)
                  </a>
                  <span className="text-[#6b7280] text-[11px]">Approved for institutional circulation</span>
                </div>
                <div>
                  <a href="#flyer" onClick={() => alert("Downloading Notice Board Flyer (PDF)...")} className="text-[#1d4ed8] underline font-semibold block">
                    📋 Notice Board Circular & Poster (PDF)
                  </a>
                  <span className="text-[#6b7280] text-[11px]">Department notice board format</span>
                </div>
                <div>
                  <a href="#od" onClick={() => alert("Downloading On-Duty (OD) Requisition Template...")} className="text-[#1d4ed8] underline font-semibold block">
                    📝 On-Duty (OD) Requisition Letter Template
                  </a>
                  <span className="text-[#6b7280] text-[11px]">For submission to Head / Principal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#d1d5db] text-xs font-sans text-[#6b7280] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 CYQT Lab & National Quantum Mission. All rights reserved.</p>
          <p>A Hands-on Workshop on Quantum Communication, Quantum Network, and Post-Quantum Cryptography</p>
        </footer>

      </main>

      {/* Floating "Top" Button (Direct Replica of Screenshot) */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#4b5563] hover:bg-[#374151] text-white text-[11px] font-sans font-medium px-2.5 py-1 rounded shadow-sm cursor-pointer transition-colors"
          title="Back to Top"
        >
          Top
        </button>
      )}

    </div>
  )
}
