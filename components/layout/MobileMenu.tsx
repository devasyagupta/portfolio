'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/lib/data'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

/** Full-screen glass overlay for mobile navigation */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center sm:hidden"
          style={{
            background: 'rgba(7, 7, 15, 0.97)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '24px',
              color: 'var(--text-muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: '2.2rem',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  textShadow: '-2px 0 var(--chroma-r), 2px 0 var(--chroma-c)',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
