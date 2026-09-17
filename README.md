# deepakj.dev

Independent Shopify developer portfolio — Deepak Jangra. Built with Astro 5
(static output) and deployed to Cloudflare Pages.

## Commands

| Command        | Action                          |
| -------------- | ------------------------------- |
| `npm install`  | Install dependencies            |
| `npm run dev`  | Local dev at `localhost:4321`   |
| `npm run build`| Production build to `./dist/`  |
| `npm run preview` | Preview production build     |

## Env

Copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_KEY` (Web3Forms
access key). Without it, contact forms show a disabled state with a
`mailto:howdy@deepakj.dev` fallback instead of failing silently.

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Env: `PUBLIC_WEB3FORMS_KEY`
- Redirects: `public/_redirects` (kept in sync with `netlify.toml` for rollback)

## Content

- `src/content/work/*.md` — case studies (validated, `result_summary` + `featured_image` required)
- `src/content/blog/*.md` — field notes
