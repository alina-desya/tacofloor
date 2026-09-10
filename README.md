# TacoFloor🌮

A browser-based floor management app for restaurant service — built as a portfolio project to demonstrate API design, product thinking, and end-to-end technical documentation.

**[Live demo →](https://alina-desya.github.io/tacofloor)**

---

## What it does

TacoFloor gives a restaurant team a real-time view of the floor during service. Waiters and managers work in the same app but see different controls — managers can assign waiters, approve payments, and review shift logs; waiters open tables, take orders, and register payments.

Key flows:
- Open a table and set guest count
- Add and update orders from an inline menu
- Close the check and accept payment (cash, card, or split bill)
- Manager approval path for closed tables
- Shift stats: open tables, covers, revenue, awaiting payment
- Waiter session log and menu order log

---

## Technical details

| | |
|---|---|
| **Stack** | Vanilla JS, HTML5, CSS custom properties — no framework, no build step |
| **Storage** | In-memory (session state); designed to connect to an external API |
| **Roles** | Manager / Waiter — runtime-switchable, no server auth required for the demo |
| **Deployment** | GitHub Pages (single HTML file) |

---

## Documentation

The `/docs` folder contains production-quality user guides written for two distinct audiences:

- **[Waiter Guide](docs/waiter-guide.md)** — step-by-step task flows for floor staff
- **[Manager Guide](docs/manager-guide.md)** — shift oversight, approval flows, and end-of-shift checklist

Both guides are structured with frontmatter for doc-site integration (Astro, Docusaurus, or similar), include callout boxes, tables, and troubleshooting sections, and are written to the actual app — not a fictional spec.

> The docs here are written by **Alina Desiatnikova**, Senior Technical Writer. They reflect the same documentation standards used in production API and developer docs work.

---

## What this demonstrates

- **Product thinking** — role-based UX, state machine for table status, split-bill edge cases
- **API-ready architecture** — app state is self-contained but structured for a REST or WebSocket backend (see the note in Manager Guide → End of shift)
- **End-to-end documentation** — two complete user guides covering real user flows, written to the live app
- **Frontend craft** — custom design system, animated status indicators, responsive modal UX — no libraries

---

## Connecting to an API

TacoFloor's state is currently in-memory. To persist data across sessions, replace the in-memory `tables` and `revenue` state with API calls to a backend. The Manager Guide references the Tacos API for integration details — see developer docs (link to be added).

---

## Author

**Alina Desiatnikova** — Senior Technical Writer & Knowledge Architect  
Independent consultant · Mexico City  
[Portfolio](https://alina-desya.github.io) · [LinkedIn](#) · [Knowledge Gap Newsletter](#)
