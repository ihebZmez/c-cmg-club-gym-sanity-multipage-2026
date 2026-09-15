# 08 — Deployment

## Frontend — Vercel

1. Push repo to GitHub
2. Import project on vercel.com
3. Environment variables:
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET=production`
4. Deploy → get URL like `https://cmg-club-sports.vercel.app`
5. Add URL to **Sanity CORS Origins** (allow credentials)

## Studio — Sanity Hosting

```bash
cd cmg-club-sports
npx sanity deploy
```

Result: https://cmg-club-sports.sanity.studio

Client Access
sanity.io/manage → your project → Members

Invite member → client email

Role: Editor

Client can now log in and edit all content.

Commands
bash
npm run dev # Local dev (frontend)
npm run studio # Local dev (Studio)
npm run build # Production build
npx sanity deploy # Deploy Studio
Pre-launch Checklist
□ EmailJS credentials set in ReservationForm
□ Production content seeded in Sanity
□ CORS origins include prod URL
□ Client invited as Editor
□ SEO meta verified per page
□ Mobile QA on 375 / 390 / 768 px
□ WhatsApp number correct
text

---

## 📄 `ressources/09-roadmap.md`

```markdown
# 09 — Roadmap

## Done

- [x] React + Vite + Tailwind setup
- [x] GSAP animations & page transitions
- [x] Sanity schemas & Studio
- [x] Frontend hooks (news, pricing, activities, coaches, schedule, testimonials, promotions, transformations, corporate, shop, personal training, site settings)
- [x] Responsive layout
- [x] i18n structure (FR / EN / AR ready)
- [x] WhatsApp integration
- [x] SEO foundation (meta, sitemap, robots, JSON-LD)

## Before Launch

- [ ] Configure EmailJS
- [ ] Seed production content in Sanity
- [ ] Google Business Profile setup (Mourouj)
- [ ] Deploy frontend on Vercel
- [ ] Deploy Studio on sanity.studio
- [ ] Invite client as Editor
- [ ] Mobile QA pass
- [ ] Analytics (Google Analytics 4 / Plausible)

## After Launch (optional)

- [ ] Arabic activation
- [ ] Real member photos for Transformations
- [ ] Google Reviews integration
- [ ] Instagram feed embed
- [ ] Paid ads landing page variant

## Timeline

- **Launch-ready**: 2–3 days after content is provided
```
