# Document Layout Guide

The Document Layout is a core layout in Dux VitePress Theme, designed for technical and API documentation. It provides a complete navigation system, including a sidebar, right-side outline, and document footer.

## Overview

Key features:
- Intelligent sidebar with multi-level navigation
- Right-side outline generated from headings
- Responsive design for desktop and mobile
- Document footer with edit link and prev/next navigation
- Prose typography for excellent readability

## Basic Usage

### 1. Frontmatter

```markdown
---
layout: doc
title: Document Title
description: Document description
---

# Content

Main content here...
```

### 2. VitePress Configuration

```typescript
// .vitepress/config.ts
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  themeConfig: {
    // Sidebar configuration
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        }
      ]
    },
    
    // Edit link configuration
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: 'Edit this page'
    },
    
    // Last Updated
    lastUpdatedText: 'Last updated'
  }
})
```

## Frontmatter Options

| Option | Type | Default | Description |
|------|------|--------|------|
| `layout` | `string` | `'doc'` | Use document layout |
| `title` | `string` | - | Page title |
| `description` | `string` | - | Page description |
| `sidebar` | `boolean` | `true` | Show sidebar |
| `aside` | `boolean` | `true` | Show right-side outline |
| `outline` | `number | [number, number] | 'deep'` | `[2, 3]` | Heading levels shown in outline |
| `editLink` | `boolean` | `true` | Show edit link |
| `lastUpdated` | `boolean` | `true` | Show last updated time |
| `prev` | `string | { text: string, link: string }` | - | Custom previous page |
| `next` | `string | { text: string, link: string }` | - | Custom next page |

### Sidebar Examples

#### Single Sidebar

```typescript
sidebar: [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/' },
  {
    text: 'Advanced',
    items: [
      { text: 'Components', link: '/advanced/components' },
      { text: 'Plugins', link: '/advanced/plugins' }
    ]
  }
]
```

#### Multiple Paths

```typescript
sidebar: {
  '/guide/': [
    {
      text: 'Basics',
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Installation', link: '/guide/installation' }
      ]
    }
  ],
  '/api/': [
    {
      text: 'API Reference',
      items: [
        { text: 'Overview', link: '/api/' },
        { text: 'Config', link: '/api/config' }
      ]
    }
  ]
}
```

#### Collapsible Groups

```typescript
sidebar: [
  {
    text: 'Basics',
    collapsed: true, // collapsed by default
    items: [
      { text: 'Installation', link: '/basic/installation' },
      { text: 'Configuration', link: '/basic/configuration' }
    ]
  }
]
```

### Outline Configuration

```markdown
---
# Only show h2 and h3
outline: [2, 3]

# Show deep outline
outline: deep

# Show h2 to h4
outline: [2, 4]

# Disable right-side outline
aside: false
---
```

### Edit Link Configuration

```typescript
// .vitepress/config.ts
themeConfig: {
  editLink: {
    pattern: 'https://github.com/username/repo/edit/main/docs/:path',
    text: 'Edit this page on GitHub'
  },
  lastUpdatedText: 'Last updated'
}
```

Prev/next navigation is generated based on the sidebar automatically.
