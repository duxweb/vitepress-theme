# 站点配置

站点配置选项在 `.vitepress/config.ts` 文件中配置，这些选项是 VitePress 本身的配置，与主题无关。

## 配置函数

### defineConfig

使用 Dux VitePress 主题提供的配置函数，它是对 VitePress `defineConfig` 的扩展封装。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  // 站点配置选项...
  themeConfig: {
    // Dux 主题配置...
  }
})
```

## 基础配置

### title

- 类型: `string`
- 默认值: `undefined`

网站标题。这将是所有页面标题的后缀，并显示在导航栏中。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  title: 'Dux VitePress Theme'
})
```

### description

- 类型: `string`
- 默认值: `undefined`

网站描述。这将作为网站的 meta 描述标签。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  description: '现代优雅的 VitePress 文档主题'
})
```

### head

- 类型: `HeadConfig[]`
- 默认值: `[]`

要在页面 HTML 的 `<head>` 标签中呈现的其他元素。

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

- 类型: `string`
- 默认值: `'en-US'`

网站的 lang 属性。这将作为页面 HTML 中的 `<html lang="en-US">` 标签呈现。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  lang: 'zh-CN'
})
```

### appearance

- 类型: `boolean | 'dark' | 'force-dark' | 'force-auto'`
- 默认值: `true`

是否启用暗色模式切换功能。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  appearance: true, // 启用暗色模式切换
  // appearance: 'dark', // 默认暗色模式
  // appearance: 'force-dark', // 强制暗色模式
  // appearance: false // 禁用暗色模式
})
```

### lastUpdated

- 类型: `boolean`
- 默认值: `false`

是否使用 Git 提交的时间戳来显示每个页面的最后更新时间。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  lastUpdated: true
})
```


## 多语言配置

### locales

- 类型: `Record<string, LocaleConfig>`
- 默认值: `undefined`

多语言配置对象。键为路径前缀，值为语言配置。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Dux 文档主题',
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

单个语言配置对象：

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `label` | `string` | - | 语言标签，用于语言切换器显示 |
| `lang` | `string` | `'en-US'` | 语言代码，用于 HTML lang 属性 |
| `dir` | `string` | - | 语言方向，`ltr` 或 `rtl` |
| `title` | `string` | - | 该语言下的网站标题 |
| `titleTemplate` | `string \| boolean` | - | 该语言下的标题模板 |
| `description` | `string` | - | 该语言下的网站描述 |
| `head` | `HeadConfig[]` | `[]` | 该语言下的额外 head 标签 |
| `themeConfig` | `ThemeConfig` | - | 该语言下的主题配置 |

## 构建配置

### base

- 类型: `string`
- 默认值: `'/'`

站点将部署到的基础 URL。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  base: '/docs/' // 如果部署到 https://example.com/docs/
})
```

### outDir

- 类型: `string`
- 默认值: `'.vitepress/dist'`

构建输出目录，相对于项目根目录。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  outDir: '../dist'
})
```

### cacheDir

- 类型: `string`
- 默认值: `'.vitepress/cache'`

缓存文件存储目录，相对于项目根目录。

```typescript
import { withDuxTheme } from '@duxweb/vitepress-theme/config'

export default withDuxTheme({
  cacheDir: '.vitepress/cache'
})
```

### cssMinify（推荐：关闭）

- 类型: `boolean | 'lightningcss' | 'esbuild'`
- 默认值: `true`

主题的 CSS 已是编译后的产物，不需要再次压缩。为避免个别压缩器产生无关警告，建议关闭 CSS 压缩：

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

如确需压缩，可改为 `cssMinify: 'esbuild'`。
