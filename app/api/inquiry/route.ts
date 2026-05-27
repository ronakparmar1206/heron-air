import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

import { inquirySchema } from "@/lib/inquiry-schema"

export const runtime = "nodejs"

function getRequiredEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const result = inquirySchema.safeParse(payload)

  if (!result.success) {
    return NextResponse.json(
      { message: "Please check the form details and try again." },
      { status: 400 },
    )
  }

  try {
    const smtpHost = getRequiredEnv("SMTP_HOST")
    const smtpPort = Number(process.env.SMTP_PORT ?? 587)
    const smtpUser = getRequiredEnv("SMTP_USER")
    const smtpPass = getRequiredEnv("SMTP_PASS")
    const mailTo = process.env.INQUIRY_TO_EMAIL ?? smtpUser
    const mailFrom = process.env.MAIL_FROM ?? smtpUser

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const inquiry = result.data
    const rows = [
      ["Name", inquiry.fullName],
      ["Email", inquiry.email],
      ["Phone", inquiry.phone],
      ["Product", inquiry.product],
      ["Quantity", String(inquiry.quantity)],
      ["Requirement", inquiry.message],
    ]

    await transporter.sendMail({
      from: `"Heron Air Website" <${mailFrom}>`,
      to: mailTo,
      replyTo: inquiry.email,
      subject: `New inquiry: ${inquiry.product}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <h2 style="margin:0 0 16px;color:#dc2626">New Website Inquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            ${rows
              .map(
                ([label, value]) => `
                  <tr>
                    <td style="width:140px;padding:8px;border:1px solid #e5e7eb;font-weight:700;background:#f9fafb">${escapeHtml(label)}</td>
                    <td style="padding:8px;border:1px solid #e5e7eb">${escapeHtml(value)}</td>
                  </tr>
                `,
              )
              .join("")}
          </table>
        </div>
      `,
    })

    return NextResponse.json({ message: "Inquiry sent successfully." })
  } catch (error) {
    console.error("Inquiry email failed", error)
    return NextResponse.json(
      { message: "Could not send inquiry right now. Please try again later." },
      { status: 500 },
    )
  }
}
