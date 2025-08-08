# Single Page Layout Guide

The Single Page Layout is designed for landing pages, product pages, about pages, etc. It provides a clean structure with a customizable header area and centered content.

## Overview

- PageHero header with title, description, icon, and color
- Centered content for readability
- Responsive design
- Flexible configuration for header size and content width
- No sidebar by default

## Basic Usage

### 1. Minimal configuration

```markdown
---
layout: page
title: About Us
description: Learn about our team and mission
---

# Our Story

Main content goes here...
```

### 2. With PageHero customization

```markdown
---
layout: page
title: Product Intro
description: A revolutionary solution that makes work easier
heroIcon: tabler--rocket
heroColor: primary
heroSize: lg
---

# Product Features

Our product provides the following features...
```

## Frontmatter Options

| Option | Type | Default | Description |
|------|------|--------|------|
| `layout` | `string` | `'page'` | Use single page layout |
| `title` | `string` | - | Header title |
| `description` | `string` | - | Header description |
| `heroIcon` | `string` | - | Header icon |
| `heroColor` | `string` | `'info'` | Header color theme |
| `heroSize` | `string` | `'md'` | Header size |
| `maxWidth` | `string` | `'max-w-6xl'` | Max content width |

### heroColor values

| Value | Description |
|------|-------------|
| `primary` | Blue gradient |
| `info` | Light blue |
| `success` | Green |
| `warning` | Orange |
| `error` | Red |
| `sponsor` | Pink |

### heroSize values

| Value | Description |
|------|-------------|
| `sm` | Compact |
| `md` | Default |
| `lg` | Large |

### Icon options

- Iconify class
- Emoji
- Image URL
- Inline SVG

## Max Width

Using Tailwind CSS classes:

| Class | Width |
|------|-------|
| `max-w-4xl` | 896px |
| `max-w-5xl` | 1024px |
| `max-w-6xl` | 1152px (default) |
| `max-w-7xl` | 1280px |
| `max-w-full` | 100% |

By using the Single Page Layout, you can build simple and beautiful standalone pages.