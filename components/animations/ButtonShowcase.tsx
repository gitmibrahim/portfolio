'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ButtonShowcase() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="bg-light-navy rounded-lg p-6">
      <h3 className="text-white font-semibold mb-4 text-center">Button Animations</h3>
      <div className="space-y-6">
        {/* Hover Button */}
        <motion.button
          className="w-full bg-green text-navy font-semibold py-3 rounded"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(100, 255, 218, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          Hover Me
        </motion.button>

        {/* Ripple Button */}
        <motion.button
          className="w-full bg-lightest-navy text-white font-semibold py-3 rounded relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setClicked(!clicked)}
        >
          <span className="relative z-10">Click for Ripple</span>
          {clicked && (
            <motion.span
              className="absolute inset-0 bg-green/30 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </motion.button>

        {/* Gradient Button */}
        <motion.button
          className="w-full bg-gradient-to-r from-green to-blue-500 text-white font-semibold py-3 rounded"
          whileHover={{
            background: 'linear-gradient(to right, #64ffda, #3b82f6)',
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Gradient Button
        </motion.button>

        {/* Border Animation Button */}
        <motion.button
          className="w-full border-2 border-green text-green font-semibold py-3 rounded relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0 bg-green-tint"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Border Animation</span>
        </motion.button>
      </div>
    </div>
  )
}
