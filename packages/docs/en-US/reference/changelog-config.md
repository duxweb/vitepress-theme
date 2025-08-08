# Changelog Page Configuration API

The changelog layout is designed to present version history with a clear timeline and categorized changes.

## Page Basics

### layout

- Type: `string`
- Value: `'changelog'`
- Required: Yes

```yaml
layout: changelog
```

### title

- Type: `string`
- Default: `undefined`

```yaml
title: "Changelog"
```

### description

- Type: `string`
- Default: `undefined`

```yaml
description: "View all version updates and improvements of Dux VitePress Theme"
```

## Page Features

- Fixed page header using PageHero
- Default news icon (`icon-[tabler--news]`)
- `primary` header color
- Center-aligned header content
- Medium header size

## Markdown Content Structure

### Version Heading

Use level-2 headings `##` for versions:

```markdown
## v1.2.0 (2024-01-20)

### ✨ Added
- New home layout components
- Custom color themes

### 🐛 Fixed
- Display issues in dark mode
- Mobile responsive issues

### 💫 Improved
- Page load performance
- Search experience
```

### Change Types

Recommended categories:

- ✨ Added
- 🐛 Fixed
- 💫 Improved
- 💥 Breaking Changes
- 📖 Docs
- 🔧 Configuration
- 🎨 Styles
- ⚡ Performance

## Full Example

```yaml
---
layout: changelog
title: "Changelog"
description: "Records of all versions and improvements of Dux VitePress Theme"

# SEO
head:
  - - meta
    - name: keywords
      content: "changelog,updates,releases,dux,vitepress"
  - - meta
    - property: "og:title"
      content: "Dux VitePress Theme - Changelog"

# Others
titleTemplate: ":title | Dux VitePress Theme"
sidebar: false
aside: true
footer: true
---

# Changelog

## v1.3.0 (2024-01-25)

### ✨ Added

- 🎉 New sponsor page layout supporting multiple payment methods
- 📱 Improved mobile navigation with gestures
- 🔍 Integrated local search with Chinese segmentation
- 🌐 Enhanced i18n, added Traditional Chinese

### 🐛 Fixed

- Code block rendering in dark mode
- Hero layout on small screens
- Sidebar collapsed-state memory
- Occasional image loading failures

### 💫 Improved

- Page transition animations
- Code highlight color scheme
- Home load performance (−50% load time)
- Search result ranking

### 🔧 Configuration

- Adjusted `themeConfig.search` structure
- Added `langs` i18n support
- Removed deprecated `legacy` option

---

## v1.2.1 (2024-01-15)

### 🐛 Fixed

- TypeScript type errors during build
- Windows path separator issues
- Some Markdown plugin compat problems

### 📖 Docs

- Improved installation and configuration docs
- Added FAQ
- Updated examples and best practices

---

## v1.2.0 (2024-01-10)

### ✨ Added

- 🎨 New page layout (`layout: page`)
- 📄 Custom page hero area
- 🏠 Improved home layout with QuickStart component
- 🎯 New jump layout for i18n redirect

### 💫 Improved

- Refactored components for maintainability
- Better responsive design
- Optimized font loading
- Improved a11y support

### 🎨 Styles

- Unified design system, adjusted colors and spacing
- Better dark theme palette
- Improved table and code block styles
- Adjusted navbar and sidebar visuals

---

## v1.1.0 (2024-01-01)

### ✨ Added

- 🌙 Dark mode support
- 📐 Responsive layout improvements
- 🔗 Social links component
- 📊 Mermaid diagrams support

### 🐛 Fixed

- Home compatibility issues in some browsers
- Code copy feature issues
- Navbar positioning

---

## v1.0.0 (2023-12-20)

### 🎉 First Release

- ✨ Core theme features
- 🏠 Home layout
- 📖 Document layout
- 🎨 Modern UI design
- 📱 Mobile support
- 🔍 Basic search

### Highlights

- Clean interface with modern design
- Fully responsive
- Easy to configure
- High performance
- Extensible
```

## Recommended Markdown Practices

1. Reverse-chronological order
2. Semantic versioning ([Semantic Versioning](https://semver.org/))
3. Include release dates `(YYYY-MM-DD)`
4. Categorize changes consistently

## Other Frontmatter Options

Supports standard VitePress frontmatter such as `titleTemplate`, `sidebar`, `aside`, `footer`, `lastUpdated`, `editLink`, and SEO `head` tags.