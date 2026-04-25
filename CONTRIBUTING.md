# Contributing

Thank you for wanting to improve OSINT Kit — small, consistent contributions make this list far more useful. This document explains the preferred format for adding **new tools** and the process for submitting changes.

## Where tools live

All tool entries live in [`src/content/docs/index.md`](src/content/docs/index.md). The file is rendered on the live site at https://buddhsen-tripathi.github.io/OSINT-Kit/ via Astro + Starlight, so any change you make there appears on the site after merge.

## Quick rule (required)

Add new tools using this one-line format:

```
- [Tool Name](https://example.com/) — Short description (max 10 words).
```

Example:
```
- [Spiderfoot](https://github.com/smicallef/spiderfoot) — Automated OSINT recon and data collection.
```

Place the entry under the appropriate `## Category` heading in `src/content/docs/index.md`. Keep entries alphabetized within a section when reasonable.

## Why this format?

- Keeps the list consistent and scannable.
- Reduces duplicate or unclear entries.
- Speeds up review and approval of pull requests.

## Submission template

Please include the following fields in your PR description (not in the markdown file — only in the PR body):

```
Tool Name: Spiderfoot
URL: https://github.com/smicallef/spiderfoot
Short description (≤10 words): Automated OSINT recon and data collection.
Category: OSINT Aggregator Tools
Benefits: Visual graphing, modular scans, active community
Usage notes: Self-hosted or use HX cloud; needs python deps.
License: GPL-3.0
Source / Repo: https://github.com/smicallef/spiderfoot
Submitter: github-username
```

## Content guidelines

- **Tool Name**: Official name (no emojis).
- **URL**: Use the canonical project page or repo.
- **Short description**: **Max 10 words** — concise, informative.
- **Category**: Pick one existing category in `src/content/docs/index.md` (e.g., "Domain Information", "Location Tracking", "Miscellaneous"). If you think a new category is needed, open an issue first.
- **Benefits**: 1–3 short bullets or a single sentence (in PR body).
- **Usage notes & license**: Optional but helpful (in PR body).
- **Duplicates**: Search the file before submitting. If similar, explain why this entry is different.

## Link & formatting rules

- Use standard Markdown links: `[Name](https://...) — Description.`
- Keep descriptions sentence-case (start with capital, no trailing period required).
- Do not add screenshots or large files — link to hosted resources.

## Preview locally (optional but encouraged)

Before opening a PR, you can preview the site:

```bash
npm install
npm run dev
```

Then visit http://localhost:4321/OSINT-Kit/ and confirm your entry renders correctly.

## PR checklist (before opening)

- [ ] Entry edited in `src/content/docs/index.md` (not `README.md`).
- [ ] Entry follows single-line format.
- [ ] Short description ≤ 10 words.
- [ ] Correct category section.
- [ ] URL works and is the canonical source.
- [ ] Not a duplicate (search the file).
- [ ] Added usage notes or license info in the PR body.

## Review process

- Maintainers will check format, link validity, and duplicates.
- Minor formatting fixes may be applied by maintainers.
- Substantial changes may be requested in PR comments.
- Once merged, the GitHub Actions workflow rebuilds and redeploys the site automatically.

## Proposing structural changes

If you want to change site structure (e.g., split content into multiple pages, add a table view, change theme), open an issue describing the proposal and rationale before opening a PR — these touch `astro.config.mjs` and CSS, which deserve discussion first.

Thanks — we appreciate your contribution!
