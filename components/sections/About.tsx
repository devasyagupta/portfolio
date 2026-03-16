'use client'

import { motion } from 'framer-motion'
import SectionBadge from '@/components/ui/SectionBadge'
import TagPill from '@/components/ui/TagPill'
import { aboutBio, technologies } from '@/lib/data'

/** About section — bio + photo + tech stack */
export default function About() {
  return (
    <section id="about" className="relative">
      <SectionBadge label="~/About" />

      <motion.p
        className="mt-3 mb-8"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12px',
          color: 'var(--text-muted)',
        }}
      >
        Brief information about me and some of my interests.
      </motion.p>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-8 items-start">
        {/* Left — bio text */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          {aboutBio.split('\n\n').map((para, i) => (
            <p
              key={i}
              className="mb-4"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
              }}
            >
              {para}
            </p>
          ))}

          {/* Technologies */}
          <motion.div
            className="mt-6"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <p
              className="mb-3"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-muted)',
              }}
            >
              Some technologies I&apos;ve been working with:
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ color: 'var(--accent-blue)' }}>▶</span> {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — profile photo */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="hidden md:block"
        >
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.12)',
              aspectRatio: '3/4',
              background: 'var(--glass-bg)',
              boxShadow: '-2px 0 8px var(--chroma-r), 2px 0 8px var(--chroma-c)',
            }}
          >
            {/* Placeholder — replace src with actual photo */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(15, 15, 30, 0.6)' }}
            >
              <span
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: '3rem',
                  color: 'var(--accent-blue)',
                  textShadow: '-2px 0 var(--chroma-r), 2px 0 var(--chroma-c)',
                }}
              >
                DG
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                }}
              >
                photo.jpg
              </span>
            </div>
            {/* Iridescent border shimmer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(79,142,247,0.08) 0%, transparent 50%, rgba(155,92,246,0.08) 100%)',
                borderRadius: '8px',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Tag pills */}
      <motion.div
        className="mt-6 flex flex-wrap gap-2"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {['Python', 'Machine Learning', 'NLP', 'TensorFlow', 'scikit-learn', 'JavaScript', 'MySQL', 'Streamlit'].map(
          (tag) => (
            <TagPill key={tag} label={tag} />
          )
        )}
      </motion.div>
    </section>
  )
}
