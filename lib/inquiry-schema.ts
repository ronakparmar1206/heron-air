import { z } from "zod/v4"

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .min(8, "Enter a valid phone number.")
    .max(20, "Phone number is too long."),
  product: z.string().min(1, "Please select a product."),
  quantity: z
    .number({ error: "Please enter required quantity." })
    .int("Quantity must be a whole number.")
    .positive("Quantity must be greater than zero."),
  message: z
    .string()
    .min(20, "Please add at least 20 characters.")
    .max(1000, "Message is too long."),
})

export type InquiryFormValues = z.infer<typeof inquirySchema>
