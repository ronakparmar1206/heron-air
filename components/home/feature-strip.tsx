import {
  ScanSearchIcon,
  TruckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react"

const features: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: "Best Quality",
    description:
      "Premium quality materials with the adopting of latest technology",
    icon: ScanSearchIcon,
  },
  {
    title: "Distribution Network",
    description: "100% Delivery on time within India by our vast distribution",
    icon: TruckIcon,
  },
  {
    title: "Professional Team",
    description: "Highly experienced professionals team with required skills",
    icon: UsersIcon,
  },
]

export function FeatureStrip() {
  return (
    <section
      id="about"
      className="relative z-20 -mt-14 bg-white px-4 pb-10 transition-colors sm:px-6 md:-mt-22 md:pb-14 lg:px-8 dark:bg-[#08101d]"
    >
      <div className="mx-auto max-w-[72rem]">
        <div className="overflow-hidden rounded-none border border-slate-200/90 bg-white shadow-[0_26px_70px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_26px_70px_rgba(2,6,23,0.36)]">
          <div className="grid md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={`group relative px-7 py-7 text-center transition-colors sm:px-9 sm:py-8 md:px-7 lg:px-9 ${
                    index < features.length - 1
                      ? "border-b border-slate-200 md:border-r md:border-b-0 dark:border-white/10"
                      : ""
                  }`}
                >
                  <div className="mx-auto mb-5 flex size-15 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition group-hover:border-red-200 group-hover:text-red-700 dark:border-white/10 dark:bg-[#131d31] dark:text-white">
                    <Icon className="size-7 stroke-[1.55]" />
                  </div>
                  <h2 className="text-[1.4rem] font-medium tracking-tight text-slate-900 lg:text-[1.85rem] dark:text-white">
                    {feature.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-[16rem] text-[0.95rem] leading-7 text-slate-500 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
