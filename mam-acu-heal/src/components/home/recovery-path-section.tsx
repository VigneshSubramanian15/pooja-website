const steps = [
  ['1', 'Initial Consultation', 'A deep dive into your health history, goals, and constitution.'],
  ['2', 'Personalized Plan', 'A bespoke roadmap combining treatments and lifestyle advice.'],
  ['3', 'Therapeutic Sessions', 'Targeted treatments designed to resolve acute symptoms.'],
  ['4', 'Ongoing Vitality', 'Long-term maintenance to ensure lasting health and balance.'],
]

export default function RecoveryPathSection() {
  return (
    <section className="bg-surface-container-highest px-12 py-32">
      <div className="mx-auto mb-24 max-w-[1920px] text-center">
        <h2 className="mb-6 font-headline text-5xl text-primary">The Path to Recovery</h2>
        <p className="mx-auto max-w-xl text-on-surface-variant">A structured approach to your well-being at Arua, designed to provide clarity at every stage.</p>
      </div>
      <div className="relative mx-auto max-w-[1920px]">
        <div className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-outline-variant/30 lg:block" />
        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {steps.map(([step, title, text]) => (
            <div key={step} className="editorial-shadow bg-surface p-10 text-center">
              <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-headline text-xl text-on-primary">{step}</div>
              <h4 className="mb-4 font-headline text-xl">{title}</h4>
              <p className="text-sm text-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
