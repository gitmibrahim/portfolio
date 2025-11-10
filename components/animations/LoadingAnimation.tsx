'use client'

import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <div className="bg-light-navy rounded-lg p-6">
      <h3 className="text-white font-semibold mb-4 text-center">Loading Animations</h3>
      <div className="space-y-8">
        {/* Spinner */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-16 h-16 border-4 border-slate border-t-green rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <span className="text-slate text-sm">Spinner</span>
        </div>

        {/* Dots */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-green rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
          <span className="text-slate text-sm">Bouncing Dots</span>
        </div>

        {/* Pulse */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="w-16 h-16 bg-green rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <span className="text-slate text-sm">Pulse</span>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="w-full h-2 bg-lightest-navy rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <span className="text-slate text-sm text-center">Progress Bar</span>
        </div>
      </div>
    </div>
  )
}
