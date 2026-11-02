@AGENTS.md

# Austin Food Heads website

This repo is **Austin Food Heads** (austinfoodheads.com): the audience-facing Austin food brand (reviews, recs, the Top 100 list). It is NOT the Food Heads Inc agency site.

| | Austin Food Heads (this repo) | Food Heads Inc (separate) |
|---|---|---|
| Domain | www.austinfoodheads.com | www.foodheadsinc.com |
| GitHub | foodheadsinc/austinfoodheads-website | foodheadsinc/foodheadsinc-web |
| Vercel project | `afh` (Next.js) | `fhi` (Vite) |
| Socials | @austinfoodheads | @foodheadsinc |

- The two brands share a team but must never be conflated. Don't use Food Heads Inc socials, schema, or agency copy here, and don't describe Austin Food Heads as the agency.
- Contact email for this site is team@foodheadsinc.com.
- Canonical host is www.austinfoodheads.com (enforced in `src/proxy.ts`, plus `sitemap.ts`, `robots.ts`, `layout.tsx`).
- Every push to `main` auto-deploys to production on Vercel. There is no staging step, so confirm before pushing.
