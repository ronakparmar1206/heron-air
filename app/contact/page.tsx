import Link from "next/link"
import { Clock3Icon, MailIcon, PhoneCallIcon } from "lucide-react"

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
        <section className="relative overflow-hidden bg-[#050608] py-18 text-white sm:py-22">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.18),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_20%)]" />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex border border-white/12 bg-white/6 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.28em] text-white/80 uppercase">
              Contact Heron Air
            </div>
            <h1 className="mt-5 text-[2.4rem] font-semibold tracking-tight sm:text-[4.2rem]">
              Contact Us
            </h1>
            <p className="mt-5 text-sm tracking-[0.22em] text-white/62 uppercase">
              Home / Contact Us
            </p>
          </div>
        </section>

        <section className="bg-white transition-colors dark:bg-[#0a1322]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:px-8 lg:py-20">
            <div className="space-y-8">
              <div>
                <h2 className="text-[2rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                  Our Address
                </h2>
                <div className="mt-4 h-px bg-slate-200 dark:bg-white/10" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {addresses.map((address) => (
                  <article key={address.title} className="pb-6">
                    <h3 className="text-[1.45rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                      {address.title}
                    </h3>
                    <div className="mt-4 space-y-1 text-[1rem] leading-8 text-slate-600 dark:text-slate-300">
                      {address.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className="mt-5 h-px bg-slate-200 dark:bg-white/10" />
                  </article>
                ))}
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => {
                  return (
                    <div key={method.title}>
                      <div>
                        <p className="text-[1rem] leading-8 text-slate-700 dark:text-slate-300">
                          <span className="font-semibold text-slate-950 dark:text-white">
                            {method.title}:
                          </span>{" "}
                          {method.content}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="pt-8">
                <h2 className="text-[2rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                  Email Us
                </h2>
                <div className="mt-4 h-px bg-slate-200 dark:bg-white/10" />
                <p className="mt-6 text-[1rem] leading-8 text-slate-600 dark:text-slate-300">
                  Whether you are looking for product details, service support,
                  spare guidance, or a quote for your compressor requirement,
                  our team is ready to respond.
                </p>
                <Link
                  href="mailto:heronair21@gmail.com"
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-none bg-red-700 px-8 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-800"
                >
                  Write A Message
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-[2rem] font-semibold tracking-tight text-slate-950 dark:text-white">
                  Get Directions
                </h2>
                <div className="mt-4 h-px bg-slate-200 dark:bg-white/10" />
              </div>

              <div className="overflow-hidden border border-slate-200 bg-white dark:border-white/10 dark:bg-[#0f1727]">
                <iframe
                  title="Heron Air office location map"
                  src={mapEmbedUrl}
                  className="h-[560px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="flex justify-start">
                <Link
                  href={mapUrl}
                  className="text-base font-semibold text-slate-800 underline underline-offset-4 transition hover:text-red-700 dark:text-slate-200 dark:hover:text-red-300"
                >
                  Get Direction
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
