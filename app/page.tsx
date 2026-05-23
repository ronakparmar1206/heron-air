import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/home/about-section"
import { FeatureStrip } from "@/components/home/feature-strip"
import { HomeFooter } from "@/components/home/home-footer"
import { HomeHeader } from "@/components/home/home-header"
import { ProductShowcase } from "@/components/home/product-showcase"
import { TestimonialShowcase } from "@/components/testimonial-showcase"
import { FaqSection } from "@/components/home/faq-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white transition-colors dark:from-slate-950 dark:to-[#08101d]">
      <HomeHeader />

      <main id="home">
        <HeroSlider />
        <FeatureStrip />
        <AboutSection />
        <ProductShowcase />
        <TestimonialShowcase />
        <FaqSection />
      </main>
      <HomeFooter />
    </div>
  )
}
