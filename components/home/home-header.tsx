"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DownloadIcon, MenuIcon, PhoneCallIcon, XIcon } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"

export function HomeHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navItems = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "About", href: "/about", active: pathname === "/about" },
    { label: "Products", href: "/#products", active: false },
    { label: "Services", href: "/services", active: pathname === "/services" },
    { label: "Contact", href: "/contact", active: pathname === "/contact" },
  ] as const

  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-colors dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_10px_30px_rgba(2,6,23,0.35)]">
      <div className="bg-red-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-[0.68rem] font-medium tracking-[0.08em] uppercase sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
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

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center sm:h-14 sm:w-14">
              <div className="absolute left-1.5 h-8 w-2 -skew-x-[28deg] bg-slate-800 sm:left-2 sm:h-10 dark:bg-slate-100" />
              <div className="absolute left-5 h-8 w-2 -skew-x-[28deg] bg-slate-800 sm:left-6 sm:h-10 dark:bg-slate-100" />
              <div className="absolute top-2 left-2 h-2 w-6 -skew-x-[28deg] bg-slate-800 sm:left-3 sm:w-8 dark:bg-slate-100" />
            </div>
            <div className="min-w-0 leading-none">
              <p className="truncate font-serif text-[1.45rem] font-bold tracking-tight text-red-700 sm:text-[2.1rem]">
                HERON AIR
              </p>
              <p className="inline-block border-t-[3px] border-b-[3px] border-slate-400 px-1 pt-0.5 pb-1 text-[0.82rem] font-bold tracking-wide text-slate-700 sm:border-t-4 sm:border-b-4 sm:text-[1.15rem] dark:border-slate-500 dark:text-slate-200">
                COMPRESSORS
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-[0.95rem] font-medium text-slate-700 lg:flex dark:text-slate-200">
          {navItems.map((item) => (
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
            {navItems.map((item) => (
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
