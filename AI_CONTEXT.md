# AI Context — Portfolio of Setiawan Muhammad

## Overview

Cinematic, monochrome portfolio. Dark psychological-tech aesthetic inspired by David Fincher — controlled, intentional, premium. Pre-intro → Cinematic intro (10s, analog glitch) → Linear main site.

## Tech Stack

- React 19 + Vite (SPA)
- Tailwind CSS + CSS Custom Properties (monochrome tokens)
- Framer Motion (Fincher easing: cubic-bezier(0.22, 1, 0.36, 1))
- Instrument Sans (display), Inter (body)
- Plausible Analytics, Formspree, Vercel

## Experience Flow

1. PreIntro — black screen, da Vinci quote, "Begin the Sequence" button
2. CinematicIntro — 10s locked timeline: REC indicator, name, mechanical typing, line blink, analog glitch escalation, hard cut to hero. YouTube "Where Is My Mind?" (start=14s, vol 25%)
3. Main site: Hero → About → Expertise → Projects → Contact

## Key Files

| File                                         | Purpose                                                                    |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| `src/App.jsx`                                | 3-stage flow: preintro → cinematic → main                                  |
| `src/data/portfolio.js`                      | All project data (engineering narrative schema)                            |
| `src/index.css`                              | Monochrome tokens, grain, vignette, ambient drift, analog glitch keyframes |
| `src/lib/motion.js`                          | Fincher easing, fadeUp, scaleSettle, modalContent                          |
| `src/components/sections/PreIntro.jsx`       | Quote screen + begin button                                                |
| `src/components/sections/CinematicIntro.jsx` | 10s timeline, typing hook, REC, glitch, YouTube start=14                   |
| `vercel.json`                                | Strict CSP, HSTS, immutable caching                                        |

## Design System

- **Background**: #0E0E11 (ground), #151518 (surface), #1A1A1E (elevated)
- **Text**: #E8E8EA → #8A8A90 → #5A5A60 → #3A3A40
- **Accent**: Muted cinematic red #8B3A3A (< 5% usage)
- **Light mode**: #F4F4F4 bg, #111 text (toggle via `.light` class)
- **Atmosphere**: Grain (3% opacity), vignette, grayscale ambient shadow drift
- **Motion**: opacity + translateY 12px, cubic-bezier(0.22, 1, 0.36, 1)
- **Glitch**: Monochrome analog only (tape-jitter, contrast-pulse, tape-distort). Intro only — never in main site
- **No**: bounce, elastic, rotate, RGB glitch, particle effects

## Section Architecture

```text
PreIntro.jsx        →  Black screen, quote, begin button
CinematicIntro.jsx  →  REC, name, typing, blink, glitch escalation, hard cut
Hero.jsx            →  Left-aligned condensed uppercase headlines
About.jsx           →  Grayscale portrait, mono key-value pairs, stats
Expertise.jsx       →  01/02/03 numbered disciplines
Projects.jsx        →  Dark cards, image desaturate hover, red underline
ProjectModal.jsx    →  Blur backdrop, scale 0.97→1, ARIA
Contact.jsx         →  Centered, bottom-border inputs, closing statement
```

## Cinematic Intro Timeline

| Time  | Event                                                           |
| ----- | --------------------------------------------------------------- |
| 0.0s  | Music starts (YouTube, start=14), black + grain + subtle jitter |
| 0.4s  | REC ● top-left (#8B1E1E, 35% opacity, static)                   |
| 1.6s  | Name fade (scale 1.01→1, 700ms)                                 |
| 3.8s  | Typing: "Drawn to silent systems." (55ms/char, block cursor)    |
| 6.2s  | Typing: "I engineer what others overlook."                      |
| 7.6s  | Line blinks 3x synced to guitar (120ms off intervals)           |
| 8.5s  | Escalation: 2 glitch pulses (clip-path + contrast 103%)         |
| 9.5s  | Hard cut to black                                               |
| 10.0s | Crossfade to hero, music continues 3s then fades                |

## Development

```bash
npm run dev       # Start dev server
npm run build     # Production build
```
