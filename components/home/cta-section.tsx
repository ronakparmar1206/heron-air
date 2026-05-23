import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="contact" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-[3.2rem]">
          Get answers to all your questions you might have.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-500">
          We will answer any questions you may have about our industrial
          compressor systems, support, products, or service requirements.
        </p>
        <p className="mt-6 text-2xl text-slate-500">
          Monday to Saturday from{" "}
          <span className="font-semibold text-slate-950">09:00AM to 19:00pm</span>
        </p>
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="h-14 rounded-md bg-red-700 px-10 text-base font-semibold uppercase tracking-[0.08em] hover:bg-red-800">
            Contact Our Company
          </Button>
        </div>
      </div>
    </section>
  )
}
