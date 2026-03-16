'use client'

import { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  download?: boolean
}

/** Glass CTA button with hover glow */
export default function GlowButton({ children, href, onClick, className = '', download }: GlowButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target={download ? '_self' : '_blank'}
        rel="noopener noreferrer"
        download={download}
        className={`glow-btn ${className}`}
      >
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`glow-btn ${className}`}>
      {children}
    </button>
  )
}
