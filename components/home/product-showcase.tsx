import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, MoveUpRightIcon } from "lucide-react"

type Product = {
  eyebrow: string
  title: string
  description: string
  image: string
  tags: string[]
  variant?: "featured" | "wide" | "compact"
}

const products: Product[] = [
  {
    eyebrow: "Best Seller",
    title: "High-Capacity Air Compressor",
    description:
      "Optimized for heavy manufacturing with stable output, durable assemblies, and reliable pressure delivery.",
    image: "/heron/heron-air-compressors-manufacturer.png",
    tags: ["High PSI", "Heavy Duty", "Base Plate"],
    variant: "featured",
  },
  {
    eyebrow: "Series 01",
    title: "Industrial Vacuum Pumps",
    description:
      "Precision-built vacuum systems for workshops, packaging lines, and continuous industrial use.",
    image: "/heron/vacuum-pump-heron.jpg",
    tags: ["Low Noise", "Vacuum", "Service Ready"],
    variant: "wide",
  },
  {
    eyebrow: "Dryer Systems",
    title: "Advanced Air Dryers",
    description:
      "Moisture-control units for pneumatic equipment, paint booths, and air-quality critical lines.",
    image: "/heron/heron-services.jpg",
    tags: ["Auto Drain", "Low Maintenance"],
    variant: "wide",
  },
  {
    eyebrow: "Pneumatics",
    title: "Low Pressure Compressor",
    description:
      "Compact compressor range for steady shop-floor air supply and energy-conscious operation.",
    image: "/heron/heron-low-pressure-air-compressor-banner.jpg",
    tags: ["Low PSI", "Compact"],
  },
  {
    eyebrow: "Controls",
    title: "Pressure Control Systems",
    description:
      "Dependable pressure regulation and switching components for daily production needs.",
    image: "/heron/air-compressor-spare-part-heron-air.jpg",
    tags: ["Control Kit", "Spare Parts"],
  },
  {
    eyebrow: "Filtration",
    title: "Industrial Air Filtration",
    description:
      "Inline filtration and conditioning products for cleaner air flow and better tool life.",
    image: "/heron/heron-about2.jpg",
    tags: ["Filter", "Clean Air"],
  },
  {
    eyebrow: "High Pressure",
    title: "Multi Stage Air Compressor",
    description:
      "Multi-stage systems for demanding applications that need strong pressure and dependable performance.",
    image: "/heron/heron-air-multi-stage-high-pressure-air-compressor.jpg",
    tags: ["Multi Stage", "High PSI"],
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
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[0.64rem] font-bold tracking-[0.24em] text-red-700 uppercase dark:text-red-300">
              <span className="h-px w-7 bg-red-600" />
              Product Catalog
            </div>
            <h2 className="mt-3 max-w-xl text-[2.15rem] leading-[0.96] font-black tracking-tight text-slate-950 uppercase sm:text-[3rem] dark:text-white">
              Advanced
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_rgb(15_23_42)] dark:[-webkit-text-stroke:1px_rgb(255_255_255)]">
                Industrial
              </span>{" "}
              Fleet
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-md border border-slate-300 bg-white/70 px-4 text-[0.7rem] font-bold tracking-[0.14em] text-slate-800 uppercase transition hover:border-red-300 hover:text-red-700 dark:border-white/15 dark:bg-white/6 dark:text-white dark:hover:border-red-400/40 dark:hover:text-red-200"
          >
            View All Solutions
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>

        <div className="grid auto-rows-[minmax(250px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}

          <article className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-lg border border-red-950/20 bg-[#1d1112] p-5 text-white shadow-[0_22px_55px_rgba(15,23,42,0.1)] lg:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_18%,rgba(220,38,38,0.34),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_44%)]" />
            <div className="relative max-w-md">
              <div className="mb-5 inline-flex size-9 items-center justify-center rounded-md border border-red-400/30 text-red-300">
                <MoveUpRightIcon className="size-4" />
              </div>
              <p className="text-[0.62rem] font-bold tracking-[0.2em] text-red-300 uppercase">
                Custom Configuration
              </p>
              <h3 className="mt-2 text-2xl leading-none font-black tracking-tight uppercase">
                Need a product setup for your plant?
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Share your pressure, capacity, and application needs. We can map
                a practical compressor setup for your workflow.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex h-9 items-center gap-2 rounded-md bg-white px-3 text-[0.68rem] font-bold tracking-[0.12em] text-slate-950 uppercase transition group-hover:bg-red-600 group-hover:text-white"
              >
                Consult Now
                <ArrowRightIcon className="size-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const isFeatured = product.variant === "featured"
  const isWide = product.variant === "wide"
  const layoutClass = isFeatured
    ? "md:col-span-2 lg:row-span-2"
    : isWide
      ? "md:col-span-2"
      : ""
  const imageClass = isFeatured ? "h-60 sm:h-64" : isWide ? "h-40" : "h-36"

  return (
    <article
      className={`group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_24px_60px_rgba(15,23,42,0.11)] dark:border-white/10 dark:bg-[#0f1727] ${layoutClass}`}
    >
      <div className={`relative overflow-hidden bg-[#1d1717] ${imageClass}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(220,38,38,0.2),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.34))]" />
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 1024px) 100vw, 25vw"
          }
          className="object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
        />
        {isFeatured ? (
          <span className="absolute top-3 left-3 rounded-sm bg-red-600 px-2 py-1 text-[0.58rem] font-black tracking-[0.12em] text-white uppercase">
            Best Seller
          </span>
        ) : null}
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-[0.58rem] font-bold tracking-[0.18em] text-red-600 uppercase dark:text-red-300">
          {product.eyebrow}
        </p>
        <h3 className="mt-1 max-w-[18rem] text-[1.1rem] leading-[1.02] font-black tracking-tight text-slate-950 uppercase dark:text-white">
          {product.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
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
          className="mt-5 inline-flex h-9 w-full items-center justify-between rounded-md border border-slate-300 px-3 text-[0.68rem] font-bold tracking-[0.12em] text-slate-900 uppercase transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:border-white/15 dark:text-white dark:hover:border-red-500 dark:hover:bg-red-600"
        >
          View Details
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>
    </article>
  )
}
