import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'motion/react'
import AppointmentCtaLink from './appointment-cta-link'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const textVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-surface px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28"
    >
      {/* subtle grid backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #511416 1px, transparent 1px), linear-gradient(to bottom, #511416 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
        animate={{ backgroundPosition: ['0px 64px', '64px 0px'] }}
        transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-1.5 font-label text-xs uppercase tracking-[0.22em] text-on-surface-variant"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Trichy · Since 2017
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-headline text-[44px] leading-[1.05] tracking-tight text-primary md:text-6xl lg:text-[72px]"
          >
            Advance <span className="italic">Acupuncture</span> &amp;
            <br />
            Integrated Wellness
            <br />
            <span className="text-on-surface/40">in Trichy.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl"
          >
            Scientific healing for chronic conditions. We combine traditional
            pulse diagnosis with modern clinical insights to treat the
            <span className="text-primary"> root cause </span>
            of your health concerns.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <AppointmentCtaLink
              buttonName="Book for consultation"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-label text-sm font-semibold uppercase tracking-[0.16em] text-on-primary transition-all duration-300 hover:opacity-90"
            />
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-4 font-label text-sm font-semibold uppercase tracking-[0.16em] text-primary transition-all duration-300 hover:bg-primary/5"
            >
              <FaWhatsapp size={18} />
              Message on WhatsApp
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-outline-variant/50 pt-8"
          >
            <div>
              <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Experience
              </dt>
              <dd className="mt-1 font-headline text-2xl text-primary">8+ yrs</dd>
            </div>
            <div>
              <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Patients
              </dt>
              <dd className="mt-1 font-headline text-2xl text-primary">3,200+</dd>
            </div>
            <div>
              <dt className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                Rating
              </dt>
              <dd className="mt-1 font-headline text-2xl text-primary">4.9★</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-4 -z-10 translate-x-6 translate-y-6 rounded-sm bg-surface-container-highest" />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface-container">
            <img
              alt="Acupuncture treatment"
              className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 hover:grayscale-0"
              src="https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1200&q=80"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.55 }}
              className="editorial-shadow absolute -bottom-6 -left-6 max-w-[280px] bg-surface p-6"
            >
              <p className="font-headline text-base italic leading-snug text-primary">
                "The medicine of the future will be the medicine of the
                frequencies."
              </p>
              <p className="mt-3 font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
                — Albert Einstein
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
