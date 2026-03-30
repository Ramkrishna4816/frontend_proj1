# India Tourism App - Project Information

## 1. Overview
**Project Name:** Incredible India Tour (`india-tourism-app`)
**Tech Stack:** React 18, Vite, Framer Motion for animations.
**Style:** Modern, glassmorphism-inspired UI with floating particles and ambient background music.
**Purpose:** A digital heritage explorer presenting interactive tours and information about various Indian states.

## 2. Global Architecture
- **Entry Point:** `src/main.jsx` mounts the app.
- **Root Component:** `src/App.jsx` serves as the layout wrapper. It includes:
  - An `<audio>` player for ambient background music (`/audio/india-bgm.mp3`).
  - Animated floating background particles.
  - Interactive map wrapper.
  - Scrollable content components wrapped with `framer-motion` for scroll animations (`FeatureGrid`, `ThemedTours`, `PromoBanner`).

## 3. Key Components
- **IndianMap (`IndianMap.jsx`):** An interactive SVG map of India. Clicking a state triggers the display of its detailed information.
- **InfoCard (`InfoCard.jsx`):** A sliding panel that displays detailed state data (Gallery, Facts, Itinerary). It dynamically renders images, counts, timeline elements, and a dynamic "Start Car Journey" button.
- **FeatureGrid (`FeatureGrid.jsx`):** A horizontal, draggable "Destinations For You" slider featuring popular destinations (e.g., Jaipur, Varanasi, Munnar).
- **ThemedTours (`ThemedTours.jsx`):** A grid-based component categorizing tours into Wildlife Reserves, Spiritual Journeys, and Cultural Capitals.
- **TravelCar & PromoBanner:** Supplemental UI components for showcasing road trips and promotional content.

## 4. Data Management
State data is modularized outside components:
- **`src/data/statesData.js`:** The core data structure for the interactive map and `InfoCard`. It includes keys for distinct states (e.g., `ka` for Karnataka, `mh` for Maharashtra). For each state, it stores:
  - `name`, `speciality`, `facts`, `moreFacts`
  - `stats` (distance, season)
  - `places` (array of objects with `name`, `desc`, `img`)
  - `itinerary` (array of objects with `day`, `name`, `pos` coordinates for map, and `img`)

## 5. Media & Assets
Currently, the application relies on external image links for rendering media:
- Wikipedia Commons links (used in `statesData.js` for monuments and places).
- Unsplash links (used in `FeatureGrid.jsx` for destinations).
- Local audio (`/audio/india-bgm.mp3` loaded from the `public/audio/` directory).
