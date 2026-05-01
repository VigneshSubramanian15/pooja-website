import { useRef, useState } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { sendAppointmentToTelegram } from '@/server/send-appointment-to-telegram'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function AppointmentSection() {
  const prefersReducedMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccessCelebrating, setIsSuccessCelebrating] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('')
  const [celebrationOrigin, setCelebrationOrigin] = useState({ x: 0, y: 0 })
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    primaryConcern: 'Pain Management',
    preferredTime: 'Morning (8am - 12pm)',
    additionalNotes: '',
  })
  const [formErrors, setFormErrors] = useState({ fullName: '', email: '' })
  const formCardRef = useRef<HTMLFormElement>(null)
  const submitButtonRef = useRef<HTMLButtonElement>(null)
  const submitAppointment = useServerFn(sendAppointmentToTelegram)

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    if (name === 'fullName' || name === 'email') {
      setFormErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage('')
    setStatusType('')

    const nextErrors = { fullName: '', email: '' }
    const trimmedName = formValues.fullName.trim()
    const trimmedEmail = formValues.email.trim()

    if (!trimmedName) nextErrors.fullName = 'Full name is required.'
    if (!trimmedEmail) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail))
      nextErrors.email = 'Enter a valid email address.'

    if (nextErrors.fullName || nextErrors.email) {
      setFormErrors(nextErrors)
      return
    }

    try {
      setIsSubmitting(true)
      await submitAppointment({
        data: {
          fullName: trimmedName,
          email: trimmedEmail,
          primaryConcern: formValues.primaryConcern.trim(),
          preferredTime: formValues.preferredTime.trim(),
          additionalNotes: formValues.additionalNotes.trim(),
        },
      })
      setFormValues({
        fullName: '',
        email: '',
        primaryConcern: 'Pain Management',
        preferredTime: 'Morning (8am - 12pm)',
        additionalNotes: '',
      })
      setFormErrors({ fullName: '', email: '' })
      setStatusType('success')
      setStatusMessage('Your request has been submitted successfully.')
      const formBounds = formCardRef.current?.getBoundingClientRect()
      const buttonBounds = submitButtonRef.current?.getBoundingClientRect()
      if (formBounds && buttonBounds) {
        setCelebrationOrigin({
          x: buttonBounds.left - formBounds.left + buttonBounds.width / 2,
          y: buttonBounds.top - formBounds.top + buttonBounds.height / 2,
        })
      } else {
        setCelebrationOrigin({ x: 0, y: 0 })
      }
      setIsSuccessCelebrating(true)
    } catch (error) {
      console.error('[appointment] Submit failed:', error)
      setStatusType('error')
      setStatusMessage('Unable to submit right now. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-primary px-6 py-24 text-on-primary md:px-12 md:py-32"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        animate={{ backgroundPosition: ['64px 64px', '0px 0px'] }}
        transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className="font-label text-xs uppercase tracking-[0.22em] text-on-primary/70">
            Get in touch
          </span>
          <h2 className="mt-4 font-headline text-4xl leading-tight tracking-tight text-on-primary md:text-5xl lg:text-6xl">
            Request a <span className="italic">consultation.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-on-primary/80">
            Share a few details and a care coordinator will reach out within
            24 hours to confirm your appointment.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-on-primary/90">
              <span className="material-symbols-outlined text-xl">call</span>
              +91 00000 00000
            </li>
            <li className="flex items-center gap-3 text-on-primary/90">
              <span className="material-symbols-outlined text-xl">mail</span>
              hello@mamacuheal.in
            </li>
            <li className="flex items-center gap-3 text-on-primary/90">
              <span className="material-symbols-outlined text-xl">location_on</span>
              Trichy, Tamil Nadu
            </li>
          </ul>
        </motion.div>

        <motion.form
          ref={formCardRef}
          noValidate
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-sm bg-surface p-8 text-on-surface md:p-12 lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <input
                className="border-0 border-b border-outline-variant/60 bg-transparent px-0 py-3 transition-all placeholder:text-on-surface-variant/30 focus:border-primary focus:ring-0"
                name="fullName"
                onChange={handleFieldChange}
                placeholder="Enter your name"
                type="text"
                value={formValues.fullName}
              />
              {formErrors.fullName ? (
                <span className="text-xs text-error">{formErrors.fullName}</span>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <input
                className="border-0 border-b border-outline-variant/60 bg-transparent px-0 py-3 transition-all placeholder:text-on-surface-variant/30 focus:border-primary focus:ring-0"
                name="email"
                onChange={handleFieldChange}
                placeholder="email@domain.com"
                type="text"
                value={formValues.email}
              />
              {formErrors.email ? (
                <span className="text-xs text-error">{formErrors.email}</span>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                Primary Concern
              </label>
              <select
                className="border-0 border-b border-outline-variant/60 bg-transparent px-0 py-3 text-on-surface transition-all focus:border-primary focus:ring-0"
                name="primaryConcern"
                onChange={handleFieldChange}
                value={formValues.primaryConcern}
              >
                <option value="Pain Management">Pain Management</option>
                <option value="Stress Anxiety">Stress &amp; Anxiety</option>
                <option value="Digestive Health">Digestive Health</option>
                <option value="Women Health">Women's Health</option>
                <option value="General Wellness">General Wellness</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                Preferred Time
              </label>
              <select
                className="border-0 border-b border-outline-variant/60 bg-transparent px-0 py-3 text-on-surface transition-all focus:border-primary focus:ring-0"
                name="preferredTime"
                onChange={handleFieldChange}
                value={formValues.preferredTime}
              >
                <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                <option value="Evening (4pm - 7pm)">Evening (4pm - 7pm)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                Additional Notes
              </label>
              <textarea
                className="border-0 border-b border-outline-variant/60 bg-transparent px-0 py-3 transition-all placeholder:text-on-surface-variant/30 focus:border-primary focus:ring-0"
                name="additionalNotes"
                onChange={handleFieldChange}
                placeholder="Tell us more about your needs..."
                rows={3}
                value={formValues.additionalNotes}
              />
            </div>

            <div className="flex flex-col gap-3 pt-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                We respect your privacy. No spam.
              </p>
              <button
                ref={submitButtonRef}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.18em] text-on-primary transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </button>
            </div>

            {statusMessage && !isSuccessCelebrating ? (
              <div
                className={`md:col-span-2 text-center text-sm ${
                  statusType === 'error' ? 'text-error' : 'text-on-surface-variant'
                }`}
              >
                {statusMessage}
              </div>
            ) : null}
          </div>

          <AnimatePresence>
            {isSuccessCelebrating ? (
              <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-surface text-on-surface"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute rounded-full bg-primary/15"
                  style={{
                    width: 24,
                    height: 24,
                    left: celebrationOrigin.x - 12,
                    top: celebrationOrigin.y - 12,
                  }}
                  initial={{ scale: prefersReducedMotion ? 1 : 0.1, opacity: 0.95 }}
                  animate={{ scale: prefersReducedMotion ? 1 : 55, opacity: 0 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.25 : 0.8,
                    ease: EASE,
                  }}
                />
                <motion.div
                  className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary"
                  initial={{ scale: prefersReducedMotion ? 1 : 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: prefersReducedMotion ? 0.05 : 0.22,
                    duration: prefersReducedMotion ? 0.2 : 0.45,
                    ease: EASE,
                  }}
                >
                  <motion.span
                    className="material-symbols-outlined text-3xl"
                    initial={{
                      rotate: prefersReducedMotion ? 0 : -20,
                      scale: prefersReducedMotion ? 1 : 0.5,
                    }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                      delay: prefersReducedMotion ? 0.1 : 0.3,
                      duration: prefersReducedMotion ? 0.2 : 0.4,
                      ease: EASE,
                    }}
                  >
                    check
                  </motion.span>
                </motion.div>
                <motion.p
                  className="relative text-center font-headline text-2xl tracking-tight text-on-surface md:text-3xl"
                  initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: prefersReducedMotion ? 0.15 : 0.35,
                    duration: prefersReducedMotion ? 0.2 : 0.4,
                    ease: EASE,
                  }}
                >
                  Appointment request received!
                </motion.p>
                <motion.p
                  className="relative max-w-md px-6 text-center text-sm text-on-surface-variant md:text-base"
                  initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: prefersReducedMotion ? 0.2 : 0.45,
                    duration: prefersReducedMotion ? 0.2 : 0.4,
                    ease: EASE,
                  }}
                >
                  Thank you for reaching out. Our care coordinator will contact you within 24 hours.
                </motion.p>
                <motion.button
                  type="button"
                  className="relative mt-3 inline-flex items-center justify-center rounded-full border border-outline-variant/60 px-5 py-2 font-label text-[11px] uppercase tracking-[0.14em] text-on-surface transition-all hover:border-primary hover:text-primary"
                  initial={{ y: prefersReducedMotion ? 0 : 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: prefersReducedMotion ? 0.25 : 0.55,
                    duration: prefersReducedMotion ? 0.2 : 0.35,
                    ease: EASE,
                  }}
                  onClick={() => setIsSuccessCelebrating(false)}
                >
                  Close
                </motion.button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}
