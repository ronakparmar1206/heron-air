"use client"

import CountUp from "react-countup"
import { useEffect, useRef, useState } from "react"

const serviceStats = [
  { value: 2002, label: "Founding Year" },
  { value: 2148, label: "Happy Customers" },
  { value: 348, label: "Company Work With Us" },
  { value: 2, label: "Offices" },
  { value: 21, label: "Team Members" },
  { value: 1248, label: "Projects Completed" },
] as const

export function ServiceCounterGrid() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="grid overflow-hidden rounded-[1.2rem] border border-white/14 bg-white/6 shadow-[0_30px_80px_rgba(2,6,23,0.24)] backdrop-blur-md sm:grid-cols-2"
    >
      {serviceStats.map((stat, index) => (
        <div
          key={stat.label}
          className={`flex min-h-[170px] flex-col items-center justify-center px-6 py-8 text-center ${
            index % 2 === 0 ? "sm:border-r sm:border-white/16" : ""
          } ${
            index < serviceStats.length - 2 ? "border-b border-white/16" : ""
          }`}
        >
          <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {visible ? <CountUp end={stat.value} duration={2.1} /> : 0}
          </p>
          <p className="mt-4 max-w-[14rem] text-[0.82rem] leading-6 font-medium tracking-[0.18em] text-white/78 uppercase sm:text-[0.9rem]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
