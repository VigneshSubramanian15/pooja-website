import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AppointmentCtaLink from "./appointment-cta-link";
import Logo from "./logo";

const NAV_LINKS = [
  //   { label: 'Home', href: '#home' },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  //   { label: 'Blog', href: '#blog' },
  { label: "Contact us", href: "#appointment" },
];

const MOBILE_MENU_CLOSE_MS = 280;

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pendingScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open || !pendingScrollRef.current) return;

    const href = pendingScrollRef.current;
    pendingScrollRef.current = null;

    const timer = window.setTimeout(() => {
      requestAnimationFrame(() => scrollToSection(href));
    }, MOBILE_MENU_CLOSE_MS);

    return () => window.clearTimeout(timer);
  }, [open]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    if (open) {
      pendingScrollRef.current = href;
      setOpen(false);
      return;
    }

    scrollToSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`absolute left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md shadow-[0_4px_60px_rgba(32,26,24,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-headline text-xl font-bold tracking-tight text-primary"
        >
          {/* MAM <span className="italic">ACU HEAL</span> */}
          <Logo width={"100%"} height={"100%"} />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-label text-sm font-medium tracking-wide text-on-surface/70 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <AppointmentCtaLink
            buttonName="Book Appointment"
            onClick={(e) => handleNavClick(e, "#appointment")}
            className="hidden items-center gap-2 rounded-full bg-primary px-6 py-3 font-label text-xs font-semibold uppercase tracking-[0.18em] text-on-primary transition-all duration-300 hover:opacity-90 md:inline-flex"
          />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-outline-variant text-primary lg:hidden"
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-outline-variant/40 bg-surface lg:hidden"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-md px-3 py-3 font-label text-sm font-medium text-on-surface/80 hover:bg-surface-container hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <AppointmentCtaLink
                buttonName="Book Appointment"
                onClick={(e) => handleNavClick(e, "#appointment")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center font-label text-xs font-semibold uppercase tracking-[0.18em] text-on-primary"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
