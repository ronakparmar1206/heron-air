"use client"

import { useEffect, useRef, useState } from "react"
import { CheckIcon, ChevronDownIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { inquirySchema, type InquiryFormValues } from "@/lib/inquiry-schema"
import { products } from "@/lib/products"
import { Input } from "@/components/ui/input"

const productOptions = products.map((product) => product.title)

export function InquireForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [productOpen, setProductOpen] = useState(false)
  const productDropdownRef = useRef<HTMLDivElement | null>(null)

  const form = useForm<InquiryFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      product: "",
      quantity: 1,
      message: "",
    },
  })

  const selectedProduct = form.watch("product")

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target as Node)
      ) {
        setProductOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [])

  async function onSubmit(rawData: InquiryFormValues) {
    setIsSubmitted(false)
    setSubmitError("")

    const result = inquirySchema.safeParse(rawData)

    if (!result.success) {
      for (const issue of result.error.issues) {
        const fieldName = issue.path[0]
        if (typeof fieldName === "string") {
          form.setError(fieldName as keyof InquiryFormValues, {
            type: "manual",
            message: issue.message,
          })
        }
      }
      return
    }

    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    })

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as {
        message?: string
      } | null

      setSubmitError(
        data?.message ?? "Could not send inquiry right now. Please try again.",
      )
      return
    }

    setIsSubmitted(true)
    form.reset({
      fullName: "",
      email: "",
      phone: "",
      product: "",
      quantity: 1,
      message: "",
    })
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-[#f9fafb] p-4 dark:border-white/10 dark:bg-[#10192b] sm:p-5">
      {isSubmitted ? (
        <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
          Inquiry submitted successfully. We will reach out shortly.
        </div>
      ) : null}

      {submitError ? (
        <div className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">
          {submitError}
        </div>
      ) : null}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-1.5 block text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase dark:text-slate-200"
            >
              Full Name
            </label>
            <Input
              id="fullName"
              type="text"
              {...form.register("fullName")}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-red-500 dark:border-white/12 dark:bg-[#0b1322] dark:text-white"
            />
            {form.formState.errors.fullName ? (
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase dark:text-slate-200"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-red-500 dark:border-white/12 dark:bg-[#0b1322] dark:text-white"
            />
            {form.formState.errors.email ? (
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="product"
              className="mb-1.5 block text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase dark:text-slate-200"
            >
              Product
            </label>
            <div ref={productDropdownRef} className="relative">
              <button
                id="product"
                type="button"
                onClick={() => setProductOpen((open) => !open)}
                className="flex h-11 w-full items-center justify-between rounded-md border border-slate-300 bg-white px-3 text-left text-sm text-slate-900 outline-none transition hover:border-slate-400 focus:border-red-500 dark:border-white/12 dark:bg-[#0b1322] dark:text-white"
              >
                <span className={selectedProduct ? "" : "text-slate-400"}>
                  {selectedProduct || "Select product"}
                </span>
                <ChevronDownIcon
                  className={`size-4 text-slate-500 transition ${productOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {productOpen ? (
                <div className="absolute z-20 mt-1 max-h-64 w-full overflow-auto rounded-md border border-slate-200 bg-white p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#0f1727]">
                  {productOptions.map((product) => {
                    const isActive = selectedProduct === product

                    return (
                      <button
                        key={product}
                        type="button"
                        onClick={() => {
                          form.setValue("product", product, {
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true,
                          })
                          form.clearErrors("product")
                          setProductOpen(false)
                        }}
                        className={`flex w-full items-center justify-between rounded-md px-2.5 py-2 text-left text-sm transition ${
                          isActive
                            ? "bg-red-50 text-red-700 dark:bg-red-500/12 dark:text-red-300"
                            : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/6"
                        }`}
                      >
                        <span>{product}</span>
                        {isActive ? <CheckIcon className="size-4" /> : null}
                      </button>
                    )
                  })}
                </div>
              ) : null}
            </div>
            {form.formState.errors.product ? (
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.product.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase dark:text-slate-200"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              {...form.register("phone")}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-red-500 dark:border-white/12 dark:bg-[#0b1322] dark:text-white"
            />
            {form.formState.errors.phone ? (
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.phone.message}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="mb-1.5 block text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase dark:text-slate-200"
            >
              Quantity Required
            </label>
            <Input
              id="quantity"
              type="number"
              min={1}
              {...form.register("quantity", { valueAsNumber: true })}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-red-500 dark:border-white/12 dark:bg-[#0b1322] dark:text-white"
            />
            {form.formState.errors.quantity ? (
              <p className="mt-1 text-xs text-red-600">
                {form.formState.errors.quantity.message}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs font-semibold tracking-[0.08em] text-slate-700 uppercase dark:text-slate-200"
          >
            Requirement Details
          </label>
          <textarea
            id="message"
            rows={5}
            {...form.register("message")}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-red-500 dark:border-white/12 dark:bg-[#0b1322] dark:text-white"
            placeholder="Tell us pressure requirement, application, installation location, and preferred timeline."
          />
          {form.formState.errors.message ? (
            <p className="mt-1 text-xs text-red-600">
              {form.formState.errors.message.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="inline-flex h-11 items-center justify-center rounded-md bg-red-700 px-6 text-sm font-semibold tracking-[0.08em] text-white uppercase transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  )
}
