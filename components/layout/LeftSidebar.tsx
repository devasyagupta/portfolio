'use client'

import { motion } from 'framer-motion'

const icons = [
  { icon: '☰', label: 'Menu', id: 'menu' },
  { icon: '✎', label: 'Edit', id: 'edit' },
  { icon: '↺', label: 'Refresh', id: 'refresh' },
  { icon: '⬡', label: 'Skills', id: 'skills' },
  { icon: '✦', label: 'Identity', id: 'logo' },
]

interface LeftSidebarProps {
  onMenuClick?: () => void
}

/** Fixed left icon sidebar — 5 glass pill icon buttons (edh.dev pattern) */
export default function LeftSidebar({ onMenuClick }: LeftSidebarProps) {
  return (
    <motion.aside
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3 pl-3"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
    >
      {icons.map((item, i) => (
        <motion.button
          key={item.id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
          aria-label={item.label}
          onClick={item.id === 'menu' ? onMenuClick : undefined}
          className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(12px)',
            color: 'var(--text-muted)',
            fontSize: '16px',
            transition: 'all 0.2s ease',
          }}
          whileHover={{
            borderColor: 'var(--accent-blue)',
            color: 'var(--accent-blue)',
            boxShadow: '0 0 12px var(--accent-glow-blue)',
          }}
        >
          {item.icon}
        </motion.button>
      ))}
    </motion.aside>
  )
}
