# @duxweb/vitepress-theme

现代、优雅、可定制的 VitePress 文档主题。

- ✨ 现代设计 · 亮/暗色支持
- 🌍 多语言 · 语言跳转页
- 📚 多布局 · Home / Doc / Page / Sponsor / Changelog / Jump
- 🔍 本地搜索 · Minisearch 集成

## 要求
- Node.js ≥ 18
- VitePress ^1.6.4

## 安装
```bash
pnpm add @duxweb/vitepress-theme
# 或
npm i @duxweb/vitepress-theme
```

## 快速使用
在你的文档项目中：

```ts
// .vitepress/theme/index.ts
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'

export default {
  extends: theme
}
```

> 提示：主题 CSS 已为编译产物，通常无需再次压缩。

## 基础配置示例
```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'Modern VitePress Theme',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' }
    ],
    search: { provider: 'local' }
  }
})
```

## 首页示例
```md
---
layout: home
hero:
  name: My Project
  text: Modern VitePress Theme
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
features:
  - icon: ⚡
    title: Fast
    details: Built on VitePress
---
```

## 许可证
MIT
