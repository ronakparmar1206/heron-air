"use client"

import * as React from "react"

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
      className="relative overflow-hidden bg-[#f7f8fb] py-14 transition-colors sm:py-16 lg:py-20 dark:bg-[#08101d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(220,38,38,0.08),transparent_34%),radial-gradient(circle_at_84%_86%,rgba(56,189,248,0.08),transparent_36%)]" />

      <div className="relative mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <div className="flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.24em] text-red-700 uppercase dark:text-red-300">
            <span className="h-px w-7 bg-red-600" />
            Client Feedback
          </div>
          <h2 className="mt-3 max-w-2xl text-[2.15rem] leading-[0.96] font-black tracking-tight text-slate-950 uppercase sm:text-[3rem] dark:text-white">
            Trusted{" "}
            <span className="text-red-600 dark:text-red-300">Client</span>{" "}
            Voices
          </h2>
          <p className="mt-3 text-[0.96rem] leading-7 text-slate-600 dark:text-slate-300">
            Real experience from buyers who use Heron Air systems in daily
            operations and production environments.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[url('/background.png')] bg-cover bg-bottom bg-no-repeat shadow-[0_24px_50px_rgba(15,23,42,0.16)] dark:border-white/10"
        >
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-red-500/18 blur-3xl" />
          <div className="absolute right-[-70px] bottom-[-90px] h-80 w-80 rounded-full bg-sky-500/16 blur-3xl" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/50 via-slate-900/28 to-slate-950/16" />

          <CarouselContent className="-ml-0">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.author} className="pl-0">
                <div className="relative flex min-h-[340px] items-center px-4 py-10 sm:px-7 lg:min-h-[390px] lg:px-12">
                  <div className="w-full max-w-3xl rounded-2xl border border-white/18 bg-white/10 p-6 text-white shadow-[0_20px_40px_rgba(2,6,23,0.35)] backdrop-blur-sm sm:p-8">
                    <span
                      className="text-6xl leading-none font-black text-red-300/90 sm:text-7xl"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-[1.08rem] leading-8 font-semibold tracking-[0.01em] text-white italic sm:text-[1.28rem] sm:leading-10">
                        {testimonial.quote}
                      </p>
                    </blockquote>
                    <div className="mt-6 border-t border-white/18 pt-4">
                      <p className="text-xl font-extrabold tracking-tight text-white">
                        {testimonial.author}
                      </p>
                      <p className="mt-1 text-[0.7rem] font-semibold tracking-[0.22em] text-white/75 uppercase">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-2.5">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={current === index}
                onClick={() => api?.scrollTo(index)}
                className={
                  current === index
                    ? "h-2.5 w-8 rounded-full bg-red-500"
                    : "h-2.5 w-2.5 rounded-full bg-white/55"
                }
              />
            ))}
          </div>
        </Carousel>

        <div className="mt-9">
          <AnimatedStats />
        </div>
      </div>
    </section>
  )
}
