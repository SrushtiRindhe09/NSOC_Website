# NSoC Winter Edition — Open Source, Reimagined

A premium redesigned landing page for [Nexus Spring of Code](https://www.nsoc.in/) — Winter Edition 2026.

Built as a frontend submission for the **NSoC Developer Selection Task**.

## ✨ Live Preview

Run locally to preview (see below).

## 🛠 Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Frontend | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Motion v14, CSS transitions |
| Icons | Lucide React + custom SVG |
| Theme | next-themes (dark/light) |
| Utilities | clsx, tailwind-merge, class-variance-authority |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & theme
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Design system & tokens
├── components/
│   ├── navbar/             # Sticky navigation
│   ├── hero/               # Full-screen hero
│   ├── sections/           # About, HowItWorks, Projects, etc.
│   ├── footer/             # Site footer
│   ├── theme-toggle/       # Dark/light toggle
│   └── ui/                 # Reusable primitives
├── data/
│   └── nsoc.ts             # Centralized content layer
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design Decisions

- **Winter + Aurora + Developer Culture**: Deep midnight backgrounds with subtle aurora gradients and NSoC orange accents
- **Data-Driven Architecture**: All factual content lives in `src/data/nsoc.ts`, separated from UI components
- **Performance-First Particles**: Lightweight canvas snow with capped particle count; respects `prefers-reduced-motion`
- **Progressive Enhancement**: CSS-only aurora gradients, IntersectionObserver-based reveals, no heavy 3D libraries
- **Accessibility**: Semantic HTML, keyboard navigation, focus states, aria labels, reduced-motion support

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9+
- npm (or bun/pnpm)

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## ♿ Accessibility

- Semantic heading hierarchy (h1 → h2 → h3)
- Keyboard-navigable menu with focus indicators
- `aria-label` on icon-only buttons
- `aria-hidden` on decorative elements
- `prefers-reduced-motion` respected for all animations
- Color contrast meets WCAG AA

## 📊 Content Source

All factual content is sourced exclusively from [https://www.nsoc.in/](https://www.nsoc.in/):
- Navigation links, social links, and CTAs are real NSoC URLs
- Footer text matches the live site
- No statistics, sponsors, projects, or testimonials were invented

## 📝 License

This project is a developer selection submission for NSoC.
