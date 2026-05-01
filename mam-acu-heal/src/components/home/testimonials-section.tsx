export default function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-surface px-12 py-32">
      <div className="mx-auto flex max-w-[1920px] flex-col gap-20 lg:flex-row">
        <div className="lg:w-1/3">
          <h2 className="mb-8 font-headline text-5xl leading-tight text-primary">
            Reflections from our <span className="italic">Community.</span>
          </h2>
          <p className="text-lg text-on-surface-variant">Honest experiences from those who have walked the path to recovery with Arua.</p>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-12 lg:w-2/3 snap-x">
          <div className="min-w-[400px] snap-center bg-surface-container-low p-12">
            <div className="mb-6 font-headline text-4xl italic text-primary-container">"</div>
            <p className="mb-8 text-lg italic leading-relaxed text-on-surface-variant">
              The atmosphere at Arua alone is healing. After six sessions, my chronic back pain has vanished and my energy levels are higher than they have been in decades.
            </p>
            <div className="border-t border-outline-variant pt-6">
              <p className="font-label text-sm font-bold text-primary">Eleanor Vance</p>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Architect</p>
            </div>
          </div>
          <div className="min-w-[400px] snap-center bg-surface-container-low p-12">
            <div className="mb-6 font-headline text-4xl italic text-primary-container">"</div>
            <p className="mb-8 text-lg italic leading-relaxed text-on-surface-variant">
              Truly a transformative experience. They do not just treat the symptoms; Arua looks at your entire life to find the source of the issue.
            </p>
            <div className="border-t border-outline-variant pt-6">
              <p className="font-label text-sm font-bold text-primary">Julian Thorne</p>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
