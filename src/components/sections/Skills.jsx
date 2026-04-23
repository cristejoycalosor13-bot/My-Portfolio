import ScrollReveal from '../ui/ScrollReveal'
import AnimatedSkillBar from '../ui/AnimatedSkillBar'
import FloralDivider from '../../assets/svgs/FloralDivider'
import { progressSkills, toolTags, categoryColors } from '../../data/skillsData'

export default function Skills() {
  return (
    <section id="skills" className="bg-gold-light relative">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="section-wrapper">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-amber-500 mb-2">
            ✦ &nbsp;What I bring&nbsp; ✦
          </p>
          <h2 className="section-title mb-3">Skills &amp; Tools</h2>
          <FloralDivider className="mx-auto" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* — Progress bars — */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="glass-card p-7">
              <h3 className="font-display text-xl font-semibold text-rose-700 italic mb-6">
                Technical Skills
              </h3>
              {progressSkills.map((skill, i) => (
                <AnimatedSkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* — Tag cloud — */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="glass-card p-7">
              <h3 className="font-display text-xl font-semibold text-rose-700 italic mb-6">
                Tools &amp; Soft Skills
              </h3>

              {/* Group by category */}
              {['tools', 'skills', 'personal'].map((cat) => {
                const labels = {
                  tools:    '🛠  Platforms & Tools',
                  skills:   '✍️  Digital Skills',
                  personal: '🌸  Personal Strengths',
                }
                const items = toolTags.filter((t) => t.category === cat)
                return (
                  <div key={cat} className="mb-5">
                    <p className="font-body text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2.5">
                      {labels[cat]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((tag) => (
                        <span
                          key={tag.label}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border font-body ${
                            categoryColors[tag.category]
                          }`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
