"use client"

import CountUp from "react-countup"
import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "2002", label: "Established" },
  { value: "2148", label: "Customers" },
  {
    value: "1248",
    label: "Projects Completed",
  },
  { value: "21", label: "Team Members" },
  {
    value: "300+",
    label: "Machines Dispatched Every Month",
  },
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
      className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group rounded-xl border border-slate-200 bg-white px-6 py-7 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[#0f1727]"
        >
          <div className="mb-4 h-1 w-14 rounded-full bg-slate-200 mx-auto dark:bg-white/15">
            <div
              className={`h-full rounded-full ${index % 2 === 0 ? "bg-red-600" : "bg-sky-500"}`}
            />
          </div>

          <div className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
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
          <p className="mt-2 text-[0.68rem] leading-5 font-semibold tracking-[0.12em] text-slate-500 uppercase sm:text-[0.74rem] dark:text-slate-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
