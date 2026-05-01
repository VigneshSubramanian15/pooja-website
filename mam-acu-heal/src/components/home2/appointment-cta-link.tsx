import type { MouseEvent } from 'react'
import { motion } from 'motion/react'

const EASE = [0.25, 0.46, 0.45, 0.94] as const

type AppointmentCtaLinkProps = {
  buttonName: string
  className: string
  href?: string
  iconClassName?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function AppointmentCtaLink({
  buttonName,
  className,
  href = '#appointment',
  iconClassName = 'material-symbols-outlined text-base',
  onClick,
}: AppointmentCtaLinkProps) {
  const handleAppointmentClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    if (href.startsWith('#')) {
      event.preventDefault()
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.a href={href} whileHover="hover" onClick={handleAppointmentClick} className={className}>
      {buttonName}
      <motion.span
        variants={{ hover: { x: 3, y: -3 } }}
        transition={{ duration: 0.2, ease: EASE }}
        className={iconClassName}
      >
        arrow_outward
      </motion.span>
    </motion.a>
  )
}
