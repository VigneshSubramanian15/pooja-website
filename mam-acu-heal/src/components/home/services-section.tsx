const services = [
  {
    title: 'Traditional Acupuncture',
    description: "Fine needle therapy to stimulate life force energy (Qi) and activate the body's natural healing response.",
    icon: 'acupuncture',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBueC8iDpnXZURzE9DprtbaBPxhb0D8JGr0xC6wsKJ-IYo5kzNl0QS4EnjS-JuQh6c51omIbplUBcY4oJEXFbVMBLy9zifBL3AYhkEzIqAMuo_MnFhz_mrU6mQCGWrHzbl_nTJTutHLaL7qiGfjmvWGxfBox9GfrR_FM1o7AGxHecGA6w30AO51BNRN9kwhLEXyOk4Ku7aumd_CpfR7UBk7a6HepFZS7QyEw8JPiErk9_QlAeEWXFG2Mok1pJ9DX8eDUEAcqNE4ZMg',
  },
  {
    title: 'Herbal Medicine',
    description: 'Custom botanical formulations tailored to your unique constitution and health requirements.',
    icon: 'spa',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA1sTuAdxMvp6jew-PWfxi-Z9fENlwAmbtNHwQU9qVrX0lWTyRwy4vw3aSdQV1aA0s9gUyJc-67vA5CGVOBnUxLgI4dptvJyswVnf2jNuHnZMz0p8Ecp22yG4KQptlRcyc9TPNZsCSJiMdrRYlnsLFGvWP0Yw4sQkFWiMRNtDPNGnhnljrGW5EOmUSJt5NNsSqqxHUn1CUSzZAmCLa_C6vAPsRUS3PyaQBRWeXEAom24zIVnbP9Qf2krUd42UWmZ3vzoRK2js3elg8',
  },
  {
    title: 'Wellness Coaching',
    description: 'Guided lifestyle and nutritional integration to sustain clinical results and optimize daily vitality.',
    icon: 'self_improvement',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRlv_FEcqapdP-te1iuWuZ2_hiaChxvgB6lXPnIz8eBXumleOXl74oA3LsgcMBe3jYzLOQ8Vp4Qmjyz1rD2RnBQId_XDFVPfB-t4pBbUNkQTNITiS7gwQ8e5o9ytkgKPLbq2PjUlCQbcB0anVH2LjQyFZGBtzi3p6PJNdQdWrxvCGUUBgx12Lo5vdlara4TcD3M2jCtPflle_ce-_31V1sa2QwIIZ1b1UU8IFqCxITSjjNzSJnS116TsRFJaNAAb9xj0tvvvN_TUU',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-surface-container-low px-12 py-32">
      <div className="mx-auto max-w-[1920px]">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-headline text-5xl text-primary">Our Healing Modalities</h2>
            <p className="text-lg text-on-surface-variant">We combine traditional meridian therapy with modern clinical insights to address the root causes of imbalance.</p>
          </div>
          <div className="border-b border-outline-variant pb-2 font-label text-sm uppercase tracking-widest text-on-surface-variant">Scroll to Explore</div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="editorial-shadow group overflow-hidden bg-surface p-0 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img alt={service.title} className="h-full w-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src={service.image} />
              </div>
              <div className="p-12">
                <div className="mb-8 text-primary opacity-60 transition-opacity group-hover:opacity-100">
                  <span className="material-symbols-outlined text-5xl">{service.icon}</span>
                </div>
                <h3 className="mb-4 font-headline text-2xl text-primary">{service.title}</h3>
                <p className="mb-8 leading-relaxed text-on-surface-variant">{service.description}</p>
                <a className="inline-flex items-center gap-2 border-b border-primary/10 pb-1 font-label text-xs uppercase tracking-widest text-primary transition-all group-hover:border-primary" href="#">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
