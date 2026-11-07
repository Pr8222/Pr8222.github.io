# Parsa Rohani — Portfolio

A bilingual (English / Persian) full-stack developer portfolio built with React, TypeScript, Vite, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create or open the repository used by `https://pr8222.github.io/`.
2. Replace the old site files with the contents of this project.
3. In `vite.config.ts`, keep `base: '/'` because this is a user-site repository (`username.github.io`).
4. Push the files to the `main` branch.
5. In GitHub: Settings → Pages → Build and deployment → GitHub Actions (or deploy the `dist` folder with the included `npm run deploy` script after configuring `gh-pages`).

For command-line deployment with the included script:

```bash
npm install
npm run build
npm run deploy
```

## Update personal content

Most visible content is in `src/App.tsx`:
- `copy` contains English and Persian UI copy.
- `projects` contains project titles, descriptions, links, and technology tags.
- `skillGroups` contains the skill categories.

## Before publishing

Review all claims and links, especially the job title, Radin Tlm experience description, and project descriptions. Add a current profile photo if desired. A PDF resume can be placed in `public/` and linked from the hero once supplied.
