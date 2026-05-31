# Code Review Rules

## TypeScript
- Use const/let, never var
- No any types
- Prefer interfaces over types

## React
- Use functional components with named exports
- Exception: `page.tsx` and `layout.tsx` must use `export default` (Next.js App Router requirement)
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
