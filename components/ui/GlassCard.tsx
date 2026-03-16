'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  onClick?: () => void
}

/** Reusable glass surface with blur, border, and hover glow */
export default function GlassCard({
  children,
  className = '',
  hoverable = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={hoverable ? { y: -2 } : undefined}
      transition={{ duration: 0.25 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
