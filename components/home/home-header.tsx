"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import {
  ChevronDownIcon,
  DownloadIcon,
  MenuIcon,
  PhoneCallIcon,
  XIcon,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"

export function HomeHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [productsOpen, setProductsOpen] = React.useState(false)
  const productsCloseTimer = React.useRef<ReturnType<typeof setTimeout> | null>(
    null,
  )

  const navItemsBeforeProducts = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "About", href: "/about", active: pathname === "/about" },
  ] as const
  const navItemsAfterProducts = [
    { label: "Services", href: "/services", active: pathname === "/services" },
    { label: "Contact", href: "/contact", active: pathname === "/contact" },
  ] as const
  const mobileNavItems = [
    ...navItemsBeforeProducts,
    { label: "Products", href: "/#products", active: false },
    ...navItemsAfterProducts,
  ] as const
  const productItems = [
    "High Pressure Compressor",
    "Vacuum Pump",
    "Booster Compressor",
    "High Pressure Booster Compressor",
    "Low Pressure Compressor",
    "Compressor Refrigerator Unit",
  ] as const

  const openProductsMenu = React.useCallback(() => {
    if (productsCloseTimer.current) {
      clearTimeout(productsCloseTimer.current)
      productsCloseTimer.current = null
    }
    setProductsOpen(true)
  }, [])

  const closeProductsMenu = React.useCallback(() => {
    productsCloseTimer.current = setTimeout(() => {
      setProductsOpen(false)
    }, 120)
  }, [])

  React.useEffect(() => {
    setMobileMenuOpen(false)
    setProductsOpen(false)
  }, [pathname])

  React.useEffect(() => {
    return () => {
      if (productsCloseTimer.current) {
        clearTimeout(productsCloseTimer.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-colors dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_10px_30px_rgba(2,6,23,0.35)]">
      <div className="bg-red-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-1.5 text-[0.65rem] font-medium tracking-[0.08em] uppercase sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-white/88 sm:gap-x-5">
            <span>Welcome To Heron Air</span>
            <span>+91 9904 913 616</span>
            <span>+91 8128 333 901</span>
            <span>info@heronair.in</span>
          </div>
          <div className="hidden flex-wrap items-center gap-5 text-white sm:flex">
            <span className="inline-flex items-center gap-2">
              <DownloadIcon className="size-3.5" />
              Download Brochure
            </span>
            <span className="inline-flex items-center gap-2">
              <PhoneCallIcon className="size-3.5" />
              Call Us
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8 lg:py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="relative h-10 w-[148px] sm:h-11 sm:w-[170px]">
              <Image
                src="/products/logo.png"
                alt="Heron Air logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-[0.95rem] font-medium text-slate-700 lg:flex dark:text-slate-200">
          {navItemsBeforeProducts.map((item) => (
            <Link
              key={item.label}
              className={
                item.active
                  ? "text-red-600 transition hover:text-red-700"
                  : "transition hover:text-red-700"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={openProductsMenu}
            onMouseLeave={closeProductsMenu}
          >
            <button
              type="button"
              aria-expanded={productsOpen}
              className="inline-flex items-center gap-1.5 text-slate-700 transition hover:text-red-700 dark:text-slate-200 dark:hover:text-red-300"
            >
              Products
              <ChevronDownIcon
                className={`size-4 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {productsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute top-full left-1/2 z-50 mt-5 w-[min(86vw,980px)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_34px_rgba(15,23,42,0.14)]"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {productItems.map((product) => (
                      <div key={product}>
                        <Link
                          href="/#products"
                          className="group flex items-center rounded-xl px-3 py-2.5 text-[1.02rem] leading-snug text-slate-600 transition-all duration-150 hover:bg-slate-50 hover:pl-4 hover:text-red-700"
                        >
                          <span className="mr-2.5 h-1.5 w-1.5 rounded-full bg-slate-300 transition group-hover:bg-red-500" />
                          {product}
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {navItemsAfterProducts.map((item) => (
            <Link
              key={item.label}
              className={
                item.active
                  ? "text-red-600 transition hover:text-red-700"
                  : "transition hover:text-red-700"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-slate-600 sm:gap-3 dark:text-slate-300">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden h-8 items-center justify-center rounded-lg bg-red-600 px-5 text-sm font-medium text-white transition hover:bg-red-700 sm:inline-flex"
          >
            Inquire Now
          </Link>
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-red-200 hover:text-red-600 lg:hidden dark:border-white/12 dark:bg-white/6 dark:text-slate-100 dark:hover:border-red-400/30 dark:hover:text-red-300"
          >
            {mobileMenuOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-[0_16px_35px_rgba(15,23,42,0.08)] transition-colors lg:hidden dark:border-white/10 dark:bg-[#0f1727]">
          <div className="space-y-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.active
                    ? "block rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 dark:bg-red-500/10 dark:text-red-300"
                    : "block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-red-700 dark:text-slate-200 dark:hover:bg-white/6 dark:hover:text-red-300"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-white/5">
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-red-600 px-5 text-sm font-medium text-white transition hover:bg-red-700"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
