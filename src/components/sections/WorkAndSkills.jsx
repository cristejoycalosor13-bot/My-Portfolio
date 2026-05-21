import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { experiences } from '../../data/experienceData'
import { skillGroups } from '../../data/skillsData'

/* ── Video Gallery Modal ─────────────────────────────────────── */
function VideoModal({ videos, siteLink, onClose }) {
  const [active, setActive] = useState(null)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => { if (!active) onClose() }}
    >
      <motion.div
        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.88, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-rose-100">
          <div className="flex items-center gap-3">
            {active && (
              <button
                onClick={() => setActive(null)}
                className="w-8 h-8 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-600 text-sm transition-colors"
              >
                ←
              </button>
            )}
            <div>
              <h3 className="font-display italic text-rose-800 text-lg font-bold leading-tight">
                {active ? 'Now Playing' : 'Best of Cebu — Video Work'}
              </h3>
              {!active && (
                <p className="text-rose-400 text-xs mt-0.5">5 videos · tap to play</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!active && (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 text-xs font-semibold hover:text-rose-700 transition-colors border border-rose-200 px-3 py-1 rounded-full"
              >
                Visit site →
              </a>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center text-rose-500 text-sm transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key="player"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-xl overflow-hidden bg-black"
                style={{ aspectRatio: '16/9' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Best of Cebu video"
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {videos.map((id, i) => (
                  <motion.button
                    key={id}
                    className="relative rounded-xl overflow-hidden group cursor-pointer"
                    style={{ aspectRatio: '16/9' }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setActive(id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt={`Video ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-rose-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1.5 left-2 text-white text-[10px] font-semibold opacity-80">
                      #{i + 1}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── COE Certificate Modal ───────────────────────────────────── */
function COECertificate({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white w-full max-w-lg my-4 shadow-2xl rounded-2xl overflow-hidden"
        style={{ fontFamily: 'Georgia, serif' }}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-sm transition-colors"
          style={{ fontFamily: 'system-ui' }}
        >
          ✕
        </button>

        <div className="h-1.5 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />

        <div className="px-8 pt-6 pb-4 flex items-start justify-between gap-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-slate-700 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="font-black text-slate-800 tracking-[0.18em] text-base leading-none">VCUSTOMER</p>
              <p className="text-slate-600 text-[10px] tracking-[0.08em] uppercase font-bold mt-0.5">Human Resources Department</p>
            </div>
          </div>
          <div className="text-right text-[9px] text-slate-500 leading-relaxed max-w-[180px]">
            <p className="font-bold text-slate-600 text-[10px]">vCustomer Cebu Site:</p>
            <p>Filininvest Tower 2</p>
            <p>14<sup>th</sup> Floor FCC tower 2, Salinas Dr., cor W. Geonzon St</p>
            <p>IT Park, Cebu City 6000</p>
            <p className="font-bold text-slate-600 text-[10px] mt-1">Ebloc 3</p>
            <p>6<sup>th</sup> Floor Ebloc 3 || IT Park Lahug || Cebu City, Phils. 6000</p>
            <p className="text-red-600 mt-1">CEBU: Tel +032 260 970 local 510907</p>
          </div>
        </div>

        <div className="px-8 pt-6 pb-2 text-center">
          <h2 className="text-slate-800 tracking-[0.5em] text-2xl font-bold uppercase">
            C E R T I F I C A T I O N
          </h2>
          <div className="w-24 h-0.5 bg-slate-300 mx-auto mt-3" />
        </div>

        <div className="px-8 py-5 space-y-4 text-slate-700 text-sm leading-relaxed">
          <p>
            This is to certify that{' '}
            <strong className="text-slate-900">Criste Joy Calosor</strong> was an employee of{' '}
            <strong className="text-slate-900">vCUSTOMER PHILIPPINES (CEBU) INC. (a Tech Mahindra Company)</strong>{' '}
            from <strong className="text-slate-900">9/13/2024</strong> to{' '}
            <strong className="text-slate-900">12/4/2024</strong>. She held the position{' '}
            <strong className="text-slate-900">Associate - Customer Support</strong>.
          </p>
          <p>
            This certification is issued upon the request of{' '}
            <strong className="text-slate-900">Criste Joy Calosor</strong> for employment purposes.
            vCustomer Cebu shall not be held liable if this certification is used other than the
            purpose indicated.
          </p>
          <p>
            Issued this <strong className="text-slate-900">23rd day of December 2024</strong>,
            Cebu City, Philippines.
          </p>
        </div>

        <div className="px-8 pb-5">
          <div className="w-40 pt-6">
            <div className="border-b border-slate-400 mb-1" />
            <p className="font-bold text-slate-800 text-sm">Marvin Chris Zoilo</p>
            <p className="text-slate-600 text-xs">Group Manager, Human Resources</p>
          </div>
        </div>

        <div className="px-8 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-slate-400 text-[9px]">HR Document</p>
          <p className="text-[9px] text-slate-500 italic">
            For Employee Verification:{' '}
            <span className="text-blue-500">EmployeeVerificationRequest@TechMahindra.com</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Skill Detail Modal ──────────────────────────────────────── */
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

/* ── Sub-section label ───────────────────────────────────────── */
function SubLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
      <span className="font-body text-xs font-semibold tracking-[0.22em] uppercase text-rose-400 whitespace-nowrap">
        ✦ &nbsp;{children}&nbsp; ✦
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
    </div>
  )
}

/* ── Combined Work & Skills Section ─────────────────────────── */
export default function WorkAndSkills() {
  const [coeOpen, setCoeOpen]           = useState(false)
  const [videoExp, setVideoExp]         = useState(null)
  const [activeSkill, setActiveSkill]   = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSlides, setLightboxSlides] = useState([])

  function handleExpClick(exp) {
    if (exp.linkType === 'external') {
      window.open(exp.link, '_blank', 'noopener,noreferrer')
    } else if (exp.linkType === 'videos') {
      setVideoExp(exp)
    } else if (exp.linkType === 'coe') {
      setCoeOpen(true)
    } else if (exp.linkType === 'gallery' && exp.gallery) {
      setLightboxSlides(exp.gallery)
      setLightboxOpen(true)
    }
  }

  return (
    <section id="experience" className="bg-hero-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        {/* Section header */}
        <ScrollReveal className="text-center mb-10">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;My Journey&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Skills &amp; Experience</h2>
          <FloralDivider className="mx-auto mb-3" />
          <p className="font-body text-rose-400 text-sm italic">
            Tap any card to explore — videos, certificates, and more.
          </p>
        </ScrollReveal>

        {/* ── Experience cards ── */}
        <SubLabel>Experience</SubLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.08}>
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-glass"
                style={{ aspectRatio: '4/3' }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                onClick={() => handleExpClick(exp)}
              >
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient}`} />

                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-1">
                  <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/25 leading-none">
                    {exp.badge}
                  </span>
                  <span className="bg-black/25 backdrop-blur-sm text-white/90 text-[10px] px-2 py-1 rounded-full leading-none">
                    {exp.period}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-display text-white text-sm font-bold leading-tight">{exp.company}</h3>
                  <p className="text-white/75 text-[11px] mt-0.5 leading-snug">{exp.role}</p>
                  {exp.note && (
                    <p className="text-amber-300 text-[10px] italic mt-0.5">{exp.note}</p>
                  )}
                  <p className="text-white/0 group-hover:text-white/90 text-[10px] font-semibold mt-1.5 transition-colors duration-200">
                    {exp.cta}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Skill cards ── */}
        <SubLabel>Skills &amp; Expertise</SubLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map((skill, i) => (
            <ScrollReveal key={skill.id} delay={i * 0.07}>
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-glass hover:shadow-glass-md transition-shadow"
                style={{ aspectRatio: '4/3' }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.22 }}
                onClick={() => setActiveSkill(skill)}
              >
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-950/85 via-rose-900/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-2xl mb-1">{skill.icon}</div>
                  <h3 className="font-display text-white text-sm font-bold leading-tight">{skill.title}</h3>
                </div>

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

      {/* Modals */}
      <AnimatePresence>
        {videoExp && (
          <VideoModal
            videos={videoExp.videos}
            siteLink={videoExp.link}
            onClose={() => setVideoExp(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {coeOpen && <COECertificate onClose={() => setCoeOpen(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {activeSkill && <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />}
      </AnimatePresence>

      <PortfolioLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        index={0}
        slides={lightboxSlides}
      />
    </section>
  )
}
