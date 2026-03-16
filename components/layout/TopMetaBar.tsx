'use client'

import { useEffect, useState } from 'react'

interface MetaBarProps {
  repoName?: string
  author?: string
  commits?: number | string
  lastPush?: string
}

/** Fixed top-right repo metadata bar — charming developer detail from v1 */
export default function TopMetaBar({
  repoName = 'portfolio',
  author = 'devasyagupta',
  commits = '—',
  lastPush = 'Mar 2026',
}: MetaBarProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className="fixed top-3 right-6 z-50 hidden md:block"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '10px',
        color: 'var(--text-muted)',
        letterSpacing: '0.03em',
      }}
    >
      Repo Name: {repoName} • Author: {author} • Total Commits: {commits} • Last Push: {lastPush}
    </div>
  )
}
