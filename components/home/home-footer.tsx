import {
  MailIcon,
  MapPinIcon,
  PhoneCallIcon,
  SendIcon,
  GlobeIcon,
  CircleUserRoundIcon,
} from "lucide-react"

export function HomeFooter() {
  return (
    <footer className="bg-[#eef2f6] text-slate-900 transition-colors dark:bg-[#060c17] dark:text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.15fr_1fr_1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center">
              <div className="absolute left-2 h-10 w-2 -skew-x-[28deg] bg-slate-900 dark:bg-white" />
              <div className="absolute left-6 h-10 w-2 -skew-x-[28deg] bg-slate-900 dark:bg-white" />
              <div className="absolute top-2 left-3 h-2 w-8 -skew-x-[28deg] bg-slate-900 dark:bg-white" />
            </div>
            <div className="leading-none">
              <p className="font-serif text-[2rem] font-bold tracking-tight text-slate-950 dark:text-white">
                HERON AIR
              </p>
              <p className="inline-block border-t-4 border-b-4 border-slate-400/70 px-1 pt-0.5 pb-1 text-[1.05rem] font-bold tracking-wide text-slate-700 dark:border-white/40 dark:text-white/90">
                COMPRESSORS
              </p>
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
          title="Categories"
          items={[
            "High pressure compressor",
            "Medium pressure compressor",
            "Low pressure compressor",
            "Vacuum Pump",
            "Accessories",
          ]}
        />

        <FooterColumn
          title="Our Products"
          items={[
            "Single Stage Medium Pressure Air Compressor",
            "Double Stage Low Pressure Air Compressor",
            "Multi Stage High Pressure Air Compressor",
            "Screw air Compressor",
            "View All Products",
          ]}
        />

        <div>
          <FooterColumn
            title="Useful Links"
            items={[
              "About us",
              "Our Infrastructure",
              "Services",
              "Industries We Serve",
              "Support",
              "Contact Us",
            ]}
          />

          <div className="mt-8 flex gap-3">
            {[GlobeIcon, CircleUserRoundIcon, SendIcon].map((Icon, index) => (
              <span
                key={index}
                className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 dark:border-white/20 dark:bg-white/5 dark:text-white/80"
              >
                <Icon className="size-4.5" />
              </span>
            ))}
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

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-5 text-[1.7rem] font-semibold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-[1.02rem] leading-7 text-slate-600 dark:text-white/72">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
