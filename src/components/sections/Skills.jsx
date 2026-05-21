import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { skillGroups } from '../../data/skillsData'

function SkillAccordion({ icon, title, description, tags, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="bg-gradient-to-br from-blush-50 to-rose-50 rounded-2xl overflow-hidden border border-rose-100 hover:shadow-glass transition-shadow duration-300">
      <button
        className="w-full px-5 py-4 flex items-center justify-between gap-3 cursor-pointer text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-rose-100 flex-shrink-0">
            {icon}
          </div>
          <h3 className="font-display font-bold text-rose-800 text-base">{title}</h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-rose-400 text-sm font-bold flex-shrink-0"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4">
              <p className="font-body text-rose-500 text-sm mb-3 italic leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-rose-600 border border-rose-200 px-3 py-1 rounded-full text-xs font-medium font-body hover:bg-blush-100 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gold-light relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;What I Bring&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Skills &amp; Expertise</h2>
          <FloralDivider className="mx-auto mb-3" />
          <p className="font-body text-rose-500 text-sm italic max-w-md mx-auto">
            Every tool I wield is a brushstroke in the masterpiece of communication.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.id} delay={i * 0.07}>
              <SkillAccordion
                icon={group.icon}
                title={group.title}
                description={group.description}
                tags={group.tags}
                defaultOpen={i === 0}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
