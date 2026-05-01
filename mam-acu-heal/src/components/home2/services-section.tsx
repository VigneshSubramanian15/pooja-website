import { motion } from 'motion/react'
import AppointmentCtaLink from './appointment-cta-link'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const SERVICES = [
  {
    tier: 'Consultation',
    tag: 'Start here',
    description:
      'In-person assessment for those unsure where to begin. Pulse diagnosis and a tailored recommendation.',
    items: ['Pulse diagnosis', 'Health history review', 'Personalized roadmap'],
    duration: '10 – 15 mins',
    price: '₹200',
    priceNote: 'per consultation',
    accent: false,
  },
  {
    tier: 'Basic',
    tag: 'Most chosen',
    description:
      'Single-modality session for targeted relief from a specific concern.',
    items: [
      'Classic Acupuncture',
      'Cupping & Moxibustion',
      'Chiropractic',
      'Foot Reflexology',
    ],
    duration: '20 – 30 mins',
    price: '₹500',
    priceNote: 'per session',
    accent: true,
  },
  {
    tier: 'Advance',
    tag: 'Synergy session',
    description:
      'Full-spectrum protocol combining multiple modalities for complex chronic cases.',
    items: [
      'Full Chiropractic adjustment',
      'Acupuncture',
      'Targeted cupping',
      'Foot reflexology',
    ],
    duration: '75 – 90 mins',
    price: '₹1,600',
    priceNote: 'per session',
    accent: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="font-label text-xs uppercase tracking-[0.22em] text-on-surface-variant">
              What we offer
            </span>
            <h2 className="mt-4 font-headline text-4xl tracking-tight text-primary md:text-5xl lg:text-6xl">
              Our <span className="italic">Services</span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-md text-base leading-relaxed text-on-surface-variant"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
          >
            Three thoughtfully designed tiers — from a guided first
            consultation to a full integrative recovery session.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.tier}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
              className={`group relative flex flex-col rounded-sm border p-8 transition-all duration-300 ${
                s.accent
                  ? 'border-primary bg-primary text-on-primary shadow-[0_30px_60px_-20px_rgba(81,20,22,0.4)]'
                  : 'border-outline-variant/60 bg-surface-container-low hover:border-primary/40'
              }`}
            >
              <header className="mb-6 flex items-center justify-between">
                <h3
                  className={`font-headline text-3xl ${
                    s.accent ? 'text-on-primary' : 'text-primary'
                  }`}
                >
                  {s.tier}
                </h3>
                <span
                  className={`rounded-full border px-3 py-1 font-label text-[10px] uppercase tracking-[0.18em] ${
                    s.accent
                      ? 'border-on-primary/40 text-on-primary/90'
                      : 'border-outline-variant text-on-surface-variant'
                  }`}
                >
                  {s.tag}
                </span>
              </header>

              <p
                className={`mb-6 text-sm leading-relaxed ${
                  s.accent ? 'text-on-primary/80' : 'text-on-surface-variant'
                }`}
              >
                {s.description}
              </p>

              <ul className="mb-8 space-y-2.5">
                {s.items.map((item, i) => (
                  <li
                    key={item}
                    className={`flex items-start gap-3 text-sm ${
                      s.accent ? 'text-on-primary/90' : 'text-on-surface'
                    }`}
                  >
                    <span
                      className={`mt-0.5 font-label text-[11px] tracking-widest ${
                        s.accent ? 'text-on-primary/60' : 'text-on-surface-variant'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-auto border-t pt-6 ${
                  s.accent ? 'border-on-primary/20' : 'border-outline-variant/60'
                }`}
              >
                <p
                  className={`font-label text-[11px] uppercase tracking-widest ${
                    s.accent ? 'text-on-primary/70' : 'text-on-surface-variant'
                  }`}
                >
                  Session · {s.duration}
                </p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span
                    className={`font-headline text-4xl ${
                      s.accent ? 'text-on-primary' : 'text-primary'
                    }`}
                  >
                    {s.price}
                  </span>
                  <span
                    className={`text-sm ${
                      s.accent ? 'text-on-primary/70' : 'text-on-surface-variant'
                    }`}
                  >
                    {s.priceNote}
                  </span>
                </div>
                <AppointmentCtaLink
                  buttonName="Book Appointment"
                  className={`mt-6 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.18em] ${
                    s.accent
                      ? 'text-on-primary'
                      : 'text-primary'
                  }`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
