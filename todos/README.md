# Todos Directory

Task tracking for mikeyoung-ai using compound engineering patterns.

## Naming Convention

```
{NNN}-{status}-{priority}-{description}.md
```

Examples:
- `001-pending-p1-add-real-case-study-metrics.md`
- `002-completed-p2-fix-mobile-navigation.md`
- `003-deferred-p3-add-dark-mode.md`

## Status Values

| Status | Meaning |
|--------|---------|
| `pending` | Not started |
| `in-progress` | Currently working |
| `completed` | Done |
| `deferred` | Postponed with reason |

## Priority Levels

| Priority | Meaning |
|----------|---------|
| `p0` | Critical - blocks launch |
| `p1` | High - needed for credibility |
| `p2` | Medium - nice to have |
| `p3` | Low - future enhancement |

## Todo File Template

```markdown
---
status: pending
priority: p1
tags: [content, case-study]
created: YYYY-MM-DD
---

# P1: [Task Title]

## Problem
[What needs to be done and why]

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Notes
[Any relevant context]

## Work Log
| Date | Action | Notes |
|------|--------|-------|
```

## Quick Commands

```bash
# List pending todos
ls todos/*-pending-*.md

# List by priority
ls todos/*-p1-*.md
```

## Batch Processing

Use `/triage` to categorize findings, then `/resolve_todo_parallel` to process in batch.
