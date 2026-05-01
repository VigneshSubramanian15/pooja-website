export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#fef1ed] text-[#511416]">
      <div className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-12 px-12 py-20 md:grid-cols-4">
        <div className="flex flex-col gap-6">
          <a className="font-headline text-2xl font-bold italic tracking-tighter text-[#511416]" href="#">
            Arua
          </a>
          <p className="max-w-xs font-body text-sm leading-relaxed text-[#201a18]/50">Curating holistic health and vitality through timeless wisdom and modern care.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-sm font-semibold uppercase tracking-widest">Clinic</h5>
          <nav className="flex flex-col gap-2">
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Philosophy</a>
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Treatments</a>
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Practitioners</a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-sm font-semibold uppercase tracking-widest">Resources</h5>
          <nav className="flex flex-col gap-2">
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Privacy Policy</a>
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Terms of Service</a>
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Accessibility</a>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-label text-sm font-semibold uppercase tracking-widest">Connect</h5>
          <nav className="flex flex-col gap-2">
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Contact Us</a>
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Careers</a>
            <a className="font-body text-sm text-[#201a18]/50 underline decoration-1 underline-offset-4 transition-all hover:text-[#511416]" href="#">Journal</a>
          </nav>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1920px] border-t border-[#511416]/10 px-12 pt-8 pb-12">
        <p className="font-label text-xs uppercase tracking-widest text-[#201a18]/40">© 2024 Arua. All rights reserved. Crafted for Digital Curators.</p>
      </div>
    </footer>
  )
}
