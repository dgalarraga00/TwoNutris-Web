# Code Review Rules

## TypeScript
- Use const/let, never var
- No any types
- Prefer interfaces over types

## React
- Use functional components with named exports
- Use "use client" only when necessary
- Keep components focused and single-purpose

## Next.js
- Use Next.js Image component for all images
- Use next/font for font loading
- Keep pages in app/ directory using App Router

## CSS
- Use Tailwind utility classes
- Use inline styles only for dynamic/brand colors
- Brand colors: #144400 (green), #FFB000 (amber), #FFFBE4 (cream)

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
