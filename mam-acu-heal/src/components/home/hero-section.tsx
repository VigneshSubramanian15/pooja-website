import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[921px] items-center overflow-hidden px-12">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="z-10 lg:col-span-6">
          <span className="mb-6 block font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant">Holistic Healing since 2020</span>
          <h1 className="mb-8 font-headline text-7xl leading-[1.1] text-primary md:text-8xl">
            Advance <br />
            <span className="italic">Acupuncture &</span> <br />
            Integrated Wellness in Trichy
          </h1>
          <p className="mb-10 max-w-lg text-xl leading-relaxed text-on-surface-variant">
Scientific healing for chronic conditions. we combine traditional Pulse diagnosis with modern Clinical insights to treat the root cause of your health concerns          </p>
          <div className="flex items-center gap-8">
            <button className="rounded bg-primary px-12 py-5 font-medium text-on-primary transition-all duration-300 hover:opacity-90">Start Your Journey</button>
            <button className="border-b border-primary/20 pb-1 font-medium text-primary transition-all hover:border-primary">Message us on <FaWhatsapp size={24} className="mb-1 inline-block ml-1" /></button>
          </div>
        </div>
        <div className="relative h-[716px] lg:col-span-6 lg:h-[819px]">
          <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-sm bg-surface-container-highest" />
          <img
            alt="Arua Wellness Sanctuary"
            className="relative z-10 h-full w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsthFgBz5RPhcajREIYmUn5OcqxJZjFyqBA2xFtQdacbYZ4apj_KD40JVMN1dKvdmBMdFsvUrWiFJA4Yo_eeMHleoNJUqJt2Nl8aFNS_IcJ7_7dPe-kBmpc5Z84Wzjp8qxJ6TnxLFn4ULS6ZXcPE0SwtChrWmY7L14Cqii9dSWab3EAqOL9THZELXBJQAK-y0meV2GA2rCQQJ45p9aloZAX1kfdT7hl35f6SIFyzwtivvQaPUhf_MephGbd1pzH9QuDhkHh_cQfWA"
          />
          <div className="editorial-shadow absolute bottom-12 -left-12 z-20 max-w-xs bg-surface p-8">
            <p className="font-headline text-lg italic text-primary">"The medicine of the future will be the medicine of the frequencies."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
