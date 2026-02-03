# Directory Structure

Understand the typical project structure for the Dux VitePress theme.

## Basic Structure

```
my-docs/
├── .vitepress/
│   ├── config.mts          # VitePress config
│   ├── theme/              # Theme setup
│   │   └── index.ts        # Theme entry
│   └── cache/              # Cache (generated)
├── public/                 # Static assets
│   ├── logo.svg            # Site logo
│   └── images/             # Images
├── guide/                  # Guides
│   ├── index.md            # Guide index
│   └── ...                 # Other guide pages
├── reference/              # Reference docs
│   ├── index.md            # Reference index
│   └── ...                 # Other reference pages
├── index.md                # Home page
├── about.md                # About page
├── sponsor.md              # Sponsor page
├── changelog.md            # Changelog
└── package.json            # Project config
```

## Config Files

### `.vitepress/config.mts`

VitePress main config for site info, theme config, and plugins.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  // Site config
  title: 'Site Title',
  description: 'Site description',
  lang: 'en-US',
  
  // Theme config
  themeConfig: {
    // Navbar, sidebar, social links, etc.
  }
})
```

### `.vitepress/theme/index.ts`

Theme entry file:

```typescript
import DuxTheme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'

export default DuxTheme
```

## Content Directories

- `guide/` — Getting started guides
- `reference/` — API references
- `components/` — Component docs
- `examples/` — Examples

## Multi-language Structure

```
docs/
├── zh-CN/
│   ├── guide/
│   └── reference/
├── en-US/
│   ├── guide/
│   └── reference/
└── index.md            # Language jump page
```

## Static Assets

### `public` directory

All files in `public` are copied to the root of the output directory.

```
public/
├── logo.svg            # /logo.svg
├── favicon.ico         # /favicon.ico
└── images/
    └── hero.png        # /images/hero.png
```

### Referencing in Markdown

```markdown
![Logo](/logo.svg)
![Hero](/images/hero.png)

![Example](./images/example.png)
```

## Special Pages

### Home (index.md)

```markdown
---
layout: home
hero:
  name: Site Name
  text: Title
  tagline: Subtitle
---
```

### Single Page

```markdown
---
layout: page
title: About Us
---
```

### Sponsor Page

```markdown
---
layout: sponsor
title: Support Us
---
```

### Changelog

```markdown
---
layout: changelog
title: Changelog
---
```

## Build Output

```
.vitepress/dist/
├── index.html
├── guide/
├── reference/
├── assets/
│   ├── chunks/
│   └── styles/
└── ...
```

## Best Practices

1. Clear structure by feature
2. Consistent file naming
3. Put assets in `public`
4. Split complex config into separate files
5. Ignore `.vitepress/cache` and `.vitepress/dist` in VCS
