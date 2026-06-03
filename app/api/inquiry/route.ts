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
    const mailTo = process.env.NEXT_PUBLIC_INQUIRY_TO_EMAIL ?? process.env.SMTP_USER ?? process.env.MAIL_FROM ?? "no-reply@heronair.com"
    const mailFrom = process.env.NEXT_PUBLIC_RESEND_FROM ?? process.env.SMTP_USER ?? "no-reply@heronair.com"

    const inquiry = result.data
    const rows = [
      ["Name", inquiry.fullName],
      ["Email", inquiry.email],
      ["Phone", inquiry.phone],
      ["Product", inquiry.product],
      ["Quantity", String(inquiry.quantity)],
      ["Requirement", inquiry.message],
    ]

    const subject = `New inquiry: ${inquiry.product}`
    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n")
    const html = `
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
      `

    const resendApiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY
    console.log("Using Resend API key:", resendApiKey)
    if (resendApiKey) {
      // Use Resend HTTP API to send the inquiry email
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: `Heron Air Website <${mailFrom}>`,
          to: mailTo,
          reply_to: inquiry.email,
          subject,
          text,
          html,
        }),
      }).then(async (res) => {
        if (!res.ok) {
          const body = await res.text()
          throw new Error(`Resend API error: ${res.status} ${body}`)
        }
      })
      // Send confirmation email back to the user
      const userSubject = `Thanks for contacting Heron Air — we've received your inquiry`
      const userText = `Hello ${inquiry.fullName},\n\nThank you for contacting Heron Air. We have received your inquiry about ${inquiry.product}. Our team will review your request and get back to you within 1-2 business days.\n\nSummary:\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n\n")}\n\nIf you'd like to add more information, simply reply to this email.\n\nBest regards,\nHeron Air Team`
      const userHtml = `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
          <p>Hello ${escapeHtml(inquiry.fullName)},</p>
          <p>Thank you for contacting <strong>Heron Air</strong>. We have received your inquiry about <strong>${escapeHtml(inquiry.product)}</strong>. Our team will review your request and get back to you within 1-2 business days.</p>
          <h4 style="margin:8px 0">Summary</h4>
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
          <p>If you'd like to add more information, simply reply to this email.</p>
          <p>Best regards,<br/>Heron Air Team</p>
        </div>
      `

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: `Heron Air <${mailFrom}>`,
          to: inquiry.email,
          subject: userSubject,
          text: userText,
          html: userHtml,
        }),
      }).then(async (res) => {
        if (!res.ok) {
          const body = await res.text()
          console.error(`Resend confirm email error: ${res.status} ${body}`)
        }
      })
    } else {
      // Fallback to SMTP via nodemailer
      const smtpHost = getRequiredEnv("SMTP_HOST")
      const smtpPort = Number(process.env.SMTP_PORT ?? 587)
      const smtpUser = getRequiredEnv("SMTP_USER")
      const smtpPass = getRequiredEnv("SMTP_PASS")

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: `"Heron Air Website" <${mailFrom}>`,
        to: mailTo,
        replyTo: inquiry.email,
        subject,
        text,
        html,
      })

      // Send confirmation email back to the user via SMTP
      try {
        const userSubject = `Thanks for contacting Heron Air — we've received your inquiry`
        const userText = `Hello ${inquiry.fullName},\n\nThank you for contacting Heron Air. We have received your inquiry about ${inquiry.product}. Our team will review your request and get back to you within 1-2 business days.\n\nSummary:\n${rows.map(([label, value]) => `${label}: ${value}`).join("\n\n")}\n\nIf you'd like to add more information, simply reply to this email.\n\nBest regards,\nHeron Air Team`
        const userHtml = `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
            <p>Hello ${escapeHtml(inquiry.fullName)},</p>
            <p>Thank you for contacting <strong>Heron Air</strong>. We have received your inquiry about <strong>${escapeHtml(inquiry.product)}</strong>. Our team will review your request and get back to you within 1-2 business days.</p>
            <h4 style="margin:8px 0">Summary</h4>
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
            <p>If you'd like to add more information, simply reply to this email.</p>
            <p>Best regards,<br/>Heron Air Team</p>
          </div>
        `

        await transporter.sendMail({
          from: `"Heron Air" <${mailFrom}>`,
          to: inquiry.email,
          replyTo: mailTo,
          subject: userSubject,
          text: userText,
          html: userHtml,
        })
      } catch (err) {
        console.error("Failed to send confirmation email to user", err)
      }
    }

    return NextResponse.json({ message: "Inquiry sent successfully." })
  } catch (error) {
    console.error("Inquiry email failed", error)
    return NextResponse.json(
      { message: "Could not send inquiry right now. Please try again later." },
      { status: 500 },
    )
  }
}
