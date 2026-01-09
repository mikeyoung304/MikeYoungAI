# mikeyoung.ai

Personal credibility site for enterprise buyers at mikeyoung.ai.

**Port:** 3003 | **Deployment:** Vercel | **Domain:** mikeyoung.ai

---

## Quick Start

```bash
npm run dev        # Start on http://localhost:3003
npm run build      # Production build
npm run typecheck  # TypeScript check
```

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CVA |
| Email | Resend |
| Fonts | Geist Sans/Mono |

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/       # Contact form API (Resend)
│   ├── layout.tsx         # Root layout + fonts + meta
│   ├── page.tsx           # Homepage (single-page scroll)
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # SEO robots
├── components/
│   ├── ui/                # Button, Card, Input, Select, Textarea
│   ├── sections/          # Hero, ProofBar, Services, Process, Work, About, Thinking, Contact
│   ├── navigation.tsx
│   ├── footer.tsx
│   └── json-ld.tsx        # Schema.org (Person, Org, CaseStudy)
└── lib/
    ├── content.ts         # ALL SITE CONTENT - single source of truth
    └── utils.ts           # cn() helper
```

---

## Content Management

**Single source of truth:** `src/lib/content.ts`

All copy, case studies, testimonials, and navigation live here. Components import and render from this file. To update content, edit `content.ts` only.

---

## Environment Variables

```bash
RESEND_API_KEY=re_xxx      # From resend.com
CONTACT_EMAIL=hello@...    # Form submissions destination
```

---

## Design System

| Element | Value |
|---------|-------|
| Mode | Light only (enterprise credibility) |
| Accent | Blue (#3B82F6) |
| Font | Geist Sans |
| Approach | Typography-forward, generous whitespace |

---

## Compound Engineering

### The Learning Loop

Every non-trivial fix **MUST** compound:
1. Fix the problem
2. Run `/workflows:compound` immediately
3. Solution saved to `docs/solutions/{category}/`
4. Future sessions find it via search

**Signs you should compound:**
- Debugging took >15 minutes
- Solution wasn't obvious
- You'd want to find this later
- It affects build or deployment

### Solution Categories

| Category | What Goes Here |
|----------|----------------|
| `build-issues/` | Next.js, TypeScript, Tailwind compilation |
| `deployment-issues/` | Vercel, domain, environment configs |
| `content-issues/` | Copy, SEO, schema problems |
| `design-issues/` | Styling, responsive, component issues |
| `form-issues/` | Contact form, Resend, validation |

### Review Triggers

| After Writing... | Invoke |
|------------------|--------|
| TypeScript/React components | `kieran-typescript-reviewer` |
| Security-related (forms, API) | `security-sentinel` |
| Any significant change | `code-simplicity-reviewer` |

### Quick Commands

| Need | Command |
|------|---------|
| Plan content/feature | `/workflows:plan` |
| Execute systematically | `/workflows:work` |
| Code review | `/workflows:review` |
| Document a fix | `/workflows:compound` |

---

## TODO Items

Search `TODO:` in codebase for items needing attention:

| Priority | Item |
|----------|------|
| High | Real metrics for case studies |
| High | Testimonial content |
| Medium | Essay content (thinking section) |
| Medium | Social profile URLs |
| Low | Client logos |
| Low | Work screenshots |

---

## Common Tasks

### Update site copy
Edit `src/lib/content.ts` → changes reflect immediately

### Add a case study
1. Add entry to `work.caseStudies` array in `content.ts`
2. Add screenshot to `public/work/`
3. Update image path in case study object

### Change proof bar variant
In `content.ts`, change `proofBar.variant` to `'testimonial'`, `'metrics'`, or `'logos'`

### Test contact form locally
1. Set `RESEND_API_KEY` in `.env.local`
2. Form submissions go to `CONTACT_EMAIL`
3. Check Resend dashboard for delivery

---

## Prevention Patterns

*(Add links here as solutions are documented)*

- Build issues: `docs/solutions/build-issues/`
- Deployment issues: `docs/solutions/deployment-issues/`

---

## Related Files

- **Port allocation:** `~/CODING/PORTS.md`
- **Site plan:** `~/CODING/mikeyoung-ai-credibility-site-plan.md`
- **Global config:** `~/.claude/CLAUDE.md`
