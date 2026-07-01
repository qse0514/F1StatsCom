# F1 StatsCom

A Formula 1 statistics dashboard built with React and TypeScript, providing real-time driver information, race results, and championship standings.

**Live Demo:** [f1-stats-com.vercel.app](https://f1-stats-com.vercel.app)

---

## Features

- **Driver Grid** - Browse the current F1 grid with driver cards showing headshots, team colors, and numbers. Click any card to view detailed driver info in a modal.
- **Race Results** - View all races from the current season with circuit details. Click a race to see the podium finishers with points.
- **Championship Standings** - Tabbed view of both Driver and Constructor championship standings with position, wins, and points.
- **Dark Theme** - Full dark-mode UI with F1 red (#FF1E00) accent color and team-colored highlights.
- **Responsive Layout** - Adaptive grid that works across desktop, tablet, and mobile.

---

## Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 19                            |
| Language       | TypeScript 6                        |
| Build Tool     | Vite 8                              |
| UI Library     | Ant Design 6                        |
| Styling        | Tailwind CSS 4                      |
| Data Fetching  | TanStack React Query 5              |
| Routing        | React Router DOM 7                  |
| Deployment     | Vercel                              |
| Runtime        | Node.js >= 24                       |

---

## APIs

| Source                                                  | Used For                              |
| ------------------------------------------------------- | ------------------------------------- |
| [OpenF1 API](https://api.openf1.org)                    | Current driver data and headshots     |
| [Jolpi Ergast API](https://api.jolpi.ca/ergast)         | Race results and championship standings |

---

## Project Structure

```
src/
├── Components/
│   └── NavBar.tsx            # Shared navigation bar with gradient background
├── hooks/
│   ├── useDrivers.ts         # TanStack Query hook for driver data
│   ├── useRaceResults.ts     # TanStack Query hook for race results
│   └── useRankings.ts        # TanStack Query hooks for standings
├── pages/
│   ├── WelcomePage.tsx       # Landing page with hero background
│   ├── DriversPage.tsx       # Driver grid with detail modal
│   ├── RacesPage.tsx         # Race cards with podium modal
│   └── RankingPage.tsx       # Championship standings tables
├── services/
│   └── F1api.ts              # API fetch functions
├── types/
│   ├── driver.ts             # Driver type definitions
│   └── race.ts              # Race, standings type definitions
├── App.tsx                   # Root component with routing and theme
└── main.tsx                  # Entry point
```

---

## Getting Started

### Prerequisites

- Node.js >= 24

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deployment

The app is deployed on **Vercel** with the following configuration:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 24 (set via Vercel Dashboard environment variable)
- **SPA Routing:** All paths rewrite to `/index.html`

---

## Routes

| Path              | Page         | Description                     |
| ----------------- | ------------ | ------------------------------- |
| `/`               | Welcome      | Hero landing page               |
| `/driver/overall` | Drivers      | Current grid with driver cards  |
| `/races`          | Races        | Season race results             |
| `/ranking`        | Ranking      | Driver & constructor standings  |
<<<<<<< HEAD
# F1 StatsCom Try it here -> f1-stats-com.vercel.app
=======
# F1 StatsCom

A Formula 1 statistics dashboard built with React and TypeScript, providing real-time driver information, race results, and championship standings.

**Live Demo:** [f1-stats-com.vercel.app](https://f1-stats-com.vercel.app)

---

## Features

- **Driver Grid** - Browse the current F1 grid with driver cards showing headshots, team colors, and numbers. Click any card to view detailed driver info in a modal.
- **Race Results** - View all races from the current season with circuit details. Click a race to see the podium finishers with points.
- **Championship Standings** - Tabbed view of both Driver and Constructor championship standings with position, wins, and points.
- **Dark Theme** - Full dark-mode UI with F1 red (#FF1E00) accent color and team-colored highlights.
- **Responsive Layout** - Adaptive grid that works across desktop, tablet, and mobile.

---

## Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 19                            |
| Language       | TypeScript 6                        |
| Build Tool     | Vite 8                              |
| UI Library     | Ant Design 6                        |
| Styling        | Tailwind CSS 4                      |
| Data Fetching  | TanStack React Query 5              |
| Routing        | React Router DOM 7                  |
| Deployment     | Vercel                              |
| Runtime        | Node.js >= 24                       |

---

## APIs

| Source                                                  | Used For                              |
| ------------------------------------------------------- | ------------------------------------- |
| [OpenF1 API](https://api.openf1.org)                    | Current driver data and headshots     |
| [Jolpi Ergast API](https://api.jolpi.ca/ergast)         | Race results and championship standings |

---

## Project Structure

```
src/
├── Components/
│   └── NavBar.tsx            # Shared navigation bar with gradient background
├── hooks/
│   ├── useDrivers.ts         # TanStack Query hook for driver data
│   ├── useRaceResults.ts     # TanStack Query hook for race results
│   └── useRankings.ts        # TanStack Query hooks for standings
├── pages/
│   ├── WelcomePage.tsx       # Landing page with hero background
│   ├── DriversPage.tsx       # Driver grid with detail modal
│   ├── RacesPage.tsx         # Race cards with podium modal
│   └── RankingPage.tsx       # Championship standings tables
├── services/
│   └── F1api.ts              # API fetch functions
├── types/
│   ├── driver.ts             # Driver type definitions
│   └── race.ts              # Race, standings type definitions
├── App.tsx                   # Root component with routing and theme
└── main.tsx                  # Entry point
```

---

## Getting Started

### Prerequisites

- Node.js >= 24

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Deployment

The app is deployed on **Vercel** with the following configuration:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node.js Version:** 24 (set via Vercel Dashboard environment variable)
- **SPA Routing:** All paths rewrite to `/index.html`

---

## Routes

| Path              | Page         | Description                     |
| ----------------- | ------------ | ------------------------------- |
| `/`               | Welcome      | Hero landing page               |
| `/driver/overall` | Drivers      | Current grid with driver cards  |
| `/races`          | Races        | Season race results             |
| `/ranking`        | Ranking      | Driver & constructor standings  |
# F1 Dashboard
>>>>>>> 7f1020b (docs: rewrite README with project overview and Vercel deployment link)

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
