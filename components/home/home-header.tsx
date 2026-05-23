"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function HomeHeader() {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/", active: pathname === "/" },
    { label: "About", href: "/about", active: pathname === "/about" },
    { label: "Products", href: "/#products", active: false },
    { label: "Services", href: "/services", active: pathname === "/services" },
    { label: "Contact", href: "/contact", active: pathname === "/contact" },
  ] as const

  return (
    <header className="relative z-40 border-b border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-colors dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_10px_30px_rgba(2,6,23,0.35)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center">
              <div className="absolute left-2 h-10 w-2 -skew-x-[28deg] bg-slate-800 dark:bg-slate-100" />
              <div className="absolute left-6 h-10 w-2 -skew-x-[28deg] bg-slate-800 dark:bg-slate-100" />
              <div className="absolute top-2 left-3 h-2 w-8 -skew-x-[28deg] bg-slate-800 dark:bg-slate-100" />
            </div>
            <div className="leading-none">
              <p className="font-serif text-[2.1rem] font-bold tracking-tight text-red-700">
                HERON AIR
              </p>
              <p className="inline-block border-t-4 border-b-4 border-slate-400 px-1 pt-0.5 pb-1 text-[1.15rem] font-bold tracking-wide text-slate-700 dark:border-slate-500 dark:text-slate-200">
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

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="inline-flex h-8 items-center justify-center rounded-lg bg-red-600 px-5 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </header>
  )
}
