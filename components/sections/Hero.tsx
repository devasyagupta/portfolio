'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TERMINAL_LINES = [
  { text: 'Hi there,', delay: 0 },
  { text: "I'm Devasya Gupta", delay: 400, accent: true },
  { text: '', delay: 800 },
  { text: '• AI-ML Engineer', delay: 900 },
  { text: '• Full-Stack Developer', delay: 1100 },
  { text: '• CS @ GLS University', delay: 1300 },
  { text: '', delay: 1500 },
  { text: 'Welcome to DG-Linux 1.0 LTS', delay: 1600 },
  { text: "++ Scroll or type 'help'", delay: 1900 },
  { text: 'User: ~$ ', delay: 2200, prompt: true },
]

function TerminalLine({
  text,
  accent,
  prompt,
  visible,
  isLast,
}: {
  text: string
  accent?: boolean
  prompt?: boolean
  visible: boolean
  isLast: boolean
}) {
  if (!visible) return null

  if (text === '') return <div className="h-3" />

  return (
    <div
      className="leading-relaxed"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: prompt ? '14px' : '13px',
        color: accent
          ? 'var(--accent-blue)'
          : prompt
          ? 'var(--accent-teal)'
          : 'var(--text-secondary)',
        textShadow: accent ? '-1px 0 var(--chroma-r), 1px 0 var(--chroma-c)' : 'none',
        fontWeight: accent ? 500 : 400,
      }}
    >
      {text}
      {isLast && <span className="terminal-cursor" />}
    </div>
  )
}

/** Full viewport terminal glass hero — Option A from PRD */
export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i])
      }, line.delay)
      timerRefs.current.push(t)
    })
    return () => timerRefs.current.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center"
      style={{
        minHeight: '100svh',
        width: '100%',
      }}
    >
      {/* Terminal frame */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        className="relative w-full max-w-xl mx-4"
        style={{
          background: 'rgba(8, 8, 16, 0.85)',
          border: '1px solid var(--glass-border)',
          borderRadius: '14px',
          boxShadow:
            '0 0 0 1px rgba(79,142,247,0.08), 0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)',
          backdropFilter: 'blur(16px)',
          overflow: 'hidden',
        }}
      >
        {/* Terminal title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            borderBottom: '1px solid var(--glass-border)',
            background: 'rgba(255,255,255,0.025)',
          }}
        >
          <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28CA41' }} />
          <span
            className="ml-3"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              color: 'var(--text-muted)',
            }}
          >
            DG-Linux 1.0 LTS — bash
          </span>
          {/* Iridescent glow on frame edge */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-purple), var(--accent-magenta), transparent)',
              opacity: 0.6,
            }}
          />
        </div>

        {/* Terminal screen */}
        <div
          className="p-6 min-h-64"
          style={{
            background: 'rgba(8, 8, 8, 0.6)',
          }}
        >
          {/* Chromatic glow tint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 40%, rgba(79,142,247,0.04) 0%, transparent 60%)',
            }}
          />

          {TERMINAL_LINES.map((line, i) => (
            <TerminalLine
              key={i}
              text={line.text}
              accent={line.accent}
              prompt={line.prompt}
              visible={visibleLines.includes(i)}
              isLast={i === TERMINAL_LINES.length - 1 && visibleLines.includes(i)}
            />
          ))}
        </div>

        {/* Chromatic aberration glow on left edge */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, var(--accent-blue), var(--accent-purple), var(--accent-magenta))',
            opacity: 0.4,
          }}
        />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '10px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--text-muted)', fontSize: '12px' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
