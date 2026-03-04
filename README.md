# k5hitij.dev

A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

### Deployed on Vercel

k5hitijdev.vercel.app

## Live Features

- Dark-first minimal UI with theme toggle
- Responsive layout (desktop + mobile)
- Sticky navbar with animated mobile hamburger menu
- Hero, Impact metrics, Featured project, Projects, Skills, Learning, GitHub section
- Recruiter CTA + Contact form (Formspree integration)
- Markdown-based blog system with static generation
- Smooth scrolling + subtle section/card animations
- Social links (GitHub, LinkedIn, X, Email)

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- gray-matter
- remark + remark-html
- react-github-calendar
- lucide-react

---

## Project Structure

```bash
/app
  layout.tsx
  page.tsx
  globals.css
  /blog
    page.tsx
    /[slug]
      page.tsx

/components
/content/blog
/data
/lib
/public
```

---

## Blog System (Markdown)

Blog posts are stored in:

- `content/blog/*.md`

Each post needs frontmatter:

```md
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Short summary"
---

Your markdown content here...
```

Routes are generated automatically:

- `/blog`
- `/blog/[slug]`

---

## Content Customization

Update portfolio data from:

- `data/projects.ts` -> project cards
- `data/skills.ts` -> skill categories + levels
- `data/stats.ts` -> impact metrics
- `components/*` -> section text/content
- `public/*` -> profile image, featured screenshot, resume

---

## Contact Form

The contact form submits through Formspree endpoint configured in:

- `components/Contact.tsx`

---

## Author

**Kshitij Awaghad**  
Full-Stack Developer  
Systems thinker. Problem solver. Builder of scalable solutions.

- GitHub: https://github.com/KshitijAwaghad
- LinkedIn: https://www.linkedin.com/in/kshitijawaghad
- X: https://x.com/k5hitij_5
