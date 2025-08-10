# @duxweb/vitepress-theme

现代、优雅、可定制的 VitePress 文档主题。

- ✨ 现代设计 · 亮/暗色支持
- 🌍 多语言 · 语言跳转页
- 📚 多布局 · Home / Doc / Page / Sponsor / Changelog / Jump
- 🔍 本地搜索 · Minisearch 集成

## 要求
- Node.js ≥ 18
- VitePress ^1.6.4

## 快速使用

### 1. 安装主题
```bash
pnpm add @duxweb/vitepress-theme
# 或
npm i @duxweb/vitepress-theme
```

### 2. 配置 VitePress
在 `.vitepress/config.mts` 中添加必要的 Vite 配置：

```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'Modern VitePress Theme',
  
  // ⚠️ 重要：必须添加以下配置才能正常运行
  vite: {
    ssr: { noExternal: ['@duxweb/vitepress-theme'] },
    optimizeDeps: { exclude: ['@duxweb/vitepress-theme'] }
  },
  
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' }
    ],
    ...
  }
})
```


### 3. 扩展主题
在 `.vitepress/theme/index.ts` 中：

```ts
// .vitepress/theme/index.ts
import theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'

export default {
  extends: theme
}
```

> 提示：主题 CSS 已为编译产物，通常无需再次压缩。

## 搜索功能说明
- 主题内置本地搜索，已实现"动态导入 + 优雅降级"
- 如果未配置 `vite.ssr.noExternal`，搜索会降级为空索引（不报错，但无结果）
- 正确配置后，搜索功能将完整启用

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

