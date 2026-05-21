import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'
import EducationCard from '../ui/EducationCard'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { education } from '../../data/educationData'

const BASE = import.meta.env.BASE_URL

const informaticsCerts = [
  {
    title: 'SHS Diploma',
    note: 'Humanities & Social Sciences · July 2022',
    edited: `${BASE}certificates/informatics-diploma.jpg`,
    original: `${BASE}certificates/informatics-diploma-orig.jpg`,
  },
  {
    title: 'With High Honors',
    note: 'GWA 95 · Academic Year 2021–2022',
    edited: `${BASE}certificates/informatics-high-honors.jpg`,
    original: `${BASE}certificates/informatics-high-honors-orig.jpg`,
  },
  {
    title: 'Academic Excellence Award',
    note: 'Academic Achiever with Honors · 2020–2021',
    edited: `${BASE}certificates/informatics-academic-excellence.jpg`,
    original: `${BASE}certificates/informatics-academic-excellence-orig.jpg`,
  },
  {
    title: 'Best in Empowerment Technologies',
    note: '2nd Semester · 2020–2021',
    edited: `${BASE}certificates/informatics-empowerment-tech.jpg`,
    original: `${BASE}certificates/informatics-empowerment-tech-orig.jpg`,
  },
  {
    title: 'Best in English',
    note: 'Academic & Professional Purposes · 2020–2021',
    edited: `${BASE}certificates/informatics-best-english.jpg`,
    original: `${BASE}certificates/informatics-best-english-orig.jpg`,
  },
]

/* ── Informatics Certificate Modal ───────────────────────────── */
function InformaticsCertModal({ onClose }) {
  const [tab, setTab]             = useState('edited')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const slides = informaticsCerts.map(c => ({
    src: tab === 'edited' ? c.edited : c.original,
    alt: c.title,
  }))

  function openAt(i) {
    setLightboxIndex(i)
    setLightboxOpen(true)
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.88, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.88, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-800 to-rose-700 px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-display italic text-white text-xl font-bold">Informatics College Cebu</h3>
              <p className="text-rose-200 text-xs mt-0.5">Senior High School · 2020–2022</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/15 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-sm transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Tab switcher */}
          <div className="flex border-b border-rose-100">
            <button
              onClick={() => setTab('edited')}
              className={`flex-1 py-3 font-body text-sm font-semibold transition-colors ${
                tab === 'edited'
                  ? 'text-rose-700 border-b-2 border-rose-500 bg-rose-50'
                  : 'text-rose-400 hover:text-rose-600'
              }`}
            >
              ✦ Edited Copies
            </button>
            <button
              onClick={() => setTab('originals')}
              className={`flex-1 py-3 font-body text-sm font-semibold transition-colors ${
                tab === 'originals'
                  ? 'text-rose-700 border-b-2 border-rose-500 bg-rose-50'
                  : 'text-rose-400 hover:text-rose-600'
              }`}
            >
              📄 Original Documents
            </button>
          </div>

          {/* Certificate grid */}
          <div className="p-5 max-h-[55vh] overflow-y-auto">
            {tab === 'originals' ? (
              <div className="text-center py-10">
                <p className="text-4xl mb-3">📋</p>
                <p className="font-display italic text-rose-500 text-lg">Coming soon</p>
                <p className="font-body text-rose-400 text-sm mt-1">Scanned originals will be added shortly.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {informaticsCerts.map((cert, i) => (
                  <motion.button
                    key={cert.title}
                    className="relative rounded-xl overflow-hidden group text-left cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.18 }}
                    onClick={() => openAt(i)}
                  >
                    <div className="aspect-[4/3] bg-rose-50 border border-rose-100 rounded-xl overflow-hidden">
                      <img
                        src={tab === 'edited' ? cert.edited : cert.original}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-1.5 px-0.5">
                      <p className="font-body text-rose-700 text-[11px] font-semibold leading-tight">{cert.title}</p>
                      <p className="font-body text-rose-400 text-[10px] leading-tight">{cert.note}</p>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-rose-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                      View
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

      <PortfolioLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  )
}

/* ── Main Education Section ──────────────────────────────────── */
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Education() {
  const { ref, inView }           = useInView({ triggerOnce: true, threshold: 0.1 })
  const [certModalOpen, setCertModalOpen] = useState(false)

  return (
    <section id="education" className="bg-rose-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;My academic path&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Education</h2>
          <FloralDivider className="mx-auto" />
        </ScrollReveal>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              school={edu.school}
              level={edu.level}
              period={edu.period}
              location={edu.location}
              description={edu.description}
              onClick={edu.hasCerts ? () => setCertModalOpen(true) : undefined}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {certModalOpen && (
          <InformaticsCertModal onClose={() => setCertModalOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}
