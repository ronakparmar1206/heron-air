import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

type Product = {
  eyebrow: string
  title: string
  description: string
  image: string
  tags: string[]
}

const products: Product[] = [
  {
    eyebrow: "High Pressure",
    title: "High Pressure Compressor",
    description:
      "Built for applications that require strong and stable pressure output with dependable continuous performance.",
    image: "/products/highpressure.png",
    tags: ["High PSI", "Industrial", "Reliable"],
  },
  {
    eyebrow: "Vacuum",
    title: "Vacuum Pump",
    description:
      "Engineered vacuum solution for workshops and process lines that need consistent suction and low maintenance.",
    image: "/products/vaccum.png",
    tags: ["Vacuum", "Low Noise", "Service Ready"],
  },
  {
    eyebrow: "Booster",
    title: "Booster Compressor",
    description:
      "Pressure-boosting setup designed to lift output where standard compressor pressure is not enough.",
    image: "/products/booster.png",
    tags: ["Booster", "High Output", "Compact"],
  },
  {
    eyebrow: "High Pressure Booster",
    title: "High Pressure Booster Compressor",
    description:
      "Engineered booster configuration for applications that need elevated pressure with stable continuous delivery.",
    image: "/products/highpressurebooster.png",
    tags: ["High PSI", "Booster", "Heavy Duty"],
  },
  {
    eyebrow: "Low Pressure",
    title: "Low Pressure Compressor",
    description:
      "Efficient compressor range for everyday air supply needs with smooth operation and reduced running cost.",
    image: "/products/lowpressure.png",
    tags: ["Low PSI", "Energy Efficient"],
  },
  {
    eyebrow: "Cooling",
    title: "Compressor Refrigerator Unit",
    description:
      "Cooling companion unit for compressor systems to support stable operation in warmer conditions.",
    image: "/products/refrigerator.png",
    tags: ["Cooling", "Durable", "Workshop Ready"],
  },
]

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#fbfaf7] px-4 py-16 transition-colors sm:px-6 lg:px-8 lg:py-20 dark:bg-[#08101d]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_12%,rgba(220,38,38,0.08),transparent_32%),radial-gradient(ellipse_at_12%_82%,rgba(14,165,233,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.24em] text-red-700 uppercase dark:text-red-300">
            <span className="h-px w-7 bg-red-600" />
            Product Catalog
          </div>
          <h2 className="mt-3 max-w-xl text-[2.15rem] leading-[0.96] font-black tracking-tight text-slate-950 uppercase sm:text-[3rem] dark:text-white">
            Advanced
            <br />
            <span className="text-red-600 dark:text-red-300">Industrial</span>{" "}
            Fleet
          </h2>
        </div>

        <div className="grid auto-rows-[minmax(250px,auto)] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-300/90 bg-[#efefef] shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-slate-400 dark:border-white/12 dark:bg-[#0f1727]">
      <div className="relative h-56 overflow-hidden border-b border-slate-300/80 bg-[#f7f7f7] sm:h-64 dark:border-white/10 dark:bg-[#161f2f]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.03] sm:p-5"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.58rem] font-bold tracking-[0.18em] text-red-600 uppercase dark:text-red-300">
          {product.eyebrow}
        </p>
        <h3 className="mt-2 line-clamp-2 min-h-[3.1rem] max-w-[18rem] text-[1.4rem] leading-[1.1] font-extrabold tracking-tight text-slate-700 dark:text-white">
          {product.title}
        </h3>
        <p className="line-clamp-3 min-h-18 text-[0.94rem] leading-6 text-slate-600 dark:text-slate-300">
          {product.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-slate-200 bg-slate-50 px-2 py-1 text-[0.62rem] font-semibold text-slate-600 dark:border-white/10 dark:bg-white/6 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-5 inline-flex h-10 w-full items-center justify-between rounded-md border border-slate-300 px-3 text-[0.68rem] font-bold tracking-[0.12em] text-slate-900 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/15 dark:text-white dark:hover:border-red-500 dark:hover:bg-red-600"
        >
          View Details
          <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
