# F1 StatsCom Try it here -> f1-stats-com.vercel.app

A real-time Formula 1 dashboard built with React, TypeScript, and Vite. Displays current drivers, race results, and championship standings using live data from the OpenF1 and Ergast APIs.

## Features

- **Drivers Page** — Browse the current F1 grid with driver cards, headshots, and detailed info modals
- **Races Page** — View all races in the current season with podium results in a modal
- **Rankings Page** — Driver and constructor championship standings with sortable tables and 50/50 tab layout
- **Responsive Design** — Works across desktop and mobile with Ant Design + Tailwind CSS
- **Dark Theme** — Consistent dark UI with red F1 accent styling

## Tech Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **Ant Design 6** — UI components (Cards, Tables, Modals, Tabs)
- **Tailwind CSS 4** — Utility styling
- **React Query (TanStack)** — Data fetching and caching
- **React Router 7** — Client-side routing

## Project Structure

```
src/
├── Components/    # Shared components (NavBar)
├── hooks/         # Custom hooks for data fetching
├── pages/         # Page components (Drivers, Races, Ranking, Welcome)
├── services/      # API fetch functions
├── types/         # TypeScript type definitions
├── App.tsx        # Router setup and theme config
└── App.css        # Global CSS overrides
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Configured for Vercel. Add a `vercel.json` with SPA rewrites:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
