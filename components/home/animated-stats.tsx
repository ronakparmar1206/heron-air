"use client"

import CountUp from "react-countup"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "2002", label: "Started", className: "bg-red-600 text-white" },
  { value: "2148", label: "Customers", className: "bg-slate-950 text-white" },
  {
    value: "1248",
    label: "Projects Completed",
    className: "bg-red-600 text-white",
  },
  { value: "21", label: "Team Members", className: "bg-slate-950 text-white" },
]

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-1 gap-0 overflow-hidden rounded-[0.85rem] border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.1)] md:grid-cols-4 dark:border-white/10 dark:shadow-[0_24px_60px_rgba(2,6,23,0.34)]"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`px-8 py-12 text-center ${stat.className}`}
        >
          <div className="text-5xl font-semibold tracking-tight sm:text-6xl">
            {visible ? (
              <CountUp
                end={Number(String(stat.value).replace(/\D/g, ""))}
                duration={2}
                separator=","
              />
            ) : (
              0
            )}
            {String(stat.value).includes("+") ? "+" : ""}
          </div>
          <p className="mt-3 text-sm tracking-[0.18em] text-white/88 uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
