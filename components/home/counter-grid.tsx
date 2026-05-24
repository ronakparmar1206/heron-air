"use client"

import CountUp from "react-countup"
import { useEffect, useRef, useState } from "react"

export default function CounterGrid() {
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
    <div ref={ref} className="mt-12 grid gap-4 sm:grid-cols-2">
      <div className="rounded-[0.85rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_12px_30px_rgba(2,6,23,0.28)]">
        <p className="text-2xl font-semibold text-red-600">
          {visible ? <CountUp end={2002} duration={2} /> : 0}
        </p>
        <p className="mt-2 text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-slate-300">
          Established
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[0.85rem] border border-cyan-200 bg-linear-to-br from-sky-50 via-white to-red-50 px-5 py-4 shadow-[0_16px_40px_rgba(14,165,233,0.16)] dark:border-cyan-400/30 dark:bg-linear-to-br dark:from-[#102236] dark:via-[#0f1727] dark:to-[#2a1622] dark:shadow-[0_16px_40px_rgba(14,165,233,0.2)]">
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-red-300/30 blur-2xl dark:bg-red-500/20" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-400/20" />
        <p className="relative text-3xl font-black text-sky-700 dark:text-cyan-300">
          {visible ? <CountUp end={2148} duration={2} /> : 0}+
        </p>
        <p className="relative mt-1 text-xs tracking-[0.2em] text-slate-700 uppercase dark:text-slate-200">
          Clients Served
        </p>
        <p className="relative mt-3 inline-flex items-center rounded-full border border-cyan-300/70 bg-white/75 px-3 py-1 text-[0.66rem] font-bold tracking-[0.15em] text-slate-700 uppercase dark:border-cyan-400/40 dark:bg-white/10 dark:text-slate-100">
          24/7 Support Mindset
        </p>
      </div>
    </div>
  )
}
