import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RoseBud from '../../assets/svgs/RoseBud'

export default function ExperienceAccordion({
  title,
  company,
  period,
  location,
  responsibilities,
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="glass-card overflow-hidden cursor-pointer mb-4 hover:shadow-glass-md transition-shadow duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-5 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-rose-800 leading-snug">
            {title}
          </h3>
          <p className="font-body text-rose-500 text-sm mt-0.5">{company}</p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-0.5 rounded-full border border-amber-200">
              {period}
            </span>
            <span className="text-rose-300 text-xs hidden sm:inline">·</span>
            <span className="text-rose-400 text-xs font-body">{location}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="text-rose-400 mt-1 flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 pt-3 border-t border-rose-100">
              <ul className="space-y-2.5">
                {responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex-shrink-0">
                      <RoseBud size={13} />
                    </span>
                    <span className="font-body text-rose-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
