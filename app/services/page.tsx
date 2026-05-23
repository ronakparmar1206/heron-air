import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BoxesIcon,
  Building2Icon,
  ClipboardCheckIcon,
  GaugeIcon,
  Settings2Icon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react"

import { HomeFooter } from "@/components/home/home-footer"
import { HomeHeader } from "@/components/home/home-header"
import { ServiceCounterGrid } from "@/components/services/service-counter-grid"

const servicePillars = [
  {
    icon: WrenchIcon,
    title: "Maintenance & Troubleshooting",
    description:
      "Fast diagnosis, preventive maintenance, and on-site support to keep compressor systems running with minimal downtime.",
  },
  {
    icon: Settings2Icon,
    title: "Engineering & Commissioning",
    description:
      "System setup, calibration, and startup support for reliable performance from day one of operation.",
  },
  {
    icon: BoxesIcon,
    title: "Spares & Critical Parts",
    description:
      "Reliable sourcing for burners, boilers, valves, compressor accessories, and service-ready industrial components.",
  },
  {
    icon: GaugeIcon,
    title: "Performance Optimization",
    description:
      "Air delivery checks, efficiency tuning, and system optimization support to improve compressor reliability and output.",
  },
] as const

const industries = [
  "Chemical plants",
  "Textile plants",
  "Pharmaceutical facilities",
  "Industrial utilities",
  "Manufacturing lines",
  "Process plants",
] as const

const workflow = [
  {
    step: "01",
    title: "Site Review",
    description:
      "We study the existing setup, failure points, operating conditions, and service priorities before recommending a plan.",
  },
  {
    step: "02",
    title: "Technical Planning",
    description:
      "Our team maps the right parts, engineering support, manpower, and execution path for the required scope.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "From commissioning and troubleshooting to service adjustments and upgrades, support is delivered with practical plant awareness.",
  },
  {
    step: "04",
    title: "After-Service Support",
    description:
      "We stay available for follow-up checks, spare needs, optimization, and repeat maintenance cycles.",
  },
] as const

