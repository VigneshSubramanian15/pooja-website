import { motion } from "motion/react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 0 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * 0.09 },
  }),
};

const REASONS = [
  {
    title: "8+ Years of Excellence",
    body: "Proven track record in chronic disease management with measurable patient outcomes.",
    icon: "workspace_premium",
  },
  {
    title: "Integrated Diagnostics",
    body: "Combining traditional acupuncture with modern lab support for deeper insight.",
    icon: "biotech",
  },
  {
    title: "Patient-Centric Care",
    body: "Personalized treatment protocols designed for long-term recovery, not quick fixes.",
    icon: "favorite",
  },
  {
    title: "Safety First",
    body: "WHO-compliant hygiene standards and single-use sterile needles for every session.",
    icon: "verified_user",
  },
];

const REVIEWS = [
  {
    name: "Margret P.",
    rating: 5,
    body: "I am currently undergoing treatment here, and Sir takes such good care of me. He radiates so much positive energy, and I believe that is why everything will turn out well. This is the truth - I have truly felt it.",
    date: "8 months ago",
  },
  {
    name: "Sujitha Sophy",
    rating: 5,
    body: "I am a dentist and had severe cervical spondylitis. I went for only one sitting and got completely cured. Felt so relaxed with cupping and reflexology. They have separate specialists for both male and female, which is convenient. Good place and excellent treatment.",
    date: "2 years ago",
  },
  {
    name: "Kavi Alagan",
    rating: 5,
    body: "I took treatment for detoxification for two sittings. My body feels relaxed and the recovery is very effective. Thank you for your valuable treatment.",
    date: "3 years ago",
  },
  {
    name: "Arjun",
    rating: 5,
    body: "Good place for treatment without drugs, acupuncture treatment is too good and it works.",
    date: "3 years ago",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="about"
      className="bg-surface-container-low px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="font-label text-xs uppercase tracking-[0.22em] text-on-surface-variant">
              Why us
            </span>
            <h2 className="mt-4 font-headline text-4xl leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
              A clinic built on
              <br />
              <span className="italic">evidence and empathy.</span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-md text-base leading-relaxed text-on-surface-variant lg:col-span-5"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
          >
            We pair classical Chinese medicine with modern diagnostics to
            uncover the real source of chronic conditions — and treat it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Reasons */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative overflow-hidden rounded-sm border border-outline-variant/60 bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(81,20,22,0.25)]"
              >
                <span className="material-symbols-outlined mb-5 text-3xl text-primary">
                  {r.icon}
                </span>
                <h3 className="mb-2 font-headline text-xl text-primary">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {r.body}
                </p>
                <span className="absolute right-5 top-5 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60">
                  0{REASONS.indexOf(r) + 1}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Scrollable Google reviews */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
          >
            <div className="flex h-full flex-col rounded-sm border border-outline-variant/60 bg-surface">
              <div className="flex items-center justify-between border-b border-outline-variant/60 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-surface-container">
                    <span className="font-headline text-sm font-bold text-primary">
                      G
                    </span>
                  </span>
                  <div>
                    <p className="font-headline text-sm font-semibold text-on-surface">
                      Google Reviews
                    </p>
                    <p className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                      5 ★ - 10+ reviews
                    </p>
                  </div>
                </div>
                <span className="font-label text-xs uppercase tracking-widest text-primary">
                  Verified
                </span>
              </div>

              <div className="max-h-[460px] flex-1 space-y-4 overflow-y-auto px-6 py-5">
                {REVIEWS.map((rev) => (
                  <article
                    key={rev.name}
                    className="border-b border-outline-variant/40 pb-4 last:border-b-0 last:pb-0"
                  >
                    <header className="mb-2 flex items-center justify-between">
                      <p className="font-headline text-sm font-semibold text-on-surface">
                        {rev.name}
                      </p>
                      <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                        {rev.date}
                      </span>
                    </header>
                    <p className="mb-2 text-sm text-primary">
                      {"★".repeat(rev.rating)}
                    </p>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      {rev.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
