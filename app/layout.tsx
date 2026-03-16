import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Devasya Gupta — ML Engineer & Full-Stack Developer',
  description:
    'CS undergraduate at GLS University building ML pipelines, NLP systems, and full-stack applications. Open to SWE and AI/ML internship opportunities.',
  openGraph: {
    title: 'Devasya Gupta — Portfolio',
    description: 'ML Engineer & Full-Stack Developer. B.Tech CS @ GLS University.',
    url: 'https://devasyagupta.vercel.app',
    siteName: 'Devasya Gupta',
    images: [
      {
        url: 'https://devasyagupta.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devasya Gupta — Portfolio',
    description: 'ML Engineer & Full-Stack Developer. B.Tech CS @ GLS University.',
    images: ['https://devasyagupta.vercel.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://devasyagupta.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&family=IBM+Plex+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Devasya Gupta',
              url: 'https://devasyagupta.vercel.app',
              email: 'GuptaDeva700@gmail.com',
              alumniOf: 'GLS University',
              jobTitle: 'Software Engineering Intern',
              knowsAbout: [
                'Machine Learning',
                'NLP',
                'Full-Stack Development',
                'Python',
                'JavaScript',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
