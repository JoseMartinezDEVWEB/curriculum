export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
})

export const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
})

export const slideRight = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }
})

export const stagger = {
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}

export const hoverLift = {
  rest: { y: 0, boxShadow: '0 10px 30px -12px rgba(2,132,199,0.15)' },
  hover: { y: -4, boxShadow: '0 14px 34px -10px rgba(2,132,199,0.25)' }
}
