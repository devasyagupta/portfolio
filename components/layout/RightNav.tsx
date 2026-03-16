'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '@/lib/data'

/** Fixed bottom-right text navigation — edh.dev pattern */
export default function RightNav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'certifications', 'experience', 'projects']

    const observers: IntersectionObserver[] = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null as unknown as IntersectionObserver

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -40% 0px' }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <motion.nav
      className="fixed bottom-8 right-6 z-40 hidden sm:flex flex-col items-end gap-1"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4, staggerChildren: 0.06 }}
    >
      {navLinks.map((link, i) => {
        const sectionId = link.href.replace('#', '')
        const isActive = activeSection === sectionId

        return (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.06 }}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '12px',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'color 0.2s ease',
              color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)',
            }}
            whileHover={{ color: 'var(--text-secondary)' }}
          >
            {link.label}
          </motion.a>
        )
      })}
    </motion.nav>
  )
}
