import { useState } from "react";
import { motion } from "motion/react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const FAQS = [
  {
    q: "Does acupuncture hurt?",
    a: "The needles are extremely fine — most patients feel only a light pressure or warmth. We use single-use sterile needles for every session.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on the condition and how long you have had it. Most chronic concerns see meaningful change within 6 – 10 sessions; acute issues often resolve faster.",
  },
  {
    q: "Is acupuncture safe alongside my regular medication?",
    a: "Yes. Acupuncture is complementary and we coordinate with your existing treatment plan. Please bring your current prescriptions to the consultation.",
  },
  {
    q: "What conditions do you commonly treat?",
    a: "Chronic pain, migraines, PCOS, infertility support, digestive disorders, sleep issues, stress, anxiety, and post-injury recovery, among others.",
  },
  {
    q: "How do I prepare for my first visit?",
    a: "Eat a light meal 1 – 2 hours before, wear loose clothing, and arrive 10 minutes early so we can complete the intake comfortably.",
  },
  {
    q: "Do you accept insurance?",
    a: "We provide detailed invoices that many insurers reimburse under wellness or alternative-care plans. Please check with your provider.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="font-label text-xs uppercase tracking-[0.22em] text-on-surface-variant">
            FAQs
          </span>
          <h2 className="mt-4 font-headline text-4xl tracking-tight text-primary md:text-5xl">
            Questions, <span className="italic">answered.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-on-surface-variant">
            Still curious? Send us a message on WhatsApp and we'll reply
            personally.
          </p>
          <a
            href="https://wa.me/919952390110?text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-label text-xs font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Ask on WhatsApp
            <span className="material-symbols-outlined text-base">
              arrow_outward
            </span>
          </a>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
        >
          <ul className="divide-y divide-outline-variant/60 border-y border-outline-variant/60">
            {FAQS.map((item, i) => {
              const open = openIndex === i;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                    aria-expanded={open}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                        0{i + 1}
                      </span>
                      <span className="font-headline text-lg text-on-surface md:text-xl">
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-2xl text-primary transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      add
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pl-9 text-sm leading-relaxed text-on-surface-variant md:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
