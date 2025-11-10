'use client'

import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="text-green font-mono text-sm sm:text-base mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Your Name.
        </motion.h1>
        
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p
          className="text-slate max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I'm a frontend developer specializing in building exceptional digital experiences. 
          Currently focused on creating accessible, performant, and beautifully animated web applications 
          using modern technologies like React, Angular, and Next.js.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="#projects"
            className="inline-block border border-green text-green px-8 py-4 rounded font-mono text-sm hover:bg-green-tint transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my work!
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.a
            href="#about"
            className="inline-block text-slate hover:text-green transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <HiArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
