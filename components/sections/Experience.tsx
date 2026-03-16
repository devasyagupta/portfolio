'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionBadge from '@/components/ui/SectionBadge'
import GlowButton from '@/components/ui/GlowButton'
import { experiences } from '@/lib/data'

/** Experience section — left company / center timeline / right details */
export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP ScrollTrigger: line draws downward on scroll
    const loadGSAP = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!lineRef.current) return

      const ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
            },
          }
        )
      })

      return () => ctx.revert()
    }

    loadGSAP()
  }, [])

  return (
    <section id="experience" className="relative">
      <div className="flex flex-wrap items-baseline gap-4 mb-3">
        <SectionBadge label="~/Experience" />
        <GlowButton href="/resume-devasya-gupta.pdf" download>
          ↓ Resume
        </GlowButton>
      </div>

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
        My current/past relevant experience.
      </motion.p>

      {experiences.map((exp, ei) => (
        <div key={exp.company} className="relative">
          {/* Three-column layout: company | line | details */}
          <div className="grid grid-cols-[140px_24px_1fr] gap-0 sm:grid-cols-[180px_24px_1fr]">
            {/* Left — company name */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="pt-1 pr-4 text-right"
            >
              <a
                href={exp.companyUrl || '#'}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  color: 'var(--accent-teal)',
                  textDecoration: 'none',
                  lineHeight: '1.6',
                }}
              >
                {exp.company}
              </a>
            </motion.div>

            {/* Center — vertical timeline line */}
            <div className="flex flex-col items-center">
              {/* Top dot */}
              <div
                className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                style={{
                  background: 'var(--accent-blue)',
                  boxShadow: '0 0 8px var(--accent-blue)',
                }}
              />
              {/* Line */}
              <div
                ref={ei === 0 ? lineRef : undefined}
                className="flex-1 w-px mt-1"
                style={{
                  background:
                    'linear-gradient(180deg, var(--accent-blue), rgba(79,142,247,0.1))',
                  minHeight: '120px',
                }}
              />
            </div>

            {/* Right — role details */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="pb-10 pl-4"
            >
              {/* Role + dates */}
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}
                >
                  {exp.role} @ {exp.company}
                </span>
              </div>
              <div
                className="mb-4"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}
              >
                {exp.period} · {exp.location}
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bi) => (
                  <motion.li
                    key={bi}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + bi * 0.08, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <span
                      style={{
                        color: 'var(--accent-blue)',
                        flexShrink: 0,
                        marginTop: '2px',
                        fontSize: '12px',
                      }}
                    >
                      ▶
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                      }}
                    >
                      {bullet}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Education subsection */}
      <motion.div
        className="mt-4"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div
          className="mb-3"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Education
        </div>
        {[
          {
            school: 'GLS University',
            degree: 'B.Tech Computer Science',
            period: 'Aug 2023 – May 2027',
            location: 'Ahmedabad, GJ',
          },
          {
            school: 'Green Valley School',
            degree: 'High School Diploma',
            period: 'Jun 2019 – May 2023',
            location: 'Ahmedabad, GJ',
          },
        ].map((edu, i) => (
          <div
            key={edu.school}
            className="flex flex-wrap justify-between items-baseline py-2"
            style={{
              borderBottom: i === 0 ? '1px dashed var(--sep-color)' : 'none',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                }}
              >
                {edu.degree}
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginLeft: '8px',
                }}
              >
                — {edu.school}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '11px',
                color: 'var(--text-muted)',
              }}
            >
              {edu.period}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
