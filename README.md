# Devasya Gupta — Portfolio v2.0

**Chromatic Glassmorphism × edh.dev Layout**

> "The editorial structure and pixel-font brutalism of edh.dev, painted in deep space dark with iridescent glass and chromatic light."

---

## ✦ Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Scroll Animations | GSAP 3 + ScrollTrigger |
| UI Microinteractions | Framer Motion |
| 3D Background | React Three Fiber (R3F) |
| Display Font | VT323 (Google Fonts) |
| Body Font | IBM Plex Mono |
| Deployment | Vercel |

---

## 🗂 Project Structure

```
devasya-portfolio/
├── app/
│   ├── layout.tsx          # Root: fonts, metadata, JSON-LD
│   ├── page.tsx            # Main page — all sections assembled
│   └── globals.css         # Full CSS design token system
├── components/
│   ├── ui/
│   │   ├── GlassCard.tsx   # Reusable glass surface
│   │   ├── TagPill.tsx     # Dashed-border tag pill (edh.dev style)
│   │   ├── SectionBadge.tsx # VT323 heading in glass badge
│   │   ├── SectionSep.tsx  # Dashed horizontal separator
│   │   └── GlowButton.tsx  # CTA button with glow
│   ├── sections/
│   │   ├── Hero.tsx        # Full-viewport terminal glass hero
│   │   ├── About.tsx       # Bio + photo + tech stack
│   │   ├── Certifications.tsx
│   │   ├── Experience.tsx  # GSAP timeline animation
│   │   ├── Projects.tsx    # edh.dev full-width stacked cards
│   │   └── Contact.tsx     # Email copy + links + footer
│   ├── layout/
│   │   ├── LeftSidebar.tsx # Fixed 5-icon glass sidebar
│   │   ├── RightNav.tsx    # Fixed bottom-right text nav
│   │   ├── TopMetaBar.tsx  # Fixed top-right GitHub metadata
│   │   └── MobileMenu.tsx  # Full-screen glass overlay
│   └── three/
│       └── BackgroundOrbs.tsx  # R3F ambient orbs scene
├── lib/
│   ├── data.ts             # ALL content — single source of truth
│   ├── animations.ts       # GSAP preset configs
│   └── github.ts           # GitHub API utility
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    ├── photo.jpg           # ← ADD YOUR PHOTO HERE
    └── resume-devasya-gupta.pdf  # ← ADD YOUR RESUME HERE
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Setup

```bash
# 1. Clone / copy project files into a new directory
mkdir devasya-portfolio && cd devasya-portfolio

# 2. Copy all project files into this directory

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

# 5. Open in browser
open http://localhost:3000
```

### Add Your Assets

Before running, add these files to `/public`:

```
public/
  photo.jpg                    ← your profile photo
  resume-devasya-gupta.pdf     ← your resume PDF
  og-image.png                 ← 1200×630px OG image (dark glass aesthetic)
```

The `About` section profile photo and resume download will work automatically once files are placed.

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? → Y
# - Which scope? → your account
# - Link to existing project? → N (first time)
# - Project name: devasya-portfolio
# - Directory: ./
# - Override settings? → N

# Production deploy
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio v2.0 initial commit"
   git remote add origin https://github.com/devasyagupta/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repo

4. Vercel auto-detects Next.js — **click Deploy**

5. Your site will be live at `https://devasya-portfolio.vercel.app`

6. Add custom domain in Vercel Dashboard → Settings → Domains

---

## ⚙️ Customization

### Update Your Content
All content lives in one file — `lib/data.ts`. Edit:
- `personalInfo` — name, email, links
- `projects` — add/remove/edit projects
- `experiences` — work history
- `certifications` — certs
- `aboutBio` — bio text

### Update GitHub Metadata Bar
The `TopMetaBar` currently shows static values. To fetch live commit counts:

```tsx
// In app/page.tsx, replace the static TopMetaBar with:
import { fetchGitHubMeta } from '@/lib/github'

// In a server component or API route:
const meta = await fetchGitHubMeta('devasyagupta', 'portfolio')
```

### Add Profile Photo
Replace the placeholder in `About.tsx`:
```tsx
// Find the placeholder div and replace with:
import Image from 'next/image'
<Image src="/photo.jpg" alt="Devasya Gupta" fill className="object-cover" />
```

---

## 🎨 Design System

All design tokens live in `app/globals.css` under `:root {}`.

Key tokens:
- `--bg-base: #07070F` — deep space background
- `--accent-blue: #4F8EF7` — primary accent
- `--glass-bg` / `--glass-border` — glass card system
- `--chroma-r` / `--chroma-c` — chromatic aberration colors
- `--tag-border-style: dashed` — edh.dev dashed pill style

---

## ♿ Accessibility

- `prefers-reduced-motion` disables all animations
- All interactive elements have `aria-label`s
- Text passes WCAG AA contrast on glass backgrounds
- Touch targets are minimum 44×44px on mobile
- Three.js canvas has `pointer-events: none`

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |

Three.js is lazy-loaded via `next/dynamic({ ssr: false })` and disabled on mobile.

---

*Built with Next.js 14 · GSAP 3 · Framer Motion · React Three Fiber*
