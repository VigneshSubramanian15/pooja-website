export default function TopNavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#fff8f6]/80 backdrop-blur-md shadow-[0_4px_60px_rgba(32,26,24,0.04)]">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-12 py-6">
        <a className="font-headline text-2xl font-bold italic tracking-tighter text-[#511416]" href="#">
           MAM ACU HEAL
        </a>
        <div className="hidden items-center gap-10 md:flex">
          <a className="font-headline text-lg font-medium tracking-tight text-[#201a18]/60 transition-colors duration-300 hover:text-[#511416]" href="#">Philosophy</a>
          <a className="font-headline text-lg font-medium tracking-tight text-[#201a18]/60 transition-colors duration-300 hover:text-[#511416]" href="#">Treatments</a>
          <a className="font-headline text-lg font-medium tracking-tight text-[#201a18]/60 transition-colors duration-300 hover:text-[#511416]" href="#">The Clinic</a>
          <a className="font-headline text-lg font-medium tracking-tight text-[#201a18]/60 transition-colors duration-300 hover:text-[#511416]" href="#">Journal</a>
          <a className="font-headline text-lg font-medium tracking-tight text-[#201a18]/60 transition-colors duration-300 hover:text-[#511416]" href="#">Appointments</a>
        </div>
        <button className="rounded bg-primary px-10 py-3 text-sm font-medium uppercase tracking-widest text-on-primary transition-all duration-300 hover:opacity-90">
          Book a Session
        </button>
      </div>
    </nav>
  )
}
