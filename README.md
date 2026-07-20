# Prosperity Adedayo — Portfolio

A production-ready developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## What's in here

```
app/                  Routes (App Router)
  layout.tsx          Root layout: fonts, metadata, theme provider
  page.tsx            Home
  about/page.tsx       About
  projects/page.tsx    Projects (server) + projects-grid.tsx (client filter)
  contact/page.tsx     Contact
  sitemap.ts, robots.ts   SEO
  loading.tsx, error.tsx, not-found.tsx
components/           All UI building blocks (Nav, Footer, Hero, ProjectCard, etc.)
lib/data.ts           ALL editable content lives here — projects, skills, bio, links
lib/utils.ts          Small className helper
public/               Images, resume, downloads, favicon
```

Almost everything you'll want to change day-to-day is in **`lib/data.ts`**. Start there.

---

## 1. Install dependencies

You need [Node.js 18.17+](https://nodejs.org).

```bash
npm install
```

## 2. Run the development server

```bash
npm run dev
```

Open http://localhost:3000. Changes hot-reload.

## 3. Set up the contact form

The contact form posts to [Web3Forms](https://web3forms.com) (free, no backend needed).

1. Get a free access key at https://web3forms.com
2. Copy `.env.example` to `.env.local`
3. Paste your key:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_real_key_here
   ```
4. Restart `npm run dev`

Never commit `.env.local` — it's already in `.gitignore`.

---

## Replacing placeholder assets

I generated placeholder images/files so the site runs without 404s. Replace these with your real files **using the exact same filenames** (or update the paths in `lib/data.ts`):

| File | Replace with |
|---|---|
| `public/images/portrait.jpg` | Your real photo (roughly 4:5 aspect ratio) |
| `public/images/og-cover.png` | A 1200×630 social-share preview image |
| `public/favicon.ico` | Your real favicon |
| `public/resume.pdf` | Your real résumé |
| `public/images/projects/*.png` | Real screenshots of each project (16:10 aspect ratio looks best) |
| `public/downloads/*.zip` | Your real downloadable project files |

## Updating personal information

Open `lib/data.ts`:

- `profile` — name, tagline, bio, email, résumé path, social links
- `stack` — the technology tags shown in the hero panel and About page
- `skillLevels` — the skill bars on the homepage
- `projects` — every project card (title, description, tech, links, image path, `featured`/`category`)
- `experience` — the About page timeline
- `certifications` — the About page credentials list
- `nav` — the navigation menu items

## Adding a new project

Add an entry to the `projects` array in `lib/data.ts`:

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  description: "One or two sentences on what it does.",
  problem: "The specific problem it solves.",
  tech: ["Next.js", "PostgreSQL"],
  image: "/images/projects/my-new-project.png",
  liveUrl: "https://example.com",       // optional
  codeUrl: "https://github.com/...",     // optional
  downloadUrl: "/downloads/my-file.zip", // optional
  downloadName: "my-file",               // optional
  featured: true,   // shows on homepage
  category: "client", // or "personal"
}
```
Drop the matching screenshot into `public/images/projects/`.

## Changing colors and theme

Edit `tailwind.config.ts` under `theme.extend.colors`:

- `ink` — the dark background/text scale
- `paper` — the light background
- `signal.teal` / `signal.amber` / `signal.coral` — accent colors used throughout

Dark mode is the default (`defaultTheme="dark"` in `app/layout.tsx`). To default to light mode, change that to `"light"`.

## Changing fonts

Fonts are loaded in `app/layout.tsx` via `next/font/google`:
- **Space Grotesk** — headings (`font-display`)
- **Inter** — body text (`font-body`)
- **JetBrains Mono** — labels/monospace accents (`font-mono`)

Swap any of them for another Google Font by changing the import and function call — no `<link>` tags needed.

## Customizing animations

Most animation happens via Framer Motion:
- `components/hero.tsx` — staggered entrance
- `components/status-panel.tsx` — the terminal-style hero panel
- `components/project-card.tsx` / `components/timeline.tsx` — scroll-triggered reveals
- `components/scroll-progress.tsx` — top progress bar

Reduced-motion is respected automatically via the CSS in `app/globals.css`.

---

## Building for production

```bash
npm run build
npm start
```

`npm run build` produces an optimized, statically-generated build (this project has no dynamic server data, so every route pre-renders).

## Testing & quality checks

```bash
npm run lint       # ESLint (Next.js core-web-vitals rules)
npm run typecheck  # TypeScript, no emit
npm run build      # Also type-checks and fails on errors
```

**Responsiveness:** resize your browser or use Chrome DevTools' device toolbar (Cmd/Ctrl+Shift+M). Breakpoints used: `sm` (640px), `lg` (1024px).

**Lighthouse:** in Chrome DevTools → Lighthouse tab → run against the production build (`npm run build && npm start`), not `npm run dev` (dev mode is unoptimized and will score lower than reality).

**Accessibility:** the same Lighthouse run includes an accessibility audit. Manually verify: tab through every page with keyboard only (focus rings are visible via the `:focus-visible` style in `globals.css`), and check color contrast if you change the palette.

**Cross-browser:** test in actual Chrome, Firefox, and Safari — CSS backdrop-blur and `clip-path` (used sparingly here) render slightly differently across engines.

---

## Deploying

### Vercel (recommended — built by the Next.js team)
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` under Project Settings → Environment Variables.
4. Deploy. Vercel auto-detects Next.js — no config needed.

### Netlify
1. Push to GitHub.
2. New site from Git on https://app.netlify.com.
3. Build command: `npm run build`. Publish directory: `.next` (Netlify's Next.js runtime handles the rest automatically once you install their Next.js plugin, which it will prompt for).
4. Add the env var in Site settings → Environment variables.

### Cloudflare Pages
1. Push to GitHub.
2. Create a Pages project, connect the repo.
3. Framework preset: Next.js. Build command: `npx @cloudflare/next-on-pages`. Output directory: `.vercel/output/static`.
4. Add the env var in Settings → Environment variables.
   (Cloudflare's Next.js adapter has some edge-runtime constraints — if you hit issues, their docs at https://developers.cloudflare.com/pages/framework-guides/nextjs/ walk through current requirements.)

### VPS (self-hosted)
1. On the server: `git clone`, then `npm install && npm run build`.
2. Run with a process manager: `npm install -g pm2 && pm2 start npm --name portfolio -- start`.
3. Put Nginx or Caddy in front as a reverse proxy to port 3000, with HTTPS via Let's Encrypt/Certbot.
4. `pm2 save && pm2 startup` so it survives reboots.

---

## Notes on this rebuild

Compared to the original Bootstrap/vanilla-JS version:
- Removed the typewriter preloader (it delayed content for no benefit — the hero animates in immediately instead).
- Fixed the About page's skill bars, where the label percentage and the rendered bar width disagreed.
- Moved the Web3Forms access key out of hardcoded HTML into an environment variable.
- Everything is now data-driven from `lib/data.ts`, so future edits don't require touching JSX.
