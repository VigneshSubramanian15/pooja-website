import { motion } from 'motion/react'
import AppointmentCtaLink from './appointment-cta-link'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

type ServiceVariant = 'consultation' | 'basic' | 'standard' | 'advance'

const TIER_CARD_STYLES: Record<ServiceVariant, string> = {
  consultation:
    'border-outline-variant/50 bg-surface-container-low hover:border-primary/30 hover:shadow-[0_24px_48px_-28px_rgba(81,20,22,0.28)]',
  basic:
    'border-outline-variant/50 bg-service-tier-basic hover:border-primary/30 hover:shadow-[0_24px_48px_-28px_rgba(81,20,22,0.3)]',
  standard:
    'z-10 border-primary/25 bg-service-tier-standard shadow-[0_28px_56px_-32px_rgba(81,20,22,0.35)] hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_36px_64px_-28px_rgba(81,20,22,0.42)]',
  advance:
    'border-primary/80 bg-gradient-to-br from-primary-container via-primary to-[#3d0509] text-on-primary shadow-[0_32px_64px_-24px_rgba(81,20,22,0.55)] hover:-translate-y-1 hover:shadow-[0_40px_72px_-28px_rgba(81,20,22,0.6)]',
}

const TIER_ACCENT_STYLES: Record<ServiceVariant, string> = {
  consultation: 'from-surface-container-low via-primary/20 to-primary/35',
  basic: 'from-service-tier-basic via-primary/30 to-primary/45',
  standard: 'from-service-tier-standard via-primary/45 to-primary/65',
  advance: 'from-primary-fixed/40 via-primary-fixed/20 to-transparent',
}

const SERVICES: Array<{
  tier: string
  tag: string
  description: string
  items: string[]
  itemsNote?: string
  duration: string
  price: string
  priceNote: string
  variant: ServiceVariant
}> = [
  {
    tier: 'Consultation',
    tag: 'Start here',
    description:
      'In-person assessment for those unsure where to begin. Pulse diagnosis and a tailored recommendation.',
    items: ['Pulse diagnosis', 'Health history review', 'Personalized roadmap'],
    duration: '10 – 15 mins',
    price: '₹200',
    priceNote: 'per consultation',
    variant: 'consultation',
  },
  {
    tier: 'Basic',
    tag: 'Individual session',
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
    variant: 'basic',
  },
  {
    tier: 'Standard',
    tag: 'Most chosen',
    description:
      'Choose any two therapies in a single session — targeted relief, doubled up.',
    items: [
      'Classic Acupuncture',
      'Cupping & Moxibustion',
      'Chiropractic',
      'Foot Reflexology',
    ],
    itemsNote: 'Pick any 2 of the above',
    duration: '40 – 55 mins',
    price: '₹1,000',
    priceNote: 'per session',
    variant: 'standard',
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
    variant: 'advance',
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
            Four thoughtfully designed tiers — from a guided first
            consultation to a full integrative recovery session.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {SERVICES.map((s, i) => {
            const isAdvance = s.variant === 'advance'
            const isFeatured = s.variant === 'standard'

            return (
              <motion.article
                key={s.tier}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-md border transition-all duration-300 ${TIER_CARD_STYLES[s.variant]}`}
              >
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${TIER_ACCENT_STYLES[s.variant]}`}
                  aria-hidden
                />

                {isAdvance && (
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-fixed/10 blur-2xl"
                    aria-hidden
                  />
                )}

                <span
                  className={`pointer-events-none absolute right-5  font-headline text-9xl leading-none ${
                    isAdvance
                      ? 'text-on-primary/[0.07]'
                      : 'text-primary/[0.06] group-hover:text-primary/[0.09]'
                  }`}
                  aria-hidden
                >
                  {i + 1}
                </span>

                <div className="relative flex min-h-0 flex-1 flex-col p-7 md:p-8">
                  <header className="mb-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 font-label text-[10px] uppercase tracking-[0.18em] ${
                        isAdvance
                          ? 'bg-on-primary/10 text-on-primary/90'
                          : isFeatured
                            ? 'bg-primary/10 text-primary'
                            : 'bg-surface/70 text-on-surface-variant'
                      }`}
                    >
                      {s.tag}
                    </span>
                    <h3
                      className={`mt-4 font-headline text-[1.75rem] leading-tight tracking-tight ${
                        isAdvance ? 'text-on-primary' : 'text-primary'
                      }`}
                    >
                      {s.tier}
                    </h3>
                  </header>

                  <p
                    className={`mb-6 text-sm leading-relaxed ${
                      isAdvance ? 'text-on-primary/80' : 'text-on-surface-variant'
                    }`}
                  >
                    {s.description}
                  </p>

                  <div
                    className={`mb-6 flex flex-1 flex-col rounded-sm border px-4 py-4 ${
                      isAdvance
                        ? 'border-on-primary/15 bg-on-primary/[0.07]'
                        : 'border-outline-variant/40 bg-surface/55'
                    }`}
                  >
                    <ul className="flex-1 space-y-2.5">
                      {Array.from({ length: 4 }, (_, itemIndex) => {
                        const item = s.items[itemIndex]
                        const isPlaceholder = !item

                        return (
                          <li
                            key={item ?? `placeholder-${itemIndex}`}
                            className={`flex items-start gap-3 text-sm ${
                              isPlaceholder
                                ? 'pointer-events-none invisible select-none'
                                : isAdvance
                                  ? 'text-on-primary/90'
                                  : 'text-on-surface'
                            }`}
                            aria-hidden={isPlaceholder}
                          >
                            <span
                              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full font-label text-[10px] ${
                                isAdvance
                                  ? 'bg-on-primary/10 text-on-primary/70'
                                  : 'bg-primary/8 text-primary/70'
                              }`}
                            >
                              {itemIndex + 1}
                            </span>
                            <span>{item ?? 'Placeholder item'}</span>
                          </li>
                        )
                      })}
                    </ul>
                    <p
                      className={`mt-3 border-t pt-3 text-xs font-medium uppercase tracking-[0.14em] ${
                        s.itemsNote
                          ? isAdvance
                            ? 'border-on-primary/15 text-on-primary/70'
                            : 'border-outline-variant/50 text-primary/80'
                          : 'pointer-events-none border-transparent text-transparent select-none'
                      }`}
                      aria-hidden={!s.itemsNote}
                    >
                      {s.itemsNote ?? 'Pick any 2 of the above'}
                    </p>
                  </div>

                  <div
                    className={`border-t pt-6 ${
                      isAdvance ? 'border-on-primary/20' : 'border-outline-variant/50'
                    }`}
                  >
                    <p
                      className={`font-label text-[11px] uppercase tracking-widest ${
                        isAdvance ? 'text-on-primary/70' : 'text-on-surface-variant'
                      }`}
                    >
                      Session · {s.duration}
                    </p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span
                        className={`font-headline text-4xl tracking-tight ${
                          isAdvance ? 'text-on-primary' : 'text-primary'
                        }`}
                      >
                        {s.price}
                      </span>
                      <span
                        className={`text-sm ${
                          isAdvance ? 'text-on-primary/70' : 'text-on-surface-variant'
                        }`}
                      >
                        {s.priceNote}
                      </span>
                    </div>
                    <AppointmentCtaLink
                      buttonName="Book Appointment"
                      className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 font-label text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                        isAdvance
                          ? 'bg-on-primary text-primary hover:bg-on-primary/90'
                          : isFeatured
                            ? 'bg-primary text-on-primary hover:opacity-90'
                            : 'border border-primary/20 bg-surface/80 text-primary hover:border-primary/40 hover:bg-surface'
                      }`}
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
