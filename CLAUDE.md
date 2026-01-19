# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with SvelteKit 2, using mdsvex for Markdown content with Svelte components, Tailwind CSS v4 for styling, and deployed to Netlify. The blog supports writing posts in `.md`, `.svx`, or `.svelte` formats with syntax highlighting via Shiki.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Type checking with watch mode
npm run check:watch

# Lint (Prettier + ESLint)
npm run lint

# Format code
npm run format
```

## Architecture

### Content System

The blog uses a file-based content system where posts are stored in `src/routes/writing/`:

- **Post formats**: `.md`, `.svx`, or `.svelte` files
- **Metadata**: Posts use frontmatter with `title` and `date` fields
- **Dynamic routing**: Individual posts are served via `src/routes/writing/[slug]/+page.svelte`
- **Post discovery**: `fetchMarkdownPosts()` in `src/lib/utils/index.js` uses Vite's `import.meta.glob()` to discover all posts at build time

The content loading flow:
1. `fetchMarkdownPosts()` scans `/src/routes/writing/*.{md,svx,svelte}` using glob imports
2. `/api/posts` endpoint returns sorted posts by date (most recent first)
3. Writing index page fetches from `/api/posts` and displays the list
4. Individual post pages use `import.meta.glob()` to load the specific post by slug

### MDSvex Configuration

Located in `svelte.config.js`:
- Accepts `.svx` and `.md` extensions (configured in both `mdsvexOptions.extensions` and `config.extensions`)
- Syntax highlighting with Shiki using `github-dark` theme
- Supported languages: JavaScript, TypeScript, CSS, HTML, Svelte, R, Python, SQL
- Posts can mix Markdown with Svelte components

### Build & Deployment

- **Adapter**: Netlify adapter configured with `edge: false` and `split: false`
- **Prerendering**: Enabled with `entries: ['*']` to prerender all discoverable routes
- **Build output**: Static files go to `build/` directory (specified in `netlify.toml`)

### Styling

- Tailwind CSS v4 integrated via Vite plugin (`@tailwindcss/vite`)
- Global styles in `src/routes/app.css` and `src/routes/layout.css`
- Layout wrapper in `src/routes/+layout.svelte` includes Header and Footer components

### TypeScript

- Strict mode enabled
- Uses SvelteKit's generated tsconfig (extends `.svelte-kit/tsconfig.json`)
- `$lib` alias points to `src/lib/`

## Key Files

- `src/lib/utils/index.js` - Post fetching utilities
- `src/routes/api/posts/+server.js` - API endpoint for sorted posts
- `src/routes/writing/[slug]/+page.js` - Dynamic post loader
- `svelte.config.js` - MDSvex and adapter configuration
- `vite.config.ts` - Build configuration with Tailwind plugin

## Adding New Posts

Create a new file in `src/routes/writing/` with `.md`, `.svx`, or `.svelte` extension. Include frontmatter:

```md
---
title: Your Post Title
date: 'YYYY-MM-DD'
---

Your content here...
```

The post will automatically appear in the writing index, sorted by date.
