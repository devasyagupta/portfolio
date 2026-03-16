'use client'

import { motion } from 'framer-motion'

interface SectionBadgeProps {
  label: string
}

/** VT323 pixel font heading inside dark glass badge — edh.dev pattern */
export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <span className="section-badge chroma-animate">{label}</span>
    </motion.div>
  )
}
