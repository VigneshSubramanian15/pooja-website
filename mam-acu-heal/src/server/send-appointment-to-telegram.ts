import { createServerFn } from '@tanstack/react-start'

type AppointmentPayload = {
  fullName: string
  email: string
  primaryConcern: string
  preferredTime: string
  additionalNotes: string
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function sanitizeText(value: string) {
  return escapeHtml(value.trim())
}

export const sendAppointmentToTelegram = createServerFn({ method: 'POST' })
  .inputValidator((input: AppointmentPayload) => input)
  .handler(async ({ data }) => {
    const fullName = data.fullName.trim()
    const email = data.email.trim()
    const primaryConcern = data.primaryConcern.trim()
    const preferredTime = data.preferredTime.trim()
    const additionalNotes = data.additionalNotes.trim()

    if (!fullName) {
      throw new Error('Full name is required')
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Valid email is required')
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error('Telegram configuration missing')
    }

    const istTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    })

    const message = [
      '🩺 <b>New Arua Consultation Request</b>',
      '',
      `<b>Full Name:</b> <code>${sanitizeText(fullName)}</code>`,
      `<b>Email:</b> <code>${sanitizeText(email)}</code>`,
      `<b>Primary Concern:</b> ${sanitizeText(primaryConcern || '—')}`,
      `<b>Preferred Time:</b> ${sanitizeText(preferredTime || '—')}`,
      `<b>Additional Notes:</b> ${sanitizeText(additionalNotes || '—')}`,
      `<b>Date:</b> ${sanitizeText(istTime)} IST`,
    ].join('\n')

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      const body = await response.text()
      console.error('[appointment] Telegram API error:', response.status, body)
      throw new Error('Failed to send appointment request')
    }

    return { success: true }
  })
