'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { format } from 'date-fns'

const experiences = [
  {
    company: 'Company Name',
    position: 'Senior Frontend Developer',
    location: 'Remote',
    startDate: '2022-01',
    endDate: 'Present',
    description: [
      'Led frontend architecture decisions and contributed to overall system design',
      'Built pixel-perfect, interactive UIs using React and Angular',
      'Implemented SSR with Next.js and Angular Universal',
      'Collaborated with designers and PMs in an agile environment',
      'Optimized performance, accessibility, and SEO',
    ],
  },
  {
    company: 'Previous Company',
    position: 'Frontend Developer',
    location: 'San Francisco, CA',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Developed reusable UI components with TypeScript and React',
      'Worked with REST APIs and async data flows',
      'Implemented responsive designs using Tailwind CSS and SASS',
      'Wrote tests using Jest and React Testing Library',
      'Supported CI/CD pipelines on AWS',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-12 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-green font-mono text-lg mr-4">02.</span>
            Where I've Worked
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lightest-navy" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-green rounded-full border-4 border-navy" />
                  
                  <div className="bg-light-navy/50 rounded-lg p-6 hover:bg-light-navy transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg">
                        {exp.position}
                      </h3>
                      <span className="text-green text-sm font-mono">
                        {format(new Date(exp.startDate), 'MMM yyyy')} - {exp.endDate === 'Present' ? 'Present' : format(new Date(exp.endDate), 'MMM yyyy')}
                      </span>
                    </div>
                    <p className="text-green text-sm font-mono mb-4">
                      {exp.company} · {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate text-sm flex items-start">
                          <span className="text-green mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
