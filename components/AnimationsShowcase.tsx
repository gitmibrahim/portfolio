'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ProductCard from './animations/ProductCard'
import PostCard from './animations/PostCard'
import ButtonShowcase from './animations/ButtonShowcase'
import LoadingAnimation from './animations/LoadingAnimation'

export default function AnimationsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="animations" className="min-h-screen flex items-center py-20 px-6 sm:px-8">
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
            <span className="text-green font-mono text-lg mr-4">04.</span>
            Animation Showcase
          </motion.h2>
          <motion.p
            className="text-slate mb-12 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Interactive components demonstrating smooth animations, transitions, and polished UI interactions.
            These showcase my ability to create engaging user experiences with attention to detail.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <ProductCard />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <PostCard />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <ButtonShowcase />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <LoadingAnimation />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
