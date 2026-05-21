import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'
import aboutPhoto from '../../assets/criste-about.jpg'

const seekingRoles = [
  'Graphic Designer',
  'Social Media Manager',
  'Virtual Assistant',
  'Content Creator',
]

const traits = ['Fast Learner', 'Visual Thinker', 'Detail-Oriented', 'Curious & Adaptable']

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <FloralCorner size={280} />
      </div>

      <div className="section-wrapper grid md:grid-cols-2 gap-12 items-center">
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
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-glass px-4 py-3 border border-rose-100">
              <p className="font-display italic text-rose-600 text-sm font-semibold">Open to Work</p>
              <p className="font-body text-rose-400 text-xs">Full-time · Freelance · Remote</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal direction="right" delay={0.12}>
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;Nice to meet you&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Hi, I'm Criste Joy!</h2>
          <FloralDivider className="mb-5" />

          <p className="font-body text-rose-700 leading-relaxed mb-5 text-sm md:text-base">
            A <strong className="font-semibold text-rose-600">visual-first designer</strong> from Cebu, Philippines — my strength is turning ideas into beautiful, eye-catching visuals. I love working with brands, creating content, and finding creative solutions fast.
          </p>

          <blockquote className="border-l-4 border-rose-300 pl-4 mb-6 italic font-display text-rose-500 text-sm leading-relaxed">
            "I may be new to the industry, but I learn fast, I design with heart, and I show up ready."
          </blockquote>

          {/* Open to */}
          <div className="mb-5">
            <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2.5">Open to</p>
            <div className="flex flex-wrap gap-2">
              {seekingRoles.map(role => (
                <span
                  key={role}
                  className="bg-gradient-to-r from-blush-100 to-rose-100 text-rose-700 border border-rose-200 text-xs font-medium px-3 py-1.5 rounded-full font-body"
                >
                  {role}
                </span>
              ))}
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
