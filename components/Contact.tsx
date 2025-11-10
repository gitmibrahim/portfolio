'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            className="text-green font-mono text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            06. What's Next?
          </motion.p>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p
            className="text-slate mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full bg-light-navy border border-slate rounded px-4 py-3 text-white placeholder-slate focus:outline-none focus:border-green transition-colors resize-none"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="border border-green text-green px-8 py-3 rounded font-mono text-sm hover:bg-green-tint transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="mailto:your.email@example.com"
              className="text-green font-mono text-sm hover:underline inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
            >
              <HiOutlineMail />
              your.email@example.com
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
