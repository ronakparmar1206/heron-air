"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    value: "item-1",
    trigger: "What types of air compressors do you offer?",
    content:
      "We offer a comprehensive range including High Pressure, Low Pressure, Medium Pressure, Oil Free compressors, and Vacuum Pump solutions. Each is designed for specific industrial applications.",
  },
  {
    value: "item-2",
    trigger: "What is your delivery timeline?",
    content:
      "We guarantee 100% on-time delivery within North America. Most orders are processed and shipped within 5-7 business days depending on the product complexity.",
  },
  {
    value: "item-3",
    trigger: "Do you provide after-sales support?",
    content:
      "Yes, we provide comprehensive after-sales services including maintenance, spare parts, and technical support. Our professional team is available Monday to Saturday from 09:00 AM to 07:00 PM.",
  },
  {
    value: "item-4",
    trigger: "What quality standards do your products meet?",
    content:
      "Our products are manufactured using premium quality materials and the latest technology, ensuring durability and optimal performance for industrial applications.",
  },
  {
    value: "item-5",
    trigger: "Can I get a custom solution for my specific needs?",
    content:
      "Absolutely! We offer tailored compressed air solutions. Our experienced team can design a system that perfectly fits your industrial requirements.",
  },
  {
    value: "item-6",
    trigger: "How can I request a quote?",
    content:
      "You can request a quote through our website, call us directly at +16479145148 or +16479049773, or email us at heronair21@gmail.com.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-white px-6 py-24 transition-colors dark:bg-[#08101d]">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-[2rem] font-semibold text-slate-900 md:text-4xl dark:text-white">
            Frequently Asked Questions
          </h1>
        </div>

        <Accordion defaultValue={["item-1"]} className="w-full space-y-4">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="transform rounded-lg border border-slate-100 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-[#0f1727] dark:shadow-[0_16px_40px_rgba(2,6,23,0.28)]"
            >
              <AccordionTrigger className="px-4 py-5 text-left font-medium text-slate-950 transition-colors hover:text-red-700 dark:text-white dark:hover:text-red-400">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-6 text-slate-600 dark:text-slate-300">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