const highlights = [
  "Operation and maintenance support for industrial systems",
  "Energy-audit-oriented performance improvements",
  "Compressor health checks and efficiency tuning",
  "Spare supply and after-sales technical support",
] as const

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f3f5f7] transition-colors dark:bg-[#08101d]">
      <HomeHeader />

      <main>
        <section className="relative overflow-hidden bg-[#111827] text-white">
          <div className="absolute inset-0">
            <Image
              src="/heron/image.png"
              alt="Heron Air industrial service systems"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,10,18,0.92)_0%,rgba(7,10,18,0.78)_46%,rgba(7,10,18,0.54)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.16),transparent_30%)]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.8fr)] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.28em] text-white/84 uppercase backdrop-blur-sm">
                  <ShieldCheckIcon className="size-4 text-red-400" />
                  Heron Air Services
                </div>
                <h1 className="mt-6 text-[2.15rem] leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4.1rem]">
                  Industrial service support built for uptime, speed, and plant
                  confidence.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-[1.05rem]">
                  We handle commissioning, troubleshooting, spare support,
                  operation assistance, and performance-focused service for
                  industrial teams that need dependable response and technical
                  clarity.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-red-600 px-6 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-700"
                  >
                    Request Service Support
                  </Link>
                  <Link
                    href="/#products"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-white/18 bg-white/8 px-6 text-sm font-semibold tracking-[0.08em] text-white uppercase backdrop-blur-sm transition hover:bg-white/14"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.1rem] border border-white/12 bg-white/10 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.32)] backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm tracking-[0.22em] text-white/60 uppercase">
                      Service Coverage
                    </p>
                    <p className="mt-3 text-3xl font-semibold tracking-tight">
                      End-to-end field execution
                    </p>
                  </div>
                  <GaugeIcon className="size-10 text-red-400" />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="rounded-xl border border-white/10 bg-black/12 px-4 py-3 text-sm text-white/82"
                    >
                      {industry}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                  <p className="text-sm font-medium text-white/88">
                    Support includes:
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    Troubleshooting, commissioning, energy audits, compressor
                    optimization, manpower support, and spare supply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#090c12] text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111f_0%,#0f1b2d_38%,#1b1626_70%,#2a1016_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_76%_26%,rgba(239,68,68,0.18),transparent_26%),radial-gradient(circle_at_38%_82%,rgba(250,204,21,0.08),transparent_22%)]" />
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:110px_110px] opacity-[0.14]" />
            <div className="absolute -top-20 left-[8%] h-56 w-56 rounded-full bg-sky-400/12 blur-3xl" />
            <div className="absolute top-1/3 right-[12%] h-72 w-72 rounded-full bg-red-500/14 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.34))]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
            <div className="grid min-h-[620px] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
              <div className="max-w-2xl self-center pt-8 lg:pt-16">
                <p className="text-sm font-semibold tracking-[0.04em] text-lime-400 sm:text-[1.05rem]">
                  with our highly experienced professionals
                </p>
                <h2 className="mt-8 text-[2.15rem] leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-[4rem]">
                  We work through every aspect in projects with disciplined
                  industrial support.
                </h2>
                <p className="mt-7 max-w-xl text-base leading-8 text-white/74 sm:text-[1.02rem]">
                  From on-site problem solving to planned execution, our team
                  supports industrial projects with dependable coordination,
                  faster response, and practical engineering experience.
                </p>

                <div className="mt-8">
                  <Link
                    href="/#contact"
                    className="inline-flex h-13 items-center justify-center border-b-2 border-white/35 bg-transparent px-0 text-base font-semibold tracking-[0.08em] text-white uppercase transition hover:text-red-300"
                  >
                    We Do It For You With Efficiency
                  </Link>
                </div>
              </div>

              <div className="relative lg:pl-10">
                <ServiceCounterGrid />

                <div className="absolute -top-5 left-6 hidden rounded-full border border-red-400/25 bg-red-500/10 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.22em] text-red-200 uppercase backdrop-blur-sm lg:inline-flex">
                  Proven Service Scale
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-red-700 px-9 text-base font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-800"
              >
                Inquire Now!
              </Link>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePillars.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="group rounded-[1rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_20px_50px_rgba(2,6,23,0.32)]"
                >
                  <div className="flex size-13 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white dark:bg-red-500/10 dark:text-red-300">
                    <Icon className="size-6" />
                  </div>
                  <h2 className="mt-5 text-[1.35rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[0.98rem] leading-7 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-[#111827] shadow-[0_30px_70px_rgba(15,23,42,0.14)] dark:border-white/10">
              <Image
                src="/heron/air-compressor-spare-part-heron-air.jpg"
                alt="Heron Air compressor spare parts"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(7,10,18,0.78)_100%)]" />
              <div className="absolute right-5 bottom-5 left-5 rounded-[1rem] border border-white/12 bg-white/12 p-5 backdrop-blur-md">
                <p className="text-sm tracking-[0.2em] text-white/64 uppercase">
                  Why clients call us
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Practical execution for real plant conditions, not generic
                  service promises.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-flex border border-red-200 bg-white px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-red-700 uppercase shadow-[0_8px_20px_rgba(220,38,38,0.06)] dark:border-red-400/20 dark:bg-white/6 dark:text-red-300">
                What We Handle
              </div>
              <h2 className="mt-5 text-[2rem] leading-tight font-semibold tracking-tight text-slate-950 sm:text-[2.7rem] dark:text-white">
                Clear service coverage across support, execution, and parts
                supply.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                Our service offering is organized into practical categories so
                plant teams can quickly understand the scope, response style,
                and technical depth available from Heron Air.
              </p>

              <div className="mt-8 grid gap-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_12px_35px_rgba(15,23,42,0.04)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_12px_35px_rgba(2,6,23,0.28)]"
                  >
                    <BadgeCheckIcon className="mt-0.5 size-5 shrink-0 text-red-600" />
                    <p className="text-[0.98rem] leading-7 text-slate-700 dark:text-slate-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 transition-colors sm:py-16 lg:py-20 dark:bg-[#08101d]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-slate-700 uppercase dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
                Execution Flow
              </div>
              <h2 className="mt-5 text-[2rem] leading-tight font-semibold tracking-tight text-slate-950 sm:text-[2.65rem] dark:text-white">
                A service process that feels controlled from first call to final
                support.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {workflow.map((item) => (
                <article
                  key={item.step}
                  className="relative overflow-hidden rounded-[1rem] border border-slate-200 bg-[#f8fafc] p-6 dark:border-white/10 dark:bg-[#0f1727]"
                >
                  <div className="text-5xl leading-none font-semibold tracking-tight text-red-600/20">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[1.4rem] bg-[#171a23] text-white shadow-[0_32px_80px_rgba(15,23,42,0.22)]">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.25em] text-white/82 uppercase">
                  <Building2Icon className="size-4 text-red-400" />
                  Industries We Serve
                </div>
                <h2 className="mt-5 max-w-2xl text-[2rem] leading-tight font-semibold tracking-tight sm:text-[2.7rem]">
                  Support shaped for demanding industrial environments.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
                  Heron Air supports plant teams that need dependable technical
                  response, strong spare availability, and field work that fits
                  actual operating conditions instead of generic vendor
                  routines.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <div
                      key={industry}
                      className="rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/84"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 bg-white/6 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:border-white/10">
                <div>
                  <ClipboardCheckIcon className="size-10 text-red-400" />
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    Need a service-led quote?
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/70">
                    Share your plant requirement and we can align the right mix
                    of engineering support, spare supply, commissioning, or
                    troubleshooting assistance.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-6 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-700"
                >
                  Talk To Heron Air
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
