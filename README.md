# L.E Blaze Trophy — Official Rugby Event Website

> **A Celebration of Rugby, Tradition & School Spirit**  
> **Wesley College Colombo vs Kingswood College Kandy**

---

## Overview

The **L.E Blaze Trophy** website is a premium, five-page responsive web application built with React, TypeScript, Vite, and Tailwind CSS. It commemorates the historic schoolboy rugby rivalry between **Kingswood College Kandy** and **Wesley College Colombo**, honoring **Louis Edmund Blaze** (founder of Kingswood College), who introduced schools rugby to Sri Lanka in 1891.

---

## Brand Identity & Official Palette

- **L.E**: Royal Blue (`#0066FF`)
- **Blaze**: Crimson Maroon (`#800000` / `#EF4444`)
- **Trophy**: Gold (`#D4AF37`)

### Official Colors Breakdown
| Entity | Color 1 | Color 2 | Accent |
| :--- | :--- | :--- | :--- |
| **Kingswood College** | Maroon (`#800000`) | Royal Blue (`#0066FF`) | Gold Crest |
| **Wesley College** | Dark Blue (`#0B3D91`) | Light Blue (`#4FC3F7`) | Double Blue |
| **The Silverware** | Pure Gold (`#D4AF37`) | Dark & Light Blue Handles | Royal Timber |

---

## School Crests & Positioning

- **Left Side**: Kingswood College Kandy (*"Fide et Virtute"*, Est. 1891)
- **Right Side**: Wesley College Colombo (*"Ora et Labora"*, Est. 1874)
- Original logos are preserved in high fidelity with dedicated white-backing contrast frames.

---

## Pages & Routes

1. **`/` — Home**: Full-screen cinematic hero, match title, two school cards, featured photography bento grid, event highlights preview, Instagram Reel preview, and direct WhatsApp contact.
2. **`/about` — About the Trophy**: Editorial narrative detailing Louis Edmund Blaze's rugby inception in 1891, collegiate traditions, handcrafted trophy anatomy, and verified archive notices.
3. **`/highlights` — Event Highlights**: Dedicated photography showcases covering Drone Flag Ceremony, Stadium Atmosphere, Team Presentations, Rugby Match Moments, School Spirit, and working **Watch Event Reel** CTA.
4. **`/gallery` — Photo Gallery**: Responsive editorial masonry grid with category filters (All Photos, Drone Ceremony, Match Day, Players, Stadium & Atmosphere) and an interactive keyboard/touch lightbox with navigation and counters.
5. **`/contact` — Contact & Social Media**: Official WhatsApp hotline (`0776928822`), Instagram Reel link, 3 Facebook community links, and an interactive inquiry form with instant WhatsApp dispatch.

---

## Verified Social & Contact Links

- **WhatsApp Hotline**: [0776928822](https://wa.me/94776928822)
- **Instagram Event Reel**: [Watch Highlights Reel](https://www.instagram.com/reel/DbBBTO_sB2v/?igsh=MWNrNDAxMzRrN24yNw==)
- **Facebook Feed 1**: [Event Feature Update](https://www.facebook.com/share/1GA7VTCPPa/)
- **Facebook Feed 2**: [Match Gallery Post](https://www.facebook.com/share/19HcJQ3fL7/)
- **Facebook Feed 3**: [Ceremony Announcement](https://www.facebook.com/share/p/1942hrF6kZ/)

---

## Project Structure

```text
├── public/
│   └── assets/
│       └── aistudio/
│           ├── Kinesley_logo_9f0698b4.jpeg        # Kingswood College Logo
│           ├── Wesley_College_8f1dccae.jpeg       # Wesley College Logo
│           ├── Wesley_College_colors_ee5793ca.jpeg # Double Blue Standard
│           └── WhatsApp_Image_2026-10-30...jpeg   # Handcrafted Trophy Blueprint
├── src/
│   ├── components/
│   │   ├── BrandWordmark.tsx                      # Official 3-color brand wordmark
│   │   ├── Footer.tsx                             # Universal footer with school crests
│   │   ├── Lightbox.tsx                           # Fullscreen keyboard-accessible lightbox
│   │   ├── Navbar.tsx                             # Top Bar Contract navbar with mobile drawer
│   │   └── SchoolBadge.tsx                        # High-contrast school crest container
│   ├── data/
│   │   └── eventData.ts                           # Central verified data store
│   ├── pages/
│   │   ├── AboutPage.tsx                          # Page 2: About & Heritage
│   │   ├── ContactPage.tsx                        # Page 5: Contact & Social Media
│   │   ├── GalleryPage.tsx                        # Page 4: Photo Gallery with Lightbox
│   │   ├── HighlightsPage.tsx                     # Page 3: Event Highlights
│   │   └── HomePage.tsx                           # Page 1: Cinematic Landing Page
│   ├── App.tsx                                    # React Router configuration & layout
│   ├── index.css                                  # Tailwind CSS and athletic typography
│   └── main.tsx                                   # React entry point
├── index.html                                     # SEO, OpenGraph, JSON-LD schema
├── netlify.toml                                   # Netlify build and SPA redirect rules
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Server starts at `http://localhost:3000`.

---

## Deployment to Netlify

This project is pre-configured for automated Netlify deployment:

1. **Repository Setup**: Push this repository to GitHub, GitLab, or Bitbucket.
2. **Netlify Import**:
   - In Netlify dashboard, click **"Add new site"** > **"Import an existing project"**.
   - Select your repository.
3. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. The included `netlify.toml` automatically configures the SPA rewrite rule (`/* -> /index.html 200`), ensuring direct browser navigation and page reloads work smoothly on all routes (`/about`, `/highlights`, `/gallery`, `/contact`).
