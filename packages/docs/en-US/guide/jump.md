# Language Jump Page Guide

The Language Jump Page is designed for multi-language sites to intelligently redirect users to their preferred language when visiting the root path, while providing manual selection.

## Overview

- Smart detection of browser language
- Configurable countdown redirect
- Manual language selection
- Preference memory via localStorage
- Elegant UI with gradient background and animations
- Multiple detection methods: URL param, local storage, browser language

## Basic Examples

### 1. Minimal configuration

```markdown
---
layout: jump
title: Choose Language / 语言选择
description: Please choose your language preference / 请选择您的语言偏好
---

Welcome! Redirecting based on your language preference...
```

### 2. Custom redirect

```markdown
---
layout: jump
title: Language Selection
description: We're redirecting you to your preferred language
jump:
  delay: 3000
  showManual: true
---

# Multi-language Support

Please choose your preferred language.
```

## Frontmatter Options

| Option | Type | Default | Description |
|------|------|--------|------|
| `layout` | `string` | `'jump'` | Use language jump layout |
| `title` | `string` | - | Page title |
| `description` | `string` | - | Page description |
| `jump` | `object` | - | Jump-related options |

### `jump` Object

| Option | Type | Default | Description |
|------|------|--------|------|
| `delay` | `number` | `1000` | Redirect delay in ms |
| `showManual` | `boolean` | `true` | Show manual selection |

## VitePress I18n Config

```typescript
// .vitepress/config.ts
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'DuxCMS Docs',
      description: 'Modern CMS'
    },
    'en-US': {
      label: 'English',
      lang: 'en-US', 
      title: 'DuxCMS Docs',
      description: 'Modern Content Management System'
    },
    'ja-JP': {
      label: '日本語',
      lang: 'ja-JP',
      title: 'DuxCMS ドキュメント',
      description: 'モダンな CMS'
    }
  }
})
```

## Localized UI Text

```typescript
// .vitepress/config.ts
themeConfig: {
  langs: {
    jump: {
      redirecting: 'Redirecting to your preferred language...',
      redirectingSecondary: '正在跳转到您偏好的语言版本...',
      orChooseLanguage: 'Or choose language',
      orChooseLanguageSecondary: '或选择语言',
      countdown: 'seconds'
    }
  }
}
```

## Full Example: Bilingual Site

```markdown
---
layout: jump
title: Language Selection / 语言选择  
description: Welcome! Please choose your language preference / 欢迎访问，请选择语言偏好
jump:
  delay: 2000
  showManual: true
---

# Welcome / 欢迎

We support English and Chinese. The system will automatically redirect based on your browser settings.
```

### Corresponding Config

```typescript
// .vitepress/config.ts
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'My Website',
      description: 'A bilingual site',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '关于', link: '/zh-CN/about' }
        ]
      }
    },
    'en-US': {
      label: 'English', 
      lang: 'en-US',
      title: 'My Website',
      description: 'A bilingual site',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en-US/' },
          { text: 'About', link: '/en-US/about' }
        ]
      }
    }
  },
  
  themeConfig: {
    langs: {
      jump: {
        redirecting: 'Redirecting to your preferred language...',
        redirectingSecondary: '正在跳转到您偏好的语言版本...',
        orChooseLanguage: 'Or choose language',
        orChooseLanguageSecondary: '或选择语言',
        countdown: 'seconds'
      }
    }
  }
})
```

## Detection Priority

1. URL parameter — `?lang=zh-CN`
2. Local storage — `vitepress-preferred-lang`
3. Browser language — `navigator.language` / `navigator.languages[0]`
4. Default — first locale (root)

## Matching Logic

```javascript
// Exact match: zh-CN
const exactMatch = availableLocales.find(locale => locale.key === browserLang)

// Prefix match: zh
const prefixMatch = availableLocales.find(locale => locale.key.startsWith(langPrefix))
```

## Redirect Paths

- `root` locale → `/`
- Other locales → `/{lang}/`

## Preference Memory

```javascript
localStorage.setItem('vitepress-preferred-lang', selectedLang)
```
