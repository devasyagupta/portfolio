# Devasya Gupta — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live-devasyagupta.vercel.app-1a56db?style=flat-square)](https://devasyagupta.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-devasyagupta-0f0f0f?style=flat-square&logo=github)](https://github.com/devasyagupta)

Personal portfolio website for **Devasya Gupta** — CS undergraduate at GLS University, Ahmedabad (B.Tech 2023–2027), specializing in ML/AI and full-stack development.

---

## Preview

A fully self-contained single HTML file portfolio with:

- **Three.js wireframe globe** — low-poly icosphere with triangulated edges, glowing accent nodes, latitude/longitude rings, Earth-axial tilt, and mouse parallax
- **Magazine-style layout** — asymmetric project cards with overlapping image/text columns
- **11 scroll animations** — blur-fade reveals, heading wipes, image desaturate-zoom, word-by-word text, tag pill stagger, cert fan-in, project side-slides, separator line draws, scroll progress bar
- **edh.dev layout DNA** — fixed left icon sidebar, fixed bottom-right text nav, top metadata bar

---

## Stack

| Layer | Choice |
|-------|--------|
| Structure | Single HTML file (no build step) |
| 3D | Three.js r128 (CDN) |
| Fonts | Instrument Serif + IBM Plex Mono (Google Fonts) |
| Animations | CSS transitions + IntersectionObserver |
| Deployment | Vercel / Netlify (static) |

---

## Sections

- **Hero** — Full-viewport Three.js wireframe globe
- **About** — Bio, technologies grid, skill tags
- **Certifications** — Google AI, JP Morgan, McKinsey + category credit tables
- **Experience** — Metrix Healthcare India internship with animated timeline
- **Projects** — 5 projects with real screenshots, repo links, tag pills
- **Contact** — Clipboard email copy, GitHub, LinkedIn, embedded resume download

---

## Projects

| # | Project | Repo | Stack |
|---|---------|------|-------|
| 1 | **HireLoop** | [devasyagupta/HireLoop](https://github.com/devasyagupta/HireLoop) | Python, NLP, TF-IDF, scikit-learn, JS |
| 2 | **Fake News Detection System** | [devasyagupta/FakeNews-Detection](https://github.com/devasyagupta/FakeNews-Detection) | Python, scikit-learn, NLP, Pandas |
| 3 | **Satellite Image Classification** | [devasyagupta/Satellite](https://github.com/devasyagupta/Satellite) | Python, TensorFlow, CNN, Streamlit |
| 4 | **Restaurant Recommendation System** | [devasyagupta/Restaurant-recommender](https://github.com/devasyagupta/Restaurant-recommender) | Python, scikit-learn, TF-IDF, Pandas |
| 5 | **This Portfolio** | [devasyagupta/portfolio](https://github.com/devasyagupta/portfolio) | Three.js, HTML, CSS, JS |

---

## Running Locally

No build step needed — just open the file:

```bash
# Clone the repo
git clone https://github.com/devasyagupta/portfolio.git
cd portfolio

# Open directly in browser
open portfolio-v4.html
# or on Linux:
xdg-open portfolio-v4.html
```

That's it. Everything — images, resume PDF, fonts fallback, Three.js — is either embedded or loaded from CDN.

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel --prod
```

Or drag and drop `portfolio-v4.html` directly into [vercel.com/new](https://vercel.com/new) as a static file upload.

For Netlify: drag the file into [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Customization

All content is hardcoded in the HTML. To update:

| What | Where in the file |
|------|-------------------|
| Bio text | Search `word-reveal` `data-text=` attributes |
| Project descriptions | Search `proj-desc` class |
| GitHub links | Search `github.com/devasyagupta/` |
| Email address | Search `GuptaDeva700@gmail.com` |
| Resume PDF | Replace the `data:application/pdf;base64,...` in both resume button `href` attributes |
| LinkedIn URL | Search `linkedin.com/in/devasya-gupta` |

---

## Contact

**Devasya Gupta**
- Email: [GuptaDeva700@gmail.com](mailto:GuptaDeva700@gmail.com)
- LinkedIn: [linkedin.com/in/devasya-gupta](https://linkedin.com/in/devasya-gupta)
- GitHub: [github.com/devasyagupta](https://github.com/devasyagupta)

---

*Actively seeking SWE and AI/ML internship opportunities — 2025/2026.*
