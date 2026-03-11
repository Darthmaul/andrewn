# Portfolio Site — Design Direction

## Reference / Inspiration
**Primary reference:** [kanesherwell.com](https://kanesherwell.com/) — Senior Product Manager portfolio.

What we're drawing from Kane's site:
- Light color scheme with generous whitespace and vertical breathing room
- Section pattern: small uppercase label + large heading
- Hero with confident intro text and clear CTA
- Stats/metrics displayed prominently with large numbers
- Capabilities as a multi-column clean list
- Experience cards with expand/collapse "Read more" pattern
- Project showcase cards
- Footer with a CTA headline ("Let's make something amazing together" → "Let's connect")
- Scroll-triggered fade-in animations throughout

## What We're NOT Copying
- Kane's yellow accent color (`#FFD24C`) — too freelancer/creative; we use blue-teal for B2B enterprise tone
- Platform logos grid — Kane is a freelancer showcasing CMS platforms; doesn't apply
- Testimonials section — no testimonials sourced yet (can add later)
- Rotating hero image carousel — replaced with animated gradient + typed text effect
- Calendly booking CTA — LinkedIn is sole contact channel (privacy-first)

## Color Scheme (Light Theme)
- **Background primary:** `#ffffff` (white)
- **Background secondary:** `#f8fafc` (off-white for alternating sections)
- **Text primary:** `#0f172a` (dark navy)
- **Text secondary:** `#475569` (slate gray)
- **Accent:** `#0891b2` (teal — professional, B2B-aligned)
- **Accent hover:** `#0e7490` (darker teal)
- **Card borders:** `#e2e8f0`
- **Card backgrounds:** `#ffffff`

## Section Order
1. **Nav** — Fixed, frosted glass (`backdrop-filter`), logo + section links + LinkedIn CTA
2. **Hero** — "Hey, I'm Andrew Nolan" + typed text cycling archetypes + LinkedIn button + scroll indicator
3. **About** — Text + photo side-by-side layout + 4 animated stat counter cards below
4. **Experience** — Cards with company/title/dates visible, bullets behind expand/collapse
5. **Skills** — 4-column grouped list (Product, Technical, Security, Tools)
6. **Projects** — 4-card grid with Unsplash photo headers + hover zoom effects
7. **Footer** — CTA headline "Let's connect" + LinkedIn button + photo credits

## Tone / Language
- **Conversational, not aggressive** — speak to skills and experience, not achievements
- Avoid resume-style "drove X" / "unblocked Y" / "grew Z" power verbs
- Experience previews describe *what you worked on*, not *what you accomplished*
- Expanded bullets can include more detail, but framed as contributions not claims
- Section headings are casual: "A bit about me", "Where I've worked", "What I work with"
- Stat cards focus on scope (years, products shipped) not outcomes (revenue, unblocked)

## Images
- **About section:** Placeholder image (currently Unsplash UX/sticky notes); swap for headshot when available
- **Project cards:** Unsplash photos as card headers with hover zoom and dark gradient overlay
- **Unsplash photos used (with attribution in footer):**
  - About: Alvaro Reyes (UX planning board)
  - Karl.gg: Florian Olivo (gaming setup)
  - Avisory.io: Alvaro Reyes (planning board, reused)
  - nofrills.news: Roman Kraft (newspaper reading)
  - selfdriving101: Blake Connally (code on monitor)
- When personal photos are ready, replace the about section placeholder

## Interactive Features
- **Typed text effect** in hero: cycles through "B2B SaaS Platforms" → "Platform & Integrations" → "Security & Compliance"
- **Scroll fade-in** on all sections (Intersection Observer, staggered card reveals)
- **Animated stat counters** — numbers count up when scrolled into view
- **Expand/collapse** on experience cards — "Read more" / "Show less"
- **Active nav highlighting** — nav link highlights as user scrolls past sections
- **Project card hover** — image zoom + shadow elevation
- **Smooth scroll** for anchor navigation
- **`prefers-reduced-motion`** support — disables all animations for accessibility

## Privacy Rules
- No phone number anywhere
- No email anywhere
- No full street address — just "Chicago, IL"
- LinkedIn is the sole contact channel
- No downloadable resume hosted on the site

## Tech Stack
- Plain HTML/CSS/JS — no build step, no frameworks, no dependencies
- System font stack (no external font loading)
- Hosted on GitHub Pages
- Files: `index.html`, `styles.css`, `script.js`
