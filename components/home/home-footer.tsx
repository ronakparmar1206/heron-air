import {
  MailIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export function HomeFooter() {
  return (
    <footer className="bg-[#eef2f6] text-slate-900 transition-colors dark:bg-[#060c17] dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="relative h-14 w-[210px]">
              <Image
                src="/products/logo.png"
                alt="Heron Air logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="space-y-4 text-[1.02rem] leading-8 text-slate-600 dark:text-white/78">
            <p className="flex items-start gap-3">
              <MapPinIcon className="mt-1 size-5 shrink-0" />
              <span>
                B-80, Ajay Tenament 5, New Gajendranagar Society, Opp. New RTO,
                Vastral, Ahmedabad - 382418.
              </span>
            </p>
            <p className="flex items-center gap-3">
              <PhoneCallIcon className="size-5 shrink-0" />
              <span>+91 9904 913 616</span>
            </p>
            <p className="flex items-center gap-3">
              <MailIcon className="size-5 shrink-0" />
              <span>heronair21@gmail.com</span>
            </p>
          </div>
        </div>

        <FooterColumn
          title="Our Products"
          items={[
            {
              label: "High Pressure Compressor",
              href: "/products/high-pressure-compressor",
            },
            { label: "Vacuum Pump", href: "/products/vacuum-pump" },
            { label: "Booster Compressor", href: "/products/booster-compressor" },
            {
              label: "High Pressure Booster Compressor",
              href: "/products/high-pressure-booster-compressor",
            },
            { label: "Oil Free Compressor", href: "/products/oil-free-compressor" },
            { label: "View All Products", href: "/#products" },
          ]}
        />

        <div>
          <FooterColumn
            title="Useful Links"
            items={[
              { label: "About us", href: "/about" },
              { label: "Our Infrastructure", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Industries We Serve", href: "/services" },
              { label: "Support", href: "/contact" },
              { label: "Contact Us", href: "/contact" },
            ]}
          />

          <div className="mt-8 flex gap-3">
            <Link
              href="https://www.instagram.com/heronair_in?utm_source=qr&igsh=ZGs1Zm5pbDVrM2Q0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-pink-300 hover:text-pink-600 dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-pink-300/50 dark:hover:text-pink-300"
            >
              <FaInstagram className="size-4.5" />
            </Link>
            <Link
              href="https://wa.me/918128333901"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-white/20 dark:bg-white/5 dark:text-white/80 dark:hover:border-emerald-300/50 dark:hover:text-emerald-300"
            >
              <FaWhatsapp className="size-4.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300/80 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8 dark:text-white/70">
          <p>Heron Air Compressors © 2019-2026</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

type FooterItem = string | { label: string; href: string }

function FooterColumn({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h3 className="mb-5 text-[1.7rem] font-semibold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-[1.02rem] leading-7 text-slate-600 dark:text-white/72">
        {items.map((item) => (
          <li key={typeof item === "string" ? item : item.label}>
            {typeof item === "string" ? (
              item
            ) : (
              <Link
                href={item.href}
                className="transition hover:text-red-700 dark:hover:text-red-300"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
