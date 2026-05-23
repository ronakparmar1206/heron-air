import Image from "next/image"
import Link from "next/link"
import {
  BadgeCheckIcon,
  DownloadIcon,
  HandHeartIcon,
  HeartHandshakeIcon,
  PhoneCallIcon,
  ScrollTextIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from "lucide-react"

import { HomeFooter } from "@/components/home/home-footer"
import { HomeHeader } from "@/components/home/home-header"

const whyUsCards = [
  {
    icon: HeartHandshakeIcon,
    title: "Happy Clients",
    description: "1854+ customer relationships built across varied industries.",
  },
  {
    icon: ScrollTextIcon,
    title: "Finished Works",
    description:
      "1248+ industrial compressor deliveries and service assignments.",
  },
] as const

const credibilityPoints = [
  "Highly experienced professionals",
  "Ethical business policies",
  "Customized compressed air solutions",
  "Service support based on operating needs",
  "Vast distribution network",
  "Reliable project coordination",
  "Complete client satisfaction focus",
  "Proactive after-sales support",
] as const

const aboutColumns = [
  [
    "Founded in Ahmedabad, Heron Air has grown around one clear purpose: delivering dependable compressor systems with practical industrial value and responsive customer support.",
    "We supply air compressors, compressor accessories, air receiver tanks, and related service support for buyers who need stable output, low noise, and long-running performance.",
    "Our compressor range covers different operating needs, from production lines that require steady compressed air flow to specialized industrial setups that demand performance consistency.",
  ],
  [
    "We back product supply with technical consultation, servicing, overhauling, spare support, and maintenance guidance so clients can depend on one serious long-term partner.",
    "Heron Air solutions support industries including pharmaceutical, chemical, food processing, packaging, automotive, oil and gas, and general manufacturing operations.",
    "The result is a business built on reliability, operating confidence, and repeat customer trust rather than one-time delivery alone.",
  ],
] as const

const coreValues = [
  "Teamwork and coordinated execution across departments",
  "Responsibility and fast response to customer requirements",
  "Diversity in product range and industrial application support",
  "Excellence in quality, performance, and consistency",
  "Understanding of both plant conditions and customer priorities",
  "Integrity in service, supply, and technical guidance",
  "Leadership through long-term support and product confidence",
  "Brand promise of dependable delivery and after-sales care",
] as const

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] transition-colors dark:bg-[#08101d]">
      <div className="bg-red-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white/88">
            <span>Welcome To Heron Air</span>
            <span>+91 9904 913 616</span>
            <span>+91 8128 333 901</span>
            <span>info@heronair.in</span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-white">
            <span className="inline-flex items-center gap-2">
              <DownloadIcon className="size-3.5" />
              Download Brochure
            </span>
            <span className="inline-flex items-center gap-2">
              <PhoneCallIcon className="size-3.5" />
              Call Us
            </span>
          </div>
        </div>
      </div>

      <HomeHeader />

      <main>
        <section className="bg-white transition-colors dark:bg-[#0a1322]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16 lg:px-8 lg:py-20">
            <div>
              <div className="inline-flex border border-red-200 bg-red-50 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-red-700 uppercase dark:border-red-400/20 dark:bg-red-500/10 dark:text-red-300">
                Why Us
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-[3.3rem] dark:text-white">
                Why industrial buyers keep choosing Heron Air.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                We offer compressor systems built with dependable materials,
                disciplined manufacturing standards, and service support that
                stays practical for real industrial operations. Every delivery
                is shaped around uptime, output stability, and long-term buyer
                confidence.
              </p>
            </div>

            <div className="space-y-5">
              {whyUsCards.map((card) => {
                const Icon = card.icon

                return (
                  <article
                    key={card.title}
                    className="flex items-start gap-4 rounded-[1rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_16px_40px_rgba(2,6,23,0.3)]"
                  >
                    <div className="flex size-15 shrink-0 items-center justify-center rounded-full border border-lime-300/60 bg-lime-50 text-lime-600 dark:border-lime-400/25 dark:bg-lime-500/10 dark:text-lime-300">
                      <Icon className="size-7" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {card.title}
                      </h2>
                      <p className="mt-2 text-[0.98rem] leading-7 text-slate-600 dark:text-slate-300">
                        {card.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden text-white">
          <Image
            src="/heron/heron-services-bg.jpg"
            alt="Heron Air compressor systems background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.68)_48%,rgba(0,0,0,0.76)_100%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-22">
            <div>
              <h2 className="max-w-xl text-4xl leading-tight font-semibold tracking-tight sm:text-[3.1rem]">
                The strengths below keep reinforcing our{" "}
                <span className="text-red-500">credibility</span>.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/64">
                Some of the reasons clients continue to trust Heron Air across
                compressor supply and service needs:
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {credibilityPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <BadgeCheckIcon className="mt-1 size-4 shrink-0 text-pink-500" />
                    <p className="text-sm leading-7 text-white/82">{point}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/#products"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-red-700 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-800"
              >
                View Products
              </Link>
            </div>

            <div className="self-center rounded-[1.15rem] border border-white/12 bg-white/6 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm">
              <h2 className="text-4xl font-semibold tracking-tight">
                Client <span className="text-red-500">Satisfaction</span>
              </h2>
              <p className="mt-6 text-[1rem] leading-8 text-white/78">
                Attaining and maintaining customer trust remains central to the
                way we operate. We focus on understanding industrial
                requirements precisely, recommending dependable compressor
                solutions, and supporting every order with responsible service
                communication.
              </p>
              <p className="mt-4 text-[1rem] leading-8 text-white/78">
                That practical, response-led approach helps Heron Air build
                stronger buyer confidence, repeat business, and a more reliable
                reputation across diverse operating environments.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white transition-colors dark:bg-[#0a1322]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-22">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-slate-700 uppercase dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
                About Heron Air
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-[3.2rem] dark:text-white">
                Total compressed air solutions provider.
              </h2>
              <p className="mt-5 text-lg text-slate-500 dark:text-slate-300">
                Compressor systems, spares, technical support, and long-term
                industrial service confidence.
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              {aboutColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-6">
                  {column.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[1rem] leading-8 text-slate-600 dark:text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-14 flex justify-center gap-3">
              {[
                SearchCheckIcon,
                ShieldCheckIcon,
                WrenchIcon,
                HandHeartIcon,
              ].map((Icon, index) => (
                <span
                  key={index}
                  className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500 dark:border-white/10 dark:bg-white/6 dark:text-slate-300"
                >
                  <Icon className="size-4.5" />
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden text-white">
          <Image
            src="/heron/heron-testimonial.jpg"
            alt="Heron Air industrial machinery"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/74" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.64)_50%,rgba(0,0,0,0.76)_100%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-[3rem]">
                Our <span className="text-red-500">Core Values</span>
              </h2>
              <div className="mt-8 space-y-4">
                {coreValues.map((value) => (
                  <div key={value} className="flex items-start gap-3">
                    <BadgeCheckIcon className="mt-1 size-4 shrink-0 text-pink-500" />
                    <p className="text-[0.98rem] leading-7 text-white/82">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="self-center">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-[3rem]">
                Our <span className="text-red-500">Infrastructure</span>
              </h2>
              <p className="mt-7 text-[1rem] leading-8 text-white/76">
                Our integrated manufacturing and support setup helps us deliver
                compressor systems with better control over quality, assembly,
                consistency, and service readiness. We organize work across key
                functions so execution stays structured and dependable.
              </p>
              <p className="mt-4 text-[1rem] leading-8 text-white/76">
                That infrastructure allows Heron Air to support product supply,
                testing, service coordination, and after-sales response with the
                seriousness expected by industrial buyers.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 transition-colors dark:bg-[#0a1322]">
          <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
            <Link
              href="/#products"
              className="inline-flex h-14 items-center justify-center rounded-sm bg-red-700 px-10 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-800"
            >
              View Products
            </Link>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
