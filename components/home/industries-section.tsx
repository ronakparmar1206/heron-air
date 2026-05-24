"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Industry = {
  title: string
  description: string
  image: string
}

const industries: Industry[] = [
  {
    title: "Automotive Workshops",
    description:
      "Stable compressed-air systems for paint booths, tools, tire service, and daily workshop operations.",
    image: "/industry/IRP-Industry-Photo-Automobile-industry-assembly-line.webp",
  },
  {
    title: "Manufacturing Plants",
    description:
      "High-duty compressor support for production lines that demand consistent pressure and reduced downtime.",
    image: "/industry/GettyImages-1405590436.webp",
  },
  {
    title: "Pharma and Process",
    description:
      "Clean and dependable air delivery tailored to process reliability and quality-sensitive environments.",
    image: "/industry/GettyImages-2160712166.webp",
  },
  {
    title: "Food and Packaging",
    description:
      "Reliable airflow for sealing, conveying, automation, and packaging lines with practical energy efficiency.",
    image: "/industry/IRP-Industry-Photo-Teaser-Food-and-Beverage-360x360.webp",
  },
  {
    title: "Engineering and Fabrication",
    description:
      "Rugged compressor setups for cutting, assembly, pneumatic tooling, and heavy fabrication workflows.",
    image: "/industry/IRP-Industry-Photo-Iron-and-steel-industry-application-welding.webp",
  },
  {
    title: "General Industrial Utilities",
    description:
      "Scalable compressor and support combinations for utility air requirements across mixed industrial sites.",
    image: "/industry/GettyImages-2165784287.webp",
  },
]

export function IndustriesSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [snapCount, setSnapCount] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    const onInit = () => {
      setSnapCount(api.scrollSnapList().length)
      onSelect()
    }

    onInit()
    api.on("select", onSelect)
    api.on("reInit", onInit)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onInit)
    }
  }, [api])

  React.useEffect(() => {
    if (!api || isPaused) return
    const timer = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 3200)
    return () => clearInterval(timer)
  }, [api, isPaused])

  return (
    <section className="relative overflow-hidden bg-[#050914] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(239,68,68,0.24),transparent_36%),radial-gradient(circle_at_88%_88%,rgba(56,189,248,0.24),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.24em] text-red-300 uppercase">
              Industries We Serve
            </p>
            <h2 className="mt-3 text-[2rem] leading-tight font-semibold text-white sm:text-[2.7rem]">
              Built For Real Industrial Environments
            </h2>
            <p className="mt-3 text-[0.98rem] leading-7 text-slate-300">
              Compressor solutions designed around uptime, output quality, and
              practical service support for diverse industries.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 text-[0.72rem] font-bold tracking-[0.12em] text-white uppercase transition hover:border-red-300 hover:bg-red-500/20"
          >
            Discuss Your Industry
            <ArrowUpRightIcon className="size-4" />
          </Link>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, skipSnaps: false }}
            className="w-full"
          >
            <div className="mb-4 flex items-center justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 rounded-md border-white/20 bg-white/10 text-white transition-all hover:border-red-300 hover:bg-red-500/20 hover:text-white disabled:border-white/10 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-100" />
              <CarouselNext className="static translate-y-0 rounded-md border-white/20 bg-white/10 text-white transition-all hover:border-red-300 hover:bg-red-500/20 hover:text-white disabled:border-white/10 disabled:bg-white/5 disabled:text-white/35 disabled:opacity-100" />
            </div>
            <CarouselContent>
              {industries.map((industry) => (
                <CarouselItem
                  key={industry.title}
                  className="basis-[92%] sm:basis-[72%] lg:basis-1/2 xl:basis-1/3"
                >
                  <article className="group relative h-full overflow-hidden rounded-xl border border-white/12 bg-white/6 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/50 hover:shadow-[0_18px_46px_rgba(56,189,248,0.24)]">
                    <div className="relative h-52 overflow-hidden border-b border-white/10">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.07]"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-[1.45rem] leading-tight font-semibold text-white">
                        {industry.title}
                      </h3>
                      <p className="mt-3 text-[0.96rem] leading-7 text-slate-300">
                        {industry.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {snapCount > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: snapCount }).map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => api?.scrollTo(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === selectedIndex
                    ? "w-8 bg-red-400"
                    : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
