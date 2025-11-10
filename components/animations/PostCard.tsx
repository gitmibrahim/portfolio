'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

export default function PostCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-light-navy rounded-lg p-6">
      <h3 className="text-white font-semibold mb-4 text-center">Post Card</h3>
      <motion.article
        className="bg-navy rounded-lg overflow-hidden cursor-pointer h-full flex flex-col"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-3 text-xs text-slate">
            <span className="flex items-center gap-1">
              <FaCalendar />
              Jan 15, 2024
            </span>
            <span className="flex items-center gap-1">
              <FaUser />
              Author Name
            </span>
          </div>
          
          <h4 className="text-white font-semibold mb-2 text-lg">
            Building Modern Web Applications
          </h4>
          <p className="text-slate text-sm mb-4 flex-1">
            Learn how to create beautiful, performant web applications with modern frameworks
            and best practices. This guide covers everything from setup to deployment.
          </p>
          
          <motion.a
            href="#"
            className="flex items-center gap-2 text-green font-mono text-sm group"
            whileHover={{ x: 5 }}
          >
            Read More
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </div>
      </motion.article>
    </div>
  )
}
