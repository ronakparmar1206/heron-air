import { FactoryIcon, RocketIcon, ShieldCheckIcon, TrophyIcon } from "lucide-react"

const highlights = [
  {
    title: "300+",
    subtitle: "Machines Dispatched Monthly",
    description:
      "Consistent monthly dispatch capacity with reliable production planning and nationwide delivery coverage.",
    icon: RocketIcon,
    tone: "from-red-600 to-red-700",
  },
  {
    title: "2025",
    subtitle: "Highest High-Pressure Output",
    description:
      "Recognized for manufacturing the highest number of high pressure compressor units in 2025.",
    icon: TrophyIcon,
    tone: "from-slate-900 to-slate-700",
  },
  {
    title: "24/7",
    subtitle: "Industrial Reliability",
    description:
      "Built for continuous-duty operations where stability, uptime, and dependable pressure matter most.",
    icon: ShieldCheckIcon,
    tone: "from-[#0f4c81] to-[#1364aa]",
  },
  {
    title: "Global",
    subtitle: "Sales + Support Network",
    description:
      "Trusted by clients across international markets with dependable supply, installations, and responsive support.",
    icon: FactoryIcon,
    tone: "from-[#111827] to-[#334155]",
  },
] as const

export function FeatureStrip() {
  return (
    <section
      id="about"
      className="relative z-20 overflow-hidden bg-[#f8fafc] px-4 py-12 transition-colors sm:px-6 lg:px-8 dark:bg-[#08101d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(220,38,38,0.11),transparent_35%),radial-gradient(circle_at_88%_82%,rgba(14,165,233,0.1),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.24em] text-red-700 uppercase dark:text-red-300">
            <span className="h-px w-7 bg-red-600" />
            Why Heron Air
          </div>
          <h2 className="mt-3 max-w-xl text-[2.15rem] leading-[0.96] font-black tracking-tight text-slate-950 uppercase sm:text-[3rem] dark:text-white">
            Proven
            <br />
            <span className="text-red-600 dark:text-red-300">Scale</span>{" "}
            Results
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.subtitle}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-[#0f1727]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.tone}`}
                />

                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 dark:border-white/10 dark:bg-white/6 dark:text-white">
                  <Icon className="size-5" />
                </div>

                <p className="text-4xl leading-none font-black tracking-tight text-slate-950 dark:text-white">
                  {item.title}
                </p>
                <h3 className="mt-2 text-[1.02rem] font-bold tracking-tight text-red-700 dark:text-red-300">
                  {item.subtitle}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
