import Image from "next/image"

import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white px-4 py-16 transition-colors sm:px-6 lg:px-8 lg:py-20 dark:bg-[#08101d]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />

      <div className="relative mx-auto max-w-[72rem]">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-slate-700 uppercase dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
              Product Range
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.7rem] dark:text-white">
              Compressor systems presented like a premium industrial catalogue.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Explore Heron Air&apos;s core categories through a stronger
              showcase that highlights performance, packaging, and
              application-driven product families.
            </p>
          </div>

          <Button className="h-11 rounded-md bg-slate-950 px-6 text-sm font-semibold tracking-[0.08em] text-white uppercase hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
            View All Products
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.18fr_1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-none border border-slate-200 bg-[#1381c6] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="flex h-full min-h-[420px] flex-col justify-between p-6 sm:p-8">
              <div className="max-w-[12rem]">
                <h3 className="text-[2.2rem] leading-[1.1] font-semibold tracking-tight text-white sm:text-[2.7rem]">
                  High
                  <br />
                  Pressure
                </h3>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/heron/heron-air-compressors-manufacturer.png"
                  alt="High pressure compressor"
                  width={416}
                  height={359}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-auto max-h-[18rem] w-auto object-contain sm:max-h-[20rem]"
                />
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="relative overflow-hidden rounded-none border border-slate-200 bg-[#f70a33] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="flex min-h-[202px] flex-col justify-between p-6">
                <div className="max-w-[11rem]">
                  <h3 className="text-[1.55rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-[1.9rem]">
                    Low
                    <br />
                    Pressure
                  </h3>
                </div>
                <div className="flex justify-end">
                  <Image
                    src="/heron/heron-low-pressure-air-compressor-banner.jpg"
                    alt="Low pressure compressor"
                    width={460}
                    height={184}
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    className="h-auto max-h-[8.6rem] w-auto object-contain"
                  />
                </div>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-none border border-slate-200 bg-black shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="flex min-h-[202px] flex-col justify-between p-6">
                <div className="max-w-[11rem]">
                  <h3 className="text-[1.55rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-[1.9rem]">
                    Medium
                    <br />
                    Pressure
                  </h3>
                </div>
                <div className="flex justify-end">
                  <Image
                    src="/heron/heron-medium-pressure-compressor-banner.jpg"
                    alt="Medium pressure compressor"
                    width={460}
                    height={184}
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    className="h-auto max-h-[8.6rem] w-auto object-contain"
                  />
                </div>
              </div>
            </article>
          </div>

          <article className="relative overflow-hidden rounded-none border border-slate-200 bg-[#116fa8] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="flex h-full min-h-[420px] flex-col justify-between p-6 sm:p-8">
              <div className="max-w-[13rem]">
                <h3 className="text-[2rem] leading-[1.12] font-semibold tracking-tight text-white sm:text-[2.45rem]">
                  Screw
                  <br />
                  Compressor
                </h3>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/heron/sch-scre-compressor.jpg"
                  alt="Screw compressor"
                  width={360}
                  height={480}
                  sizes="(max-width: 1024px) 100vw, 28vw"
                  className="h-auto max-h-[20rem] w-auto object-contain"
                />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-none border border-slate-200 bg-linear-to-br from-white to-slate-50 shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:border-white/10 dark:from-[#0f1727] dark:to-[#101b2d] dark:shadow-[0_18px_45px_rgba(2,6,23,0.36)]">
            <div className="grid items-center gap-4 p-6 md:grid-cols-[minmax(0,0.92fr)_minmax(220px,0.88fr)]">
              <div>
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-slate-950 sm:text-[1.85rem] dark:text-white">
                  Vacuum Pump
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Pump uses less power than an air compressor and supports
                  dependable industrial vacuum performance.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/heron/vacuum-pump-heron.jpg"
                  alt="Vacuum pump"
                  width={460}
                  height={230}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-auto max-h-[12rem] w-auto object-contain"
                />
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-none border border-slate-200 bg-[#1381c6] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="grid items-center gap-4 p-6 md:grid-cols-[minmax(0,0.92fr)_minmax(220px,0.88fr)]">
              <div>
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-white sm:text-[1.85rem]">
                  Spare Parts
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/82">
                  Bare, base plate mounted, air receiver mounted, and
                  service-ready compressor essentials.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Image
                  src="/heron/air-compressor-spare-part-heron-air.jpg"
                  alt="Compressor spare parts"
                  width={460}
                  height={230}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="h-auto max-h-[12rem] w-auto object-contain"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
