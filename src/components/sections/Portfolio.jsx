import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import PortfolioLightbox from '../ui/PortfolioLightbox'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { portfolioItems } from '../../data/portfolioData'

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen]   = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const slides = portfolioItems.map((item) => ({ src: item.src, alt: item.title }))

  function openLightbox(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="portfolio" className="bg-hero-gradient relative">
      <div className="section-wrapper">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;My creative work&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Portfolio</h2>
          <FloralDivider className="mx-auto mb-4" />
          <p className="font-body text-rose-500 text-sm italic max-w-md mx-auto">
            A glimpse into the stories I've helped tell — click any card to see more.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.07}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-glass
                           hover:shadow-glass-md transition-shadow duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                onClick={() => openLightbox(i)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-rose-600/0 group-hover:bg-rose-600/60
                             transition-all duration-300 flex items-end"
                >
                  <div
                    className="w-full p-4 translate-y-4 group-hover:translate-y-0
                               opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <span className="inline-block bg-amber-400 text-amber-900 text-xs font-medium
                                     px-2.5 py-0.5 rounded-full mb-1 font-body">
                      {item.category}
                    </span>
                    <h3 className="font-display text-white text-base font-semibold italic leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-body text-rose-100 text-xs mt-1 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Zoom icon */}
                  <div
                    className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Bottom label (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-3 py-2 group-hover:opacity-0 transition-opacity duration-200">
                  <p className="font-body text-white text-xs font-medium">{item.title}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA note */}
        <ScrollReveal delay={0.3} className="text-center mt-10">
          <p className="font-body text-rose-400 text-sm italic">
            These are sample works — replace the images with your actual projects!
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <PortfolioLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  )
}
