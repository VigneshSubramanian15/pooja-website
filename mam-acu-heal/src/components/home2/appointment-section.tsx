import { motion } from "motion/react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function AppointmentSection() {
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
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        animate={{ backgroundPosition: ["64px 64px", "0px 0px"] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <span className="font-label text-xs uppercase tracking-[0.22em] text-on-primary/70">
            Get in touch
          </span>
          <h2 className="mt-4 font-headline text-4xl leading-tight tracking-tight text-on-primary md:text-5xl lg:text-6xl">
            Request a <span className="italic">consultation.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-on-primary/80">
            Share a few details and a care coordinator will reach out within 24
            hours to confirm your appointment.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-on-primary/90">
              <span className="material-symbols-outlined text-xl">call</span>
              +91 99523 90110
            </li>
            <li className="flex items-center gap-3 text-on-primary/90">
              <span className="material-symbols-outlined text-xl">mail</span>
              hello@mamacuheal.in
            </li>
            <li className="flex items-start gap-3 text-on-primary/90">
              <span className="material-symbols-outlined text-xl">
                location_on
              </span>
              <span>
                107, QMQ9+4G9 Jamuna corner, 103, <br />
                dindigul main road, Thirunagar, Karumandapam, <br />
                Tiruchirappalli, Tamil Nadu 620001
              </span>
            </li>
            <li className="flex items-center gap-3 text-on-primary/90">
              <a
                href="https://maps.app.goo.gl/zuJhHQq5G71R8Fja8"
                target="_blank"
                rel="noreferrer"
                className="group relative mt-2 inline-flex items-center gap-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-on-primary"
              >
                <span className="material-symbols-outlined text-sm">
                  directions
                </span>
                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-on-primary after:transition-transform after:duration-1000 after:content-[''] group-hover:after:scale-x-100">
                  Get Directions
                </span>
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-sm bg-surface lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        >
          {/* <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2VpQ762bbN15BEDq8hfWuuv1iy5r_h1mZ-FYi-Dr8O9dHeK-h9JMqKXX2sQHg-DGlUhOFIim-G?gv=true"
            title="Book an appointment"
            className="h-[600px] w-full border-0"
          /> */}

          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1B3kDZbeddYBwD4Tw_Sx1bLzasLUooEvH9stP9BmkFlbmvmgKkVs1Mar98ByOfzJ3TOxlWVDtG?gv=true"
            className="h-[600px] w-full border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
