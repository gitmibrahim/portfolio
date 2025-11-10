'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const socialLinks = [
  { name: 'Github', icon: FaGithub, url: 'https://github.com' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
  { name: 'CodePen', icon: FaCodepen, url: 'https://codepen.io' },
]

export default function SocialLinks() {
  return (
    <motion.div
      className="fixed left-8 bottom-0 z-40 hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <ul className="flex flex-col items-center space-y-6">
        {socialLinks.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.name}
            >
              <link.icon size={20} />
            </motion.a>
          </motion.li>
        ))}
        <motion.div
          className="h-24 w-px bg-slate"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        />
      </ul>
    </motion.div>
  )
}
