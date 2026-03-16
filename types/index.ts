// ============================================================
// TYPE DEFINITIONS — Devasya Portfolio v2.0
// ============================================================

export interface Project {
  id: string
  title: string
  year: string
  dates: string
  tags: string[]
  description: string
  github: string
  image?: string
  status?: 'active' | 'completed'
  isSelfReferential?: boolean
}

export interface Certification {
  category: string
  year: string
  courses: { name: string; credits: number }[]
}

export interface FeaturedCert {
  title: string
  issuer: string
  icon?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  companyUrl?: string
  bullets: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface NavLink {
  label: string
  href: string
}
