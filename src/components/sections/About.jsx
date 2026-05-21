import ScrollReveal from '../ui/ScrollReveal'
import FloralDivider from '../../assets/svgs/FloralDivider'
import FloralCorner from '../../assets/svgs/FloralCorner'
import aboutPhoto from '../../assets/criste-about.jpg'

const infoCards = [
  {
    badge: 'Currently',
    title: '2nd Year College Student',
    desc: 'Pursuing higher education in IT / Multimedia Arts, constantly expanding my creative and technical toolkit.',
  },
  {
    badge: 'My Passion',
    title: 'Visual Storytelling & Brand Identity',
    desc: 'I specialize in creating visual narratives that connect brands to their audiences on a deeply human level.',
  },
  {
    badge: 'My Edge',
    title: 'AI-Enhanced Design Workflow',
    desc: 'I integrate AI tools seamlessly into my creative process — faster ideation, smarter execution, and results that genuinely wow.',
  },
  {
    badge: 'Also',
    title: 'Video Editor & Content Creator',
    desc: 'Beyond static visuals, I bring stories to life through dynamic video editing — motion, rhythm, and storytelling in perfect harmony.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      {/* Faint watermark */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <FloralCorner size={300} />
      </div>

      <div className="section-wrapper">
        {/* Top: photo + bio */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-14">
          {/* Photo column */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="absolute inset-0 bg-blush-100 rounded-2xl"
                style={{ transform: 'rotate(-3deg) scale(1.04)' }}
              />
              <div className="relative bg-gradient-to-br from-blush-100 to-rose-200 rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={aboutPhoto}
                  alt="Criste Joy Calosor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-glass px-4 py-3 border border-rose-100">
                <p className="font-display italic text-rose-600 text-sm font-semibold">2nd Year College</p>
                <p className="font-body text-rose-400 text-xs">IT / Multimedia Arts</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio column */}
          <ScrollReveal direction="right" delay={0.15}>
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
              ✦ &nbsp;Who I Am&nbsp; ✦
            </p>
            <h2 className="section-title mb-3">A Designer Who<br />Dreams in Color</h2>
            <FloralDivider className="mb-6" />

            <p className="font-body text-rose-700 leading-relaxed mb-4 text-sm md:text-base">
              Hello! I'm <span className="font-semibold text-rose-600">Criste Joy Calosor</span> — a passionate graphic designer and visual storyteller from{' '}
              <span className="font-semibold text-rose-600">Cebu, Philippines</span>. I believe that great design isn't just about making things look pretty; it's about crafting emotions, sparking conversations, and leaving a lasting impression.
            </p>

            <blockquote className="border-l-4 border-rose-300 pl-4 mb-5 italic font-display text-rose-500 text-base leading-relaxed">
              "I am a graphic designer who is best friends with Artificial Intelligence — I harness the power of AI not as a shortcut, but as a superpower that amplifies my creativity beyond limits."
            </blockquote>

            <p className="font-body text-rose-600 leading-relaxed mb-6 text-sm md:text-base">
              With hands-on experience in corporate branding and media content, I've contributed my artistry to companies like{' '}
              <span className="font-semibold text-rose-600">Remote Imaging Consultants</span> and{' '}
              <span className="font-semibold text-rose-600">Best of Cebu</span> — each project sharpening my eye for detail.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5">
              {[
                { icon: '📱', text: '09298415211' },
                { icon: '✉️', text: 'cristejoycalosor13@gmail.com' },
                { icon: '📍', text: 'Cebu, Philippines' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-rose-100 flex items-center justify-center text-sm flex-shrink-0">{icon}</div>
                  <span className="font-body text-rose-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom: info cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {infoCards.map(({ badge, title, desc }, i) => (
            <ScrollReveal key={badge} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-5 shadow-glass border border-rose-50 hover:-translate-y-1 transition-transform duration-300 h-full">
                <span className="inline-block bg-blush-100 text-rose-500 text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-2 border border-rose-200">
                  {badge}
                </span>
                <h4 className="font-display text-rose-700 font-semibold text-sm mb-1">{title}</h4>
                <p className="font-body text-rose-400 text-xs leading-relaxed">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
