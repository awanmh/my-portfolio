# Setiawan Muhammad — Portfolio

Cinematic, monochrome portfolio engineered across 27 architectural layers. Inspired by the controlled visual language of David Fincher — dark, intentional, premium.

## Stack

- **Core**: React 19 + Vite
- **Styling**: Tailwind CSS + CSS Custom Properties
- **Typography**: Instrument Sans (display), Inter (body)
- **Motion**: Framer Motion (Fincher easing: `cubic-bezier(0.22, 1, 0.36, 1)`)
- **Analytics**: Plausible (privacy-first, cookie-free)
- **Forms**: Formspree (honeypot + rate-limited)
- **CI/CD**: GitHub Actions (lint, build, gzipped bundle guard, Lighthouse CI)
- **Security**: Strict CSP (no `unsafe-inline`), HSTS preload
- **Hosting**: Vercel (Edge CDN, immutable caching)

## Experience Flow

1. **Pre-Intro** → Black screen, da Vinci quote, "Begin the Sequence" button
2. **Cinematic Intro** → Name + tagline, vinyl record, YouTube audio (Pixies), skip option
3. **Main Site** → Hero → About → Expertise → Projects → Contact

## Atmosphere

- Film grain overlay (2-3% opacity, animated)
- Edge vignette (radial gradient)
- Ambient shadow drift (28s loop, muted red accent)
- Light mode support (`.light` class)

## Development

```bash
npm install
npm run dev
npm run build
```

## Adding a Project

Edit `src/data/portfolio.js`:

```js
{
  id: 'project-id',
  title: 'Name',
  category: 'fullstack',
  year: '2025',
  problem: 'What gap existed?',
  image: importedImage,
  images: [],
  tags: ['React'],
  githubLink: 'https://...',
}
```

## Author

**Setiawan Muhammad** — [GitHub](https://github.com/awanmh) · [LinkedIn](https://linkedin.com/in/setiawan-muhammad)
