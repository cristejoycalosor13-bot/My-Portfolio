import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'
import aboutPhoto from '../../assets/criste-about.jpg'

const services = [
  'Graphic Design',
  'Social Media Posts, Stories & Basic Reels',
  'Website Design & Landing Pages',
  'Basic Web Development / Website Updates',
  'Content Calendar Creation',
  'Social Media Scheduling',
  'File & Task Organization',
  'Recruitment Sourcing & Candidate Tracking',
  'Basic Video Editing',
  'E-Commerce Content Support',
]

const traits = ['Fast Learner', 'Visual Thinker', 'Detail-Oriented', 'Curious & Adaptable']

const bundles = [
  {
    id: 1,
    title: 'Bundle 1 — Social Media Content Support',
    emoji: '📱',
    offers: [
      'Canva graphics & branded templates',
      'Instagram & Facebook posts',
      'TikTok / Reels basic editing',
      'Captions & hashtag strategy',
      'Content calendar planning',
      'Scheduling & posting',
      'Organized content folders',
    ],
    price: [
      { label: 'International', value: '$150 – $400 / month' },
    ],
  },
  {
    id: 2,
    title: 'Bundle 2 — Website Design & Web Support',
    emoji: '🌐',
    offers: [
      'Simple business website',
      'Landing page design',
      'Portfolio website',
      'Website redesign',
      'Shopify / Wix / WordPress support',
      'Basic HTML & CSS fixes',
    ],
    price: [
      { label: 'Local (Philippines)', value: '₱10,000 – ₱30,000' },
      { label: 'International', value: '$300 – $1,000+' },
    ],
  },
  {
    id: 3,
    title: 'Bundle 3 — Small Business Digital Support',
    emoji: '🗂️',
    offers: [
      'File & folder organization',
      'Schedule & calendar management',
      'Website content updates',
      'Social media posting',
      'Responding to basic inquiries',
      'Recruitment support',
      'Simple reports & summaries',
      'Lead tracking',
    ],
    price: [
      { label: 'Hourly Rate', value: '$8 – $15 / hour' },
    ],
  },
]

function BundleCard({ bundle }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-rose-200 rounded-2xl overflow-hidden bg-white/60">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-rose-50/50 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-lg">{bundle.emoji}</span>
          <span className="font-body text-xs font-semibold text-rose-700">{bundle.title}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-rose-400 text-sm flex-shrink-0 ml-2"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-rose-100 pt-3">
              <p className="font-body text-[10px] font-semibold text-rose-400 uppercase tracking-wider mb-2">What's included</p>
              <ul className="space-y-1 mb-4">
                {bundle.offers.map(o => (
                  <li key={o} className="flex items-start gap-2 font-body text-xs text-rose-700">
                    <span className="text-rose-300 mt-0.5 flex-shrink-0">🌸</span>
                    {o}
                  </li>
                ))}
              </ul>
              <div className="bg-rose-50 rounded-xl px-3 py-2.5">
                <p className="font-body text-[10px] font-semibold text-rose-400 uppercase tracking-wider mb-1.5">Pricing</p>
                {bundle.price.map(p => (
                  <div key={p.label} className="flex items-center justify-between">
                    <span className="font-body text-xs text-rose-500">{p.label}</span>
                    <span className="font-body text-xs font-semibold text-rose-700">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <FloralCorner size={280} />
      </div>

      <div className="section-wrapper grid md:grid-cols-2 gap-12 items-start">
        {/* Photo */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div
              className="absolute inset-0 bg-blush-100 rounded-2xl"
              style={{ transform: 'rotate(-3deg) scale(1.04)' }}
            />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={aboutPhoto}
                alt="Criste Joy Calosor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal direction="right" delay={0.12}>
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            🌸 &nbsp;Nice to meet you&nbsp; 🌸
          </p>
          <h2 className="section-title mb-3">Hi, I'm Criste Joy!</h2>
          <FloralDivider className="mb-5" />

          <blockquote className="border-l-4 border-rose-300 pl-4 mb-6 italic font-display text-rose-500 text-sm leading-relaxed">
            "Creative support for brands that need beauty, clarity, and consistency."
          </blockquote>

          {/* Services */}
          <div className="mb-5">
            <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2.5">Services</p>
            <div className="flex flex-wrap gap-2">
              {services.map(s => (
                <span
                  key={s}
                  className="bg-gradient-to-r from-blush-100 to-rose-100 text-rose-700 border border-rose-200 text-xs font-medium px-3 py-1.5 rounded-full font-body"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Service Bundles */}
          <div className="mb-5">
            <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">Service Bundles</p>
            <p className="font-body text-[10px] italic text-rose-300 mb-3">Price is negotiable based on tasks and workload.</p>
            <div className="space-y-2">
              {bundles.map(b => <BundleCard key={b.id} bundle={b} />)}
            </div>
          </div>

          {/* Traits */}
          <div className="flex flex-wrap gap-2">
            {traits.map(t => (
              <span
                key={t}
                className="text-rose-400 text-xs font-body px-2.5 py-1 bg-rose-50 rounded-full border border-rose-100"
              >
                {t}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
