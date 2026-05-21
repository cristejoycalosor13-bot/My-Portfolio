import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { experiences } from '../../data/experienceData'

function COEModal({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl"
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-600 px-6 py-5 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-1">Certificate of Employment</p>
              <h3 className="font-display text-xl italic font-bold">vCUSTOMER Philippines</h3>
              <p className="text-slate-400 text-xs mt-0.5">A Tech Mahindra Company · Cebu IT Park</p>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Position</p>
              <p className="font-semibold text-slate-700 text-sm leading-snug">Associate — Customer Support</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Period</p>
              <p className="font-semibold text-slate-700 text-sm leading-snug">Sep 13 – Dec 4, 2024</p>
            </div>
          </div>
          <div className="bg-rose-50 rounded-xl p-3 border border-rose-100">
            <p className="text-[10px] text-rose-400 uppercase tracking-wider mb-1">Key Skill</p>
            <p className="text-rose-700 text-sm font-medium">Excellent verbal communication & customer handling</p>
          </div>
          <p className="text-slate-400 text-xs text-center italic pt-1">
            Certified by Marvin Chris Zoilo, Group Manager HR · Dec 23, 2024
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const [coeOpen, setCoeOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSlides, setLightboxSlides] = useState([])

  function handleClick(exp) {
    if (exp.linkType === 'external') {
      window.open(exp.link, '_blank', 'noopener,noreferrer')
    } else if (exp.linkType === 'coe') {
      setCoeOpen(true)
    } else if (exp.linkType === 'gallery' && exp.gallery) {
      setLightboxSlides(exp.gallery)
      setLightboxOpen(true)
    }
  }

  return (
    <section id="experience" className="bg-white relative py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;My Journey&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Experience</h2>
          <FloralDivider className="mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.08}>
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-glass"
                style={{ aspectRatio: '4/3' }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                onClick={() => handleClick(exp)}
              >
                {/* Background image */}
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient}`} />

                {/* Top badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-1">
                  <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/25 leading-none">
                    {exp.badge}
                  </span>
                  <span className="bg-black/25 backdrop-blur-sm text-white/90 text-[10px] px-2 py-1 rounded-full leading-none">
                    {exp.period}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-display text-white text-sm font-bold leading-tight">{exp.company}</h3>
                  <p className="text-white/75 text-[11px] mt-0.5 leading-snug">{exp.role}</p>
                  {exp.note && (
                    <p className="text-amber-300 text-[10px] italic mt-0.5">{exp.note}</p>
                  )}
                  {/* CTA on hover */}
                  <p className="text-white/0 group-hover:text-white/90 text-[10px] font-semibold mt-1.5 transition-colors duration-200">
                    {exp.cta}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* COE Modal */}
      <AnimatePresence>
        {coeOpen && <COEModal onClose={() => setCoeOpen(false)} />}
      </AnimatePresence>

      {/* Gallery Lightbox */}
      <PortfolioLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        index={0}
        slides={lightboxSlides}
      />
    </section>
  )
}
