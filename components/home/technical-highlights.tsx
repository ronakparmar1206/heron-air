import Image from "next/image"
import { CheckCircle2Icon } from "lucide-react"

const points = [
  "Engineered for stable high-pressure output in continuous-duty operations",
  "Low vibration design to support longer machine life and safer performance",
  "Efficient airflow path for faster delivery with controlled energy usage",
  "Service-friendly build with quick access to key maintenance components",
] as const

export function TechnicalHighlights() {
  return (
    <section className="bg-white px-4 py-12 transition-colors sm:px-6 lg:px-8 lg:py-16 dark:bg-[#08101d]">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-slate-200 bg-[#f9fafb] p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:p-8 dark:border-white/10 dark:bg-[#0f1727]">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#111b2c]">
          <Image
            src="/products/technicallight.png"
            alt="High pressure compressor technical key diagram"
            width={1400}
            height={980}
            className="h-auto w-full object-cover dark:hidden"
          />
          <Image
            src="/products/technicaldark.png"
            alt="High pressure compressor technical key diagram"
            width={1400}
            height={980}
            className="hidden h-auto w-full object-cover dark:block"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.24em] text-red-700 uppercase dark:text-red-300">
            <span className="h-px w-7 bg-red-600" />
            Technical Highlights
          </div>
          <h2 className="mt-3 max-w-xl text-[2.15rem] leading-[0.96] font-black tracking-tight text-slate-950 uppercase sm:text-[3rem] dark:text-white">
            High Pressure
            <br />
            <span className="text-red-600 dark:text-red-300">Technical</span>{" "}
            Points
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-slate-600 dark:text-slate-300">
            Detailed engineering view for buyers who evaluate performance,
            reliability, and long-term serviceability before finalizing.
          </p>

          <div className="mt-6 space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-red-600" />
                <p className="text-[0.9rem] leading-6 text-slate-700 dark:text-slate-200">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
