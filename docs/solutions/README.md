# Solutions Directory

> Compound Engineering: Each solved problem makes future work easier.

## Purpose

This directory captures solved problems so future sessions can find them. When you fix something non-trivial, document it here.

## When to Document

Document when:
- Debugging took >15 minutes
- Solution wasn't obvious
- You'd want to find this later
- It affects deployment or build

## How to Add Solutions

Run `/workflows:compound` after fixing a problem. It will:
1. Ask what you solved
2. Generate a solution file
3. Place it in the appropriate category

## Categories

| Category | What Goes Here |
|----------|----------------|
| `build-issues/` | Next.js, TypeScript, Tailwind compilation |
| `deployment-issues/` | Vercel, domain, environment configs |
| `content-issues/` | Copy, SEO, schema problems |
| `design-issues/` | Styling, responsive, component issues |
| `form-issues/` | Contact form, Resend, validation |

## Solution Template

See `TEMPLATE.md` for the standard format.

## Quick Commands

```bash
# Find solutions mentioning a term
grep -r "keyword" docs/solutions/

# List all solutions
find docs/solutions -name "*.md" | grep -v README | grep -v TEMPLATE
```
