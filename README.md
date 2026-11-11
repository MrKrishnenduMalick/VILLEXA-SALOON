# LUXE Hair Studio — Premium International Salon Website

A luxury, ultra-responsive hair studio web application built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and custom **CSS 3D transforms**.

Designed specifically for international markets (**USA, UK, Canada, Australia**), positioned as a **$499+ turnkey website package** for independent luxury salons, boutique color studios, and high-end stylists.

---

## 🌟 Visual Identity & Design System

- **Color Palette:**
  - Background: `#090909` (Obsidian Black)
  - Secondary: `#151515` / `#121212` (Smoked Charcoal)
  - Metallic Gold Accent: `#D4AF63`
  - Champagne Highlight: `#F3D99B`
  - Deep Bronze: `#A88438`
  - Ivory Typography: `#F5F0E6`
- **Glassmorphism:** Layered frosted glass panels (`backdrop-filter: blur(16px)`), micro-gold borders, and atmospheric ambient glows.
- **Typography:** Classical serif headings paired with clean modern sans-serif body typography.

---

## 🧭 Four Core Pages

1. **Home (`/`):**
   - **Cinematic Hero:** Luxury salon interior with warm golden ambient lighting, reflective marble floor simulation, and brand storytelling.
   - **Signature 3D Curved Carousel (Centerpiece):** A genuine 3D perspective carousel with active card forward positioning (`translateZ`), inward-rotated side cards (`rotateY`), realistic floor reflections, circular glowing gold stage platform, previous/next controls, keyboard navigation, touch/swipe gestures, and direct deep-linking to service categories.
   - **Glass Service Highlights:** Four service cards (*Cut & Style, Colour Services, Treatments, Styling & Finish*).
   - **Video Showcase Modal:** Behind-the-scenes luxury salon reel with controls.
   - **Appointment CTA Banner:** Direct booking callout with salon concierge telephone link.

2. **About & Stylists (`/about`):**
   - **Hero:** "The Art of Hair, With a Personal Touch" with Chelsea flagship interior showcase and video story preview.
   - **Salon Highlights:** Key performance metrics (10+ Years Experience, 2K+ Happy Clients, 4.9★ Client Rating).
   - **Our Story & Pillars:** Bespoke consultations, hair health integrity, and master craftsmanship.
   - **Meet Our Stylists:** 4 luxury stylist profile cards with portraits, job titles (*Emma Carter, James Reed, Sophie Moore, Ava Bennett*), short biographies, social links, and direct chair booking triggers.

3. **Services & Gallery (`/services`):**
   - **Hero:** "Premium Care for Every Hair Type" with flowing luxury hair imagery.
   - **Service Collection:** 5 complete service cards (*Cut & Style, Hair Colour, Treatments, Bridal Hair, Men's Grooming*), plus a VIP Bridal Suite showcase. Each includes transparent starting prices, durations, feature lists, and booking actions.
   - **Transformation Gallery:** Responsive filter tabs (*All, Hair Colour, Styling, Bridal, Men's, Treatments*) with hover zoom and a full **Lightbox modal** with deep-linking to booking.

4. **Contact & Booking (`/contact`):**
   - **Left Column:** Direct phone (click-to-call), direct email (click-to-email), Chelsea salon address, weekly opening hours, interactive map preview with external Google Maps link, and direct WhatsApp chat integration.
   - **Right Column (Luxury Booking Form):** Client-side validation for full name, phone number format, email format, service selector, date picker, time slot picker, and additional hair notes. Transparent enquiry submission with **Fast-Track WhatsApp confirmation**.

---

## 🛠️ Single-File Salon Configuration

All business information, prices, phone numbers, addresses, stylist rosters, and service menus are centralized in:

📂 `src/config/salon.ts`

To customize this website for any salon in the US, UK, Canada, or Australia, simply modify this single file:
- Change `currencySymbol` (`$`, `£`, `A$`, `C$`)
- Update `phone` and `email`
- Change `address` and `googleMapsUrl`
- Adjust `stylists` profiles, photos, and bios
- Update `services` starting prices and duration

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm start
```

---

## 📦 Project Characteristics

- **Zero Database / Zero Backend Required:** Runs client-side with full interactive features.
- **Source Project Size:** ~1.82 MB (well below the 10 MB budget).
- **Fully Responsive:** Tested across mobile screens, tablets, laptops, and ultra-wide desktops.

