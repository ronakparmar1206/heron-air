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
    <div ref={ref} className="mt-12 grid gap-4 sm:grid-cols-3">
      <div className="rounded-[0.85rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_12px_30px_rgba(2,6,23,0.28)]">
        <p className="text-2xl font-semibold text-red-600">
          {visible ? <CountUp end={2002} duration={2} /> : 0}
        </p>
        <p className="mt-2 text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-slate-300">
          Established
        </p>
      </div>

      <div className="rounded-[0.85rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_12px_30px_rgba(2,6,23,0.28)]">
        <p className="text-2xl font-semibold text-sky-700">
          {visible ? <CountUp end={2148} duration={2} /> : 0}+
        </p>
        <p className="mt-2 text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-slate-300">
          Clients Served
        </p>
      </div>

      <div className="rounded-[0.85rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_12px_30px_rgba(2,6,23,0.28)]">
        <p className="text-2xl font-semibold text-slate-950 dark:text-white">
          24/7
        </p>
        <p className="mt-2 text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-slate-300">
          Support Mindset
        </p>
      </div>
    </div>
  )
}
