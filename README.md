# 🏠 Urban Pest Dial Services — Marketing Website

A premium, conversion-focused single-page marketing website for **Urban Pest Dial Services**, a pest control company based in Mahavir Enclave, New Delhi.

Built with React (Vite + TypeScript), Tailwind CSS v4, and Framer Motion.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To build for production:

```bash
npm run build
npm run preview
```

---

## 🔧 Configuration (Change Numbers & Details)

All configurable constants live in **`src/config.ts`**. Update this file to change:

| Constant | Description |
|---|---|
| `PHONE_PRIMARY` / `PHONE_PRIMARY_LINK` | Primary phone number displayed across the site |
| `PHONE_SECONDARY` / `PHONE_SECONDARY_LINK` | Secondary phone number |
| `WHATSAPP_NUMBER` | WhatsApp number (used for contact form & floating button) |
| `COMPANY_NAME` | Company name |
| `COMPANY_TAGLINE` | Short tagline shown in footer |
| `COMPANY_ADDRESS` | Full address |
| `GOOGLE_MAPS_EMBED` | Google Maps iframe embed URL |
| `SOCIAL_LINKS` | Social media profile URLs |

### Swapping WhatsApp to Secondary Number

In `src/config.ts`, change the `WHATSAPP_NUMBER` export to:

```ts
export const WHATSAPP_NUMBER = "918650113744"; // secondary number
```

---

## 📝 Placeholder Content to Replace

### Testimonials (`src/components/Testimonials.tsx`)

Look for the comment:
```
/* PLACEHOLDER TESTIMONIALS — replace with real client reviews before launch. */
```

Replace the fictional names and quotes with real client reviews from Google Business or direct feedback.

### Images (`src/components/Hero.tsx`, `src/components/About.tsx`)

Look for `TODO` comments in these files. Before production deploy:

1. Download high-quality images from sources like:
   - [Unsplash - Pest Control](https://unsplash.com/s/photos/pest-control)
   - [Pexels - Pest Control](https://www.pexels.com/search/pest%20control/)
   - [Pixabay - Pest Control](https://pixabay.com/images/search/pest%20control/)
2. Place them in `src/assets/` or `public/images/`
3. Update the `src` attributes in the components

Currently, images are hotlinked from Unsplash for development convenience. Self-host all images before production for performance and reliability.

---

## 🧱 Project Structure

```
src/
├── config.ts                    # All configurable constants
├── index.css                    # Tailwind imports + custom theme
├── main.tsx                     # Entry point
├── App.tsx                      # Root component (composes all sections)
└── components/
    ├── Navbar.tsx               # Sticky header with mobile menu
    ├── Hero.tsx                 # Hero section with CTA
    ├── About.tsx                # About the company
    ├── Services.tsx             # 7 service cards grid
    ├── Pricing.tsx              # Tabbed pricing tables
    ├── WhyChooseUs.tsx          # Differentiators + stats
    ├── WorkProcess.tsx          # 4-step process timeline
    ├── Testimonials.tsx         # Testimonial carousel
    ├── FAQ.tsx                  # Accordion FAQ
    ├── Contact.tsx              # Contact form (WhatsApp integration)
    ├── Footer.tsx               # Site footer
    └── FloatingActions.tsx      # Sticky call & WhatsApp buttons
```

---

## 🎨 Design

- **Colors**: Deep charcoal (`#1a1a1a`), confident red accent (`#c62828`), warm amber accent (`#f59e0b`), teal accent (`#0d9488`)
- **Fonts**: Plus Jakarta Sans (headings) + Inter (body) — loaded from Google Fonts
- **Animations**: Scroll-reveal with Framer Motion's `whileInView`, hover micro-interactions, pulse animations on floating buttons
- **Responsive**: Mobile-first, fully responsive down to 320px

---

## 📱 WhatsApp Form Behavior

The contact form does **not** use a backend. On submit:

1. Form fields are validated client-side
2. A pre-filled WhatsApp message is constructed
3. User is redirected to `https://wa.me/<number>?text=<encoded-message>`
4. The client receives the inquiry as a regular WhatsApp message — no API keys required

---

## 🌐 Deployment

This is a fully static site. Deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag `dist/` folder or connect GitHub repo
- **Any static host**: Run `npm run build` and deploy the `dist/` folder

No `.env` file or server configuration needed.

---

## 📄 License

© 2026 Urban Pest Dial Services. All Rights Reserved.