# Kshitij Awaghad Portfolio

A minimal, modern personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:3000.

## Add a new blog post

1. Create a new `.md` file in `content/blog/`.
2. Add frontmatter:

```md
---
title: "Your Post Title"
date: "YYYY-MM-DD"
description: "Short summary"
---

Post content here.
```

3. The post appears automatically on `/blog`.

## Customize content

- Update projects: `data/projects.ts`
- Update skills: `data/skills.ts`
- Update metrics: `data/stats.ts`
- Update hero/social/contact text in `components/*`

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects Next.js and deploys.
