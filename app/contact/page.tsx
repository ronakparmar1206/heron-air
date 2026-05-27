import Link from "next/link"
import { ArrowUpRightIcon, Clock3Icon, MailIcon, PhoneCallIcon } from "lucide-react"

import { InquireForm } from "@/components/contact/inquire-form"
import { HomeFooter } from "@/components/home/home-footer"
import { HomeHeader } from "@/components/home/home-header"

const addresses = [
  {
    title: "Office",
    lines: [
      "B-80, Ajay Tenament 5,",
      "New Gajendranagar Society,",
      "Opp. New RTO, Vastral,",
      "Ahmedabad - 382418, Gujarat, India.",
    ],
  },
  {
    title: "Factory",
    lines: [
      "11, Abhishree Estate,",
      "B/h. Vepari Mahamandal,",
      "Odhav, Ahmedabad - 382418,",
      "Gujarat, India.",
    ],
  },
] as const

const contactMethods = [
  {
    icon: MailIcon,
    title: "Email",
    content: "heronair21@gmail.com | info@heronair.in",
  },
  {
    icon: PhoneCallIcon,
    title: "Mobile",
    content: "+91 9904 913 616 | +91 8128 333 901",
  },
  {
    icon: Clock3Icon,
    title: "Hours",
    content: "Monday to Saturday | 09:00 AM to 07:00 PM",
  },
] as const

export default function ContactPage() {
  const mapUrl =
    "https://www.google.com/maps?cid=925461206300892185&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed"
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9678837759075!2d72.67293219999999!3d23.024951400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87a88a86bca9%3A0xcd7e61056f81c19!2sHeron%20Air!5e0!3m2!1sen!2sin!4v1779535414952!5m2!1sen!2sin"

  return (
    <div className="min-h-screen bg-[#f5f6f8] transition-colors dark:bg-[#08101d]">
      <HomeHeader />

      <main>
        <section className="relative overflow-hidden bg-[#050608] py-16 text-white sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(239,68,68,0.2),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.14),transparent_34%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex border border-white/15 bg-white/8 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.26em] text-white/80 uppercase">
              Contact Heron Air
            </div>
            <h1 className="mt-4 text-[2.2rem] font-semibold tracking-tight sm:text-[3.1rem]">
              Contact & Inquiry Center
            </h1>
            <p className="mt-3 max-w-2xl text-[0.96rem] leading-7 text-white/78">
              For direct communication, use contact details. For quotations and
              requirements, use the inquiry form.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-12 transition-colors sm:px-6 lg:px-8 lg:py-16 dark:bg-[#0a1322]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0f1727]">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[1.65rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                    Contact Details
                  </h2>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.08em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
                    Address + Phone
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {addresses.map((address) => (
                    <div
                      key={address.title}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/6"
                    >
                      <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                        {address.title}
                      </h3>
                      <div className="mt-2 space-y-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {address.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div
                        key={method.title}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-[#111b2c]"
                      >
                        <div className="mt-0.5 rounded-md bg-red-50 p-2 text-red-700 dark:bg-red-500/12 dark:text-red-300">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.1em] text-slate-500 uppercase dark:text-slate-300">
                            {method.title}
                          </p>
                          <p className="mt-1 text-sm text-slate-800 dark:text-slate-100">
                            {method.content}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0f1727]">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-[1.65rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                    Inquiry Form
                  </h2>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.08em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/6 dark:text-slate-200">
                    Quote Request
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Fill this form for product recommendation, quantity quote, and
                  technical assistance.
                </p>

                <div className="mt-5">
                  <InquireForm />
                </div>
              </article>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_38px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0f1727] sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-[1.35rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                  Location Map
                </h2>
                <Link
                  href={mapUrl}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-red-700 dark:text-slate-200 dark:hover:text-red-300"
                >
                  Open In Google Maps
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-white/10">
                <iframe
                  title="Heron Air office location map"
                  src={mapEmbedUrl}
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
