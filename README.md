# 404 Animation Library

A library of ready-made 404 page animations built with pure CSS — no JavaScript, no dependencies. Browse the grid, copy the self-contained CSS for any animation, or grab a prompt to have a coding agent recreate it from scratch.

Live at [404.colorion.co](https://404.colorion.co), part of the [Colorion](https://colorion.co) tools network.

## Features

- **39 animations** covering a wide range of styles: retro (CRT static, split-flap boards, vinyl records), physical objects (vending machines, mailboxes, safes), UI patterns (skeleton loaders, glassmorphism, neumorphism), and more.
- **Pure CSS** — every animation is markup + scoped CSS only, no JavaScript and no images.
- **Copy CSS or Prompt** — click any cell to open a dialog with the raw, self-contained snippet, or a prompt describing the animation for a coding agent to regenerate it.
- **Accessible** — every animation respects `prefers-reduced-motion`, falling back to a static frozen state.

## Tech stack

- [Astro](https://astro.build) (static site, no client framework)
- Vanilla CSS + a small amount of vanilla TypeScript for the sidebar and copy dialog

## Project structure

```
src/
  animations/       Self-contained HTML+CSS snippet per animation (<type>.html)
  data/animations.ts Catalogue: name, type, and recreation prompt for each animation
  layouts/          Shared page layout
  pages/index.astro Home page: renders the grid and copy dialog
  styles/           Global styles
```

Each entry in [`src/data/animations.ts`](src/data/animations.ts) points to a matching snippet in `src/animations/`, which is both rendered live in its grid cell and offered verbatim in the copy dialog.

## Adding a new animation

1. Create `src/animations/<type>.html` with a single root element, a scoped class prefix, CSS custom properties for colors, no JavaScript, no images, and a `prefers-reduced-motion` fallback.
2. Add an entry to the `AnimationType` union and `animations` array in `src/data/animations.ts`, including a recreation prompt.
3. Import and register the snippet in `src/pages/index.astro` (add the `?raw` import and the `snippets` map entry).

## Development

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # build to dist/
pnpm preview  # preview the production build
```

## License

MIT
