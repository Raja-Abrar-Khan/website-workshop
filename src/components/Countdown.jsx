import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-12-07T09:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ]

  return (
    <div className="w-full max-w-lg mx-auto my-7">
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
        {units.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-3 sm:py-4 px-2 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-slate-900 tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 mt-1 uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
