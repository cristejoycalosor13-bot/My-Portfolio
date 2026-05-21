import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ScrollReveal from '../ui/ScrollReveal'
import EducationCard from '../ui/EducationCard'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { education } from '../../data/educationData'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="bg-rose-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;My academic path&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Education</h2>
          <FloralDivider className="mx-auto" />
        </ScrollReveal>

        {/* Staggered cards */}
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
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
