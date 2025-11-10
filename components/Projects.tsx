'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, featuring SSR, optimized performance, and smooth animations. Includes product catalog, shopping cart, and checkout flow.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project1.jpg',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and beautiful UI transitions. Built with React and Firebase.',
    tech: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project2.jpg',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects with smooth scroll animations, interactive components, and responsive design. Built with Next.js and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project3.jpg',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <span className="text-green font-mono text-lg mr-4">03.</span>
            Some Things I've Built
          </motion.h2>

          <div className="space-y-24 mt-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-light-navy rounded-lg overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-green/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-slate text-sm">Project Image</span>
                    </div>
                    <div className="absolute inset-0 bg-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>

                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-green font-mono text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-light-navy rounded-lg p-6 mb-4">
                    <p className="text-slate text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-4 mb-4 font-mono text-xs text-slate">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-green transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
