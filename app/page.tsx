import Image from "next/image"
import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/home/about-section"
import { FeatureStrip } from "@/components/home/feature-strip"
import { HomeFooter } from "@/components/home/home-footer"
import { HomeHeader } from "@/components/home/home-header"
import { IndustriesSection } from "@/components/home/industries-section"
import { ProductShowcase } from "@/components/home/product-showcase"
import { TechnicalHighlights } from "@/components/home/technical-highlights"
import { TestimonialShowcase } from "@/components/testimonial-showcase"
import { FaqSection } from "@/components/home/faq-section"

const showroomBrands = [
  { name: "Hyundai", logo: "/heron/hyundai.png" },
  { name: "Ford", logo: "/heron/ford.png" },
  { name: "Tata", logo: "/heron/tata.png" },
] as const

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white transition-colors dark:from-slate-950 dark:to-[#08101d]">
      <HomeHeader />

      <main id="home">
        <HeroSlider />
        <FeatureStrip />
        <TechnicalHighlights />
        <AboutSection />
        <ProductShowcase />
        <IndustriesSection />
        <section className="bg-white py-14 transition-colors sm:py-16 dark:bg-[#0a1322]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.22em] text-red-700 uppercase dark:text-red-300">
                Trusted Across North America
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
                Largest provider of air compressors for automobile showrooms
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Serving brands such as Hyundai, Ford, Tata and more.
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-[#0a1322]" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-[#0a1322]" />

              <div className="showroom-marquee py-2">
                {[0, 1].map((groupIdx) => (
                  <div
                    key={`group-${groupIdx}`}
                    className="showroom-marquee-group gap-3"
                    aria-hidden={groupIdx === 1}
                  >
                    {Array.from({ length: 8 }).map((_, repeatIdx) =>
                      showroomBrands.map((brand) => (
                        <div
                          key={`${brand.name}-${groupIdx}-${repeatIdx}`}
                          className="flex h-16 items-center justify-center px-4"
                        >
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            width={150}
                            height={56}
                            className="h-12 w-auto object-contain"
                          />
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <TestimonialShowcase />
        <FaqSection />
      </main>

      <HomeFooter />
    </div>
  )
}
