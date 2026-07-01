# F1 StatsCom

A Formula 1 statistics dashboard that displays live driver data, race results, and championship standings for the current season.

**Live:** https://f1-stats-com.vercel.app

---

## Tech Stack

- React 19 + TypeScript 6
- Vite 8
- Ant Design 6
- Tailwind CSS 4
- TanStack React Query 5
- React Router DOM 7

---

## Data Sources

- [OpenF1 API](https://api.openf1.org) — driver profiles and headshots
- [Jolpi Ergast API](https://api.jolpi.ca/ergast) — race results and championship standings

---

## Pages

| Route             | Description                                      |
| ----------------- | ------------------------------------------------ |
| `/`               | Welcome page with full-screen hero               |
| `/driver/overall` | Driver grid with clickable cards and detail modal |
| `/races`          | Race cards for the current season with podium modal |
| `/ranking`        | Driver and constructor standings in tabbed tables |

---

## Project Structure

```
src/
├── Components/NavBar.tsx       — shared navigation bar
├── hooks/                      — React Query data-fetching hooks
├── pages/                      — route-level page components
├── services/F1api.ts           — API fetch functions
├── types/                      — TypeScript type definitions
├── App.tsx                     — routing and Ant Design theme config
└── main.tsx                    — entry point
```

---

## Getting Started

```bash
# requires Node.js >= 24
npm install
npm run dev
```

Dev server runs at http://localhost:5173.

---

## Scripts

| Command           | Action                        |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start dev server              |
| `npm run build`   | Type-check and build for prod |
| `npm run preview` | Preview production build      |
| `npm run lint`    | Run ESLint                    |

---

## Deployment

Hosted on Vercel with these settings:

- **Install:** `npm install`
- **Build:** `npm run build`
- **Output:** `dist`
- **Node.js:** 24 (set in Vercel Dashboard)
- **Routing:** SPA rewrite to `/index.html`
