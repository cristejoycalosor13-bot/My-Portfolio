import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import GlassCard from '../ui/GlassCard'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION } from '../../data/contactData'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: 'Phone',
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: 'Email',
    value: EMAIL,
    href: EMAIL_HREF,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: LOCATION,
    href: null,
  },
]

const inputClass =
  'w-full border-2 border-rose-200 rounded-xl px-4 py-3 font-body text-sm text-rose-900 ' +
  'placeholder:text-rose-300 bg-white/80 focus:border-rose-400 focus:outline-none ' +
  'transition-colors duration-200'

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Message from Portfolio')
    const body = encodeURIComponent(
      `Greetings Joy!\n\n${form.message}\n\n--\nBest regards,\n${form.name}\n${form.email}`
    )
    window.open(`mailto:cristejoycalosor13@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-blush-50 relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <FloralCorner size={250} />
      </div>

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            🌸 &nbsp;Reach out&nbsp; 🌸
          </p>
          <h2 className="section-title mb-3">Let's Connect</h2>
          <FloralDivider className="mx-auto mb-4" />
          <p className="font-body text-rose-500 text-sm italic max-w-sm mx-auto">
            Whether it's a project, a collaboration, or just a hello — my inbox is always open.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* — Contact info — */}
          <ScrollReveal direction="left" delay={0.1} className="space-y-4">
            {contactInfo.map(({ icon, label, value, href }) => (
              <GlassCard key={label} className="p-4 flex items-center gap-4 hover:shadow-glass-md transition-shadow duration-300">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 flex-shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-rose-700 text-sm font-medium hover:text-rose-500 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-rose-700 text-sm font-medium">{value}</p>
                  )}
                </div>
              </GlassCard>
            ))}

          </ScrollReveal>

          {/* — Contact form — */}
          <ScrollReveal direction="right" delay={0.15}>
            <GlassCard className="p-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-10 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-xl italic text-rose-700 mb-2">Thank you!</h3>
                    <p className="font-body text-rose-500 text-sm">
                      Your message bloomed beautifully. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs font-semibold text-rose-500 mb-1.5 uppercase tracking-wide">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs font-semibold text-rose-500 mb-1.5 uppercase tracking-wide">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold text-rose-500 mb-1.5 uppercase tracking-wide">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-body text-xs font-semibold text-rose-500 mb-1.5 uppercase tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={4}
                        className={`${inputClass} resize-none`}
                        required
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-center">
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
