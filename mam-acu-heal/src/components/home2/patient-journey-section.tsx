import { motion } from 'motion/react'
import AppointmentCtaLink from './appointment-cta-link'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const STEPS = [
  {
    title: 'Book an Appointment',
    body: 'Pick a time that suits you. Reserve a slot via the form, WhatsApp, or a phone call.',
    icon: 'event_available',
  },
  {
    title: 'Initial Consultation',
    body: 'Pulse diagnosis and a thorough health-history review to map the root cause.',
    icon: 'stethoscope',
  },
  {
    title: 'Acupuncture Sessions',
    body: 'A protocol tailored to you — basic or advance — delivered with WHO-compliant safety.',
    icon: 'spa',
  },
  {
    title: 'Progress Monitoring',
    body: 'Regular reviews and adjustments so the plan evolves with your recovery.',
    icon: 'monitor_heart',
  },
]

export default function PatientJourneySection() {
  return (
    <section className="relative bg-surface-container-low px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="font-label text-xs uppercase tracking-[0.22em] text-on-surface-variant">
            The patient journey
          </span>
          <h2 className="mt-4 font-headline text-4xl tracking-tight text-primary md:text-5xl lg:text-6xl">
            The path to <span className="italic">recovery.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
            Four clear steps — from the first conversation to lasting
            relief. No guesswork, no rushed appointments.
          </p>
        </motion.div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.2 }}
              className="relative flex flex-col rounded-sm border border-outline-variant/60 bg-surface p-7 transition-all duration-300 hover:border-primary/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-label text-[11px] uppercase tracking-[0.22em] text-on-surface-variant">
                  Step 0{i + 1}
                </span>
                <span className="material-symbols-outlined text-2xl text-primary">
                  {step.icon}
                </span>
              </div>
              <h3 className="mb-3 font-headline text-xl text-primary">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                {step.body}
              </p>

              {i < STEPS.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-outline-variant lg:block"
                />
              ) : null}
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="mt-14 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: EASE, delay: 1 }}
        >
          <AppointmentCtaLink
            buttonName="Start your journey"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-label text-sm font-semibold uppercase tracking-[0.16em] text-on-primary transition-all duration-300 hover:opacity-90"
          />
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Avg. response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
