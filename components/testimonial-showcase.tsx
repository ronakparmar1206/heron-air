"use client"

import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import AnimatedStats from "@/components/home/animated-stats"

const testimonials = [
  {
    quote:
      "We are very happy with the superior product quality, dependable performance, and focused manufacturing approach. Heron Air continues to deliver excellent value with strong cost-effectiveness and a transparent business policy we can confidently rely on.",
    author: "Brijesh Singh",
    location: "Visakhapatnam",
  },
  {
    quote:
      "The compressor systems have performed consistently in daily operations. We appreciate the prompt support, practical engineering, and overall reliability that Heron Air brings to the table.",
    author: "Amit Desai",
    location: "Ahmedabad",
  },
  {
    quote:
      "From product quality to after-sales responsiveness, the experience has been professional throughout. The machines deliver stable output and have added real value to our production workflow.",
    author: "R. Krishnan",
    location: "Chennai",
  },
] as const

const stats = [
  { value: "2002", label: "Started", className: "bg-red-600 text-white" },
  { value: "2148", label: "Customers", className: "bg-slate-950 text-white" },
  {
    value: "1248",
    label: "Projects Completed",
    className: "bg-red-600 text-white",
  },
  { value: "21", label: "Team Members", className: "bg-slate-950 text-white" },
] as const

export function TestimonialShowcase() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const syncCurrentSlide = () => {
      setCurrent(api.selectedScrollSnap())
    }

    syncCurrentSlide()
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
    }, 4500)

    return () => window.clearInterval(interval)
  }, [api])

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white pt-6 pb-16 transition-colors lg:pt-10 lg:pb-20 dark:bg-[#08101d]"
    >
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <button
            type="button"
            className="h-12 rounded-md bg-red-700 px-8 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-800"
          >
            View All Products
          </button>
        </div>
      </div>

      <div className="relative mt-10">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="relative overflow-hidden bg-[#111214]"
        >
          <Image
            src="/heron/heron-testimonial.jpg"
            alt="Heron Air compressor testimonial background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-linear-to-b from-black/28 via-black/42 to-black/58" />
          <div className="pointer-events-none absolute inset-x-0 top-12 z-0 flex justify-center">
            <Image
              src="/heron/heron-testimonial.jpg"
              alt=""
              aria-hidden="true"
              width={1920}
              height={420}
              sizes="100vw"
              className="h-full w-full object-contain object-center opacity-18"
            />
          </div>

          <CarouselContent className="-ml-0">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.author} className="pl-0">
                <div className="relative flex min-h-[360px] items-end justify-center px-4 py-12 sm:px-8 lg:min-h-[430px] lg:px-12">
                  <div className="mx-auto max-w-4xl text-center text-white">
                    <blockquote className="mx-auto max-w-4xl">
                      <div className="mb-6 flex items-center justify-between text-5xl leading-none text-white/22 sm:text-6xl">
                        <span aria-hidden="true">&ldquo;</span>
                        <span aria-hidden="true">&rdquo;</span>
                      </div>
                      <p className="text-base leading-8 text-balance text-white/92 italic sm:text-[1.12rem] sm:leading-9 lg:text-[1.28rem] lg:leading-10">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    <div className="mt-7">
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 text-sm tracking-[0.18em] text-white/68 uppercase">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={current === index}
                onClick={() => api?.scrollTo(index)}
                className={
                  current === index
                    ? "h-3 w-3 rounded-full bg-white"
                    : "h-3 w-3 rounded-full border border-white/70 bg-transparent"
                }
              />
            ))}
          </div>
        </Carousel>
      </div>

      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        <AnimatedStats />
      </div>
    </section>
  )
}
