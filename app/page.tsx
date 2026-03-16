'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'

// Layout
import LeftSidebar from '@/components/layout/LeftSidebar'
import RightNav from '@/components/layout/RightNav'
import TopMetaBar from '@/components/layout/TopMetaBar'
import MobileMenu from '@/components/layout/MobileMenu'

// Sections
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Certifications from '@/components/sections/Certifications'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

// UI
import SectionSep from '@/components/ui/SectionSep'

// Three.js background — lazy-loaded, SSR disabled
const BackgroundOrbs = dynamic(() => import('@/components/three/BackgroundOrbs'), {
  ssr: false,
  loading: () => null,
})

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ── Ambient background (Three.js orbs) ── */}
      {/* Hidden on mobile via CSS, replaced by gradient in globals.css */}
      <div className="hidden sm:block">
        <Suspense fallback={null}>
          <BackgroundOrbs />
        </Suspense>
      </div>

      {/* ── Fixed chrome ── */}
      <TopMetaBar
        repoName="portfolio"
        author="devasyagupta"
        commits="—"
        lastPush="Mar 2026"
      />
      <LeftSidebar onMenuClick={() => setMenuOpen(true)} />
      <RightNav />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Mobile hamburger ── */}
      <button
        className="fixed top-4 left-4 z-40 sm:hidden w-9 h-9 flex items-center justify-center rounded-lg"
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          color: 'var(--text-muted)',
          fontSize: '16px',
          backdropFilter: 'blur(12px)',
        }}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* ── Main content column ── */}
      <main
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: '680px' }}
      >
        {/* ── HERO — full viewport, no separator above ── */}
        <Hero />

        {/* ── ABOUT ── */}
        <SectionSep />
        <About />

        {/* ── CERTIFICATIONS ── */}
        <SectionSep />
        <Certifications />

        {/* ── EXPERIENCE ── */}
        <SectionSep />
        <Experience />

        {/* ── PROJECTS ── */}
        <SectionSep />
        <Projects />

        {/* ── CONTACT + FOOTER ── */}
        <SectionSep />
        <Contact />

        {/* Bottom padding */}
        <div className="h-24" />
      </main>
    </>
  )
}
