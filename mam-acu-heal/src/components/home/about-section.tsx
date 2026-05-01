export default function AboutSection() {
  return (
    <section className="bg-surface px-12 py-32">
      <div className="mx-auto grid max-w-[1920px] grid-cols-1 items-center gap-24 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <img
            alt="The Arua Story"
            className="aspect-[4/5] w-full rounded-sm object-cover grayscale-[10%] transition-all duration-700 hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWBjVGEl9aK9meGwasHVLJZghLcesGLtUexGn1IFdYBIOhzaeqM46tPFcXODrkr9iZfO2XiaKUdtsfqvTE3kBEGO7l2dZbW6KKUjJ7W9Lm2vt7MjcgDpx3ilEYZoN4TZlLL2iTLJ3ZT-FuUCv5b0EuF24umrZ-MCtn9_RkrZ-JKr-UCn-saeYUVQi6-SShFL8pYgAvlpar95J36LaLSCH8cwCUbeNu68PJZzpv8L_AtgYRuNjpcC6qiyxRn5MjV_6EICtIwou4zdE"
          />
        </div>
        <div className="order-1 pl-0 lg:order-2 lg:col-span-7 lg:pl-12">
          <span className="mb-6 block font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant">The Heritage of Healing</span>
          <h2 className="mb-8 font-headline text-6xl leading-tight text-primary">
            Crafting a path to <span className="italic">wholeness</span> through meticulous care.
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Founded on the principle that true health is more than the absence of disease, Arua serves as a sanctuary for those seeking restorative therapy. We honor the heritage of traditional medicine while embracing modern clinical standards.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Our practitioners at Arua are master-level specialists dedicated to the art of listening. Every treatment plan is a collaboration between your body&apos;s wisdom and our clinical expertise.
            </p>
          </div>
          <div className="mt-12 flex gap-12">
            <div>
              <p className="mb-2 font-headline text-4xl text-primary">25+</p>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Years of Practice</p>
            </div>
            <div>
              <p className="mb-2 font-headline text-4xl text-primary">12k</p>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Healed Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
