# Document Configuration

Frontmatter options for document pages.

## Common Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | Auto-extracted | Page title |
| `description` | `string` | - | Page description |
| `sidebar` | `boolean` | `true` | Show sidebar |
| `outline` | `boolean | number | [number, number] | 'deep'` | `2` | Outline depth |
| `prev` | `boolean | string | NavLink` | `true` | Previous page link |
| `next` | `boolean | string | NavLink` | `true` | Next page link |

## Example

```yaml
---
title: "Quick Start Guide"
description: "Learn how to install and configure the Dux VitePress theme quickly"

# Navigation
sidebar: true
outline: [2, 3]

# Page links
prev:
  text: "Introduction"
  link: "/guide/"
next:
  text: "Theme Configuration"
  link: "/guide/theme-config"
---

# Quick Start

Content...
```