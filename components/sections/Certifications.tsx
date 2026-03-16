'use client'

import { motion } from 'framer-motion'
import SectionBadge from '@/components/ui/SectionBadge'
import GlassCard from '@/components/ui/GlassCard'
import { certifications, featuredCerts } from '@/lib/data'

/** Certifications section — featured badges + glass card grid */
export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <SectionBadge label="~/Certifications" />

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
        Professional certifications and structured learning programs I have completed.
      </motion.p>

      {/* Featured certs — 3 prominent glass badges */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {featuredCerts.map((cert) => (
          <GlassCard key={cert.title} className="p-4">
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '11px',
                color: 'var(--accent-blue)',
                marginBottom: '4px',
              }}
            >
              {cert.issuer}
            </div>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-primary)',
                lineHeight: '1.5',
              }}
            >
              {cert.title}
            </div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Certification grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((group, gi) => {
          const total = group.courses.reduce((s, c) => s + c.credits, 0)
          return (
            <motion.div
              key={group.category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + gi * 0.07, duration: 0.4 }}
            >
              <GlassCard className="p-4" hoverable={false}>
                {/* Header */}
                <div className="flex justify-between items-baseline mb-3 pb-3"
                  style={{ borderBottom: '1px dashed var(--sep-color)' }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '11px',
                      color: 'var(--accent-blue)',
                      fontWeight: 500,
                    }}
                  >
                    {group.category} {group.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '11px',
                      color: 'var(--accent-blue)',
                    }}
                  >
                    Total: {total.toFixed(1)}
                  </span>
                </div>

                {/* Rows */}
                {group.courses.map((course, ci) => (
                  <div
                    key={course.name}
                    className="flex justify-between items-start gap-4 py-2"
                    style={{
                      borderBottom:
                        ci < group.courses.length - 1 ? '1px dashed var(--sep-color)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        flex: 1,
                      }}
                    >
                      {course.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {course.credits.toFixed(1)}
                    </span>
                  </div>
                ))}
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
