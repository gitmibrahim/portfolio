'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[3fr_2fr] gap-12 items-center"
        >
          <div>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              <span className="text-green font-mono text-lg mr-4">01.</span>
              About Me
            </motion.h2>
            
            <motion.div
              className="text-slate space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p>
                Hello! I'm a passionate frontend developer with 3+ years of experience building 
                modern web applications. I specialize in creating pixel-perfect, interactive, and 
                scalable user interfaces using React, Angular, and Next.js.
              </p>
              <p>
                I'm particularly interested in leveraging AI tools to code smarter and faster, 
                whether for generation, debugging, or performance optimization. I enjoy building 
                accessible, SEO-friendly applications with smooth animations and polished UI transitions.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              
              <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Angular', 'Next.js', 'Node.js', 'Tailwind CSS', 'SASS'].map((tech, index) => (
                  <motion.li
                    key={tech}
                    className="text-slate before:content-['▹'] before:text-green before:mr-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 border-2 border-green rounded-lg transform rotate-6 hover:rotate-3 transition-transform duration-300" />
              <div className="relative bg-light-navy rounded-lg p-4">
                <div className="aspect-square bg-gradient-to-br from-green/20 to-blue-500/20 rounded" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
