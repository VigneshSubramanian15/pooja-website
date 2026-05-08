import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "motion/react";
import Logo from "./logo";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE, delay: i * 0.08 },
  }),
};

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-surface px-6 pt-20 pb-10 md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-outline-variant/60 pb-14 md:grid-cols-12">
          <motion.div
            className="md:col-span-5"
            custom={0}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <a href="#home" className="flex items-center gap-3">
              <Logo width={370} height="auto" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-surface-variant">
              Advance Acupuncture &amp; Integrated Wellness in Trichy. Treating
              the root cause with science, hygiene, and care.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/919952390110?text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant text-primary transition-colors hover:border-primary"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="https://www.instagram.com/m.a.m_acu_heal/"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant text-primary transition-colors hover:border-primary"
              >
                <FaInstagram size={16} />
              </a>
              {/* <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-outline-variant text-primary transition-colors hover:border-primary"
              >
                <FaFacebookF size={14} />
              </a> */}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            custom={1}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="mb-4 font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a className="text-on-surface hover:text-primary" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-on-surface hover:text-primary" href="#about">
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface hover:text-primary"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a className="text-on-surface hover:text-primary" href="#faq">
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            custom={2}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="mb-4 font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-on-surface">Classic Acupuncture</li>
              <li className="text-on-surface">Cupping &amp; Moxibustion</li>
              <li className="text-on-surface">Chiropractic</li>
              <li className="text-on-surface">Foot Reflexology</li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            custom={3}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="mb-4 font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface">
              <li>+91 99523 90110</li>
              <li>hello@mamacuheal.in</li>
              <li>Karumandapam, Tiruchirappalli, Tamil Nadu 620001</li>

              <li>
                <a
                  href="https://maps.app.goo.gl/zuJhHQq5G71R8Fja8"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mt-2 inline-flex items-center gap-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-primary"
                >
                  <span className="material-symbols-outlined text-sm">
                    directions
                  </span>
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-1000 after:content-[''] group-hover:after:scale-x-100">
                    Get Directions
                  </span>
                </a>
              </li>
              <li className="pt-2 font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
                Mon – Sat · 9am – 7pm
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-start justify-between gap-3 pt-8 text-xs text-on-surface-variant md:flex-row md:items-center"
          custom={4}
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p>© {new Date().getFullYear()} MAM Acu Heal. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
