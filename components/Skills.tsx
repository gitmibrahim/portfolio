'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
  { category: 'Frameworks', items: ['React', 'Angular', 'Next.js', 'Vue.js'] },
  { category: 'Styling', items: ['Tailwind CSS', 'SASS', 'Bootstrap', 'Styled Components'] },
  { category: 'Tools', items: ['Git', 'Webpack', 'Vite', 'Jest', 'ESLint'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'CI/CD', 'Docker'] },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-green font-mono text-lg mr-4">05.</span>
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="bg-light-navy rounded-lg p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-green font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-navy text-slate rounded text-sm font-mono"
                      whileHover={{ scale: 1.05, backgroundColor: '#64ffda', color: '#0a192f' }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
