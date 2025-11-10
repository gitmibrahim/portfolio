'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

export default function ProductCard() {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-light-navy rounded-lg p-6">
      <h3 className="text-white font-semibold mb-4 text-center">Product Card</h3>
      <motion.div
        className="bg-navy rounded-lg overflow-hidden cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="aspect-square bg-gradient-to-br from-green/30 to-blue-500/30 relative"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart
              className={isLiked ? 'text-red-500' : 'text-slate'}
              style={{
                fill: isLiked ? 'currentColor' : 'none',
              }}
            />
          </motion.button>
        </motion.div>
        
        <div className="p-4">
          <h4 className="text-white font-semibold mb-2">Premium Product</h4>
          <p className="text-slate text-sm mb-4">Beautiful design with smooth animations</p>
          
          <div className="flex items-center justify-between">
            <span className="text-green font-bold text-xl">$99.99</span>
            <motion.button
              className="flex items-center gap-2 bg-green text-navy px-4 py-2 rounded font-semibold text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShoppingCart />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
