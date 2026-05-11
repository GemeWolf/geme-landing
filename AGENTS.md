# AGENTS.md — Geme Landing

Project-specific rules for AI agents working on this Astro + Tailwind v4 portfolio.

## Stack

- **Framework:** Astro 6.x with Cloudflare adapter (`@astrojs/cloudflare`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **i18n:** Custom namespace-based system (`src/i18n/utils.ts`)
- **Build:** Static + serverless functions (`src/pages/api/`)

## Coding Standards

### Astro / TypeScript
- Use `.astro` for pages and components; `.ts` for utilities and API routes.
- Prefer `const` and explicit types. Avoid `any`.
- API routes must export `prerender = false` when server-side.
- Validate all external inputs (forms, query params, JSON bodies).

### i18n
- Translations live in `src/i18n/{en,es}/` as JSON files.
- **Do NOT use flat spread merges.** Use the namespace-based `dictionaries` structure in `src/i18n/utils.ts`.
- Keys follow the pattern `{namespace}.{key}` (e.g., `nav.stack`, `contact.title`).
- When adding new copy, add it to **both** `en/` and `es/` JSON files.

### Styling (Tailwind v4)
- Use utility classes. Avoid arbitrary values unless necessary.
- Theme tokens (`bg-surface`, `text-primary`, etc.) are defined in `src/styles/global.css`.
- Responsive: mobile-first (`md:` breakpoint for desktop).

### Security
- Never hardcode secrets (webhook URLs, API keys) in client-side code.
- Server-side endpoints (`src/pages/api/`) must validate and sanitize input.
- Reject deprecated/untrusted domains (e.g., `discordapp.com`) before proxying requests.

### Git & Deployment
- Branch flow: `feature/*` → `dev` → `main` (auto-promotion via CI).
- Only PRs from `dev` are allowed into `main`.
- Commits should follow conventional commits (`feat:`, `fix:`, `refactor:`, etc.).
- Ensure `npm run build` passes before pushing.

## Review Checklist

- [ ] Build passes (`npm run build`)
- [ ] i18n keys added to both EN and ES
- [ ] No secrets in client bundles
- [ ] Server endpoints validate inputs
- [ ] No flat spread on translation dictionaries
