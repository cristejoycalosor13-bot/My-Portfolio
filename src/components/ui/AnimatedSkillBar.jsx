import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimatedSkillBar({ name, percentage, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body font-medium text-rose-800 text-sm">{name}</span>
        <span className="font-body font-semibold text-amber-600 text-xs bg-amber-50 px-2 py-0.5 rounded-full">
          {percentage}%
        </span>
      </div>
      <div className="h-2.5 bg-rose-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.3, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
