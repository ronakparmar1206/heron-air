import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, CheckCircle2Icon } from "lucide-react"

import { HomeFooter } from "@/components/home/home-footer"
import { HomeHeader } from "@/components/home/home-header"
import { products, productBySlug } from "@/lib/products"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = productBySlug[slug]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white transition-colors dark:from-slate-950 dark:to-[#08101d]">
      <HomeHeader />

      <main>
        <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-[#08101d]">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-slate-600 uppercase transition hover:text-red-700 dark:text-slate-300 dark:hover:text-red-300"
            >
              <ArrowLeftIcon className="size-3.5" />
              Back To Products
            </Link>

            <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_20px_50px_rgba(2,6,23,0.32)]">
                <div className="relative h-[300px] sm:h-[420px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>

              <div>
                <p className="text-[0.66rem] font-bold tracking-[0.24em] text-red-700 uppercase dark:text-red-300">
                  {product.eyebrow}
                </p>
                <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                  {product.title}
                </h1>
                <p className="mt-4 text-[0.98rem] leading-7 text-slate-600 dark:text-slate-300">
                  {product.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.66rem] font-semibold tracking-[0.06em] text-slate-700 uppercase dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center rounded-md bg-red-600 px-5 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-700"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex h-11 items-center rounded-md border border-slate-300 bg-white px-5 text-sm font-semibold tracking-[0.08em] text-slate-800 uppercase transition hover:bg-slate-50 dark:border-white/12 dark:bg-[#0f1727] dark:text-white dark:hover:bg-[#152136]"
                  >
                    Service Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727]">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Key Features
              </h2>
              <div className="mt-5 space-y-3">
                {product.keyFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-red-600" />
                    <p className="text-[0.94rem] leading-6 text-slate-700 dark:text-slate-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727]">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                Typical Applications
              </h2>
              <ul className="mt-5 space-y-2.5">
                {product.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="rounded-md border border-slate-200 bg-slate-50 px-3.5 py-2 text-[0.9rem] text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-[#0f1727]">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              Technical Overview
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:text-slate-300">
                    {spec.label}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] font-medium text-slate-800 dark:text-slate-100">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
