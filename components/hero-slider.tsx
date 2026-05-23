"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const slides = [
  {
    eyebrow: "HERON AIR",
    title: "High Pressure Booster Air Compressor",
    description:
      "Reliable industrial compressor systems designed for stable output, fast air delivery, and long service life.",
    image: "/heron/heron-air-compressors-manufacturer-slider.png",
    imageAlt: "High pressure booster air compressor by Heron Air",
    buttonLabel: "Read More",
    background: "from-[#7a1320] via-[#b11f31] to-[#d73a49]",
  },
  {
    eyebrow: "MULTI STAGE",
    title: "High Pressure Air Compressor",
    description:
      "Aesthetically and ergonomically built machine for best performance with dependable industrial output and operator-friendly use.",
    image: "/heron/heron-air-compressors-manufacturer.png",
    imageAlt: "High pressure air compressor by Heron Air",
    buttonLabel: "Read More",
    background: "from-[#174f85] via-[#20669d] to-[#3390cd]",
  },
] as const

export function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const syncCurrentSlide = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", syncCurrentSlide)
    api.on("reInit", syncCurrentSlide)

    return () => {
      api.off("select", syncCurrentSlide)
      api.off("reInit", syncCurrentSlide)
    }
  }, [api])

  React.useEffect(() => {
    if (!api) return

    const interval = window.setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => window.clearInterval(interval)
  }, [api])

  return (
    <section className="px-0 pb-0 sm:px-0 sm:pb-0 lg:px-0 lg:pb-0">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="overflow-hidden border-b border-slate-200/60 bg-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
      >
        <CarouselContent className="-ml-0 touch-pan-y will-change-transform">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title} className="pl-0">
              <div
                className={`relative min-h-[520px] overflow-hidden bg-gradient-to-r ${slide.background} text-white sm:min-h-[620px] lg:min-h-[700px]`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.16),transparent_36%),linear-gradient(130deg,rgba(255,255,255,0.05),transparent_48%)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/12 to-transparent" />

                <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-6 px-8 py-14 sm:min-h-[620px] sm:px-12 lg:grid-cols-[minmax(360px,0.86fr)_minmax(540px,1.14fr)] lg:px-20 lg:py-24">
                  <div className="max-w-[30rem] lg:pl-8">
                    <p className="mb-7 text-sm tracking-[0.08em] text-white/72">
                      {slide.eyebrow}
                    </p>
                    <h1 className="max-w-xl text-[2.65rem] leading-[1.22] font-semibold tracking-tight text-white sm:text-[3.15rem] lg:text-[3.7rem]">
                      {slide.title}
                    </h1>
                    <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-white/76 sm:text-base">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="mt-8 h-12 rounded-none border border-white/40 bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-white hover:text-slate-900"
                    >
                      {slide.buttonLabel}
                    </Button>
                  </div>

                  <div className="relative flex items-center justify-center lg:justify-end">
                    <div className="absolute inset-x-[16%] bottom-[14%] h-20 rounded-full bg-white/6 blur-3xl sm:h-24" />
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      width={900}
                      height={700}
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="relative z-10 h-auto max-h-[330px] w-full max-w-[840px] object-contain will-change-transform [transform:translateZ(0)] drop-shadow-[0_16px_24px_rgba(0,0,0,0.14)] sm:max-h-[470px] lg:max-h-[540px]"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => api?.scrollPrev()}
          className="absolute top-1/2 left-2 z-20 flex size-12 -translate-y-1/2 items-center justify-center text-white/90 transition hover:text-white sm:left-4 lg:left-6"
        >
          <ChevronLeftIcon className="size-10 stroke-[1.4]" />
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={() => api?.scrollNext()}
          className="absolute top-1/2 right-2 z-20 flex size-12 -translate-y-1/2 items-center justify-center text-white/90 transition hover:text-white sm:right-4 lg:right-6"
        >
          <ChevronRightIcon className="size-10 stroke-[1.4]" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 sm:bottom-8">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={current === index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                current === index ? "w-16 bg-white" : "w-8 bg-white/35"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
