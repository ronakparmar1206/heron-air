import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckIcon,
  GaugeIcon,
  MonitorIcon,
  TimerResetIcon,
  WindIcon,
} from "lucide-react"

const hero = {
  eyebrow: "Heron Air - Since 2002",
  titleLead: "Top Manufacturers of",
  highlight: "Compressors",
  // outline: "Booster",
  subTitle: "NORTH AMERICA — NOW ESTABLISHING THEIR FOOTPRINT",
  description:
    "Proven across global industries for stable pressure output, faster air delivery, and long service life.",
  image: "/heron/heron-air-compressors-manufacturer-slider.png",
  imageAlt: "High pressure booster air compressor by Heron Air",
  hud: [
    { label: "Output Pressure", value: "High", unit: "PSI", width: "88%" },
    { label: "Air Delivery", value: "Fast", unit: "CFM", width: "72%" },
    { label: "Duty Cycle", value: "Stable", unit: "24/7", width: "82%" },
  ],
} as const

const trustBadges = ["Best Quality", "On Time Delivery", "Professional Team"]

export function HeroSlider() {
  return (
    <section className="hero-gradient-bg relative overflow-hidden border-b border-slate-200/80 bg-[#fbfaf7] text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#08101d] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_74%_36%,rgba(220,38,38,0.13),transparent_42%),radial-gradient(ellipse_at_18%_82%,rgba(14,165,233,0.1),transparent_36%)] dark:bg-[radial-gradient(ellipse_at_74%_36%,rgba(248,113,113,0.12),transparent_42%),radial-gradient(ellipse_at_18%_82%,rgba(56,189,248,0.12),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white/70 to-transparent dark:from-[#08101d]" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-12 sm:min-h-[720px] sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] lg:px-8">
        <div className="max-w-[34rem]">
          <div className="inline-flex max-w-full items-center gap-2 rounded-md border border-red-200 bg-red-50/75 px-3 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-red-700 uppercase shadow-[0_10px_28px_rgba(220,38,38,0.06)] dark:border-red-400/25 dark:bg-red-500/10 dark:text-red-200">
            <span className="size-1.5 rounded-full bg-red-600" />
            <span className="truncate">{hero.eyebrow}</span>
          </div>

          <h1 className="mt-7 text-3xl leading-tight font-extrabold tracking-tight text-slate-950 uppercase sm:text-4xl lg:text-5xl dark:text-white">
            <span className="block">
              {hero.titleLead}{" "}
              <span className="text-red-600">{hero.highlight}</span>
              <span className="ml-2">IN INDIA</span>
            </span>
            {/* titleTail removed and merged into subtitle for better layout */}
          </h1>
          {hero.subTitle ? (
            <p className="mt-3 text-sm font-medium tracking-wide text-slate-700 uppercase sm:text-base dark:text-slate-300">
              {hero.subTitle}
            </p>
          ) : null}

          <p className="mt-6 max-w-[30rem] text-[0.98rem] leading-7 text-slate-600 dark:text-slate-300">
            {hero.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 rounded-md border border-white/80 bg-white/78 px-3 py-2 text-[0.72rem] font-semibold text-slate-700 shadow-[0_8px_22px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-white/10 dark:bg-white/8 dark:text-slate-200"
              >
                <CheckIcon className="size-3.5 text-red-600" />
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-6 text-sm font-bold tracking-[0.08em] text-white uppercase shadow-[0_12px_28px_rgba(220,38,38,0.25)] transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-[0_16px_34px_rgba(220,38,38,0.32)]"
            >
              Request Quote
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link
              href="/#products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/45 px-6 text-sm font-bold tracking-[0.08em] text-slate-800 uppercase transition hover:-translate-y-0.5 hover:border-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/40"
            >
              <MonitorIcon className="size-4" />
              Explore Products
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[400px] items-center justify-center sm:min-h-[500px] lg:min-h-[560px]">
          <div className="hero-ring hero-ring-outer" />
          <div className="hero-ring hero-ring-main" />
          <div className="hero-ring hero-ring-dashed" />

          <svg
            className="absolute inset-0 z-0 size-full"
            viewBox="0 0 580 520"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="hero-flow hero-flow-one"
              d="M78 248 Q158 188 250 226 Q344 264 426 202"
            />
            <path
              className="hero-flow hero-flow-two"
              d="M94 300 Q184 336 282 300 Q372 268 462 308"
            />
            <path
              className="hero-flow hero-flow-three"
              d="M118 208 Q210 154 318 180 Q392 198 468 158"
            />
            <path
              d="M36 42H72M36 42V78M544 42H508M544 42V78M36 478H72M36 478V442M544 478H508M544 478V442"
              stroke="rgb(220 38 38 / 0.25)"
              strokeWidth="1.2"
            />
            <circle cx="290" cy="260" r="12" stroke="rgb(220 38 38 / 0.18)" />
            <circle cx="290" cy="260" r="4" stroke="rgb(220 38 38 / 0.35)" />
          </svg>

          <div className="hero-platform absolute bottom-[12%] left-1/2 z-0 h-8 w-[70%] -translate-x-1/2 rounded-full bg-red-500/16 blur-xl" />

          <div className="hero-product-float relative z-10 w-full max-w-[620px]">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              width={900}
              height={700}
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-auto max-h-[330px] w-full object-contain drop-shadow-[0_28px_44px_rgba(15,23,42,0.2)] sm:max-h-[470px] lg:max-h-[540px]"
            />
          </div>

          {hero.hud.map((hud, hudIndex) => {
            const Icon =
              hudIndex === 0
                ? GaugeIcon
                : hudIndex === 1
                  ? WindIcon
                  : TimerResetIcon
            const position =
              hudIndex === 0
                ? "top-[8%] right-[10%]"
                : hudIndex === 1
                  ? "right-[8%] bottom-[28%]"
                  : "left-[10%] bottom-[18%]"

            return (
              <div
                key={hud.label}
                className={`absolute z-20 hidden min-w-[9rem] rounded-lg border border-white/95 bg-white/82 p-3 shadow-[0_14px_35px_rgba(15,23,42,0.13)] backdrop-blur-xl lg:block dark:border-white/10 dark:bg-[#111b2c]/82 ${position}`}
              >
                <div className="flex items-center gap-2 text-[0.58rem] font-bold tracking-[0.14em] text-slate-400 uppercase dark:text-slate-300">
                  <Icon className="size-3 text-red-600" />
                  {hud.label}
                </div>
                <div className="mt-2 text-xl leading-none font-black text-slate-950 dark:text-white">
                  {hud.value}
                  <small className="ml-1 text-[0.64rem] font-semibold text-slate-400 dark:text-slate-300">
                    {hud.unit}
                  </small>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/12">
                  <div
                    className="hero-hud-bar h-full rounded-full bg-linear-to-r from-red-600 to-sky-500"
                    style={{ width: hud.width }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
