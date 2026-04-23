import ScrollReveal from '../ui/ScrollReveal'
import ExperienceAccordion from '../ui/ExperienceAccordion'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { experiences } from '../../data/experienceData'

export default function Experience() {
  return (
    <section id="experience" className="bg-white relative">
      {/* Faint large rose watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="500" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="50" fill="#ec4899" />
          <circle cx="100" cy="65"  r="40" fill="#f472b6" />
          <circle cx="135" cy="115" r="38" fill="#f9a8d4" />
          <circle cx="65"  cy="115" r="38" fill="#f9a8d4" />
          <circle cx="100" cy="100" r="28" fill="#db2777" />
        </svg>
      </div>

      <div className="section-wrapper relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;My journey&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Work Experience</h2>
          <FloralDivider className="mx-auto" />
          <p className="font-body text-rose-500 text-sm italic mt-4 max-w-md mx-auto">
            Click on any role to expand the details
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-rose-200 md:-translate-x-px hidden md:block" />

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.id}
              delay={i * 0.1}
              direction={i % 2 === 0 ? 'left' : 'right'}
              className="relative md:pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:-left-[5px] top-6 w-3 h-3 rounded-full bg-rose-400 border-2 border-white shadow-sm hidden md:block" />
              <ExperienceAccordion
                title={exp.title}
                company={exp.company}
                period={exp.period}
                location={exp.location}
                responsibilities={exp.responsibilities}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
