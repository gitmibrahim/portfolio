'use client'

import { motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'

export default function EmailSidebar() {
  return (
    <motion.div
      className="fixed right-8 bottom-0 z-40 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col items-center">
        <motion.a
          href="mailto:your.email@example.com"
          className="text-slate hover:text-green transition-colors mb-6 font-mono text-sm"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          style={{ writingMode: 'vertical-rl' }}
        >
          your.email@example.com
        </motion.a>
        <motion.div
          className="h-24 w-px bg-slate"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}
