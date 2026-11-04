import { useState } from 'react'
import { CalendarIcon, ClockIcon, UtensilsIcon, CoffeeIcon } from './Icons'

export default function ScheduleAndMenu() {
  const [activeView, setActiveView] = useState('schedule') // 'schedule' or 'menu'
  const [selectedDay, setSelectedDay] = useState(0)

  const scheduleDays = [
    {
      date: "Monday, Dec 7, 2026",
      dayTitle: "Day 1: Inauguration & Quantum Information Foundations",
      sessions: [
        { time: "08:30 AM – 09:30 AM", title: "Participant Registration, Kit Distribution & Welcome Breakfast", type: "hospitality" },
        { time: "09:30 AM – 10:45 AM", title: "Inaugural Address, Keynote Speech & Workshop Roadmap", type: "keynote" },
        { time: "10:45 AM – 11:15 AM", title: "Networking High-Tea & Group Photograph", type: "break" },
        { time: "11:15 AM – 01:00 PM", title: "Lecture: Quantum Mechanics Fundamentals, Qubits & Superposition", type: "lecture" },
        { time: "01:00 PM – 02:00 PM", title: "Executive Networking Buffet Lunch", type: "hospitality" },
        { time: "02:00 PM – 04:00 PM", title: "Lab 1: Python & Qiskit Setup, State Tomography & Bloch Sphere Visualizations", type: "lab" },
        { time: "04:00 PM – 04:30 PM", title: "Evening Tea, Discussions & Daily Debrief", type: "break" },
      ]
    },
    {
      date: "Tuesday, Dec 8, 2026",
      dayTitle: "Day 2: Quantum Communication & QKD Protocols",
      sessions: [
        { time: "08:45 AM – 09:30 AM", title: "Morning Tea & Recap Discussion", type: "hospitality" },
        { time: "09:30 AM – 11:00 AM", title: "Lecture: BB84 & Decoy-State QKD Protocols, Channel Attenuation", type: "lecture" },
        { time: "11:00 AM – 11:30 AM", title: "Refreshment Break & Interactive Q&A", type: "break" },
        { time: "11:30 AM – 01:00 PM", title: "Lecture: Entanglement-based QKD (E91) & Bell Test Verifications", type: "lecture" },
        { time: "01:00 PM – 02:00 PM", title: "Buffet Lunch at Campus Dining Hall", type: "hospitality" },
        { time: "02:00 PM – 04:30 PM", title: "Lab 2: QKD Transmission Simulator, QBER Estimation & Eavesdropping Interception", type: "lab" },
        { time: "04:30 PM – 05:00 PM", title: "High-Tea & Hardware Demonstration Q&A", type: "break" },
      ]
    },
    {
      date: "Wednesday, Dec 9, 2026",
      dayTitle: "Day 3: Quantum Repeaters & Quantum Internet Architecture",
      sessions: [
        { time: "08:45 AM – 09:30 AM", title: "Morning Coffee & Check-in", type: "hospitality" },
        { time: "09:30 AM – 11:00 AM", title: "Lecture: Overcoming Loss: Quantum Memory Nodes & Entanglement Swapping", type: "lecture" },
        { time: "11:00 AM – 11:30 AM", title: "Coffee & Cookies Break", type: "break" },
        { time: "11:30 AM – 01:00 PM", title: "Lecture: Quantum Routing Protocols & Multi-hop Fidelity Tracking", type: "lecture" },
        { time: "01:00 PM – 02:00 PM", title: "Buffet Lunch & Informal Research Exchange", type: "hospitality" },
        { time: "02:00 PM – 04:30 PM", title: "Lab 3: Discrete-Event Quantum Networking Simulation with NetSquid", type: "lab" },
        { time: "04:30 PM – 05:00 PM", title: "Evening High-Tea & Review Session", type: "break" },
      ]
    },
    {
      date: "Thursday, Dec 10, 2026",
      dayTitle: "Day 4: NIST Post-Quantum Cryptography & Classical Hardness",
      sessions: [
        { time: "08:45 AM – 09:30 AM", title: "Morning Tea & Day Overview", type: "hospitality" },
        { time: "09:30 AM – 11:00 AM", title: "Lecture: Shor's Threat to RSA/ECC & Introduction to Lattice Cryptography", type: "lecture" },
        { time: "11:00 AM – 11:30 AM", title: "Tea Break & Group Discussions", type: "break" },
        { time: "11:30 AM – 01:00 PM", title: "Lecture: NIST FIPS 203 (ML-KEM) & FIPS 204 (ML-DSA) Standards", type: "lecture" },
        { time: "01:00 PM – 02:00 PM", title: "Buffet Lunch", type: "hospitality" },
        { time: "02:00 PM – 04:30 PM", title: "Lab 4: Hands-on PQC Key Encapsulation & Digital Signatures with liboqs", type: "lab" },
        { time: "06:30 PM – 09:00 PM", title: "Official Workshop Gala Networking Dinner with Distinguished Guests", type: "gala" },
      ]
    },
    {
      date: "Friday, Dec 11, 2026",
      dayTitle: "Day 5: Capstone Lab, Hybrid TLS & Valedictory Ceremony",
      sessions: [
        { time: "08:45 AM – 09:30 AM", title: "Morning Tea & Project Briefing", type: "hospitality" },
        { time: "09:30 AM – 11:00 AM", title: "Lecture: Hybrid Quantum-Safe TLS 1.3 & Enterprise Migration Roadmaps", type: "lecture" },
        { time: "11:00 AM – 11:30 AM", title: "Mid-morning Refreshment Break", type: "break" },
        { time: "11:30 AM – 01:15 PM", title: "Lab 5: Capstone Project Deployment – Quantum-Resistant Web Tunnel", type: "lab" },
        { time: "01:15 PM – 02:15 PM", title: "Celebratory Farewell Lunch", type: "hospitality" },
        { time: "02:15 PM – 03:45 PM", title: "Capstone Presentations & Hackathon Evaluation", type: "keynote" },
        { time: "03:45 PM – 04:45 PM", title: "Valedictory Function, Certificate Distribution & High-Tea", type: "keynote" },
      ]
    }
  ]

  const dailyMenu = [
    {
      day: "Day 1 (Dec 7)",
      breakfast: "Steaming Idlis, Medu Vada, Sambar, Coconut Chutney, Fresh Fruits, Tea & Filter Coffee",
      lunch: "Paneer Butter Masala, Dal Makhani, Jeera Pulao, Butter Naan, Mixed Garden Salad, Gulab Jamun",
      eveningTea: "Assorted Cookies, Vegetable Cutlet, Green Mint Chutney, Masala Chai & Green Tea",
    },
    {
      day: "Day 2 (Dec 8)",
      breakfast: "Poha with Roasted Peanuts, Vegetable Upma, Banana, Boiled Eggs / Sprouts, Tea & Coffee",
      lunch: "Kadai Paneer, Yellow Dal Tadka, Veg Biryani with Raita, Tandoori Roti, Papad, Rasgulla",
      eveningTea: "Hot Onion Pakodas, Cashew Biscuits, Filter Coffee & Herbal Tea",
    },
    {
      day: "Day 3 (Dec 9)",
      breakfast: "Masala Dosa, Uttapam with Chutneys & Sambar, Fresh Papaya Slices, Coffee & Tea",
      lunch: "Methi Malai Matar, Chana Masala, Kashmiri Pulao, Garlic Naan, Cucumber Mint Raita, Gajar Halwa",
      eveningTea: "Crispy Samosas with Tamarind Dip, Bakery Cookies, Masala Chai & Lemon Tea",
    },
    {
      day: "Day 4 (Dec 10)",
      breakfast: "Aloo Paratha with Curd & Pickle, Fresh Fruit Platter, Boiled Eggs, Tea & Coffee",
      lunch: "Shahi Paneer, Dal Bukhara, Peas Pulao, Laccha Paratha, Corn & Bell Pepper Salad, Ice Cream",
      eveningTea: "Cocktail Samosas, Almond Tea Cake, Filter Coffee & Green Tea",
      specialDinner: "Executive Gala Networking Dinner: Live Pasta Counter, Mughlai Gravies, Tandoori Breads, Mocktails & Assorted Desserts",
    },
    {
      day: "Day 5 (Dec 11)",
      breakfast: "South Indian Special: Pongal with Ghee & Chutney, Poori with Potato Masala, Fresh Juice, Tea & Coffee",
      lunch: "Grand Farewell Feast: Dum Biryani (Veg/Non-Veg), Paneer Tikka Masala, Dal Maharani, Rumali Roti, Rasmalai",
      eveningTea: "High-Tea: Mysore Pak, Premium Sandwiches, Roasted Cashews, Special Filter Coffee",
    }
  ]

  return (
    <section id="schedule" className="py-20 bg-slate-50/70 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200 mb-3">
            <CalendarIcon className="w-4 h-4 text-purple-600" />
            December 7 – 11, 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Proposed Dates, Daily Schedule & Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A seamless schedule integrating technical lectures, dedicated 2.5-hour lab sessions, and executive catering throughout all 5 days.
          </p>

          {/* Toggle between Schedule and Menu (Whitish buttons) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveView('schedule')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeView === 'schedule'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              Day-by-Day Schedule
            </button>
            <button
              onClick={() => setActiveView('menu')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeView === 'menu'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'text-slate-600 hover:text-blue-700'
              }`}
            >
              <UtensilsIcon className="w-4 h-4" />
              Hospitality & Daily Menu
            </button>
          </div>
        </div>

        {/* Schedule View */}
        {activeView === 'schedule' && (
          <div>
            {/* Day Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
              {scheduleDays.map((d, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    selectedDay === idx
                      ? "bg-white border-blue-600 shadow-md shadow-blue-500/10"
                      : "bg-white/80 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="text-xs font-mono font-bold text-blue-700">Day {idx + 1}</div>
                  <div className="font-extrabold text-sm sm:text-base text-slate-900 truncate">Dec {7 + idx}</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block truncate">
                    {idx === 0 ? "Foundations" : idx === 1 ? "QKD Protocols" : idx === 2 ? "Repeaters" : idx === 3 ? "NIST PQC" : "Capstone"}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Day Timetable in Pure White Card */}
            <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                    {scheduleDays[selectedDay].date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {scheduleDays[selectedDay].dayTitle}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200">
                  <ClockIcon className="w-4 h-4 text-blue-600" />
                  Full Day: 08:30 AM – 05:00 PM
                </div>
              </div>

              <div className="space-y-3.5">
                {scheduleDays[selectedDay].sessions.map((session, sIdx) => {
                  let badgeColor = "bg-slate-100 text-slate-700 border-slate-200"
                  let label = "Session"

                  if (session.type === "lab") {
                    badgeColor = "bg-blue-50 text-blue-800 border-blue-200"
                    label = "Hands-on Lab"
                  } else if (session.type === "lecture") {
                    badgeColor = "bg-indigo-50 text-indigo-800 border-indigo-200"
                    label = "Concept Lecture"
                  } else if (session.type === "hospitality") {
                    badgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200"
                    label = "Meal & Networking"
                  } else if (session.type === "break") {
                    badgeColor = "bg-amber-50 text-amber-800 border-amber-200"
                    label = "Refreshments"
                  } else if (session.type === "gala") {
                    badgeColor = "bg-purple-50 text-purple-800 border-purple-200"
                    label = "Gala Evening"
                  }

                  return (
                    <div
                      key={sIdx}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all gap-3"
                    >
                      <div className="flex items-start md:items-center gap-4">
                        <div className="text-xs font-mono font-bold text-blue-800 shrink-0 min-w-[170px] flex items-center gap-1.5">
                          <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                          {session.time}
                        </div>
                        <div className="text-sm sm:text-base font-bold text-slate-800">
                          {session.title}
                        </div>
                      </div>

                      <span className={`self-start md:self-center text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${badgeColor}`}>
                        {label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Menu View in Pure White Cards */}
        {activeView === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyMenu.map((menu, mIdx) => (
              <div
                key={mIdx}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="font-extrabold text-slate-900 text-lg">{menu.day}</span>
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      Dec {7 + mIdx}
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-blue-800 flex items-center gap-1.5 mb-1">
                        <CoffeeIcon className="w-4 h-4 text-blue-600" />
                        Welcome Breakfast (08:30 AM)
                      </div>
                      <p className="text-slate-600 pl-5 leading-relaxed font-normal">{menu.breakfast}</p>
                    </div>

                    <div>
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5 mb-1">
                        <UtensilsIcon className="w-4 h-4 text-emerald-600" />
                        Executive Buffet Lunch (01:00 PM)
                      </div>
                      <p className="text-slate-600 pl-5 leading-relaxed font-normal">{menu.lunch}</p>
                    </div>

                    <div>
                      <div className="font-bold text-amber-800 flex items-center gap-1.5 mb-1">
                        <CoffeeIcon className="w-4 h-4 text-amber-600" />
                        Evening High-Tea & Snacks (04:00 PM)
                      </div>
                      <p className="text-slate-600 pl-5 leading-relaxed font-normal">{menu.eveningTea}</p>
                    </div>

                    {menu.specialDinner && (
                      <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 mt-3">
                        <div className="font-bold text-purple-900 text-xs uppercase mb-1 flex items-center gap-1">
                          ★ Special Evening Feature
                        </div>
                        <p className="text-xs text-purple-800 leading-relaxed font-medium">{menu.specialDinner}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between font-medium">
                  <span>Included with registration</span>
                  <span>Veg & Jain options available</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
