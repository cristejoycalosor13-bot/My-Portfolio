import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { skillGroups } from '../../data/skillsData'

function SkillModal({ skill, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl"
        initial={{ scale: 0.85, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 24 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-36 overflow-hidden">
          <img src={skill.image} alt={skill.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-950/80 via-rose-800/30 to-transparent" />
          <div className="absolute bottom-3 left-4 flex items-center gap-2.5">
            <span className="text-3xl">{skill.icon}</span>
            <h3 className="font-display text-white text-xl italic font-bold">{skill.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-7 h-7 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors backdrop-blur-sm"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="font-body text-rose-400 italic text-sm mb-4">{skill.description}</p>
          <div className="flex flex-wrap gap-2">
            {skill.tags.map(tag => (
              <span
                key={tag}
                className="bg-blush-50 text-rose-600 border border-rose-200 px-3 py-1.5 rounded-full text-xs font-medium font-body"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section id="skills" className="bg-hero-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        <ScrollReveal className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;What I Bring&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Skills &amp; Expertise</h2>
          <FloralDivider className="mx-auto mb-3" />
          <p className="font-body text-rose-400 text-sm italic">Tap any skill to explore.</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map((skill, i) => (
            <ScrollReveal key={skill.id} delay={i * 0.07}>
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-glass hover:shadow-glass-md transition-shadow"
                style={{ aspectRatio: '4/3' }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.22 }}
                onClick={() => setActive(skill)}
              >
                {/* Background image */}
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark-to-transparent overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/85 via-rose-900/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-2xl mb-1">{skill.icon}</div>
                  <h3 className="font-display text-white text-sm font-bold leading-tight">{skill.title}</h3>
                </div>

                {/* Hover hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/30 font-medium">
                    ✦ Tap to explore
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {active && <SkillModal skill={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
