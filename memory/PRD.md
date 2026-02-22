# Dave & Associates - CA Website PRD

## Original Problem Statement
Build a professional, SEO-optimized corporate website for "Dave & Associates", a Chartered Accountants firm in Ahmedabad, India.

**Core Requirements:**
- Framework: React (Vite) + Tailwind CSS
- Architecture: Static SPA with no backend
- Design: Professional, clean, conservative, blue-dominant palette
- SEO: Critical priority - unique meta tags, Open Graph, JSON-LD, sitemap
- Pages: Home, About Us, Services (8 categories), Resources, Contact

## What's Been Implemented

### Core Pages
- [x] Home page with hero, about preview, services grid, testimonials, CTA
- [x] About Us page with company overview, mission/vision, team section
- [x] Services overview page with 8 service categories
- [x] Individual service detail pages
- [x] Resources page with article listings
- [x] Resource detail pages
- [x] Contact page with form and Google Map

### Components
- [x] Header with navigation and services dropdown
- [x] Footer with comprehensive links
- [x] Reusable Button, Card components
- [x] SEO component (basic implementation)

### Recent Updates (Dec 2025)
- [x] Team section redesigned - alternating image layout (Founder LEFT, Principal Consultant RIGHT)
- [x] LinkedIn hover effect on team member images (grey overlay + blue LinkedIn icon)
- [x] Increased spacing between team members
- [x] Background images on page headers
- [x] Reduced blue dominance, added professional imagery

## Prioritized Backlog

### P0 - Critical
- [ ] Dynamic SEO with react-helmet-async (per-page titles, descriptions)
- [ ] Fix previous Helmet error ("expects string as child of title")

### P1 - High Priority
- [ ] Create sitemap.xml with all pages
- [ ] Create robots.txt
- [ ] Resource page category filtering

### P2 - Medium Priority
- [ ] JSON-LD structured data (Organization, LocalBusiness, Service, Article)
- [ ] Full content verification against .doc file
- [ ] Lighthouse audit (target 90+ for Performance, SEO, Accessibility)
- [ ] WCAG 2.1 AA compliance review

## Technical Architecture

```
/app/frontend/
├── public/
│   ├── data/resources.json
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/ (Button, SEO, ServiceCard)
│   │   └── layout/ (Header, Footer, Layout)
│   ├── data/ (aboutData, servicesData, teamData)
│   ├── pages/ (Home, About, Services, Resources, Contact, etc.)
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── package.json
```

## Third-Party Integrations
- FormSubmit.co: Contact form submissions (no API key needed)
- Unsplash/Pexels: Stock images

## Known Issues
- SEO: Previous react-helmet-async implementation caused app crash
- Error: "Helmet expects a string as child of title" - needs debugging

## Key Files Reference
- `/app/frontend/src/pages/About.jsx` - Team section with alternating layout
- `/app/frontend/src/data/teamData.js` - Team member data
- `/app/frontend/src/components/common/SEO.jsx` - SEO component
- `/app/frontend/tailwind.config.js` - Color palette and fonts
