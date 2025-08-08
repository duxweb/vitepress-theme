# Quick Start

This guide helps you get started with the Dux VitePress theme quickly.

## Install

### Create a new project

```bash
# Using npm
npm create vitepress@latest my-docs

# Using pnpm
pnpm create vitepress@latest my-docs

# Using yarn
yarn create vitepress my-docs
```

### Install the theme

Enter the project directory and install the Dux theme:

```bash
cd my-docs

# Using npm
npm install @duxweb/vitepress-theme

# Using pnpm
pnpm add @duxweb/vitepress-theme

# Using yarn
yarn add @duxweb/vitepress-theme
```

## Configure the theme

Configure the theme in `.vitepress/theme/index.ts`:

```typescript
// Default theme
import Theme from '@duxweb/vitepress-theme'
// Import theme styles
import '@duxweb/vitepress-theme/dist/index.css'

export default Theme
```

## Create the homepage

Create `index.md` at the project root:

```markdown
---
layout: home

hero:
  name: My Documentation Site
  text: Modern documentation powered by VitePress
  tagline: Build an elegant docs site with Dux Theme
  actions:
    - theme: brand
      text: Get Started
      link: /guide/quick-start
    - theme: alt
      text: View on GitHub
      link: https://github.com

features:
  - icon: ⚡
    title: Lightning Fast
    details: Built on Vite for a blazing-fast dev experience
  - icon: 📝
    title: Markdown First
    details: Focus on content with Markdown
  - icon: 🎨
    title: Theme Customization
    details: Rich options to craft a unique style
---
```

## Start the dev server

```bash
# Using npm
npm run docs:dev

# Using pnpm
pnpm docs:dev

# Using yarn
yarn docs:dev
```

Now visit `http://localhost:5173` to view your documentation site!

## Next steps

- [Understand the directory structure](./structure)
- [Configure the home layout](./home)
- [Learn about multi-language configuration](./i18n)