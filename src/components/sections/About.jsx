import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Faint watermark */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <FloralCorner size={300} />
      </div>

      <div className="section-wrapper grid md:grid-cols-2 gap-14 items-center">
        {/* Image column */}
        <ScrollReveal direction="left">
          <div className="relative">
            {/* Skewed backdrop */}
            <div
              className="absolute inset-0 bg-blush-100 rounded-2xl"
              style={{ transform: 'rotate(-3deg) scale(1.04)' }}
            />
            {/* Photo frame */}
            <div className="relative bg-gradient-to-br from-blush-100 to-rose-200 rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center">
              {/* Replace the div below with:
                  <img src="/images/about.jpg" alt="About Criste Joy" className="w-full h-full object-cover" />
              */}
              <div className="text-center px-6">
                <div className="font-display text-6xl italic text-rose-300 mb-3">CJC</div>
                <p className="font-body text-xs text-rose-400">Add your personal photo here</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-glass px-4 py-3 border border-rose-100">
              <p className="font-display italic text-rose-600 text-sm font-semibold">
                2nd Year College
              </p>
              <p className="font-body text-rose-400 text-xs">University of Cebu</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Text column */}
        <ScrollReveal direction="right" delay={0.15}>
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
              ✦ &nbsp;A little about me&nbsp; ✦
            </p>
            <h2 className="section-title mb-3">About Me</h2>
            <FloralDivider className="mb-6" />

            <p className="font-body text-rose-700 leading-relaxed mb-4 text-sm md:text-base">
              Hello, I'm <span className="font-semibold text-rose-600">Criste Joy</span> — a passionate
              Social Media Manager and aspiring Digital Marketing professional from the vibrant city of
              <span className="font-semibold text-rose-600"> Cebu, Philippines</span>.
            </p>
            <p className="font-body text-rose-600 leading-relaxed mb-5 text-sm md:text-base">
              Currently in my second year at the <span className="font-semibold text-rose-600">University of Cebu</span>,
              I am dedicated to blooming into a versatile digital storyteller who breathes life into
              brands through creative content and meaningful connections. With a foundation in Informatics
              and a heart full of creativity, I believe every brand has a story worth telling — beautifully.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-rose-300 pl-4 mb-6 italic font-display text-rose-500 text-base">
              "Every post tells a story. I make sure yours is worth reading."
            </blockquote>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎓', label: '2nd Year College' },
                { icon: '📍', label: 'Cebu, Philippines' },
                { icon: '✅', label: 'Available for Work' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 bg-blush-50 border border-rose-200 text-rose-600
                             text-xs font-body font-medium px-3 py-1.5 rounded-full"
                >
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
