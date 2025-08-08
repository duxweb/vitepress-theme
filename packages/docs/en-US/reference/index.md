# Configuration Reference Overview

Dux VitePress theme provides rich configuration options to help you build a unique documentation site.

## Configuration Files

Two layers of configuration:

### VitePress Config (`.vitepress/config.mts`)

```typescript
export default defineConfig({
  // Site basics
  title: 'Site Title',
  description: 'Site description',
  
  // Theme config
  themeConfig: {
    // Dux theme options
  }
})
```

### Page-level Config (Markdown Frontmatter)

```markdown
---
layout: home
title: Page Title

# Page-specific
hero:
  name: Home Title
---
```

## Categories

### Base

| Category | Description | Where |
|---------|-------------|-------|
| [Site Config](./site-config) | VitePress basic site config | Title, description, language, etc. |
| [Theme Config](./theme-config) | Dux theme global config | Nav, search, social links, etc. |

### Page Layouts

| Page Type | Layout | Where | Notes |
|---------|---------|-------|------|
| [Home Config](./home-config) | `layout: home` | Hero, Features, QuickStart |
| [Doc Config](./doc-config) | `layout: doc` | Document-specific options |
| [Page Config](./page-config) | `layout: page` | Single-page layout options |
| [Sponsor Config](./sponsor-config) | `layout: sponsor` | Payment methods, supporters |
| [Changelog Config](./changelog-config) | `layout: changelog` | Version history |

### Components

| Component | Where | Notes |
|---------|------|------|
| [Navbar Config](./nav-config) | Top navigation |
| [Sidebar Config](./sidebar-config) | Document navigation |
| [Footer Config](./footer-config) | Footer and doc footer |

## Priority

From highest to lowest:

1. Page Frontmatter
2. Locale-specific `themeConfig`
3. Global `themeConfig`
4. Theme defaults

## Quick Find

### By Feature

- Appearance customization → [Theme Config](./theme-config)
- Navigation → [Navbar](./nav-config), [Sidebar](./sidebar-config)
- Homepage design → [Home Config](./home-config)
- Internationalization → [Site Config](./site-config), [I18n Guide](../guide/i18n)
- Search → [Search Guide](../guide/search)

### By Type

- Strings → Titles, descriptions, links, etc.
- Objects → Hero, Features, navigation menus, etc.
- Arrays → Menu items, features list, sponsors list, etc.
- Booleans → Toggle-like settings