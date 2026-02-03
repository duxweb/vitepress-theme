# Site Configuration

Site configuration options are set in the `.vitepress/config.ts` file. These options belong to VitePress itself and are independent of the theme.

## Configuration Function

### defineConfig

Use the configuration function provided by VitePress. It’s the standard VitePress `defineConfig`.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  // Site options...
  themeConfig: {
    // Dux theme options...
  }
})
```

## Basic Configuration

### title

- Type: `string`
- Default: `undefined`

Site title. This will be used as the suffix of all page titles and displayed in the navbar.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  title: 'Dux VitePress Theme'
})
```

### description

- Type: `string`
- Default: `undefined`

Site description. This will be used as the meta description tag of the site.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  description: 'A modern and elegant VitePress documentation theme'
})
```

### head

- Type: `HeadConfig[]`
- Default: `[]`

Additional elements to render inside the page HTML `<head>`.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'keywords', content: 'vitepress,documentation,theme' }]
  ]
})
```

### lang

- Type: `string`
- Default: `'en-US'`

The html `lang` attribute. It will render as `<html lang="en-US">`.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  lang: 'en-US'
})
```

### appearance

- Type: `boolean | 'dark' | 'force-dark' | 'force-auto'`
- Default: `true`

Whether to enable dark mode toggle and how it behaves.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  appearance: true, // enable dark mode toggle
  // appearance: 'dark', // default to dark
  // appearance: 'force-dark', // force dark mode
  // appearance: false // disable dark mode
})
```

### lastUpdated

- Type: `boolean`
- Default: `false`

Whether to use Git commit timestamps to show the last updated time of each page.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  lastUpdated: true
})
```

## Multi-language Configuration

### locales

- Type: `Record<string, LocaleConfig>`
- Default: `undefined`

Multi-language configuration object. Keys are path prefixes, values are language configs.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Dux Documentation Theme',
      description: '现代优雅的 VitePress 文档主题'
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      title: 'Dux VitePress Theme',
      description: 'A modern and elegant VitePress theme'
    }
  }
})
```

#### LocaleConfig

Single-language configuration object:

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | - | Language label for the switcher |
| `lang` | `string` | `'en-US'` | Language code for HTML `lang` |
| `dir` | `string` | - | Text direction, `ltr` or `rtl` |
| `title` | `string` | - | Site title for this locale |
| `titleTemplate` | `string | boolean` | - | Title template for this locale |
| `description` | `string` | - | Site description for this locale |
| `head` | `HeadConfig[]` | `[]` | Extra head tags for this locale |
| `themeConfig` | `ThemeConfig` | - | Theme config for this locale |

## Build Configuration

### base

- Type: `string`
- Default: `'/'`

Base URL the site will be deployed at.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  base: '/docs/' // If deploying to https://example.com/docs/
})
```

### outDir

- Type: `string`
- Default: `'.vitepress/dist'`

Build output directory, relative to project root.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  outDir: '../dist'
})
```

### cacheDir

- Type: `string`
- Default: `'.vitepress/cache'`

Cache directory for build artifacts, relative to project root.

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  cacheDir: '.vitepress/cache'
})
```

### cssMinify (Recommended: disable)

- Type: `boolean | 'lightningcss' | 'esbuild'`
- Default: `true`

The theme CSS is already compiled and does not need further minification. To avoid irrelevant warnings from some minifiers, disable CSS minification:

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  vite: {
    build: {
      cssMinify: false
    }
  }
})
```

If you still need minification, you can use `cssMinify: 'esbuild'`.