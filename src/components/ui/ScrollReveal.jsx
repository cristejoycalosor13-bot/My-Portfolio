import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 32 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 },  visible: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.6,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const variants = directionVariants[direction] || directionVariants.up

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
