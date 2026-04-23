import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import FloralCorner from '../../assets/svgs/FloralCorner'
import headshot from '../../assets/criste-headshot.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-hero-gradient flex items-center relative overflow-hidden"
    >
      {/* Decorative corners */}
      <div className="absolute top-0 right-0 opacity-25 pointer-events-none">
        <FloralCorner size={220} />
      </div>
      <div
        className="absolute bottom-0 left-0 opacity-15 pointer-events-none"
        style={{ transform: 'rotate(180deg)' }}
      >
        <FloralCorner size={160} />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* — Text column — */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <p className="font-body text-xs font-semibold tracking-[0.28em] uppercase text-amber-500 mb-3">
            ✦ &nbsp;Welcome to my world&nbsp; ✦
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-6xl font-bold italic leading-tight mb-4 text-rose-800">
            Criste Joy
            <br />
            <span className="text-rose-500">Calosor</span>
          </h1>

          {/* Typing animation */}
          <div className="font-body text-xl text-amber-600 font-semibold mb-4 min-h-[2rem]">
            <TypeAnimation
              sequence={[
                'Social Media Manager',
                2200,
                'Content Creator',
                2200,
                'Digital Marketing Assistant',
                2200,
                'University of Cebu Student',
                2200,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </div>

          {/* Tagline */}
          <p className="font-body text-rose-500 italic text-base md:text-lg mb-8 leading-relaxed max-w-md">
            Where every digital story blooms into something beautiful — crafting
            connections that linger long after the scroll, and leaving a trail of
            wonder in every caption, post, and pixel.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#portfolio" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch
            </a>
          </div>

          {/* Contact pills */}
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:09298415211"
              className="flex items-center gap-2 bg-white/65 backdrop-blur-sm px-3 py-2 rounded-full
                         text-xs text-rose-600 border border-rose-200 hover:border-rose-400
                         hover:bg-white/80 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              0929-841-5211
            </a>
            <a
              href="mailto:cristejoycalosor13@gmail.com"
              className="flex items-center gap-2 bg-white/65 backdrop-blur-sm px-3 py-2 rounded-full
                         text-xs text-rose-600 border border-rose-200 hover:border-rose-400
                         hover:bg-white/80 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              cristejoycalosor13@gmail.com
            </a>
          </div>
        </motion.div>

        {/* — Image column — */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center items-center relative"
        >
          {/* Floating avatar frame */}
          <div className="relative animate-float-slow">
            {/* Outer gold ring */}
            <div className="absolute inset-0 rounded-full border-4 border-amber-200 opacity-60 scale-110 animate-pulse-soft" />

            {/* Main ring */}
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-rose-300 p-2 bg-white shadow-gold">
              {/* Inner profile area */}
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blush-100 via-rose-100 to-pink-200">
                <img
                  src={headshot}
                  alt="Criste Joy Calosor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Accent bubbles */}
            <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full border-4 border-amber-200 opacity-55" />
            <div className="absolute -bottom-2 -left-3 w-9 h-9 rounded-full border-3 border-rose-300 opacity-55" />
            <div className="absolute top-1/2 -right-6 w-5 h-5 rounded-full bg-amber-200 opacity-45" />
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-rose-300"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
