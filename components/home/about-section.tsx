"use client"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import CounterGrid from "./counter-grid"

const pillars = [
  {
    number: "01",
    title: "Our Credibility",
    description:
      "Trusted by industrial buyers for durable systems, responsive support, and reliable output across demanding applications.",
  },
  {
    number: "02",
    title: "Core Values",
    description:
      "We build with accountability, precision, and customer-first thinking so every compressor performs with consistency.",
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "Our manufacturing and service ecosystem helps us deliver dependable quality, scale production, and support after-sales needs.",
  },
] as const

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fa] px-4 py-14 transition-colors sm:px-6 lg:px-8 lg:py-20 dark:bg-[#0a1322]">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
      <div className="absolute top-10 left-1/2 h-64 w-64 -translate-x-[150%] rounded-full bg-red-100/45 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/4 rounded-full bg-sky-100/45 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
          <div className="grid min-h-[500px] grid-cols-[1.02fr_0.98fr] gap-3">
            <div className="group relative overflow-hidden rounded-[0.75rem] border border-slate-200 bg-linear-to-b from-[#2d2f33] via-[#474b49] to-[#6c706c] shadow-[0_20px_50px_rgba(15,23,42,0.14)]">
              <Image
                src="/heron/heron-about.jpg"
                alt="Heron Air compressor product"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-contain object-center py-3 transition duration-700 group-hover:scale-[1.01]"
              />
            </div>

            <div className="grid gap-3">
              <div className="group relative overflow-hidden rounded-[0.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#111b2c]">
                <Image
                  src="/heron/heron-about1.jpg"
                  alt="Heron Air compressor assembly detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 24vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="group relative overflow-hidden rounded-[0.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#111b2c]">
                <Image
                  src="/heron/heron-about2.jpg"
                  alt="Heron Air filtration and component detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 24vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="inline-flex border border-red-200 bg-white px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-red-700 uppercase shadow-[0_8px_20px_rgba(220,38,38,0.06)] dark:border-red-400/20 dark:bg-white/6 dark:text-red-300">
              About Heron Air
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-[2.65rem] dark:text-white">
              Total compressed air solutions built with industrial clarity.
            </h2>
            <div className="mt-5 h-1 w-24 bg-linear-to-r from-red-600 to-sky-600" />
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-[1.02rem] dark:text-slate-300">
              Founded in 2002, Heron Air has grown with a simple focus: engineer
              dependable compressor systems that combine strong output,
              efficient performance, and long-term service support for modern
              industrial use.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-[1.02rem] dark:text-slate-300">
              From manufacturing to consultation and after-sales service, we
              build every interaction around reliability, response time, and
              product confidence so clients feel backed by a serious long-term
              partner.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="h-11 rounded-md bg-red-600 px-6 text-sm font-semibold tracking-[0.08em] text-white uppercase hover:bg-red-700">
                Read More
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-md border-slate-300 bg-white px-6 text-sm font-semibold tracking-[0.08em] text-slate-800 uppercase hover:bg-slate-50 dark:border-white/12 dark:bg-[#101a2b] dark:text-white dark:hover:bg-[#152136]"
              >
                Our Story
              </Button>
            </div>

            {/* animated counters start when visible */}
            <CounterGrid />
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[0.95rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] md:grid-cols-3 dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_20px_50px_rgba(2,6,23,0.32)]">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.number}
              className={`group relative px-7 py-8 transition hover:bg-slate-50 sm:px-8 lg:px-10 ${
                index < pillars.length - 1
                  ? "border-b border-slate-200 md:border-r md:border-b-0 dark:border-white/10"
                  : ""
              } dark:hover:bg-white/3`}
            >
              <div className="flex items-end gap-4">
                <span className="text-5xl leading-none font-semibold tracking-tight text-red-600 sm:text-6xl">
                  {pillar.number}
                </span>
                <span className="mb-1.5 text-3xl leading-none text-red-500">
                  .
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-sm text-[0.96rem] leading-7 text-slate-600 dark:text-slate-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
